import React from 'react';
import styles from './H2.module.css';

function H2(props) {
    return (
        <div className={styles.headerTitle}>
            <h2 className={styles.headerText}>
                {props.name}
            </h2>
            <div className={styles.line}>
            </div>
        </div>
    );
}

export default H2;
