"use client";

import styles from '@/app/page.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Browse() {
  const [location, setLocation] = useState('All Cities');
  const [ageGroup, setAgeGroup] = useState('Any Age');
  const [profession, setProfession] = useState('All Professions');

  const profiles = [
    { id: 1, name: "Ayesha", age: 27, city: "Lahore", profession: "Engineering & IT", bio: "Software Engineer who loves late-night drives and trying new cafes.", verified: true, image: "/avatars/avatar_1.jpeg" },
    { id: 2, name: "Zainab", age: 25, city: "Islamabad", profession: "Medical & Healthcare", bio: "Doctor by day, concert-goer by night. Looking for someone fun to hang out with.", verified: true, image: "/avatars/avatar_2.jpeg" },
    { id: 3, name: "Fatima", age: 29, city: "Karachi", profession: "Business & Finance", bio: "Marketing professional. Always down for spontaneous weekend trips.", verified: false, image: "/avatars/avatar_3.jpeg" },
    { id: 4, name: "Hira", age: 26, city: "Lahore", profession: "Engineering & IT", bio: "Architect. I know all the best hidden spots in the city. Let's explore together.", verified: true, image: "/avatars/avatar_4.jpeg" },
    { id: 5, name: "Sana", age: 28, city: "Islamabad", profession: "Education & Arts", bio: "Teacher with a sarcastic sense of humor. Looking for good vibes only.", verified: true, image: "/avatars/avatar_5.jpeg" },
    { id: 6, name: "Nida", age: 31, city: "Karachi", profession: "Business & Finance", bio: "Business owner. Let's grab a drink and see where the night takes us.", verified: false, image: "/avatars/avatar_6.jpeg" },
    { id: 7, name: "Maha", age: 24, city: "Lahore", profession: "Education & Arts", bio: "Graphic designer. Art, music, and good food are my love languages.", verified: true, image: "/avatars/avatar_7.jpeg" },
    { id: 8, name: "Rida", age: 27, city: "Islamabad", profession: "Medical & Healthcare", bio: "Dentist. Looking for someone to match my energy on weekends.", verified: true, image: "/avatars/avatar_8.jpeg" },
    { id: 9, name: "Kiran", age: 26, city: "Karachi", profession: "Education & Arts", bio: "Fashion Designer. Thrill-seeker. If you like adventures, swipe right.", verified: true, image: "/avatars/avatar_9.jpeg" },
    { id: 10, name: "Sadia", age: 30, city: "Lahore", profession: "Business & Finance", bio: "HR Manager. Let's skip the small talk and go straight to the fun part.", verified: true, image: "/avatars/avatar_10.jpeg" },
    { id: 11, name: "Iqra", age: 23, city: "Islamabad", profession: "Education & Arts", bio: "Psychology student. I promise I won't psychoanalyze you on the first date.", verified: false, image: "/avatars/avatar_11.jpeg" },
    { id: 12, name: "Zara", age: 29, city: "Karachi", profession: "Business & Finance", bio: "Banker. Work hard, play harder. Looking for someone to share a laugh with.", verified: true, image: "/avatars/avatar_12.jpeg" },
    { id: 13, name: "Mariam", age: 28, city: "Lahore", profession: "Education & Arts", bio: "Writer. Open-minded and easygoing. Let's see if we vibe.", verified: true, image: "/avatars/avatar_13.jpeg" },
    { id: 14, name: "Alizeh", age: 25, city: "Islamabad", profession: "Business & Finance", bio: "Event Planner. Extroverted, bubbly, and always the life of the party.", verified: false, image: "/avatars/avatar_14.jpeg" },
  ];

  const filteredProfiles = profiles.filter(profile => {
    // Location match
    if (location !== 'All Cities' && profile.city !== location) return false;
    
    // Profession match
    if (profession !== 'All Professions' && profile.profession !== profession) return false;
    
    // Age match
    if (ageGroup !== 'Any Age') {
      if (ageGroup === '20 - 25 Years' && (profile.age < 20 || profile.age > 25)) return false;
      if (ageGroup === '26 - 30 Years' && (profile.age < 26 || profile.age > 30)) return false;
      if (ageGroup === '31 - 35 Years' && (profile.age < 31 || profile.age > 35)) return false;
      if (ageGroup === '35+ Years' && profile.age <= 35) return false;
    }
    
    return true;
  });

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
            <select 
              value={location} 
              onChange={(e) => setLocation(e.target.value)}
              style={{ padding: '1rem', borderRadius: 'var(--radius-soft)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)', outline: 'none', cursor: 'pointer' }}
            >
              <option>All Cities</option>
              <option>Lahore</option>
              <option>Karachi</option>
              <option>Islamabad</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '200px' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>Age Group</label>
            <select 
              value={ageGroup} 
              onChange={(e) => setAgeGroup(e.target.value)}
              style={{ padding: '1rem', borderRadius: 'var(--radius-soft)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)', outline: 'none', cursor: 'pointer' }}
            >
              <option>Any Age</option>
              <option>20 - 25 Years</option>
              <option>26 - 30 Years</option>
              <option>31 - 35 Years</option>
              <option>35+ Years</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '200px' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>Profession</label>
            <select 
              value={profession} 
              onChange={(e) => setProfession(e.target.value)}
              style={{ padding: '1rem', borderRadius: 'var(--radius-soft)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)', outline: 'none', cursor: 'pointer' }}
            >
              <option>All Professions</option>
              <option>Medical & Healthcare</option>
              <option>Engineering & IT</option>
              <option>Business & Finance</option>
              <option>Education & Arts</option>
            </select>
          </div>

          {/* Optional reset button if they want to clear filters quickly */}
          <div style={{ display: 'flex', alignItems: 'flex-end', height: '100%', marginTop: 'auto' }}>
            <button 
              onClick={() => { setLocation('All Cities'); setAgeGroup('Any Age'); setProfession('All Professions'); }}
              className="btn btn-outline" 
              style={{ padding: '1rem 3rem', fontSize: '1.1rem', height: '54px' }}
            >
              Clear Filters
            </button>
          </div>

        </div>

        <div className={styles.profileGrid}>
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile, index) => (
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
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', backgroundColor: 'white', borderRadius: 'var(--radius-soft)', boxShadow: 'var(--shadow-subtle)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>No Matches Found</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>We couldn't find any profiles matching your exact criteria. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
