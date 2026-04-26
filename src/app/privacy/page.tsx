import Link from 'next/link';

export default function Privacy() {
  return (
    <main style={{ padding: '6rem 0', minHeight: '100vh', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Trust & Privacy</h1>
          <p style={{ marginTop: '1rem', color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Your security, confidentiality, and peace of mind are the bedrock of our platform. We employ uncompromising standards to protect you.
          </p>
        </div>

        <div style={{ backgroundColor: 'white', padding: '4rem', borderRadius: 'var(--radius-soft)', boxShadow: 'var(--shadow-subtle)', marginBottom: '4rem' }}>
          
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-inter)', fontSize: '2rem', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Uncompromising Data Privacy
            </h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-dark)' }}>
              We adhere to strict data protection principles. We only collect information essential for curating meaningful matches. Your most sensitive details—including phone numbers, email addresses, and exact locations—are encrypted and NEVER shared with other users, third parties, or advertisers without your explicit, opt-in consent.
            </p>
          </div>

          <div style={{ marginBottom: '3rem', borderTop: '1px solid var(--border-color)', paddingTop: '3rem' }}>
            <h2 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-inter)', fontSize: '2rem', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Granular Photo Control
            </h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-dark)' }}>
              We understand the cultural importance of discretion regarding personal photos. You have absolute control over who views your imagery. Our platform allows you to:
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-dark)' }}>
              <li>Keep your photos blurred to the general public.</li>
              <li>Restrict photo access only to manually approved, premium members.</li>
              <li>Instantly revoke photo access from any match at any time.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '3rem', borderTop: '1px solid var(--border-color)', paddingTop: '3rem' }}>
            <h2 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-inter)', fontSize: '2rem', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Rigorous Manual Verification
            </h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-dark)' }}>
              Automated systems are not enough when it comes to lifelong commitments. Every single profile created on Relation by Maya undergoes a meticulous manual review by our dedicated team. We verify identities through direct phone contact and government ID cross-referencing, completely eradicating fake profiles and ensuring a secure ecosystem.
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '3rem' }}>
            <h2 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-inter)', fontSize: '2rem', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              Zero-Tolerance Policy & Moderation
            </h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-dark)' }}>
              We maintain a zero-tolerance policy towards harassment, inappropriate behavior, or fraud. If you encounter any interaction that makes you uncomfortable, our reporting mechanisms are immediate and confidential. Our 24/7 moderation team will take decisive action, including permanent bans, to protect our community.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', backgroundColor: 'var(--bg-primary)', padding: '3rem', borderRadius: 'var(--radius-soft)', border: '1px solid var(--border-color)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Have concerns about your privacy?</h3>
          <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>Our trust and safety team is always available to answer your questions and address your concerns.</p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Speak to our Support Team</Link>
        </div>
      </div>
    </main>
  );
}
