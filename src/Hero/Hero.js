import React from 'react';
import styles from './Hero.module.css'

const hero = (props) => {
    return (
        <div className={styles.heroImage}>
            <div className={styles.heroText}>
                <h1 className={styles.firstName} >Ross</h1>
                <h1 className={styles.lastName} >Tew</h1>
            </div>
        </div>
    )
};

export default hero;