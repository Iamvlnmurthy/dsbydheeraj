

export const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 bg-void/50 backdrop-blur-sm relative overflow-hidden mt-20">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent"></div>
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/40 text-xs font-mono tracking-wider">
                <p>&copy; 2025 Design Studio by Dheeraj Dasyam. All Rights Reserved.</p>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-accent-gold transition-colors">Privacy</a>
                    <a href="#" className="hover:text-accent-gold transition-colors">Terms</a>
                    <a href="#" className="hover:text-accent-gold transition-colors">Careers</a>
                </div>
            </div>
        </footer>
    );
};
