import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

export const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const x = useMotionValue(0); // Mouse X from 0 to 1
    const mouseY = useMotionValue(0); // Mouse Y from 0 to 1

    const mouseRotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), { stiffness: 100, damping: 30 });
    const mouseRotateY = useSpring(useTransform(x, [0, 1], [-5, 5]), { stiffness: 100, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        x.set(clientX / innerWidth);
        mouseY.set(clientY / innerHeight);
    };

    return (
        <section
            ref={ref}
            className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
            onMouseMove={handleMouseMove}
        >
            {/* Background Grid - Animated */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-[antigravity_20s_linear_infinite]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Typography */}
                <div className="lg:col-span-7 flex flex-col relative z-20 mix-blend-difference items-center text-center">

                    {/* Top Group */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center w-full max-w-2xl"
                    >
                        {/* Top Text */}
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-1 h-1 rounded-full bg-white/60"></div>
                            <h2 className="text-lg md:text-xl font-heading font-light tracking-[0.3em] text-white/90 uppercase whitespace-nowrap">
                                Design Studio By
                            </h2>
                            <div className="w-1 h-1 rounded-full bg-white/60"></div>
                        </div>

                        {/* Top Line */}
                        <div className="w-full h-[1px] bg-white/20 mb-3 md:mb-6"></div>
                    </motion.div>

                    {/* Main Name */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-thin text-accent-gold tracking-[0.1em] uppercase mb-5 md:mb-6 relative whitespace-nowrap"
                    >
                        Dheeraj Dasyam
                    </motion.h1>

                    {/* Bottom Group */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col items-center w-full max-w-2xl"
                    >
                        {/* Bottom Line */}
                        <div className="w-full h-[1px] bg-white/20 mb-3 md:mb-4"></div>

                        {/* Bottom Text */}
                        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 md:gap-8 w-full text-[13px] sm:text-sm md:text-sm font-heading font-light tracking-[0.05em] md:tracking-[0.4em] text-white/80 uppercase">
                            <span className="flex items-center gap-1 md:gap-2"><div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-white/40 rounded-full"></div>ARCHITECTURE</span>
                            <span className="flex items-center gap-1 md:gap-2"><div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-white/40 rounded-full"></div>PLANNING</span>
                            <span className="flex items-center gap-1 md:gap-2"><div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-white/40 rounded-full"></div>INTERIORS<div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-white/40 rounded-full ml-1 md:ml-2"></div></span>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image */}
                <div className="lg:col-span-5 relative perspective-1000 mt-6 lg:mt-0">
                    <motion.div
                        style={{ rotateX: mouseRotateX, rotateY: mouseRotateY }}
                        initial={{ opacity: 0, scale: 0.8, rotateX: 10, filter: 'blur(20px)' }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} // smooth ease
                        className="relative z-10 p-1 rounded-sm bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/5 shadow-2xl"
                    >
                        <div className="relative overflow-hidden rounded-[2px] aspect-[4/5] group">
                            <img
                                src="/images/5.jpeg"
                                alt="Hero Project"
                                className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out grayscale-[0.3] group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent opacity-60"></div>

                            {/* Floating Overlay Text */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="overflow-hidden">
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ delay: 1.5, duration: 1, ease: "circOut" }}
                                        className="text-white/80 font-mono text-[10px] tracking-[0.3em] uppercase mb-2"
                                    >
                                        Residential Villa
                                    </motion.div>
                                </div>
                                <div className="w-full h-[1px] bg-white/20 relative overflow-hidden">
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "0%" }}
                                        transition={{ delay: 1.8, duration: 1.5, ease: "circOut" }}
                                        className="absolute inset-0 bg-accent-gold"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative elements - slower, smoother */}
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-12 -right-4 md:-right-12 w-64 h-64 border border-accent-gold/10 rounded-full z-0 opacity-40 blur-sm"
                    />
                    <motion.div
                        animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-16 -left-4 md:-left-12 w-80 h-80 border border-white/5 rounded-full z-0 opacity-20 dashed-border"
                    />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ y, opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
            >
                <span className="text-[10px] tracking-[0.3em] font-mono text-white/40">SCROLL</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent relative overflow-hidden">
                    <motion.div
                        animate={{ y: [-60, 60] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-accent-gold blur-[1px]"
                    />
                </div>
            </motion.div>
        </section>
    )
}
