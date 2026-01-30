import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="logo">OBLIQUE<span>MEDIA</span></h2>
          <p>Elevating brands beyond gravity.</p>
        </div>
        <div className="footer-links">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Strategy</li>
              <li>Marketing</li>
              <li>Content</li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Portfolio</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3>Connect</h3>
            <div className="social-icons">
              <Instagram size={20} />
              <Twitter size={20} />
              <Linkedin size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Oblique Media. All rights reserved.</p>
      </div>
      <style>{`
        .footer {
          padding: 120px 20px 60px;
          background: var(--color-grey-dark);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 3fr;
          gap: 100px;
        }
        .footer-brand .logo {
          font-size: 2rem;
          color: white;
        }
        .footer-brand .logo span {
          color: var(--color-crimson);
        }
        .footer-brand p {
          margin-top: 25px;
          opacity: 0.7;
          max-width: 300px;
          line-height: 1.6;
          font-size: 1.1rem;
          color: white;
        }
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px;
        }
        .footer-links h3 {
          font-size: 1.2rem;
          margin-bottom: 30px;
          color: white;
          letter-spacing: 1px;
        }
        .footer-links ul li {
          margin-bottom: 15px;
          opacity: 0.6;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          color: white;
        }
        .footer-links ul li:hover {
          opacity: 1;
          color: var(--color-crimson);
          transform: translateX(10px);
        }
        .social-icons {
          display: flex;
          gap: 25px;
          color: var(--color-crimson);
        }
        .social-icons svg {
          opacity: 0.7;
          transition: all 0.3s;
          cursor: pointer;
        }
        .social-icons svg:hover {
          opacity: 1;
          transform: translateY(-5px);
        }
        .footer-bottom {
          max-width: 1200px;
          margin: 100px auto 0;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          opacity: 0.5;
          color: white;
        }
        @media (max-width: 968px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }
        @media (max-width: 768px) {
          .footer-links {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
