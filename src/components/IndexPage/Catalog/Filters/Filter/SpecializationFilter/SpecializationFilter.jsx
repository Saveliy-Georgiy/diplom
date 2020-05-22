import React from "react";
import styles from "./SpecializationFilter.module.css";
import SkillFilter from "../SkillFilter/SkillFilter";

    class SpecializationFilter extends React.Component {

        onIsDoneChanged = (e) => {
            this.props.changeStatus(this.props.specialization.name, e.currentTarget.checked);
        }

        render = () => {

            let skills = this.props.specialization.skills.map((skill, index) =>
                <SkillFilter
                    skill={skill}
                    specialization={this.props.specialization}
                    changeStatusSkill={this.props.changeStatusSkill}
                    key={index}/>);

            return (
                <div>
                    <div className={styles.specializationBlock}>
                        <label>
                            <input type="checkbox"
                                   checked={this.props.specialization.isDone}
                                   onChange={this.onIsDoneChanged}/> {this.props.specialization.name}
                        </label>
                    </div>
                    {skills}
                </div>
            );
        }
    }

export default SpecializationFilter;
