import React from 'react';
import Particles from 'react-particles-js';
import styles from './Home.module.scss';
import landingPageQuiz from '../assets/images/landingPageQuiz.png';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__container__left}>
          <h2>The QuizAPI includes a wide number of Tech| questions</h2>
          <p>
            Test your knowledge or easily embed a quiz on your website with the
            Quiz API
          </p>
          <button type="button">TAKE A QUIZ</button>
        </div>
        <div className={styles.home__container__right}>
          <img src={landingPageQuiz} alt="Person taking technical quiz" />
        </div>
        <Particles
          className={styles.particle}
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Home;
