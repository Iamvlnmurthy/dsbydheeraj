
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center relative py-20">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                {/* Info Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center"
                >
                    <h2 className="text-sm font-mono text-accent-gold mb-4 tracking-[0.3em]">CONTACT</h2>
                    <h3 className="text-5xl md:text-7xl font-display font-light text-white mb-8">
                        Let's Build Something <span className="text-white/40 italic">Extraordinary</span>
                    </h3>

                    <div className="space-y-8 mt-8">
                        <div className="flex items-start space-x-4">
                            <MapPin className="text-accent-gold shrink-0 mt-1" size={20} />
                            <div>
                                <h5 className="text-white font-sans text-sm tracking-wide">STUDIO</h5>
                                <p className="text-white/60 font-light mt-1">No. 288, Road No. 78, Jubilee Hills,<br />Hyderabad-33</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Phone className="text-accent-gold shrink-0 mt-1" size={20} />
                            <div>
                                <h5 className="text-white font-sans text-sm tracking-wide">PHONE</h5>
                                <p className="text-white/60 font-light mt-1">8297135666</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Mail className="text-accent-gold shrink-0 mt-1" size={20} />
                            <div>
                                <h5 className="text-white font-sans text-sm tracking-wide">EMAIL</h5>
                                <p className="text-white/60 font-light mt-1">dasyamarchitects@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-6 mt-12">
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-accent-gold hover:border-accent-gold transition-all duration-300">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-accent-gold hover:border-accent-gold transition-all duration-300">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-accent-gold hover:border-accent-gold transition-all duration-300">
                            <Facebook size={18} />
                        </a>
                    </div>
                </motion.div>

                {/* Form Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <form className="glass-card p-10 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs text-white/40 tracking-widest font-mono">NAME</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-none p-3 text-white focus:border-accent-gold/50 focus:outline-none transition-colors font-light" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-white/40 tracking-widest font-mono">PHONE</label>
                                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-none p-3 text-white focus:border-accent-gold/50 focus:outline-none transition-colors font-light" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-white/40 tracking-widest font-mono">EMAIL</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-none p-3 text-white focus:border-accent-gold/50 focus:outline-none transition-colors font-light" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-white/40 tracking-widest font-mono">PROJECT TYPE</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-none p-3 text-white/60 focus:border-accent-gold/50 focus:outline-none transition-colors font-light">
                                <option className="bg-deep-charcoal">Residential</option>
                                <option className="bg-deep-charcoal">Commercial</option>
                                <option className="bg-deep-charcoal">Interior Design</option>
                                <option className="bg-deep-charcoal">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-white/40 tracking-widest font-mono">MESSAGE</label>
                            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-none p-3 text-white focus:border-accent-gold/50 focus:outline-none transition-colors font-light resize-none"></textarea>
                        </div>

                        <button type="submit" className="w-full py-4 bg-accent-gold/10 border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-void transition-all duration-300 tracking-[0.2em] text-sm uppercase font-bold mt-4">
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
