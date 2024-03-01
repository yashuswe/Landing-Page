import styles from './logo.module.scss';


const AnimatedLogo = () => {
    return (
      <div className={styles.logo}>
        <div className={`${styles.triangle} ${styles.blue}`}></div>
        <div className={`${styles.triangle} ${styles.red}`}></div>
        <div className={`${styles.triangle} ${styles.yellow}`}></div>
        <div className={`${styles.triangle} ${styles.green}`}></div>
      </div>
    );
  };
  
  export default AnimatedLogo;
  