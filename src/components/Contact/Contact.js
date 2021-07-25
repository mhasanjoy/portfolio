import React from 'react';
import './Contact.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

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
        <main className="contact-container">
            <h1 className="mb-5" style={{color: 'black'}}>Get in Touch</h1>
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
            <p className="mt-5 contact-info"><strong style={{color: 'black'}}>Address:</strong> Bheramara, Kushtia, Bangladesh</p>
            <p className="mt-5 contact-info"><strong style={{color: 'black'}}>Email:</strong> m.hasanjoy13@gmail.com</p>
            <p className="mt-5 contact-info"><strong style={{color: 'black'}}>Mobile:</strong> +8801738399408</p>
        </main>
    );
};

export default Contact;