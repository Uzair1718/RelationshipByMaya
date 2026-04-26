export default function CreateProfile() {
  return (
    <main style={{ padding: '6rem 0', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '700px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1>Create Your Profile</h1>
          <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>Account Registration</p>
        </div>

        <div style={{ backgroundColor: 'white', padding: '4rem 3rem', borderRadius: 'var(--radius-soft)', boxShadow: 'var(--shadow-subtle)', textAlign: 'center' }}>
          <div style={{ marginBottom: '2rem' }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto' }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-dark)' }}>Registration Required</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
            First contact the agent you were talking to on Snapchat, pay the dues, and then we can proceed with your signup.
          </p>
        </div>
      </div>
    </main>
  );
}
