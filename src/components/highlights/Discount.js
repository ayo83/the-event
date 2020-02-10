import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Buttons from '../ui/Buttons';

class Discount extends Component {

    state ={
        discountStart:0,
        discountEnd:30
    }

    // The percentage function
    porcentage = ()=>{
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }


    // Re-running the percentage function util it's gets 30
    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },30);
    }



    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={()=> this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    
                    <Slide right> 
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th JUNE</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, </p>

                            <Buttons
                                text="Purchase Tickets"
                                bck= "#ffa800"
                                color= "#ffffff"
                                link = 'http://google.com'
                            />
                        </div>
                    </Slide>
                    
                </div>
            </div>
        );
    }
}

export default Discount;