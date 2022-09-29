import React from 'react';

import styles from './banner.module.css';

function banner({ buttonText, handleOnClick }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span> 
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shops!</p>
      <button type="button"  className={styles.button} onClick={handleOnClick}>{buttonText}</button>
    </div>
  )
}

export default banner