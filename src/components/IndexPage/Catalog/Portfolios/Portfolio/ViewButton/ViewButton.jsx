import React from "react";
import styles from "./ViewButton.module.css";
import {Link} from "react-router-dom";


function ViewButton(props) {

    return (
        <div className={styles.wrapperButton}>
            <Link to={'employees/' + props.id}>
                <button className={styles.button}>View portfolio</button>
            </Link>
        </div>
    );
}

export default ViewButton;
