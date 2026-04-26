import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ padding: '8rem 0', minHeight: '80vh', backgroundColor: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '6rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>404</h1>
        <h2 style={{ marginBottom: '2rem' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-light)', marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="btn btn-primary">Return Home</Link>
      </div>
    </main>
  );
}
