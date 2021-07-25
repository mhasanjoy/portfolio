import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faLinkedin, faGithub, faFacebook, faTwitter, faInstagram);

const Home = () => {
    return (
        <main className="home-container row g-5 d-flex align-items-center justify-content-center">
            <section className="col-md-5 profile-image">

            </section>
            <section className="offset-md-1 col-md-6">
                <h1 className="profile-name">Md. Mehedi Hasan</h1>
                <p className="profession">Web Developer, Fast Learner, Enthusiastic Programmer</p>
                <div className="mt-5">
                    <a href="https://www.linkedin.com/in/md-mehedi-hasan-90a199143/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} className="icon" /></a>
                    <a href="https://github.com/mhasanjoy" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'github']} className="icon" /></a>
                    <a href="https://www.facebook.com/m.hasanjoy.5/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} className="icon" /></a>
                    <a href="https://twitter.com/m_hasanjoy" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} className="icon" /></a>
                    <a href="https://www.instagram.com/m.hasanjoy/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} className="icon" /></a>
                </div>
            </section>
        </main>
    );
};

export default Home;