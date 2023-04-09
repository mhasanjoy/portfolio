import styles from './style.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                &copy; {new Date().getFullYear()} by{' '}
                <span className={styles.color_highlight}>Md. Mehedi Hasan</span>
            </p>
        </footer>
    );
};

export default Footer;
