import React from 'react';
import styles from './Menu.module.css';

function Menu() {
    return (
        <div className={styles.menu}>
            <a href="/" className={styles.link}>
                Home
            </a>
            <a href="#main" className={styles.link}>
                Main
            </a>
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
