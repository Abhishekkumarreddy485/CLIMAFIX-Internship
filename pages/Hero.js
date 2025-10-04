import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          <span className={styles.gradientText}>CLIMAFIX 25</span> — India’s Largest Climate Startup Innovation Summit
        </h1>
        <p className={styles.subtext}>
          September 11–12, 2025 • IIT Madras Research Park, Chennai
        </p>

        <div className={styles.ctas}>
          <a className={`${styles.btn} ${styles.primary}`} href="https://climafix.in/summit/2025/">
            Register Now
          </a>
          <a className={`${styles.btn} ${styles.outline}`} href="https://climafix.in/summit/2025/">
            Download Agenda
          </a>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.icon}>🌍</div>
            <h3>Why Attend?</h3>
            <p>
              Connect with pioneering <strong>climate tech startups</strong>, visionary investors, and 
              <strong> sustainability leaders</strong> shaping India’s green future.
            </p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.icon}>🚀</div>
            <h3>Focus Tracks</h3>
            <ul>
              <li>Energy Efficiency & Digital Solutions ⚡</li>
              <li>Bio-Economy for Decarbonization 🌿</li>
              <li>Deep Tech for Net Zero 🔬</li>
              <li>Translational Research 🏛️</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <aside className={styles.statsCard}>
        <h3 className={styles.statsTitle}>Vital Stats</h3>
        <div className={styles.stats}>
          <div><span className={styles.statNum}>400+</span><span className={styles.statLabel}>Startups</span></div>
          <div><span className={styles.statNum}>150+</span><span className={styles.statLabel}>Investors</span></div>
          <div><span className={styles.statNum}>30</span><span className={styles.statLabel}>Curated Pitches</span></div>
        </div>
        <a className={`${styles.btn} ${styles.primary} ${styles.wide}`} href="https://climafix.in/summit/2025/">
          Explore Summit
        </a>
      </aside> */}
      {/* <aside className={styles.statsCard}>
  <h3 className={styles.statsTitle}>Vital Stats</h3>
  <div className={styles.statsGrid}>
    <div className={styles.statBlock}>
      <span className={styles.statNum}>400+</span>
      <span className={styles.statLabel}>Startups</span>
    </div>
    <div className={styles.statBlock}>
      <span className={styles.statNum}>150+</span>
      <span className={styles.statLabel}>Investors</span>
    </div>
    <div className={styles.statBlock}>
      <span className={styles.statNum}>30</span>
      <span className={styles.statLabel}>Curated Pitches</span>
    </div>
  </div>
  <a className={`${styles.btn} ${styles.primary} ${styles.wide}`} href="https://climafix.in/summit/2025/">
    Explore Summit
  </a>
</aside> */}
        <aside className={styles.statsCard}>
  <h3 className={styles.statsTitle}>Vital Stats</h3>
  <div className={styles.statsGrid}>
    <div className={styles.statBlock}>
      <div className={styles.statIcon}>🌱</div>
      <div className={styles.statNum}>400+</div>
      <div className={styles.statLabel}>Climate Startups</div>
      <p>Pan-India innovators across all stages & domains</p>
    </div>
    <div className={styles.statBlock}>
      <div className={styles.statIcon}>🚀</div>
      <div className={styles.statNum}>30</div>
      <div className={styles.statLabel}>Curated Pitches</div>
      <p>Handpicked solutions for net-zero transformation</p>
    </div>
    <div className={styles.statBlock}>
      <div className={styles.statIcon}>🤝</div>
      <div className={styles.statNum}>150+</div>
      <div className={styles.statLabel}>Investors</div>
      <p>Angel to PE, 25+ family offices, 50+ corporate VCs</p>
    </div>
    {/* <div className={styles.statBlock}>
      <div className={styles.statIcon}>🧠</div>
      <div className={styles.statNum}>AI</div>
      <div className={styles.statLabel}>for Climate</div>
      <p>Explore key trends, startups & industry use cases</p>
    </div> */}
  </div>
  <a className={`${styles.btn} ${styles.primary} ${styles.wide}`} href="https://climafix.in/summit/2025/">
    Explore Summit
  </a>
</aside>


    </section>
  );
}
