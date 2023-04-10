import styles from './style.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                &copy; {new Date().getFullYear()}
                <span className={styles.color_highlight}>
                    {' '}
                    Md. Mehedi Hasan
                </span>
                . All rights reserved
            </p>
        </footer>
    );
};

export default Footer;
