import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const profiles = [
    { id: 1, name: "Ayesha", age: 27, city: "Lahore", bio: "Software Engineer looking for a partner with shared values.", verified: true, image: "/avatars/avatar_1.jpeg" },
    { id: 2, name: "Zainab", age: 25, city: "Islamabad", bio: "Doctor who loves reading and travelling. Family-oriented.", verified: true, image: "/avatars/avatar_2.jpeg" },
    { id: 3, name: "Fatima", age: 29, city: "Karachi", bio: "Marketing professional. Value honesty and open communication.", verified: false, image: "/avatars/avatar_3.jpeg" },
    { id: 4, name: "Hira", age: 26, city: "Lahore", bio: "Architect seeking someone who is ambitious and kind.", verified: true, image: "/avatars/avatar_4.jpeg" },
    { id: 5, name: "Sana", age: 28, city: "Islamabad", bio: "Teacher, looking for a meaningful and lasting connection.", verified: true, image: "/avatars/avatar_5.jpeg" },
    { id: 6, name: "Nida", age: 31, city: "Karachi", bio: "Business owner. I appreciate good humor and mutual respect.", verified: false, image: "/avatars/avatar_6.jpeg" },
    { id: 7, name: "Maha", age: 24, city: "Lahore", bio: "Graphic designer. Let's build a beautiful life together.", verified: true, image: "/avatars/avatar_7.jpeg" },
    { id: 8, name: "Rida", age: 27, city: "Islamabad", bio: "Dentist. Seeking a life partner who is also a best friend.", verified: true, image: "/avatars/avatar_8.jpeg" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className={`section ${styles.heroSection}`}>
        <div className="container">
          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Find Meaningful Connections</h1>
              <p className={styles.heroSubtitle}>
                A trusted matchmaking platform built for serious relationships and lifelong partnerships across Pakistan.
              </p>
              <div className={styles.heroActions}>
                <Link href="/create-profile" className="btn btn-primary">Create Your Profile</Link>
                <Link href="/browse" className="btn btn-outline">Browse Profiles</Link>
              </div>
            </div>
            <div className={styles.heroImageWrapper}>
              <img src="/hero-image.png" alt="Couple holding hands" className={styles.heroImage} />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section section-beige">
        <div className="container">
          <div className="text-center">
            <h2>How It Works</h2>
            <p style={{ marginTop: '1rem', color: 'var(--text-light)' }}>Your journey to finding the right partner, simplified.</p>
          </div>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <line x1="19" y1="8" x2="19" y2="14"/>
                  <line x1="22" y1="11" x2="16" y2="11"/>
                </svg>
              </div>
              <h3 className={styles.stepTitle}>Create Profile</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Set up your secure profile and let us know what you're looking for.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3 className={styles.stepTitle}>Get Matched</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Browse curated profiles or let our algorithm suggest compatible matches.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3 className={styles.stepTitle}>Connect Securely</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Initiate conversations in a safe, moderated environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Preview Grid */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center">
            <h2>Discover Profiles</h2>
            <p style={{ marginTop: '1rem', color: 'var(--text-light)' }}>Meet individuals who share your values and vision for the future.</p>
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
          <div className="text-center" style={{ marginTop: '4rem' }}>
            <Link href="/browse" className="btn btn-primary">View All Profiles</Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section section-beige">
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustImage}>
              <img src="/trust-image.png" alt="Aesthetic tea cups" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className={styles.trustContent}>
              <h2 style={{ marginBottom: '2rem' }}>Why Choose Relation by Maya</h2>
              <div className={styles.trustFeatures}>
                <div className={styles.trustFeature}>
                  <div className={styles.trustFeatureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.trustFeatureTitle}>Verified Profiles</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Every profile undergoes manual review to ensure authenticity and maintain our community standards.</p>
                  </div>
                </div>
                <div className={styles.trustFeature}>
                  <div className={styles.trustFeatureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.trustFeatureTitle}>Privacy First</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>You control who sees your photos and details. Your information is never shared without consent.</p>
                  </div>
                </div>
                <div className={styles.trustFeature}>
                  <div className={styles.trustFeatureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.trustFeatureTitle}>Family Friendly</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Built on cultural values and respect, ideal for both individuals and families seeking a suitable match.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center">
            <h2>Success Stories</h2>
            <p style={{ marginTop: '1rem', color: 'var(--text-light)' }}>Real connections made through our platform.</p>
          </div>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className={styles.testimonialQuote}>"We found each other within weeks of joining. The platform's focus on serious intentions made all the difference."</p>
              <div className={styles.testimonialAuthor}>Sara & Ali</div>
              <div className={styles.testimonialMeta}>Married in 2024 (Illustrative)</div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className={styles.testimonialQuote}>"The verified profiles and manual review process gave my family the peace of mind they needed."</p>
              <div className={styles.testimonialAuthor}>Usman K.</div>
              <div className={styles.testimonialMeta}>Found his match in Lahore</div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className={styles.testimonialQuote}>"I appreciated the clean, respectful interface. It felt like a premium service rather than a dating app."</p>
              <div className={styles.testimonialAuthor}>Madiha R.</div>
              <div className={styles.testimonialMeta}>Engaged</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--text-white)' }}>
        <div className="container text-center">
          <h2 style={{ color: 'var(--text-white)', marginBottom: '1.5rem' }}>Start Your Journey Today</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Join thousands of Pakistanis who are taking a serious, mindful approach to finding their life partner.
          </p>
          <Link href="/create-profile" className="btn" style={{ backgroundColor: 'var(--text-white)', color: 'var(--accent-primary)' }}>Create Profile Now</Link>
        </div>
      </section>
    </main>
  );
}
