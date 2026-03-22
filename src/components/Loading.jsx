import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] bg-bg-dark flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-24 h-24 rounded-full border-t-2 border-r-2 border-primary-blue"
        ></motion.div>
        
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="absolute inset-2 rounded-full border-b-2 border-l-2 border-primary-purple"
        ></motion.div>

        <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-xl font-bold tracking-tighter glow-text-blue block">
                P<span className="text-primary-purple glow-text-purple">.</span>
             </span>
        </div>
      </div>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-purple font-mono uppercase tracking-widest text-sm"
      >
        Loading Universe...
      </motion.p>
    </motion.div>
  );
};

export default Loading;
