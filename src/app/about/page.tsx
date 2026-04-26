export default function About() {
    <main style={{ padding: '6rem 0', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>About Relation by Maya</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Elevating the matchmaking experience for Pakistanis worldwide.
          </p>
        </div>

        <div style={{ backgroundColor: 'white', padding: '4rem', borderRadius: 'var(--radius-soft)', boxShadow: 'var(--shadow-subtle)', marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-inter)', fontSize: '2rem', color: 'var(--accent-primary)' }}>Our Vision</h2>
          <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-dark)' }}>
            Relation by Maya was founded on a simple, yet profound belief: finding a life partner should be a journey rooted in respect, shared values, and absolute trust. In a world of superficial swiping, we exist to provide a secure, culturally appropriate, and deeply personal platform for individuals seeking serious, lifelong relationships.
          </p>

          <div style={{ padding: '3rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-soft)', marginBottom: '3rem', borderLeft: '4px solid var(--accent-primary)' }}>
            <h2 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-inter)', fontSize: '1.8rem' }}>A Personal Note from Maya</h2>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--text-dark)' }}>
              "I saw too many exceptional people struggling to find genuine connections on platforms that treated matchmaking like a transactional game. I wanted to create a boutique, high-end experience—a sanctuary where families could feel comfortable, where privacy is paramount, and where intentions are explicitly clear from the very first interaction."
            </p>
            <p style={{ lineHeight: '1.8', textAlign: 'right', fontWeight: '600', fontSize: '1.2rem', color: 'var(--accent-primary)' }}>
              — Maya, Founder
            </p>
          </div>

          <h2 style={{ marginBottom: '2rem', fontFamily: 'var(--font-inter)', fontSize: '2rem', color: 'var(--accent-primary)' }}>Our Core Pillars</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-soft)' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Exclusivity & Quality</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>We prioritize quality over quantity. Every profile is meticulously reviewed to ensure that our community comprises only genuine individuals with serious intentions.</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-soft)' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Absolute Discretion</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>Your privacy is our highest mandate. We employ state-of-the-art security protocols so your personal information and images remain completely under your control.</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-soft)' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Cultural Harmony</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>We blend modern matchmaking technology with deep respect for traditional Pakistani family values, creating a platform that both individuals and parents can trust.</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-soft)' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Bespoke Support</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>Our dedicated agents work closely with members, providing personalized guidance and support throughout your entire matchmaking journey.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
