import React from 'react';
import Carousel from './Carousel';
import TimeCountDown from './TimeCountDown';

const Featured = () => {
    return (
        <div style = {{ position: 'relative'}}>
            
            <Carousel/>

            <div className = "artist_name">
                <div className ="wrapper">
                    BURNA BOY
                </div>
            </div>

            <TimeCountDown/>

        </div>
    );
};

export default Featured;