import React from 'react';
import Zoom from 'react-reveal/Zoom';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';


const VenueNfo = () => {
    return (
        <div  style={{background:'black'}}>
            <div className='center_wrapper'>
                <div className='vn_wrapper'>
                    <Zoom duration={500}>
                        <div className='vn_item'>
                            <div className='vn_outer'>
                                <div className='vn_inner'>
                                    <div className='vn_icon_square bck_red'></div>
                                    <div
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_calendar})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                        Event Date & Time
                                </div>
                                    <div className="vn_desc">
                                        30th December 2023 @07.00 pm
                                </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom duration={500} delay={500}>
                        <div className='vn_item'>
                            <div className='vn_outer'>
                                <div className='vn_inner'>
                                    <div className='vn_icon_square bck_yellow'></div>
                                    <div
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_location})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                        Event Location
                                </div>
                                    <div className="vn_desc">
                                        Transcorp Hilton, Maitama Abuja
                                </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default VenueNfo;