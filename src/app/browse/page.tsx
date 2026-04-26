import styles from '@/app/page.module.css';
import Link from 'next/link';

export default function Browse() {
  const profiles = [
    { id: 1, name: "Ayesha", age: 27, city: "Lahore", bio: "Software Engineer looking for a partner with shared values.", verified: true, image: "/avatars/avatar_1.jpeg" },
    { id: 2, name: "Zainab", age: 25, city: "Islamabad", bio: "Doctor who loves reading and travelling. Family-oriented.", verified: true, image: "/avatars/avatar_2.jpeg" },
    { id: 3, name: "Fatima", age: 29, city: "Karachi", bio: "Marketing professional. Value honesty and open communication.", verified: false, image: "/avatars/avatar_3.jpeg" },
    { id: 4, name: "Hira", age: 26, city: "Lahore", bio: "Architect seeking someone who is ambitious and kind.", verified: true, image: "/avatars/avatar_4.jpeg" },
    { id: 5, name: "Sana", age: 28, city: "Islamabad", bio: "Teacher, looking for a meaningful and lasting connection.", verified: true, image: "/avatars/avatar_5.jpeg" },
    { id: 6, name: "Nida", age: 31, city: "Karachi", bio: "Business owner. I appreciate good humor and mutual respect.", verified: false, image: "/avatars/avatar_6.jpeg" },
    { id: 7, name: "Maha", age: 24, city: "Lahore", bio: "Graphic designer. Let's build a beautiful life together.", verified: true, image: "/avatars/avatar_7.jpeg" },
    { id: 8, name: "Rida", age: 27, city: "Islamabad", bio: "Dentist. Seeking a life partner who is also a best friend.", verified: true, image: "/avatars/avatar_8.jpeg" },
    { id: 9, name: "Kiran", age: 26, city: "Karachi", bio: "Fashion Designer. Looking for an adventurous and caring partner.", verified: true, image: "/avatars/avatar_9.jpeg" },
    { id: 10, name: "Sadia", age: 30, city: "Lahore", bio: "HR Manager. Values family, career balance, and mutual support.", verified: true, image: "/avatars/avatar_10.jpeg" },
    { id: 11, name: "Iqra", age: 23, city: "Islamabad", bio: "Student of Psychology. Enjoys deep conversations and coffee.", verified: false, image: "/avatars/avatar_11.jpeg" },
    { id: 12, name: "Zara", age: 29, city: "Karachi", bio: "Banker. Looking for someone grounded, mature, and supportive.", verified: true, image: "/avatars/avatar_12.jpeg" },
    { id: 13, name: "Mariam", age: 28, city: "Lahore", bio: "Writer. Passionate about art, literature, and finding my soulmate.", verified: true, image: "/avatars/avatar_13.jpeg" },
    { id: 14, name: "Alizeh", age: 25, city: "Islamabad", bio: "Event Planner. Extroverted, bubbly, and ready to settle down.", verified: false, image: "/avatars/avatar_14.jpeg" },
  ];

  return (
    <main style={{ padding: '6rem 0', minHeight: '100vh', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Curated Matches</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Explore our exclusive network of vetted individuals seeking meaningful, lifelong connections.
          </p>
        </div>

        {/* Premium Filters Area */}
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius-soft)', boxShadow: 'var(--shadow-subtle)', marginBottom: '4rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '200px' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</label>
            <select style={{ padding: '1rem', borderRadius: 'var(--radius-soft)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)', outline: 'none', cursor: 'pointer' }}>
              <option>All Cities</option>
              <option>Lahore</option>
              <option>Karachi</option>
              <option>Islamabad</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '200px' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>Age Group</label>
            <select style={{ padding: '1rem', borderRadius: 'var(--radius-soft)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)', outline: 'none', cursor: 'pointer' }}>
              <option>Any Age</option>
              <option>20 - 25 Years</option>
              <option>26 - 30 Years</option>
              <option>31 - 35 Years</option>
              <option>35+ Years</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '200px' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>Profession</label>
            <select style={{ padding: '1rem', borderRadius: 'var(--radius-soft)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)', outline: 'none', cursor: 'pointer' }}>
              <option>All Professions</option>
              <option>Medical & Healthcare</option>
              <option>Engineering & IT</option>
              <option>Business & Finance</option>
              <option>Education & Arts</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', height: '100%', marginTop: 'auto' }}>
            <button className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem', height: '54px' }}>Refine Search</button>
          </div>

        </div>

        <div className={styles.profileGrid}>
          {profiles.map((profile, index) => (
            <div key={index} className={styles.profileCard}>
              <div className={styles.profileImageWrapper}>
                <img src={profile.image} alt={profile.name} className={styles.profileImage} />
              </div>
              <div className={styles.profileInfo}>
                <div className={styles.profileHeader}>
                  <span className={styles.profileName}>{profile.name}, {profile.age}</span>
                  {profile.verified && (
                    <span className={styles.verifiedBadge} title="Verified Profile">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </span>
                  )}
                </div>
                <div className={styles.profileLocation}>{profile.city}, Pakistan</div>
                <p className={styles.profileBio}>{profile.bio}</p>
                <Link href={`/profile/${profile.id}`} className={`btn btn-outline ${styles.viewProfileBtn}`}>View Profile</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
