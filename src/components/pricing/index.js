import React, { Component } from 'react';
import Buttons from '../ui/Buttons';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices: [10000, 50000, 100000],

        position: ['Bronze', 'Silver', 'Gold'],

        desc: [
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin',
            'passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus',
            'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even'
        ],

        linkto: ['http://google.com', 'http://google.com', 'http://google.com'],

        delay: [500,0,500]
    }

    showBoxes = () =>(
        this.state.prices.map((box, i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>₦{this.state.prices[i]}</span>
                            <span>{this.state.position[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <Buttons
                                text= "Buy Ticket Now"
                                bck= "#ffa800"
                                color= "#ffffff"
                                link= {this.state.linkto}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    );


    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Pricing;