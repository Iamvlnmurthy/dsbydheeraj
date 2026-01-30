import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Magnetic = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const xTo = gsap.quickTo(ref.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(ref.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { width, height, left, top } = ref.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.35);
            yTo(y * 0.35);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        const target = ref.current;
        if (target) {
            target.addEventListener("mousemove", handleMouseMove);
            target.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (target) {
                target.removeEventListener("mousemove", handleMouseMove);
                target.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return (
        React.cloneElement(React.Children.only(children), { ref })
    );
};

export default Magnetic;
