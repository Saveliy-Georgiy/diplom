import React from 'react';
import styles from './Skill.module.css';
import Icon from "../../../../Icon/Icon";

function Skill(props) {
    return (
        <div className={styles.container}>
            <div>
                <Icon className={styles.picture} picture={props.skill.url} key={props.skill.name}/>
            </div>
            <div className={styles.knowledge}>
               {props.skill.name}
            </div>
            <div className={styles.borderOfDescription}>
                <div className={styles.descriptionOfKnowledge}>
                {props.skill.description}
                </div>
            </div>
        </div>


    );
}

export default Skill;
