import styles from '@/app/page.module.css';
import Link from 'next/link';

export default function ProfileDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  
  // Dummy data based on ID for mockup purposes
  const imageIndex = parseInt(id) || 1;
  
  return (
    <main style={{ padding: '6rem 0', minHeight: '100vh', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        {/* Profile Card */}
        <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-soft)', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1.8fr', boxShadow: 'var(--shadow-subtle)', marginBottom: '3rem' }}>
          
          <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '500px' }}>
            <img 
              src={`/avatars/avatar_${imageIndex}.jpeg`} 
              alt="Profile" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
               <h2 style={{ color: 'white', margin: 0, fontSize: '2rem' }}>ID: RBM-{id}</h2>
               <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>Active today</p>
            </div>
          </div>

          <div style={{ padding: '4rem 3rem', display: 'flex', flexDirection: 'column' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-color)' }}>
              <div>
                <h1 style={{ fontSize: '3rem', margin: '0 0 0.5rem 0', color: 'var(--text-dark)' }}>Zara</h1>
                <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', margin: 0 }}>
                  27 Years • Lahore, Pakistan • Software Engineer
                </p>
              </div>
              <span className={styles.verifiedBadge} style={{ display: 'flex', gap: '8px', fontSize: '1.1rem', alignItems: 'center', backgroundColor: '#eef8f1', color: '#16a34a', padding: '0.5rem 1rem', borderRadius: '50px', fontWeight: '600' }}>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                 </svg>
                 Identity Verified
              </span>
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ marginBottom: '1rem', fontFamily: 'var(--font-inter)', fontSize: '1.4rem', color: 'var(--accent-primary)' }}>About Me</h3>
                <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-dark)' }}>
                  I'm a software engineer who spends way too much time staring at screens, so on weekends, I try to stay outside. I love discovering new underground cafes, pretending I know how to paint, and arguing about movie plot holes. I'm usually the designated DJ on road trips and I make a mean cup of chai.
                </p>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ marginBottom: '1rem', fontFamily: 'var(--font-inter)', fontSize: '1.4rem', color: 'var(--accent-primary)' }}>What I'm Looking For</h3>
                <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-dark)' }}>
                  Someone to grab coffee with, explore the city, and share a good laugh. I'm looking for casual vibes, good energy, and someone who doesn't take themselves too seriously. Bonus points if you know the best street food spots in town.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', backgroundColor: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-soft)' }}>
                 <div><strong style={{ color: 'var(--text-light)' }}>Height:</strong> 5' 6"</div>
                 <div><strong style={{ color: 'var(--text-light)' }}>Vibe:</strong> Extroverted</div>
                 <div><strong style={{ color: 'var(--text-light)' }}>Education:</strong> Masters (MSc)</div>
                 <div><strong style={{ color: 'var(--text-light)' }}>Drinks:</strong> Socially</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
              <button className="btn btn-primary" style={{ flex: 1, padding: '1.2rem', fontSize: '1.1rem' }}>Send a Like</button>
              <button className="btn btn-outline" style={{ flex: 1, padding: '1.2rem', fontSize: '1.1rem' }}>Say Hi</button>
            </div>

          </div>
        </div>

        {/* Security Notice */}
        <div style={{ textAlign: 'center', color: 'var(--text-light)', fontSize: '0.9rem', maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ marginBottom: '0.5rem' }}>Keep interactions fun and respectful.</p>
          <button style={{ color: 'var(--text-light)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}>Report this profile</button>
        </div>

      </div>
    </main>
  );
}
