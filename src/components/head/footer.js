import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer style={{background:'black'}}>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">The Event</div>
                <div className="footer_copyright">
                    The Event 2019 | All rights reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;