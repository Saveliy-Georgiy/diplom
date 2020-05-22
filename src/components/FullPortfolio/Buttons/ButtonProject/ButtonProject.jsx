import React from "react";
import styles from "./ButtonStyles.module.css";

const ButtonProject = (props) => {
    return (
        <div className={styles.buttonPosition}>
            <a href={props.url}>
                     <button className={styles.btnSubmit}>View</button>
            </a>
        </div>
    );
};

export default ButtonProject;
