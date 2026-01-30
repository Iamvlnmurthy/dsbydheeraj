import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: 'Aetheris', category: 'Branding', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800' },
  { title: 'Luminal', category: 'Digital Marketing', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800' },
  { title: 'Orbital', category: 'Content Production', image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800' },
  { title: 'Zenith', category: 'SEO Strategy', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800' }
];

const CaseStudies = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const section = scrollRef.current;
    const container = section.querySelector('.projects-container');

    gsap.to(container, {
      x: () => -(container.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => "+=" + (container.scrollWidth - window.innerWidth)
      }
    });
  }, []);

  return (
    <section className="case-studies" ref={scrollRef}>
      <div className="projects-wrapper">
        <div className="projects-container">
          <div className="section-intro">
            <span className="section-num">02</span>
            <h2>Proven <span>Results</span></h2>
            <p>Weightless solutions for world-class brands.</p>
            <div className="scroll-hint">
              <span>Scroll to explore</span>
              <div className="line"></div>
            </div>
          </div>
          {projects.map((p, i) => (
            <div key={i} className="project-card glass">
              <div className="project-img">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="project-info">
                <span className="category">{p.category}</span>
                <h3>{p.title}</h3>
                <button className="view-btn">View Project &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .case-studies {
          overflow: hidden;
          background: var(--color-grey-dark);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }
        .case-studies::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 40%;
          height: 40%;
          background: radial-gradient(circle at 100% 100%, var(--color-crimson-glow) 0%, transparent 60%);
          pointer-events: none;
        }
        .projects-wrapper {
          height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }
        .projects-container {
          display: flex;
          padding: 0 10vw;
          gap: 80px;
          align-items: center;
        }
        .section-intro {
          min-width: 500px;
          padding-right: 60px;
        }
        .section-num {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          color: var(--color-crimson);
          display: block;
          margin-bottom: 25px;
          font-weight: 600;
        }
        .section-intro h2 {
          font-size: 6rem;
          margin-bottom: 20px;
          line-height: 0.85;
          letter-spacing: -2px;
          color: white;
        }
        .section-intro h2 span { 
          color: var(--color-crimson); 
        }
        .section-intro p {
          font-size: 1.4rem;
          opacity: 0.7;
          margin-bottom: 50px;
          line-height: 1.4;
          color: white;
        }
        .scroll-hint {
          display: flex;
          align-items: center;
          gap: 20px;
          color: var(--color-crimson);
        }
        .scroll-hint span {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
        }
        .scroll-hint .line {
          width: 80px;
          height: 1px;
          background: currentColor;
          opacity: 0.3;
        }
        .project-card {
          min-width: 550px;
          height: 700px;
          padding: 40px;
          border-radius: 50px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover {
          transform: translateY(-30px);
          background: rgba(127, 37, 47, 0.05);
          border-color: var(--color-crimson);
          box-shadow: 0 20px 60px var(--color-crimson-glow);
        }
        .project-img {
          width: 100%;
          height: 75%;
          border-radius: 30px;
          overflow: hidden;
          position: relative;
        }
        .project-img::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6));
          opacity: 0.4;
        }
        .project-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover .project-img img {
          transform: scale(1.1);
        }
        .project-info {
          padding: 30px 0 10px;
        }
        .category {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: var(--color-crimson);
          display: block;
          margin-bottom: 15px;
          font-weight: 700;
        }
        .project-info h3 {
          font-size: 3rem;
          margin-bottom: 20px;
          font-weight: 800;
          letter-spacing: -1px;
          color: white;
        }
        .view-btn {
          background: none;
          border: none;
          font-family: var(--font-heading);
          font-weight: 700;
          color: white;
          cursor: pointer;
          opacity: 0.6;
          transition: all 0.4s;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1rem;
        }
        .view-btn:hover {
          opacity: 1;
          gap: 20px;
          color: var(--color-crimson);
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;
