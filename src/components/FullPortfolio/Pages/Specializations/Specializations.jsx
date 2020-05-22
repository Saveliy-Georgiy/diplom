import React from "react";
import styles from "./Specializations.module.css";
import Skills from "./Skills/Skills";

function Specializations(props) {
    let specializations = props.user.specializations.map(specialization =>
        <Skills
            specialization={specialization}
            specializationInfo={props.specializationsInfo[specialization.specialization]}
            key={specialization.specialization}/>);

    return (
        <div className={styles.specializations} id="skills">
            {specializations}
        </div>
    );
}

export default Specializations;
