
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';
import { Reveal } from './components/Reveal';

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="antigravity-void min-h-screen relative selection:bg-accent-gold/20 selection:text-white">
      <div className="grain-overlay"></div>
      <div className="spotlight-overlay"></div>
      <Cursor />
      <Navbar />

      <main className="relative z-10 pt-0">
        <Hero />

        <Reveal width="100%">
          <About />
        </Reveal>

        <Reveal width="100%">
          <Services />
        </Reveal>

        <Reveal width="100%">
          <Portfolio />
        </Reveal>

        <Reveal width="100%">
          <Process />
        </Reveal>

        <Reveal width="100%">
          <Testimonials />
        </Reveal>

        <Reveal width="100%">
          <Contact />
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}

export default App;
