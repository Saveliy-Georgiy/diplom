import React from 'react';
import styles from './Catalog.module.css';
import Filters from "./Filters/Filters";
import Portfolios from "./Portfolios/Portfolios";

function Catalog(props) {
  return (
    <div className={styles.mainBlock}>
      <Filters
          specializations={props.state.specializations}
          changeStatus={props.changeStatus}
          changeStatusSkill={props.changeStatusSkill}/>
      <Portfolios state={props.state} isChoose={props.isChoose}/>
    </div>
  );
}

export default Catalog;
