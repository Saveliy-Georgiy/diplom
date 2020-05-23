import React from 'react';
import styles from './Menu.module.css';
import {Link} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';

function Menu() {
    return (
        <div className={styles.menu}>
            <Link to={'/'} className={styles.link}>Home</Link>
            <HashLink to={'#skills'} className={styles.link}>Skills</HashLink>
            <HashLink to={'#projects'} className={styles.link}>Projects</HashLink>
            <HashLink to={'#hire'} className={styles.link}>Hire</HashLink>
        </div>
    );
}

export default Menu;
