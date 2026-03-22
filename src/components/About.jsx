import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Quote } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 w-full px-6 flex justify-center relative z-10">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 inline-block relative">
            About Me
            <div className="absolute -bottom-2 left-0 w-2/3 h-1 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left / Info Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 flex flex-col gap-6"
          >
            <div className="glass p-8 rounded-3xl relative overflow-hidden group hover:glow-box-purple transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-purple/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary-purple/30 transition-all"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 text-gray-300">
                  <MapPin className="text-primary-blue" />
                  <span className="font-mono text-lg tracking-wide">Bokaro, Jharkhand</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">Pradeep Kumar</h3>
                <p className="text-primary-purple font-medium mb-6">Computer Science Student</p>
                
                <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent mb-6"></div>
                
                <div className="text-sm text-gray-400">
                  <p className="mb-2"><strong>College:</strong></p>
                  <p>Government Engineering College, Palamu</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right / Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-7"
          >
            <div className="glass p-10 rounded-3xl h-full flex flex-col justify-center relative overlow-hidden">
               <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl -mb-10 -mr-10"></div>
              
              <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">
                My Story
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6 font-light">
                “I am a computer science student who loves history and enjoys creating innovative solutions using technology. With knowledge of full stack development, I build practical day-to-day projects that make people's lives easier.”
              </p>
              
              <div className="flex gap-4 mt-4">
                <div className="px-4 py-2 bg-primary-blue/10 rounded-lg border border-primary-blue/30 text-primary-blue text-sm font-mono">
                  Full Stack
                </div>
                <div className="px-4 py-2 bg-primary-purple/10 rounded-lg border border-primary-purple/30 text-primary-purple text-sm font-mono">
                  Problem Solving
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
