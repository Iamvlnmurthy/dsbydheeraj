import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

// Project Data
const projects = [
    {
        id: 1,
        title: "Arvind Children's Hospital",
        category: "Commercial",
        type: "Healthcare",
        image: "/images/ELEVATION-.jpg",
        description: "A modern children's hospital featuring bold vertical fin elements in dark stone against a cream stucco facade. The design creates a rhythmic pattern of light and shadow.",
        style: "Contemporary Minimalist"
    },
    {
        id: 2,
        title: "Luxury Residential Villa",
        category: "Villas",
        type: "Residential",
        image: "/images/5.jpeg",
        description: "An opulent 3-story classical residence featuring neoclassical columns, arched balconies, ornate cornice detailing, and warm ambient LED strip lighting.",
        style: "Neo-Classical"
    },
    {
        id: 3,
        title: "Contemporary Residential Villa",
        category: "Villas",
        type: "Residential",
        image: "/images/ELEVATION-01.jpeg",
        description: "A striking modern villa with asymmetric massing, wooden cladding accents, perforated screen walls creating geometric light patterns.",
        style: "Contemporary Modern"
    },
    {
        id: 4,
        title: "Mr. Vikas Residence",
        category: "Residential",
        type: "Residential",
        image: "/images/5.jpeg",
        description: "A compact yet bold residence featuring corten steel-toned panels, vertical timber louvers, and a dramatic double-height glazed window.",
        style: "Modern Minimalist",
        specs: "200 Sq.yds"
    },
    {
        id: 5,
        title: "Mr. Venkateshwarlu Residence",
        category: "Residential",
        type: "Residential",
        image: "/images/ELEVATION-.jpg",
        description: "A contemporary three-story home with cantilevered concrete volumes, exposed brick accents, large glazed facades, and wooden pergola.",
        style: "Contemporary"
    },
    {
        id: 6,
        title: "Mr. Sudhakar Residence",
        category: "Residential",
        type: "Residential",
        image: "/images/ELEVATION-01.jpeg",
        description: "Striking elevation featuring vertical metal louvers with a cantilevered upper floor, and dramatic concrete textured panels.",
        style: "Modern Industrial"
    },
    {
        id: 7,
        title: "Mr. Ravindhar Rao Farmhouse",
        category: "Villas",
        type: "Farmhouse",
        image: "/images/5.jpeg",
        description: "A sprawling farmhouse with expansive verandahs, wooden ceiling accents, glass balustrades, and seamless indoor-outdoor living.",
        style: "Contemporary Farmhouse",
        specs: "1 Acre (4937 Sq.yds)"
    },
    {
        id: 8,
        title: "Mr. Raghu Kumar Residence",
        category: "Residential",
        type: "Residential",
        image: "/images/ELEVATION-.jpg",
        description: "A distinctive design featuring terracotta jali screens, a circular porthole window, exposed brick facade, and traditional clay tile portico.",
        style: "Contemporary Vernacular",
        specs: "993 Sq.yds"
    },
    {
        id: 9,
        title: "Mr. Devendhar Reddy Residence",
        category: "Residential",
        type: "Residential",
        image: "/images/ELEVATION-01.jpeg",
        description: "A sleek three-story home with full-height glazing, vertical green walls, cantilevered balconies with planter boxes.",
        style: "Modern Tropical",
        specs: "993 Sq.yds"
    },
    {
        id: 10,
        title: "Anuraag 99",
        category: "Apartments",
        type: "Apartments",
        image: "/images/5.jpeg",
        description: "A gated community of 2 & 3 BHK luxury apartments across two blocks, featuring swimming pool and landscaped gardens.",
        style: "Contemporary Residential Complex",
        specs: "1160 - 1535 Sft"
    },
    {
        id: 11,
        title: "Shubhada County",
        category: "Villas",
        type: "Township",
        image: "/images/ELEVATION-.jpg",
        description: "A premium 8.04-acre villa township with 35 independent villas, two clubhouses, and 20+ amenities.",
        style: "Contemporary Minimal Villas",
        specs: "3,655 - 3,962 Sft"
    }
];

const categories = ["ALL", "RESIDENTIAL", "COMMERCIAL", "VILLAS", "HOSPITALS", "APARTMENTS"];

export const Portfolio = () => {
    const [filter, setFilter] = useState("ALL");
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const filteredProjects = projects.filter(p =>
        filter === "ALL"
            ? true
            : filter === "HOSPITALS" && p.type === "Healthcare" // mapping tweaks
                ? true
                : p.category.toUpperCase() === filter
    );

    return (
        <section id="portfolio" className="min-h-screen py-20 relative">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-mono text-accent-gold mb-4 tracking-[0.3em]"
                    >
                        SELECTED WORKS
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-display font-light text-white mb-10"
                    >
                        Gravity-Defying <span className="text-white/40">Creations</span>
                    </motion.h3>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-4 md:gap-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`text-sm tracking-widest transition-colors duration-300 ${filter === cat ? 'text-accent-gold border-b border-accent-gold pb-1' : 'text-white/40 hover:text-white pb-1 border-b border-transparent'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative cursor-none" // custom cursor target
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-surface-dark relative glass-card p-2 border-transparent hover:border-accent-gold/20 transition-colors">
                                    <div className="w-full h-full overflow-hidden rounded-md relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-void/20 group-hover:bg-void/0 transition-colors duration-500"></div>

                                        {/* Overlay on Hover */}
                                        <div className="absolute inset-0 bg-void/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                            <span className="text-accent-gold text-xs tracking-widest mb-2 font-mono">{project.category}</span>
                                            <h4 className="text-2xl font-display text-white mb-4">{project.title}</h4>
                                            <div className="flex items-center text-white/60 text-xs tracking-wider">
                                                VIEW PROJECT <ArrowUpRight className="ml-2 w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-void/90 backdrop-blur-xl"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-surface-dark/50 border border-white/10 rounded-2xl w-full max-w-5xl h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white hover:text-accent-gold border border-white/10"
                            >
                                <X size={24} />
                            </button>

                            {/* Image Side */}
                            <div className="w-full md:w-1/2 h-40 md:h-full relative">
                                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                                <span className="text-accent-gold text-xs tracking-[0.2em] font-mono">{selectedProject.type.toUpperCase()}</span>
                                <h2 className="text-4xl md:text-5xl font-display text-white mt-4 mb-8 leading-tight">{selectedProject.title}</h2>

                                <div className="space-y-8">
                                    <div>
                                        <h5 className="text-white/40 text-xs uppercase tracking-wider mb-2">Description</h5>
                                        <p className="text-white/80 font-sans font-light leading-relaxed">
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <h5 className="text-white/40 text-xs uppercase tracking-wider mb-2">Style</h5>
                                            <p className="text-white font-display text-lg">{selectedProject.style}</p>
                                        </div>
                                        {selectedProject.specs && (
                                            <div>
                                                <h5 className="text-white/40 text-xs uppercase tracking-wider mb-2">Scale</h5>
                                                <p className="text-white font-display text-lg">{selectedProject.specs}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-white/10">
                                    <button className="w-full py-4 border border-accent-gold/30 text-accent-gold hover:bg-accent-gold hover:text-void transition-colors tracking-widest text-sm uppercase">
                                        Enquire About This Project
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
