import React from 'react';
import styles from './Menu.module.css';
import {Link} from "react-router-dom";

function Menu() {
    return (
        <div className={styles.menu}>
            <Link to={'/'} className={styles.link}>Home</Link>
            <a href="#skills" className={styles.link}>
                Skills
            </a>
            <a href="#projects" className={styles.link}>
                Projects
            </a>
            <a href="#hire" className={styles.link}>
                Hire
            </a>
        </div>
    );
}

export default Menu;
