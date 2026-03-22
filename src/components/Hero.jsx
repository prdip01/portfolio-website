import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from './ParticlesBackground';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <ParticlesBackground />
      
      <div className="z-10 text-center px-4 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-primary-blue mb-4 font-mono tracking-widest uppercase text-sm md:text-base glow-text-blue"
        >
          Welcome to my universe
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white"
        >
          Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-purple glow-text-purple">Pradeep Kumar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl md:text-3xl text-gray-300 mb-10 h-16"
        >
          <TypeAnimation
            sequence={[
              'Computer Science Student',
              2000,
              'Full Stack Learner',
              2000,
              'Tech Enthusiast',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-light"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-blue to-primary-purple text-white font-bold relative group overflow-hidden transition-all glow-box-blue hover:scale-105"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-primary-purple text-white font-bold hover:bg-primary-purple/10 transition-all glow-box-purple hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-sm font-mono text-gray-400 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="text-primary-blue" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
