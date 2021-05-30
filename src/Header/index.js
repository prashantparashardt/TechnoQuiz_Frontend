import React from 'react';
import styles from './Header.module.scss';
import LeftHeaderNavigation from './LeftHeaderNavigation';
import RightHeaderNavigationNonAuth from './RightHeaderNavigationNonAuth';
// import RightHeaderNavigationAuth from './RightHeaderNavigationAuth';

function header() {
  return (
    <div>
      <div className={styles.header}>
        <div className="header_left">
          <LeftHeaderNavigation />
        </div>
        <div className="header__right">
          <RightHeaderNavigationNonAuth />
          {/* <RightHeaderNavigationAuth /> */}
        </div>
      </div>
    </div>
  );
}

export default header;
