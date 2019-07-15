import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styles from './Navbar.module.css';

const scrollToTop = () => {
    scroll.scrollToTop();
};

const navbar = (props) => {
    const theme = props.theme;
    return (
        <nav className={styles.nav} id='navbar'>
            <div className={styles.navContent}>
                <h3 
                    onClick={scrollToTop}
                    className={styles.navLogo} >RT</h3>
                <ul className={styles.navItems}>
                    {props.contents.map((content, index) => {
                        return (
                            <li className={styles.navItem} >
                                <Link
                                    activeClass={styles.active}
                                    to={content.id}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    {content.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
};

export default navbar;