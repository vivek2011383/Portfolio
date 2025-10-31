'use client';

import { motion } from 'framer-motion';

interface EducationEntry {
  title: string;
  institution: string;
  year: string;
  score?: string;
  description?: string;
}

const educationTimeline: EducationEntry[] = [
  {
    title: 'Secondary Education (Class X)',
    institution: 'Central Board of Secondary Education',
    year: '2019',
    score: '93.6%',
  },
  // More education entries can be added here as they become available
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Education
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>

            {/* Timeline entries */}
            <div className="space-y-12">
              {educationTimeline.map((entry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full -translate-x-1/2 translate-y-1.5"></div>

                  {/* Year - alternating sides on desktop */}
                  <div className={`md:text-right ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <span className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                      {entry.year}
                    </span>
                  </div>

                  {/* Content - alternating sides on desktop */}
                  <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                      <h3 className="text-xl font-semibold mb-2">{entry.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {entry.institution}
                      </p>
                      {entry.score && (
                        <p className="text-gray-600 dark:text-gray-300">
                          Score: {entry.score}
                        </p>
                      )}
                      {entry.description && (
                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                          {entry.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}