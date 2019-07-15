import React from 'react';
import styles from './Hero.module.css'

const hero = (props) => {
    return (
        <div className={styles.heroImage}>
            <div className={styles.heroText}>
                <h1>Ross</h1>
                <h1>Tew</h1>
                <p>Software Engineer</p>
            </div>
        </div>
    )
};

export default hero;