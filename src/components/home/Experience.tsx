'use client';

import { motion } from 'framer-motion';

interface Experience {
  role: string;
  company: string;
  duration: string;
  type: string;
}

const experiences: Experience[] = [
  {
    role: 'Academic Trainee (Intern)',
    company: 'KPMG India',
    duration: 'June 2026 – July 2026',
    type: 'Internship',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>

            <div className="space-y-12 relative">
              {experiences.map((exp, index) => (
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

                  {/* Duration label */}
                  <div className={`${index % 2 === 1 ? 'md:col-start-2 md:flex md:justify-start md:pl-6' : 'md:col-start-1 md:flex md:justify-end md:pr-6'}`}>
                    <span className="text-lg font-semibold text-primary-600 dark:text-primary-400 whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Card */}
                  <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-2 md:row-start-1'}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                            {exp.role}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mt-1 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <span className="shrink-0 px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                          {exp.type}
                        </span>
                      </div>
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
