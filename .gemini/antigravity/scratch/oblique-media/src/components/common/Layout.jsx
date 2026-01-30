import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import Preloader from './Preloader';
import FloatingCTA from './FloatingCTA';

const Layout = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (!loading) {
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1,
                smoothTouch: false,
                touchMultiplier: 2,
                infinite: false,
            });

            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);

            return () => {
                lenis.destroy();
            };
        }
    }, [loading]);

    return (
        <>
            {loading && <Preloader onComplete={() => setLoading(false)} />}
            <CustomCursor />
            <Navbar />
            <main ref={scrollRef}>
                {children}
            </main>
            <FloatingCTA />
            <Footer />
        </>
    );
};

export default Layout;
