import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {isLoading && <Loading key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative bg-bg-dark text-white min-h-screen selection:bg-primary-purple selection:text-white">
          {/* Dynamic Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-blue to-primary-purple origin-left z-50 rounded-full"
            style={{ scaleX }}
          />
          
          <Navbar />
          
          <main className="flex flex-col items-center justify-center w-full">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
