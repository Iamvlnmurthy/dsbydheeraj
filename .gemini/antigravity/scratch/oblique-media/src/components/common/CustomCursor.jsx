import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
            });
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="cursor-dot"></div>
            <div ref={followerRef} className="cursor-follower"></div>
            <style>{`
        .cursor-dot {
          width: 8px;
          height: 8px;
          background: var(--color-gold);
          border-radius: 50%;
          position: fixed;
          top: -4px;
          left: -4px;
          pointer-events: none;
          z-index: 10000;
        }
        .cursor-follower {
          width: 50px;
          height: 50px;
          border: 1px solid rgba(212, 160, 23, 0.4);
          border-radius: 50%;
          position: fixed;
          top: -25px;
          left: -25px;
          pointer-events: none;
          z-index: 9999;
          backdrop-filter: blur(2px);
          transition: width 0.3s, height 0.3s, top 0.3s, left 0.3s;
        }
      `}</style>
        </>
    );
};

export default CustomCursor;
