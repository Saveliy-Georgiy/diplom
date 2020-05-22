import React from 'react';
import styles from './Project.module.css';
import ButtonProject from "../../../Buttons/ButtonProject/ButtonProject";

function Project(props) {
    return (
        <div className={styles.container}>
            <div className={styles.project}>
                <img className={styles.picture} src={props.project.img} alt={props.project.name}/>
                <ButtonProject url={props.project.url}/>
            </div>
            <div className={styles.containerNameAndDescription}>
                <div className={styles.name}>
                        {props.project.name}
                </div>
                <div className={styles.description}>
                    {props.project.description}
                </div>
            </div>
        </div>


    );
}

export default Project;
