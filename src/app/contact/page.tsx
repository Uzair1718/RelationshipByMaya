export default function Contact() {
  return (
    <main style={{ padding: '6rem 0', minHeight: '100vh', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Concierge Support</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            We provide bespoke, white-glove assistance to ensure your journey is seamless. Reach out to our dedicated support team at any time.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>Always Here For You</h2>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Whether you have questions about our vetting process, need assistance with your profile, or wish to report a concern, our discreet and professional team is ready to assist.
              </p>
            </div>

            <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: 'var(--radius-soft)', boxShadow: 'var(--shadow-subtle)', borderLeft: '4px solid var(--accent-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Email Concierge</h3>
              </div>
              <p style={{ color: 'var(--text-light)', margin: 0 }}>support@relationbymaya.com</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '0.5rem' }}>Typical response time: Under 2 hours</p>
            </div>

            <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: 'var(--radius-soft)', boxShadow: 'var(--shadow-subtle)', borderLeft: '4px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Executive Office</h3>
              </div>
              <p style={{ color: 'var(--text-light)', margin: 0, lineHeight: '1.6' }}>
                Relation by Maya Headquarters<br/>
                Gulberg III, Lahore<br/>
                Pakistan
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '0.5rem', fontStyle: 'italic' }}>Visits by strict appointment only.</p>
            </div>
          </div>

          <div style={{ backgroundColor: 'white', padding: '3.5rem', borderRadius: 'var(--radius-soft)', boxShadow: 'var(--shadow-subtle)' }}>
            <h2 style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>Send a Secure Message</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-dark)' }}>Full Name</label>
                <input type="text" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-soft)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)' }} placeholder="E.g. Zara Ahmed" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-dark)' }}>Registered Email</label>
                <input type="email" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-soft)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)' }} placeholder="Your secure email address" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-dark)' }}>Nature of Inquiry</label>
                <select style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-soft)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
                  <option>General Support</option>
                  <option>Profile Verification</option>
                  <option>Privacy / Security Concern</option>
                  <option>Membership & Billing</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-dark)' }}>Detailed Message</label>
                <textarea style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-soft)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)', minHeight: '160px', resize: 'vertical' }} placeholder="Please provide as much context as possible..."></textarea>
              </div>
              <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}>Submit Inquiry securely</button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
