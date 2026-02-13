import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCounter = ({ end, label, suffix = "" }: { end: number, label: string, suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-5xl font-display font-light text-accent-gold mb-2">
                {isInView ? (
                    <Counter value={end} suffix={suffix} />
                ) : (
                    <span>0{suffix}</span>
                )}
            </div>
            <div className="text-xs font-mono tracking-widest text-white/60">{label}</div>
        </div>
    );
};

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [value]);

    return <span>{count}{suffix}</span>;
};

export const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative py-20">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-12"
                        >
                            <h2 className="text-sm font-mono text-accent-gold mb-4 tracking-[0.3em]">THE STUDIO</h2>
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white leading-tight mb-8">
                                Where Vision Meets <span className="italic text-white/50">Void</span>.
                            </h3>
                            <p className="text-white/60 font-sans font-light leading-relaxed text-lg mb-6">
                                "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
                            </p>
                            <p className="text-white/40 font-sans font-light leading-relaxed">
                                At Design Studio by Dheeraj Dasyam, we defy convention. We believe in creating spaces that feel weightless yet significant—dimensionally layered environments that exist at the intersection of function and art. Based in Jubilee Hills, Hyderabad, our multidisciplinary team brings over 15 years of expertise to every line drawn.
                            </p>
                        </motion.div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                            <StatCounter end={150} suffix="+" label="PROJECTS" />
                            <StatCounter end={15} suffix="+" label="YEARS" />
                            <StatCounter end={4} label="DISCIPLINES" />
                        </div>
                    </div>

                    {/* Right: Floating Card with Wireframe */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>

                            <h4 className="text-2xl font-display text-white mb-6">Our Core Disciplines</h4>

                            <ul className="space-y-4">
                                {['Architecture', 'Urban Planning', 'Interior Design', 'Project Management'].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-4 text-white/80 group/item">
                                        <span className="w-8 h-[1px] bg-white/20 group-hover/item:bg-accent-gold group-hover/item:w-12 transition-all duration-300"></span>
                                        <span className="font-sans font-light tracking-wider uppercase text-sm group-hover/item:text-accent-gold transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Animated Wireframe SVG Placeholder */}
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-20 animate-spin-slow">
                                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-white w-full h-full">
                                    <circle cx="50" cy="50" r="45" strokeWidth="0.5" strokeDasharray="4 4" />
                                    <rect x="25" y="25" width="50" height="50" strokeWidth="0.5" transform="rotate(45 50 50)" />
                                    <rect x="25" y="25" width="50" height="50" strokeWidth="0.5" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
