'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Vivek Kumar
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            Emerging Business Analyst | MBA (Business Analytics) | Data Enthusiast
          </h2>

          <div className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 mb-12">
            <TypeAnimation
              sequence={[
                'Business Analytics',
                2000,
                'Power BI',
                2000,
                'Excel',
                2000,
                'Python',
                2000,
                'SQL',
                2000,
                'Data Storytelling',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://drive.google.com/file/d/1LdQ6qU64dhrjOG6taE4HaTNI4napZ3PF/view?usp=sharing"
              className="button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a href="#projects" className="button-secondary">
              View Projects
            </a>
            <a
              href="https://www.linkedin.com/in/vivekkumar2011383"
              className="button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Particle effect overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900 opacity-50"></div>
      </div>
    </section>
  );
}