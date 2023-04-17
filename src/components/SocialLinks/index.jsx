import {
    faGithub,
    faLinkedin,
    faTwitter,
} from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './style.module.scss';

const SocialLinks = () => {
    return (
        <ul className={styles.social_links}>
            <li>
                <a
                    href="https://www.linkedin.com/in/mhasanjoy/"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
            <li>
                <a href="https://github.com/mhasanjoy" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/mhasanjoy13" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </li>
        </ul>
    );
};

export default SocialLinks;
