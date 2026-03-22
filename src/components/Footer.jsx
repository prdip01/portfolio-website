import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-black/50 relative z-10 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-8"
        >
          <a href="#home" className="text-3xl font-bold tracking-tighter glow-text-blue inline-block mb-2">
            Pradeep<span className="text-primary-purple glow-text-purple">.</span>
          </a>
        </motion.div>

        <div className="flex gap-6 mb-12">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-white text-sm uppercase tracking-wider transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 animate-pulse" /> by <span className="text-white font-medium">Pradeep Kumar</span>
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Scroll to top button */}
        <button 
          onClick={scrollToTop}
          className="absolute -top-6 right-10 md:right-20 w-12 h-12 rounded-full bg-gradient-to-t from-primary-purple to-primary-blue flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-110 hover:-translate-y-2 transition-all duration-300"
        >
          <ArrowUp size={24} />
        </button>

      </div>
    </footer>
  );
};

export default Footer;
