import styles from '@/app/page.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <a href="/" className={styles.footerLogo} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/logo.png" alt="Relation by Maya Logo" width="40" height="40" style={{ borderRadius: '50%' }} />
              Relation by Maya
            </a>
            <p>A trusted matchmaking platform built for serious relationships and lifelong partnerships across Pakistan.</p>
          </div>
          <div className={styles.footerColumn}>
            <h4>Platform</h4>
            <ul className={styles.footerLinks}>
              <li><a href="/browse">Browse Profiles</a></li>
              <li><a href="/">How it Works</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="/">Success Stories</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Company</h4>
            <ul className={styles.footerLinks}>
              <li><a href="/about">About Us</a></li>
              <li><a href="#">Founder's Note</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Legal & Safety</h4>
            <ul className={styles.footerLinks}>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="/privacy">Trust & Safety</a></li>
              <li><a href="#">Community Guidelines</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div>&copy; {new Date().getFullYear()} Relation by Maya. All rights reserved.</div>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
