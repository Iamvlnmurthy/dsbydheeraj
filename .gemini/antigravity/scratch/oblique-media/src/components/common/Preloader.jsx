import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setPercent(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (percent === 100) {
            gsap.to('.preloader', {
                yPercent: -100,
                duration: 1,
                ease: 'power4.inOut',
                onComplete: onComplete
            });
        }
    }, [percent, onComplete]);

    return (
        <div className="preloader">
            <div className="loader-content">
                <div className="loader-logo anti-gravity">
                    OBLIQUE<span>MEDIA</span>
                </div>
                <div className="loader-bar">
                    <div className="loader-progress" style={{ width: `${percent}%` }}></div>
                </div>
                <div className="loader-percent">{percent}%</div>
            </div>
            <style>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--color-white);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loader-content {
          text-align: center;
          width: 300px;
        }
        .loader-logo {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2.5rem;
          margin-bottom: 30px;
        }
        .loader-logo span { color: var(--color-gold); }
        .loader-bar {
          width: 100%;
          height: 2px;
          background: rgba(0,0,0,0.05);
          margin-bottom: 10px;
        }
        .loader-progress {
          height: 100%;
          background: var(--color-gold);
        }
        .loader-percent {
          font-family: var(--font-heading);
          font-size: 0.9rem;
          opacity: 0.5;
        }
      `}</style>
        </div>
    );
};

export default Preloader;
