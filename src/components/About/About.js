import React from 'react';
import './About.css';
import ProfileImage from '../../images/ProfileImage2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <main className="about-container">
            <section>
                <img src={ProfileImage} alt="" />
                <p className="mt-5 about-description">Hello, I'm an aspiring professional web developer and I'm very passionate and dedicated to my work. I am a fresh CSE graduate. Currently focusing mainly on front-end web development with a little bit of back-end. My main objective is to build a career as an IT professional. I am always willing to accept any type of challenge in a pleasant working environment which will permit me to persevere in practicing and enhancing my proficiency and knowledge.</p>
            </section>
            <section className="row g-5 mt-5 about-info">
                <div className="col-md-6 education">
                    <h1>Rajshahi University of Engineering & Technology</h1>
                    <h2>B.Sc. in Computer Science & Engineering</h2>
                    <p>I've completed my B.Sc. in CSE from RUET in 2020. Now, as a fresher, actively looking for a full time job.</p>
                </div>
                <div className="col-md-6 education">
                    <h1>Complete Web Development Course With Jhankar Mahbub <a href="https://drive.google.com/file/d/19poWHNjw4GfiyHZNGxgtNTOwzK_RrpOY/view" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></h1>
                    <h2>Programming Hero</h2>
                    <p>I've completed a React based web development course. It was challenging and I get to learn new things.</p>
                </div>
            </section>

        </main>
    );
};

export default About;