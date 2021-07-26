import React from 'react';
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = (props) => {
    const { name, img, preview, client, server } = props.project;
    return (
        <div className="col-lg-6 project">
            <p className="project-name">{name}</p>
            <div className="project-image">
                <img src={img} alt="" />
            </div>
            <div className="d-flex justify-content-center p-3">
                <a href={preview} target="_blank" rel="noreferrer" className="project-link"><FontAwesomeIcon icon={faEye} className="project-icon" />Preview</a>
                <a href={client} target="_blank" rel="noreferrer" className="project-link"><FontAwesomeIcon icon={faGithub} className="project-icon" />Code</a>
                {
                    server && <a href={server} target="_blank" rel="noreferrer" className="project-link"><FontAwesomeIcon icon={faGithub} className="project-icon" />Server</a>
                }
            </div>
        </div>
    );
};

export default Project;