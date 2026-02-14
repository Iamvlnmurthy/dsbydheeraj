import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'HOME', href: '#home' },
        { name: 'PORTFOLIO', href: '#portfolio' },
        { name: 'ABOUT', href: '#about' },
        { name: 'SERVICES', href: '#services' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-void/85 backdrop-blur-md border-b border-white/5 shadow-lg' : 'py-6 bg-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="hidden md:flex flex-col items-center group">
                    <span className="text-[10px] font-heading font-light tracking-[0.3em] text-white/80 uppercase group-hover:text-white transition-colors duration-300">
                        Design Studio By
                    </span>
                    <span className="text-lg font-heading font-thin tracking-[0.15em] text-accent-gold uppercase group-hover:text-white transition-colors duration-300">
                        Dheeraj Dasyam
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-12">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-xs font-heading font-medium tracking-[0.2em] text-white/80 hover:text-accent-gold transition-colors relative group">
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Nav Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 w-full bg-void/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
                    >
                        <div className="p-8 flex flex-col space-y-6">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl font-display tracking-widest text-white hover:text-accent-gold"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
