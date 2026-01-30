import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Magnetic from './Magnetic';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar glass">
        <Magnetic>
          <Link to="/" className="logo">
            OBLIQUE<span>MEDIA</span>
          </Link>
        </Magnetic>
        <ul className="nav-links">
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li>
            <Magnetic>
              <Link to="/contact" className="cta-nav">Launch</Link>
            </Magnetic>
          </li>
        </ul>
        <div className="mobile-menu-btn">
          <Menu size={24} />
        </div>
      </div>
      <style>{`
        .navbar-container {
          position: fixed;
          top: 20px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 1000;
          padding: 0 20px;
        }
        .navbar {
          width: 100%;
          max-width: 1200px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 40px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(255, 255, 255, 0.05) !important;
          backdrop-filter: blur(20px);
        }
        .logo {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.6rem;
          color: white;
          letter-spacing: -1.5px;
          display: inline-block;
        }
        .logo span {
          color: var(--color-crimson);
        }
        .nav-links {
          display: flex;
          gap: 40px;
          align-items: center;
        }
        .nav-links a {
          font-size: 0.95rem;
          font-weight: 500;
          color: white;
          opacity: 0.7;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
        }
        .nav-links a:hover {
          opacity: 1;
          color: var(--color-crimson);
        }
        .cta-nav {
          background: var(--color-crimson);
          color: white !important;
          padding: 12px 28px;
          border-radius: 30px;
          opacity: 1 !important;
          font-weight: 700;
          box-shadow: 0 5px 20px var(--color-crimson-glow);
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
        }
        .cta-nav:hover {
          transform: scale(1.05);
          background: #5A1A22;
        }
        .mobile-menu-btn {
          display: none;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
