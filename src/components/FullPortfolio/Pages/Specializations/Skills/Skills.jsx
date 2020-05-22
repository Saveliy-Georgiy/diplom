import React from "react";
import styles from "./Skills.module.css";
import Skill from "./Skill/Skill";
import H2 from "../../../H2/H2";

function Skills(props) {
    let skills = props.specialization.skills.map(skill => <Skill skill={props.specializationInfo.skills[skill]} key={skill}/>);

    return (
        <div className={styles.skills}>
            <div className={styles.mySkillsContainer}>
                <H2 name={'Skills of ' + props.specializationInfo.name}/>
                <div className={styles.listOfMySkills}>
                    {skills}
                </div>
            </div>
        </div>
    );
}

export default Skills;
