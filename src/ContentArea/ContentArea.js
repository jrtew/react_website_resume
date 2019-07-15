import React from 'react';
import styles from './ContentArea.module.css';

const contentArea = (props) => {
    const theme = props.theme;
    
    return (
        <div className={styles.theme}>
            <div className={styles.sectionContent} id={props.id}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
        </div>
    )
};

export default contentArea;