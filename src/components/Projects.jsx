import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Skin Cancer Detection System',
    description: 'Major project. An AI-powered system designed to detect and classify skin cancer from dermatoscopic images with high accuracy.',
    tech: ['Python', 'TensorFlow', 'React JS', 'Tailwind CSS'],
    github: 'added_soon',
    demo: 'added_soon',
    highlight: true,
  },
  {
    title: 'Spam Email Detection System',
    description: 'A machine learning based system to identify and filter out spam or fraudulent emails to protect users.',
    tech: ['Python', 'Scikit-Learn', 'Flask'],
    github: 'https://github.com/prdip01/spamEmailDec.Project.0.1.5',
    demo: '#',
  },
  {
    title: 'SSC Tracker Web App',
    description: 'A productivity application that helps users track their daily habits and monitor their monthly progress with graphical insights.',
    tech: ['React JS', 'Tailwind CSS', 'Chart.js'],
    github: 'https://github.com/prdip01/ssctracker',
    demo: '#',
  },
  {
    title: 'E-Invitation Card Generator',
    description: 'A web platform to create, customize, and share digital invitation cards for various events and occasions seamlessly.',
    tech: ['React JS', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/prdip01/wedding',
    demo: '#',
  },
  {
    title: 'Tic Tac Toe Game',
    description: 'A classic interactive Tic Tac Toe game featuring a modern UI and smooth animations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/prdip01/Game.01',
    demo: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 w-full px-6 flex justify-center relative z-10">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
            Featured Projects
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full"></div>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my major and minor works. Spanning AI systems to practical everyday web applications.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`glass rounded-2xl p-6 flex flex-col h-full group relative overflow-hidden transition-all duration-300 ${project.highlight ? 'md:col-span-2 lg:col-span-2 bg-primary-blue/5 border-primary-blue/30 glow-box-blue' : 'hover:glow-box-purple'}`}
            >
              {/* Highlight Glow Effect */}
              {project.highlight && (
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-blue/20 rounded-full blur-3xl group-hover:bg-primary-blue/30 transition-all duration-500"></div>
              )}
              {!project.highlight && (
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-purple/10 rounded-full blur-2xl group-hover:bg-primary-purple/20 transition-all duration-500"></div>
              )}

              <div className="relative z-10 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-2xl font-bold ${project.highlight ? 'text-primary-blue' : 'text-white'}`}>
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.github !== 'added_soon' ? (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-transform">
                        <Github size={22} />
                      </a>
                    ) : (
                      <Github size={22} className="text-gray-600 cursor-not-allowed" />
                    )}
                    {project.demo !== '#' && project.demo !== 'added_soon' && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary-blue hover:scale-110 transition-transform">
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-white/5 text-xs text-primary-purple border border-primary-purple/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 flex gap-4">
                  {project.github === 'added_soon' ? (
                    <span className="flex-1 text-center py-2 px-4 rounded-lg bg-white/5 text-gray-500 font-medium text-sm border border-white/5 cursor-not-allowed">
                      Added Soon
                    </span>
                  ) : (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 text-center py-2 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors text-sm border border-white/10 hover:border-white/30">
                      Source Code
                    </a>
                  )}

                  {project.highlight && (
                    project.demo === 'added_soon' ? (
                      <span className="flex-1 text-center py-2 px-4 rounded-lg bg-primary-blue/10 text-primary-blue/50 font-bold text-sm border border-primary-blue/20 cursor-not-allowed">
                        Added Soon
                      </span>
                    ) : (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1 text-center py-2 px-4 rounded-lg bg-gradient-to-r from-primary-blue/80 to-primary-blue hover:from-primary-blue hover:to-primary-blue shadow-[0_0_15px_rgba(0,240,255,0.3)] text-bg-dark font-bold transition-all text-sm">
                        Live Demo
                      </a>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
