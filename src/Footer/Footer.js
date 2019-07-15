import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const footer = (props) => {
    const theme = props.theme;
    
    return (
        <div className={styles.footer} >
            <a href="https://www.linkedin.com/in/rosstew/" className={styles.linkedIn} ><FaLinkedin/></a>
            <a href="https://github.com/jrtew" className={styles.gitHub} ><FaGithub/></a>
            <div className={styles.footerText} >
                <p>Ross Tew</p>
                <p>{new Date().getFullYear()}</p>
            </div>
        </div>
    )
};

export default footer;