import React from 'react';
import styles from './Greeting.module.css';

function Greeting(props) {
  return (
    <div className={styles.greeting}>
        <span>Hello!</span>
        <span>I'm <span>{props.user.name}</span>
        </span>
        <h1>{props.user.position}</h1>
    </div>
  );
}

export default Greeting;
