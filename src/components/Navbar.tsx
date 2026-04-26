import styles from '@/app/page.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.png" alt="Relation by Maya Logo" width="40" height="40" style={{ borderRadius: '50%' }} />
          Relation by Maya
        </a>
        <div className={styles.navLinks}>
          <a href="/" className={styles.navLink}>Home</a>
          <a href="/browse" className={styles.navLink}>Browse Profiles</a>
          <a href="/about" className={styles.navLink}>About Us</a>
          <a href="/contact" className={styles.navLink}>Contact</a>
        </div>
        <div className={styles.navActions}>
          {/* Using # for login as requested not to make it fully working yet */}
          <a href="#" className="btn btn-ghost">Login</a>
          <a href="/create-profile" className="btn btn-primary">Create Profile</a>
        </div>
      </div>
    </nav>
  );
}
