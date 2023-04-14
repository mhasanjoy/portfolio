import Link from 'next/link';
import { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import SocialLinks from '../SocialLinks';
import styles from './style.module.scss';

const Header = () => {
    const [active, setActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuIcon = () => {
        setActive(!active);
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <div
                    onClick={handleMenuIcon}
                    className={`${styles.icon} ${active && styles.active}`}
                >
                    <span></span>
                    <span></span>
                </div>
            </div>
            <Drawer
                open={isOpen}
                onClose={handleMenuIcon}
                direction="right"
                className={styles.drawer}
            >
                <nav>
                    <div className={styles.nav}>
                        <ul>
                            <li>
                                <Link href="/" onClick={handleMenuIcon}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" onClick={handleMenuIcon}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" onClick={handleMenuIcon}>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" onClick={handleMenuIcon}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <SocialLinks />
                </nav>
            </Drawer>
        </header>
    );
};

export default Header;
