import React from 'react';
import styles from './SkillFilter.module.css';

class SkillFilter extends React.Component {

    onIsDoneChanged = (e) => {
        this.props.changeStatusSkill(this.props.skill.name, e.currentTarget.checked);
    }

    render = () => {

        let skillsVisible = this.props.specialization.isDone === true ? styles.displayBlock : styles.displayBlockNone;

        return (
            <div className={styles.skillBlock + ' ' + skillsVisible}>
                <label>
                    <input type="checkbox"
                           checked={this.props.skill.isDone}
                           onChange={this.onIsDoneChanged}/>
                    {this.props.skill.name}
                </label>
            </div>
        );
    }
}
export default SkillFilter;
