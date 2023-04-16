import {
    faGithub,
    faLinkedin,
    faTwitter,
} from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';

const SocialLinks = () => {
    const [socialLinks, setSocialLinks] = useState([]);

    useEffect(() => {
        fetch('/api/social-links')
            .then((response) => response.json())
            .then((data) => setSocialLinks(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <ul className={styles.social_links}>
            <li>
                <a href={socialLinks?.[0]?.URL} target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
            <li>
                <a href={socialLinks?.[1]?.URL} target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li>
                <a href={socialLinks?.[2]?.URL} target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </li>
        </ul>
    );
};

export default SocialLinks;
