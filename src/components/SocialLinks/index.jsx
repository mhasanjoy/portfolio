import { AppContext } from '@/config/app.context';
import {
    faGithub,
    faLinkedin,
    faTwitter,
} from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import styles from './style.module.scss';

const SocialLinks = () => {
    const { portfolioData } = useContext(AppContext);
    const { contact } = portfolioData;

    return (
        <ul className={styles.social_links}>
            <li>
                <a href={contact?.linkedin} target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
            <li>
                <a href={contact?.github} target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li>
                <a href={contact?.twitter} target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </li>
        </ul>
    );
};

export default SocialLinks;
