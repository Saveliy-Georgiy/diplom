import React from 'react';
import styles from './MyPhoto.module.css';

function MyPhoto(props) {
  return (
    <div className={styles.photoContainer}>
      <img className={styles.myPhoto} src={props.user.photo} alt={'Photo' + props.user.name}/>
    </div>
  );
}

export default MyPhoto;
