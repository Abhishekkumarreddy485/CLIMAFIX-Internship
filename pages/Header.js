import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>CLIMAFIX</div>
      <div className={styles.actions}>
        <a className="btn ghost" href="https://climafix.in/summit/2025/">Summit</a>
        <a className="btn primary" href="https://climafix.in/summit/2025/">Register</a>
      </div>
    </header>
  );
}
