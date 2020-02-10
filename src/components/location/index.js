import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8844366187154!2d7.492792314458595!3d9.074291590777268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd42594163dd1%3A0x2b97d2308e5f8ee1!2sTranscorp%20Hilton%20Abuja!5e0!3m2!1sen!2sng!4v1581273669056!5m2!1sen!2sng" 
                width="100%" 
                height="500px" 
                frameBorder="0"  
                allowFullScreen
            >
            </iframe>

            <div className="location_tag">
                <div>Loation</div>
            </div>
        </div>
    );
};

export default Location;