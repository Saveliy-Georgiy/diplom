import React from "react";
import styles from "./Portfolio.module.css";
import ViewButton from "./ViewButton/ViewButton";


function Portfolio(props) {
    let specializations = "";
    let skills = "";

    props.portfolio.specializations.forEach((item, index) => {
        let s = props.specializations[item.specialization];
        let sk = s.skills.filter((it, i) => item.skills.includes(i)).map(item => item.name).join(", ");
        specializations += s.name;
        skills += sk;

        if (index !== props.portfolio.specializations.length - 1) {
            specializations += ', ';
            skills += ', ';
        }
    });

    return (
        <div className={styles.mainBlock}>
            <h2 className={styles.name}>{props.portfolio.name}, {props.portfolio.age} years</h2>
            <hr className={styles.hr}/>
            <div className={styles.content}>
                <img className={styles.photo} src={props.portfolio.photo} alt={"Photo" + props.portfolio.name}/>
                <div className={styles.information}>
                <div className={styles.info}>
                    <div>
                        Amount projects: {props.portfolio.projects.length}
                    </div>
                    <hr className={styles.hr2}/>
                    <div>
                        Specializations: {specializations}
                    </div>
                    <hr className={styles.hr2}/>
                    <div>
                        Skills: {skills}
                    </div>
                </div>
                   <ViewButton id={props.portfolio.id}/>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
