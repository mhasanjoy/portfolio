import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import firebaseConfig from '../../configs/firebase.config';
import Footer from '../Footer/Footer';

library.add(fab, faLinkedin, faGithub, faFacebook, faTwitter, faInstagram);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Home = () => {
    return (
        <>
            <main className="home-container row g-5 mt-5 d-flex align-items-center justify-content-center">
                <section className="col-xl-5 profile-image">

                </section>
                <section className="offset-xl-1 col-xl-6 d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="profile-name">Md. Mehedi Hasan</h1>
                        <p className="profession">Web Developer, Enthusiastic Programmer</p>
                        <div className="mt-5 mb-5 pb-5">
                            <a href="https://www.linkedin.com/in/md-mehedi-hasan-90a199143/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} className="social-icon" /></a>
                            <a href="https://github.com/mhasanjoy" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'github']} className="social-icon" /></a>
                            <a href="https://www.facebook.com/m.hasanjoy.5/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} className="social-icon" /></a>
                            <a href="https://twitter.com/m_hasanjoy" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} className="social-icon" /></a>
                            <a href="https://www.instagram.com/m.hasanjoy/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} className="social-icon" /></a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Home;