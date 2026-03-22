import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb } from 'lucide-react';

const Achievements = () => {
  return (
    <section className="py-20 w-full px-6 flex justify-center relative z-10 bg-black/40 border-y border-white/5">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6 glass p-8 rounded-3xl border border-primary-blue/20 hover:border-primary-blue/50 transition-colors group"
          >
            <div className="w-16 h-16 rounded-full bg-primary-blue/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary-blue/20 transition-all">
              <Code2 className="text-primary-blue w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-blue transition-colors">Full Stack Developer in Training</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Actively learning and mastering full stack development technologies to create comprehensive web solutions from front to back.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-6 glass p-8 rounded-3xl border border-primary-purple/20 hover:border-primary-purple/50 transition-colors group"
          >
            <div className="w-16 h-16 rounded-full bg-primary-purple/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary-purple/20 transition-all">
              <Lightbulb className="text-primary-purple w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-purple transition-colors">Building Real-Life Solutions</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Passionate about identifying real-world problems and building practical applications that make everyday life easier and more efficient.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
