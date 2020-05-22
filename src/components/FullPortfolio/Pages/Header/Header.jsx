import React from 'react';
import styles from './Header.module.css';
import Menu from "./Menu";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <Menu/>
            </div>
        </div>
    );
}

export default Header;
