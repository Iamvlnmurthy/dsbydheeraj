import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServicesPreview from '../components/home/ServicesPreview';
import CaseStudies from '../components/home/CaseStudies';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const heroRect = heroRef.current.getBoundingClientRect();

      const isInside = clientX >= heroRect.left && clientX <= heroRect.right &&
        clientY >= heroRect.top && clientY <= heroRect.bottom;

      const areas = ['top', 'left', 'right', 'bottom'];
      const heroContent = heroRef.current.querySelector('.hero-content');

      if (isInside) {
        areas.forEach(area => {
          const container = heroContent.querySelector(`.content-${area}`);
          if (!container) return;

          const rect = container.getBoundingClientRect();
          const areaX = rect.left + rect.width / 2;
          const areaY = rect.top + rect.height / 2;

          const dist = Math.sqrt(Math.pow(clientX - areaX, 2) + Math.pow(clientY - areaY, 2));
          const maxRevealDist = 450;
          const power = Math.max(0, 1 - (dist / maxRevealDist));

          // Reveal the area based on side proximity
          gsap.to(container, {
            opacity: 0.15 + (power * 0.85),
            y: -10 * power,
            duration: 0.6,
            overwrite: 'auto'
          });

          // Magnetic effects for elements within this area
          const interactive = container.querySelectorAll('.char, .primary-btn, .secondary-btn, .hero-badge');
          interactive.forEach(el => {
            const elRect = el.getBoundingClientRect();
            const elX = elRect.left + elRect.width / 2;
            const elY = elRect.top + elRect.height / 2;
            const elDist = Math.sqrt(Math.pow(clientX - elX, 2) + Math.pow(clientY - elY, 2));
            const elMaxDist = 180;

            if (elDist < elMaxDist) {
              const elPower = 1 - (elDist / elMaxDist);
              const isChar = el.classList.contains('char');

              gsap.to(el, {
                color: isChar ? '#FFF' : undefined,
                textShadow: isChar ? `0 0 40px var(--color-crimson)` : undefined,
                scale: 1 + (isChar ? 0.4 : 0.15) * elPower,
                y: -25 * elPower,
                rotate: isChar ? (Math.random() - 0.5) * 20 * elPower : 0,
                duration: 0.3,
                overwrite: 'auto'
              });
            } else {
              gsap.to(el, {
                color: el.classList.contains('char') ? 'var(--color-crimson)' : undefined,
                textShadow: 'none',
                scale: 1,
                y: 0,
                rotate: 0,
                duration: 0.8,
                overwrite: 'auto'
              });
            }
          });
        });
      } else {
        // Fade all areas back
        areas.forEach(area => {
          const container = heroContent.querySelector(`.content-${area}`);
          if (container) gsap.to(container, { opacity: 0.1, y: 0, duration: 1.5 });
        });
      }
    };

    const ctx = gsap.context(() => {
      // Hero Title Entrance
      const chars = titleRef.current.querySelectorAll('.char');
      gsap.from(chars, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.03,
        ease: 'power4.out',
        delay: 0.5
      });
    }, heroRef);

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);

  const splitText = (text) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char" style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
        {char}
      </span>
    ));
  };

  return (
    <div className="home-page">
      <section className="hero" ref={heroRef}>
        <div className="spline-wrapper">
          <iframe
            src='https://my.spline.design/radialpattern-Ht4ZvEFda96xZwUw5qfyP7fw/'
            frameBorder='0'
            width='100%'
            height='100%'
            title="Spline Background"
            className="spline-iframe"
          ></iframe>
          <div className="spline-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="content-top">
            <div className="hero-badge glass anti-gravity">Premium Digital Agency</div>
          </div>
          <div className="content-left">
            <h1 ref={titleRef} className="interactive-title">
              <div className="line">{splitText('Elevating')}</div>
              <div className="line">{splitText('Brands')}</div>
            </h1>
          </div>
          <div className="content-right">
            <p className="subtitle">We craft digital experiences that defy expectations and propel your brand to new heights in the digital stratosphere.</p>
          </div>
          <div className="content-bottom">
            <h2 className="title-secondary">{splitText('Beyond Gravity')}</h2>
            <div className="hero-ctas">
              <button className="primary-btn">Explore Our Work</button>
              <button className="secondary-btn glass">Get Started</button>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <ServicesPreview />
      <CaseStudies />

      <section className="home-cta">
        <div className="cta-content glass">
          <h2>Ready to <span>Defy</span> Gravity?</h2>
          <p>Let's build something astronomical together. Your journey to the digital stratosphere starts with a single click.</p>
          <button className="primary-btn">Start Your Project</button>
        </div>
      </section>

      <style>{`
        .home-cta {
          padding: 80px 20px 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: var(--color-grey-dark);
        }
        .cta-content {
          max-width: 1000px;
          width: 100%;
          padding: 100px 60px;
          border-radius: 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
        }
        .cta-content::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, var(--color-crimson-glow) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-content h2 {
          font-size: clamp(3rem, 8vw, 5rem);
          margin-bottom: 30px;
          line-height: 1;
          color: white;
        }
        .cta-content h2 span {
          color: var(--color-crimson);
        }
        .cta-content p {
          font-size: 1.25rem;
          opacity: 0.7;
          margin-bottom: 50px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          color: white;
        }
        .home-page {
          background: var(--color-grey-dark);
          position: relative;
        }
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          background: var(--color-grey-dark);
        }
        .spline-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: auto; /* Allow Spline elements to be interactive */
          overflow: hidden;
        }
        .spline-iframe {
          width: 100%;
          height: calc(100% + 100px); /* Oversize to hide watermark */
          position: absolute;
          top: -50px;
          left: 0;
          border: none;
          filter: sepia(100%) saturate(200%) hue-rotate(310deg) brightness(0.8); /* Crimson shift */
        }
        .spline-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, transparent 30%, rgba(127, 37, 47, 0.15) 100%);
          pointer-events: none;
          z-index: 2;
        }
        .hero-content {
          z-index: 10;
          width: 100%;
          height: 100%;
          padding: 80px 40px;
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          grid-template-rows: auto 1fr auto;
          grid-template-areas: 
            ". top ."
            "left . right"
            ". bottom .";
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
        }
        .content-top, .content-left, .content-right, .content-bottom {
          opacity: 0.1;
          will-change: opacity, transform;
        }
        .content-top { grid-area: top; display: flex; justify-content: center; }
        .content-left { grid-area: left; display: flex; align-items: center; justify-content: flex-start; text-align: left; }
        .content-right { grid-area: right; display: flex; align-items: center; justify-content: flex-end; text-align: right; }
        .content-bottom { grid-area: bottom; display: flex; flex-direction: column; align-items: center; gap: 20px; }

        .hero-badge {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: white;
          font-weight: 600;
          background: var(--color-crimson);
          box-shadow: 0 5px 15px var(--color-crimson-glow);
          pointer-events: auto;
          cursor: crosshair;
        }
        .interactive-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          line-height: 1;
          font-weight: 900;
          letter-spacing: -2px;
          color: var(--color-crimson);
          user-select: none;
          pointer-events: auto;
          white-space: nowrap;
          cursor: default;
        }
        .title-secondary {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          font-weight: 800;
          color: var(--color-crimson);
          letter-spacing: 4px;
          margin-bottom: 10px;
          text-transform: uppercase;
          pointer-events: auto;
          cursor: default;
        }
        .char {
          display: inline-block;
          position: relative;
          will-change: transform, color, text-shadow;
          color: var(--color-crimson);
          pointer-events: none;
        }
        .subtitle {
          font-size: 1.1rem;
          opacity: 0.9;
          line-height: 1.6;
          max-width: 320px;
          color: var(--color-crimson);
          font-weight: 500;
          pointer-events: auto;
          cursor: default;
        }
        .hero-ctas {
          display: flex;
          gap: 20px;
          justify-content: center;
          pointer-events: auto;
        }
        .primary-btn {
          background: var(--color-crimson);
          color: white;
          padding: 18px 40px;
          border-radius: 40px;
          border: none;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          box-shadow: 0 10px 30px var(--color-crimson-glow);
        }
        .secondary-btn {
          color: white;
          padding: 18px 40px;
          border-radius: 40px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.4s;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        .primary-btn:hover {
          transform: translateY(-5px);
          background: #5A1A22; /* Darker crimson */
          box-shadow: 0 15px 40px var(--color-crimson-glow);
        }
        .secondary-btn:hover {
          background: var(--color-crimson);
          border-color: var(--color-crimson);
          transform: translateY(-5px);
        }
        .hero-scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          opacity: 0.4;
          pointer-events: none;
        }
        .hero-scroll-indicator span {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-crimson);
          font-weight: 600;
        }
        .scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--color-crimson), transparent);
        }
      `}</style>
    </div>
  );
};

export default Home;
