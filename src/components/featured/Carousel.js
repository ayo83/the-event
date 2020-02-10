import React from 'react';
import Slider from "react-slick";

import slider_one from '../../resources/images/burna_seven.jpg';
import slider_two from '../../resources/images/burna_five.jpg';
import slider_three from '../../resources/images/burna_six.jpg';
import slider_four from '../../resources/images/burna_four.jpg';
import slider_five from '../../resources/images/burna_three.jpg';
import slider_six from '../../resources/images/burna_two.jpg';
import slider_seven from '../../resources/images/burna_one.jpg';
import slider_eight from '../../resources/images/burna_eight.jpg';
import slider_nine from '../../resources/images/burna_nine.jpg';
import slider_ten from '../../resources/images/burna_ten.jpg';

const Carousel = () => {

    const settings = {
        dots: false,
        infinite:true,
        autoplay: true,
        speed: 500
    }
    return (
        <div 
            className="carrousel_wrapper"
            style={{
                background: 'red',
                height: `${window.innerHeight}px`,
                overflow: 'hidden'
            }}
        >
            <Slider {...settings}>
                <div>
                    <div 
                        className= "carrousel_image"
                        style={{
                            background:`url(${slider_one})`,
                            height: `${window.innerHeight}px`,
                            backgroundSize: 'cover'
                        }}
                    ></div>
                </div>
                <div>
                    <div 
                        className= "carrousel_image"
                        style={{
                            background:`url(${slider_two})`,
                            height: `${window.innerHeight}px`,
                            backgroundSize: 'cover'
                        }}
                    ></div>
                </div>
                <div>
                    <div 
                        className= "carrousel_image"
                        style={{
                            background:`url(${slider_three})`,
                            height: `${window.innerHeight}px`,
                            backgroundSize: 'cover'
                        }}
                    ></div>
                </div>

                <div>
                    <div 
                        className= "carrousel_image"
                        style={{
                            background:`url(${slider_six})`,
                            height: `${window.innerHeight}px`,
                            backgroundSize: 'cover'
                        }}
                    ></div>
                </div>
                <div>
                    <div 
                        className= "carrousel_image"
                        style={{
                            background:`url(${slider_four})`,
                            height: `${window.innerHeight}px`,
                            backgroundSize: 'cover'
                        }}
                    ></div>
                </div>
                <div>
                    <div 
                        className= "carrousel_image"
                        style={{
                            background:`url(${slider_five})`,
                            height: `${window.innerHeight}px`,
                            backgroundSize: 'cover'
                        }}
                    ></div>
                </div>

                <div>
                    <div 
                        className= "carrousel_image"
                        style={{
                            background:`url(${slider_seven})`,
                            height: `${window.innerHeight}px`,
                            backgroundSize: 'cover'
                        }}
                    ></div>
                </div>

                <div>
                    <div 
                        className= "carrousel_image"
                        style={{
                            background:`url(${slider_eight})`,
                            height: `${window.innerHeight}px`,
                            backgroundSize: 'cover'
                        }}
                    ></div>
                </div>
                <div>
                    <div 
                        className= "carrousel_image"
                        style={{
                            background:`url(${slider_nine})`,
                            height: `${window.innerHeight}px`,
                            backgroundSize: 'cover'
                        }}
                    ></div>
                </div>
                <div>
                    <div 
                        className= "carrousel_image"
                        style={{
                            background:`url(${slider_ten})`,
                            height: `${window.innerHeight}px`,
                            backgroundSize: 'cover'
                        }}
                    ></div>
                </div>

                

            </Slider>
        </div>
    );
};

export default Carousel;