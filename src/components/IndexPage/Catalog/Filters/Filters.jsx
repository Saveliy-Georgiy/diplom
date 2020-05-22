import React from 'react';
import styles from './Filters.module.css';
import SpecializationFilter from "./Filter/SpecializationFilter/SpecializationFilter";

function Filters(props) {

  let specializations = props.specializations.map((specialization, index) =>
      <SpecializationFilter
          specialization={specialization}
          changeStatus={props.changeStatus}
          changeStatusSkill={props.changeStatusSkill}
          key={index}
      />)

  return (
    <div className={styles.mainBlock}>
      <h2 className={styles.header}>Choose specializations:</h2>
      <div className={styles.specializationsBlock}>
        {specializations}
      </div>
    </div>
  );
}

export default Filters;
