import styles from '../styles/Grid.module.css';

export default function Grid() {
  return (
    <section className={styles.grid}>
      <div className={styles.gridHead}>
        <h2>Sessions & Tracks</h2>
        <a className={styles.link} href="https://climafix.in/summit/2025/">
          View Full Agenda →
        </a>
      </div>

      <div className={styles.trackGrid}>
        <div className={styles.card}>
          <h4><div className={styles.iconCircle}>⚡</div>Energy Efficiency & Digital Solutions</h4>
          <p>Industry implementations and digital decarbonization.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconCircle}>🌿</div>
          <h4>Bio-Economy for Decarbonization</h4>
          <p>Bio-based pathways to reduce emissions.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconCircle}>🔬</div>
          <h4>Deep Tech for Net Zero</h4>
          <p>Advanced technologies for climate impact.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconCircle}>🏛️</div>
          <h4>Translational Research</h4>
          <p>Academia–industry collaboration for innovation.</p>
        </div>
      </div>
    </section>
  );
}
