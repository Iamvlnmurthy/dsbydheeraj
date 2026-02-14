
import { motion } from 'framer-motion';
import { Layers, Ruler, Armchair, ClipboardList } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, index }: { title: string, description: string, icon: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass-card p-8 relative overflow-hidden group hover:border-accent-gold/30 transition-colors"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="mb-6 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors duration-500">
                <Icon className="text-white/80 group-hover:text-accent-gold transition-colors" size={24} strokeWidth={1.5} />
            </div>

            <h3 className="text-xl font-display text-white mb-4 tracking-wide">{title}</h3>
            <p className="text-white/50 font-sans font-light text-sm leading-relaxed mb-6">
                {description}
            </p>

            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <Icon size={120} />
            </div>
        </motion.div>
    );
};

export const Services = () => {
    const services = [
        {
            title: "Architecture",
            description: "Residential & commercial building design with contemporary and classical approaches, blending form and function.",
            icon: Layers
        },
        {
            title: "Urban Planning",
            description: "Master planning and layout optimization that considers the broader context of community and environment.",
            icon: Ruler
        },
        {
            title: "Interior Design",
            description: "Luxury interior spaces that blend function with art, creating immersive environments for living and working.",
            icon: Armchair
        },
        {
            title: "Project Management",
            description: "End-to-end project oversight from concept to handover, ensuring quality, timeline, and budget adherence.",
            icon: ClipboardList
        }
    ];

    return (
        <section id="services" className="min-h-screen flex items-center justify-center relative py-20 bg-deep-charcoal/30">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-mono text-accent-gold mb-4 tracking-[0.3em]"
                    >
                        OUR EXPERTISE
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-display font-light text-white"
                    >
                        Disciplines in <span className="text-white/40">Zero-G</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
