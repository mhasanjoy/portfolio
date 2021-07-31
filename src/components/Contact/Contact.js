import React from 'react';
import './Contact.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const position = {
    lat: 24.0333,
    lng: 88.9667
};

const onLoad = marker => {
    console.log('marker: ', marker);
}

const Contact = () => {
    return (
        <>
            <main className="contact-container">
                <h1 className="mb-5 color-highlight">Get in Touch</h1>
                <LoadScript
                    googleMapsApiKey=""
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={position}
                        zoom={10}
                    >
                        <Marker
                            onLoad={onLoad}
                            position={position}
                        />
                        <></>
                    </GoogleMap>
                </LoadScript>
                <p className="mt-5 contact-info"><strong className="color-highlight"><FontAwesomeIcon icon={faHome} className="contact-icon" />Address:</strong> Bheramara, Kushtia, Bangladesh</p>
                <p className="mt-5 contact-info"><strong className="color-highlight"><FontAwesomeIcon icon={faEnvelope} className="contact-icon" />Email:</strong> m.hasanjoy13@gmail.com</p>
                <p className="mt-5 contact-info"><strong className="color-highlight"><FontAwesomeIcon icon={faMobileAlt} className="contact-icon" />Mobile:</strong> +8801738399408</p>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Contact;