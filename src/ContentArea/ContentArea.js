import React from 'react';
import styles from './ContentArea.module.css';

const contentArea = (props) => {
    const theme = props.theme;
    
    return (
        <div className={styles.sectionContent} id={props.id}>
            <div className={styles.innerDiv}>
                <h1>{props.title}</h1>
            {props.content}
            </div>
        </div>
    )
};

export default contentArea;