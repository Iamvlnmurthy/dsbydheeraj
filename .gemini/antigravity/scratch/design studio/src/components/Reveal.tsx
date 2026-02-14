import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    blur?: boolean;
}

export const Reveal = ({ children, width = "fit-content", delay = 0, direction = "up", blur = true }: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const getVariants = () => {
        const distance = 30;
        const initial = { opacity: 0, filter: blur ? 'blur(10px)' : 'none' };

        switch (direction) {
            case "up": return { ...initial, y: distance };
            case "down": return { ...initial, y: -distance };
            case "left": return { ...initial, x: distance };
            case "right": return { ...initial, x: -distance };
            default: return { ...initial, y: distance };
        }
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
            <motion.div
                variants={{
                    hidden: getVariants(),
                    visible: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};
