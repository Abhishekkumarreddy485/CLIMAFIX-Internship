import styles from '../styles/Partners.module.css';

export default function Partners() {
  return (
    <section className={styles.partners}>
      <div className={styles.header}>
        <h2>Partners & Contact</h2>
        <p className={styles.subtitle}>
          Collaborating with pioneers driving climate innovation forward.
        </p>
      </div>

      {/* <div className={styles.partnerLogos}>
        <div className={styles.logoPill}>IN44 Capital</div>
        <div className={styles.logoPill}>Yantra Harvest</div>
        <div className={styles.logoPill}>Orbi2aNext</div>
        <div className={styles.logoPill}>IIT Madras Research Park</div>
        <div className={styles.logoPill}>CIIE.CO</div>
      </div> */}

      <div className={styles.partnerLogos}>
        <img className={styles.logoImg} src="/logos/in44.jpg" alt="IN44 Capital" />
        <img className={styles.logoImg} src="/logos/yantra.jpeg" alt="Yantra Harvest" />
        <img className={styles.logoImg} src="/logos/orbi2anext.jpeg" alt="Orbi2aNext" />
        <img className={styles.logoImg} src="/logos/iitm.jpeg" alt="IIT Madras Research Park" />
        <img className={styles.logoImg} src="/logos/ciie.png" alt="CIIE.CO" />
      </div>


      <div className={styles.contactCard}>
        <h3>Get in Touch</h3>
        <p>
          Reach out for partnerships, sponsorships, or general inquiries.
        </p>
        <div className={styles.contactDetails}>
          <p><strong>📞 Rithika:</strong> 80157 25600</p>
          <p><strong>✉️</strong> ask@climafix.in</p>
        </div>
      </div>
    </section>
  );
}
