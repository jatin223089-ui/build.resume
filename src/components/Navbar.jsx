import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const isBuilder = useLocation().pathname === '/builder';
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <div className="navbar-brand-icon">
              <img src="/curriculum-vitae.png" alt="Logo" />
            </div>
            <span className="navbar-brand-text">build <span>resume.</span></span>
          </Link>
          {isBuilder ? (
            <Link to="/" className="btn btn-secondary">← Back Home</Link>
          ) : (
            <Link to="/builder" className="btn btn-primary">✨ Create Resume</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
