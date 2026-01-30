import React from 'react';
import { Target, Camera, PieChart, PenTool } from 'lucide-react';

const services = [
  {
    icon: <PieChart size={32} />,
    title: 'Brand Strategy',
    desc: 'Crafting unique identities that float above the noise.'
  },
  {
    icon: <Target size={32} />,
    title: 'Digital Marketing',
    desc: 'Precision-targeted campaigns with astronomical reach.'
  },
  {
    icon: <Camera size={32} />,
    title: 'Content Creation',
    desc: 'Visual storytelling that captures the essence of weightlessness.'
  },
  {
    icon: <PenTool size={32} />,
    title: 'SEO & Analytics',
    desc: 'Rising above rankings with data-driven momentum.'
  }
];

const ServicesPreview = () => {
  return (
    <section className="services-preview">
      <div className="container">
        <div className="section-header">
          <span className="section-num">01</span>
          <h2>Our Core Specialized <span>Expertise</span></h2>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card glass anti-gravity" style={{ animationDelay: `-${i * 1.5}s` }}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <button className="text-btn">Explore Area &rarr;</button>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .services-preview {
          padding: 100px 20px 80px;
          background: var(--color-grey-dark);
          position: relative;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-header {
          margin-bottom: 80px;
        }
        .section-num {
          font-family: var(--font-heading);
          color: var(--color-crimson);
          font-size: 1.1rem;
          display: block;
          margin-bottom: 15px;
          font-weight: 600;
        }
        .section-header h2 {
          font-size: 4rem;
          max-width: 600px;
          line-height: 1;
          letter-spacing: -1px;
          color: white;
        }
        .section-header h2 span {
          color: var(--color-crimson);
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
        }
        .service-card {
          padding: 50px 40px;
          border-radius: 40px;
          transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
          cursor: pointer;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }
        .service-card:hover {
          transform: translateY(-15px);
          background: rgba(127, 37, 47, 0.1);
          border-color: var(--color-crimson);
          box-shadow: 0 10px 40px var(--color-crimson-glow);
        }
        .service-icon {
          color: var(--color-crimson);
          margin-bottom: 30px;
          display: inline-block;
          padding: 15px;
          background: rgba(127, 37, 47, 0.15);
          border-radius: 20px;
        }
        .service-card h3 {
          margin-bottom: 20px;
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
        }
        .service-card p {
          font-size: 1rem;
          opacity: 0.7;
          margin-bottom: 30px;
          line-height: 1.6;
          color: white;
        }
        .text-btn {
          background: none;
          border: none;
          color: var(--color-crimson);
          font-family: var(--font-heading);
          font-weight: 700;
          cursor: pointer;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0;
          transition: gap 0.3s;
        }
        .text-btn:hover {
          gap: 15px;
        }
      `}</style>
    </section>
  );
};

export default ServicesPreview;
