
import { motion } from 'framer-motion';

const testimonials = [
    { name: "Rajesh Kumar", role: "CEO, Tech Corp", quote: "They didn't just design a building; they crafted an experience. Truly visionary." },
    { name: "Priya Reddy", role: "Villa Owner", quote: "Living in a space designed by Dheeraj feels like living in art. Every corner tells a story." },
    { name: "Amit Shah", role: "Developer", quote: "Professional, creative, and incredibly detailed. The best team we've worked with." },
    { name: "Sneha Gupta", role: "Restaurant Owner", quote: "Our customers love the ambiance. It defies gravity and expectations." },
    { name: "Vikram Rao", role: "Homeowner", quote: "The attention to light and space is unparalleled. A masterpiece." },
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 overflow-hidden relative border-y border-white/5">
            <div className="absolute inset-0 bg-accent-gold/5 blur-[100px]"></div>

            <div className="container mx-auto px-6 mb-12 text-center relative z-10">
                <h2 className="text-sm font-mono text-accent-gold tracking-[0.3em]">TESTIMONIALS</h2>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    animate={{ x: "-50%" }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex space-x-8 whitespace-nowrap px-4"
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <div key={i} className="glass-card p-8 w-[400px] shrink-0 whitespace-normal hover:border-accent-gold/30 transition-colors">
                            <p className="text-white/80 font-display italic text-lg mb-6">"{t.quote}"</p>
                            <div>
                                <h5 className="text-white font-sans text-sm tracking-wide">{t.name}</h5>
                                <p className="text-white/40 text-xs font-mono">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
