
import { motion } from 'framer-motion';
import { Search, PenTool, Box, FileText, HardHat, CheckCircle } from 'lucide-react';

const steps = [
    { icon: Search, title: "Discovery", description: "Understanding client vision, site analysis, requirements" },
    { icon: PenTool, title: "Concept", description: "Initial sketches, mood boards, design direction" },
    { icon: Box, title: "Design Development", description: "3D modeling, material selection, detailed drawings" },
    { icon: FileText, title: "Documentation", description: "Construction drawings, BOQ, specifications" },
    { icon: HardHat, title: "Execution", description: "Site supervision, project management, quality control" },
    { icon: CheckCircle, title: "Handover", description: "Final walkthrough, documentation, client delight" }
];

export const Process = () => {
    return (
        <section id="process" className="min-h-screen py-20 relative flex items-center justify-center">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm font-mono text-accent-gold mb-4 tracking-[0.3em]">WORKFLOW</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-light text-white">
                        The Orbital <span className="text-white/40">Process</span>
                    </h3>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Connecting Line */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent-gold/30 to-transparent md:-translate-x-1/2"></div>

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className={`flex flex-col md:flex-row items-center cursor-none group ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="md:w-1/2 w-full pl-12 md:pl-0 md:px-12 mb-4 md:mb-0 text-left md:text-right">
                                        <div className={`${isEven ? 'md:text-left' : 'md:text-right'}`}>
                                            <h4 className="text-2xl font-display text-white mb-2">{step.title}</h4>
                                            <p className="text-white/50 font-sans font-light text-sm">{step.description}</p>
                                        </div>
                                    </div>

                                    <div className="relative flex items-center justify-center w-10 h-10 shrink-0 z-10">
                                        <div className="absolute inset-0 bg-void border border-accent-gold rounded-full group-hover:bg-accent-gold transition-colors duration-500"></div>
                                        <Icon size={16} className="relative text-accent-gold group-hover:text-void transition-colors duration-500" />
                                        {/* Halo effect */}
                                        <div className="absolute inset-0 rounded-full border border-accent-gold/20 scale-150 animate-pulse"></div>
                                    </div>

                                    <div className="md:w-1/2 w-full hidden md:block"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
