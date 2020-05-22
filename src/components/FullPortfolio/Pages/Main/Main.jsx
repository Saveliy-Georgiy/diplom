import React from 'react';
import styles from './Main.module.css';
import Greeting from "./Greeting/Greeting";
import MyPhoto from "./MyPhoto/MyPhoto";

function Main(props) {
  return (
    <div className={styles.main} id="main">
      <div className={styles.container}>
        <Greeting user={props.user}/>
        <MyPhoto user={props.user}/>
      </div>
    </div>
  );
}

export default Main;
