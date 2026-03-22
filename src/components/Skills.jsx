import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';

const skills = [
  { name: 'HTML', icon: FaHtml5, color: '#E34F26', level: 90 },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6', level: 85 },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 80 },
  { name: 'React JS', icon: FaReact, color: '#61DAFB', level: 75 },
  { name: 'Python', icon: FaPython, color: '#3776AB', level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 w-full px-6 flex justify-center relative z-10 bg-black/30">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
            My Skills
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-primary-purple to-primary-blue rounded-full"></div>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Technologies I've learned and applied in various projects. Always eager to add new tools to my stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group cursor-pointer relative overflow-hidden"
              >
                {/* Glow behind icon */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                  style={{ backgroundColor: skill.color }}
                ></div>
                
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 + index * 0.2, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <Icon size={64} style={{ color: skill.color }} className="drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_20px_white] transition-all" />
                </motion.div>
                <h3 className="font-bold text-gray-200 tracking-wide z-10">{skill.name}</h3>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Bars */}
        <div className="glass p-10 rounded-3xl w-full max-w-3xl mx-auto shadow-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Proficiency Level</h3>
          <div className="flex flex-col gap-6">
            {skills.map((skill, index) => (
              <div key={`bar-${skill.name}`} className="w-full">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-300">{skill.name}</span>
                  <span className="font-mono text-primary-blue">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, var(--color-primary-purple), ${skill.color})`
                    }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
