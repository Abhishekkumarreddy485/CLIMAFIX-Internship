import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p>© {new Date().getFullYear()} <strong>CLIMAFIX</strong> — Climafix Summit, a division of EAI.</p>
        <div className={styles.links}>
          <a href="https://climafix.in/summit/2025/">Summit</a>
          <a href="mailto:ask@climafix.in">Contact</a>
          <a href="https://climafix.in/privacy">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
