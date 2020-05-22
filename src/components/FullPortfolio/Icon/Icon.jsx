import React from 'react';
import styles from './Icon.module.css';

function Icon(props) {
  return (
      <div>
        <div>
          <a href={props.url}>
            <img className={styles.square} src={props.picture} alt="Icon"/>
          </a>
        </div>
      </div>
  );
}

export default Icon;
