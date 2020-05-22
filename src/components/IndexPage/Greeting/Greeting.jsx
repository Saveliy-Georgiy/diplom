import React from 'react';
import styles from './Greeting.module.css';


function Greeting() {
  return (
    <div className={styles.mainBlock}>
      <section className={styles.welcome_video}>
        <video autoPlay loop muted playsInline className={styles.video_background}
               src="https://mables.by/wp-content/uploads/2019/11/Galaxy-Video.mp4">
        </video>
        <div className={styles.overlay}>
          <div className={styles.container}>
              <span className={styles.span}>Digital-agency Mables</span>
              <h1>We provide you with a portfolio of our employees</h1>
              <p className={styles.info}>
                  On the site you can find out information about our employees, their skills, work experience, projects. And also to order the employees you need to accompany your project.</p>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Greeting;
