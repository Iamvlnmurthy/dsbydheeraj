import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Briefcase } from 'lucide-react';

const Contact = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="contact-container glass">
                    <div className="contact-header">
                        <h2>Let's Launch Your <span>Brand</span></h2>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: `${(step / 3) * 100}%` }}></div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        {step === 1 && (
                            <div className="form-step">
                                <h3>Tell us about yourself</h3>
                                <div className="input-group">
                                    <User size={20} />
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="input-group">
                                    <Mail size={20} />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <button type="button" className="form-btn" onClick={nextStep}>Continue &rarr;</button>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="form-step">
                                <h3>What are we building?</h3>
                                <div className="services-options">
                                    {['Branding', 'Marketing', 'Content', 'SEO'].map(s => (
                                        <div
                                            key={s}
                                            className={`option-card ${formData.service === s ? 'active' : ''}`}
                                            onClick={() => setFormData({ ...formData, service: s })}
                                        >
                                            {s}
                                        </div>
                                    ))}
                                </div>
                                <div className="btn-group">
                                    <button type="button" className="form-btn secondary" onClick={prevStep}>Back</button>
                                    <button type="button" className="form-btn" onClick={nextStep}>Continue &rarr;</button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="form-step">
                                <h3>Project Details</h3>
                                <div className="input-group text-area">
                                    <MessageSquare size={20} />
                                    <textarea
                                        placeholder="Tell us about your project..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>
                                <div className="btn-group">
                                    <button type="button" className="form-btn secondary" onClick={prevStep}>Back</button>
                                    <button type="submit" className="form-btn primary">Send Message <Send size={18} /></button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </section>

            <style>{`
        .contact-page {
          min-height: 100vh;
          padding: 150px 20px;
          background: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .contact-container {
          width: 100%;
          max-width: 600px;
          padding: 60px;
          border-radius: 40px;
        }
        .contact-header {
          margin-bottom: 40px;
        }
        .contact-header h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        .contact-header h2 span { color: var(--color-gold); }
        .progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(0,0,0,0.05);
          border-radius: 2px;
          overflow: hidden;
        }
        .progress {
          height: 100%;
          background: var(--color-gold);
          transition: width 0.5s ease;
        }
        .form-step h3 {
          margin-bottom: 30px;
          font-size: 1.2rem;
          opacity: 0.7;
        }
        .input-group {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px 25px;
          background: white;
          border-radius: 15px;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
          transition: transform 0.3s;
        }
        .input-group:focus-within {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        }
        .input-group input, .input-group textarea {
          border: none;
          outline: none;
          width: 100%;
          font-family: inherit;
          font-size: 1rem;
        }
        .text-area {
          align-items: flex-start;
          height: 150px;
        }
        .text-area textarea {
          height: 100%;
          resize: none;
        }
        .services-options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-bottom: 30px;
        }
        .option-card {
          padding: 20px;
          background: white;
          border-radius: 15px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s;
          border: 1px solid transparent;
        }
        .option-card.active {
          border-color: var(--color-gold);
          background: var(--color-gold-soft);
        }
        .btn-group {
          display: flex;
          gap: 15px;
        }
        .form-btn {
          width: 100%;
          padding: 15px;
          border-radius: 15px;
          border: none;
          background: var(--color-grey-dark);
          color: white;
          font-family: var(--font-heading);
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .form-btn:hover {
          transform: translateY(-2px);
        }
        .form-btn.secondary {
          background: var(--color-grey-light);
          color: var(--color-grey-dark);
        }
        .form-btn.primary {
          background: var(--color-gold);
        }
      `}</style>
        </div>
    );
};

export default Contact;
