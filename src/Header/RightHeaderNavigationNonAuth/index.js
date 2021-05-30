import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RightHeaderNavigationNonAuth.module.scss';

function index() {
  return (
    <div className={styles.nav_right}>
      <ul className={styles.nav_right__list}>
        <li>
          <Link to="/signin" className={styles.nav_right__list__link}>
            SignIn
          </Link>
        </li>
        <li>
          <Link to="/signup" className={styles.nav_right__list__link}>
            SignUp
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default index;
