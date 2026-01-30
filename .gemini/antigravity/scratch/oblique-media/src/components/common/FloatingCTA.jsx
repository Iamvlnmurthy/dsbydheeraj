import React, { useState } from 'react';
import { Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingCTA = () => {
    return (
        <div className="floating-cta anti-gravity">
            <Link to="/contact">
                <div className="cta-icon-wrapper">
                    <Rocket size={24} color="white" />
                </div>
                <span className="cta-text">Launch Project</span>
            </Link>
            <style>{`
        .floating-cta {
          position: fixed;
          bottom: 40px;
          right: 40px;
          z-index: 99;
          background: var(--color-gold);
          padding: 12px 25px;
          border-radius: 40px;
          box-shadow: 0 10px 30px rgba(242, 162, 58, 0.4);
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .floating-cta:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 40px rgba(242, 162, 58, 0.6);
        }
        .floating-cta a {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .cta-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cta-text {
          font-family: var(--font-heading);
          font-weight: 700;
          color: white;
          font-size: 0.9rem;
          white-space: nowrap;
        }
        @media (max-width: 768px) {
          .floating-cta {
            bottom: 20px;
            right: 20px;
            padding: 12px;
          }
          .cta-text {
            display: none;
          }
        }
      `}</style>
        </div>
    );
};

export default FloatingCTA;
