import styles from './ScrollDown.module.css';
export default function ScrollDownComponent() {
  return (
    <a href="#about" className={styles.mouse_scroll}>
      <div className={styles.mouse}>
        <div className={styles.wheel}></div>
      </div>
      <div>
        <span className={`${styles.m_scroll_arrows} ${styles.unu}`}></span>
        <span className={`${styles.m_scroll_arrows} ${styles.doi}`}></span>
        <span className={`${styles.m_scroll_arrows} ${styles.trei}`}></span>
      </div>
    </a>
  )
}
