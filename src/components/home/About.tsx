'use client';

import { motion } from 'framer-motion';

interface Education {
  institution: string;
  degree: string;
  duration: string;
  score: string;
}

const education: Education[] = [
  {
    institution: 'UPES Dehradun',
    degree: 'MBA (Business Analytics)',
    duration: '2025-27',
    score: 'In Progress',
  },
  {
    institution: 'Delhi University',
    degree: 'B.A.',
    duration: '2021-24',
    score: '7.15 CGPA',
  },
  {
    institution: 'Central Board of Secondary Education',
    degree: 'Senior Secondary (Class XII)',
    duration: '2021',
    score: '91.6%',
  },
  {
    institution: 'Central Board of Secondary Education',
    degree: 'Secondary (Class X)',
    duration: '2019',
    score: '93.6%',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m an MBA candidate specializing in Business Analytics at UPES Dehradun, 
              passionate about transforming business problems into data-driven insights. 
              Skilled in Excel, Power BI, Python, and SQL, I apply analytics to drive 
              marketing, operational, and financial decisions. I&apos;ve developed multi-domain 
              projects in consumer behavior, market segmentation, HR analytics, and 
              financial performance.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8">Education Timeline</h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>

              {/* Timeline entries */}
              <div className="space-y-12 relative">
                {education.map((edu, index) => (
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

                    {/* Year - align beside the timeline marker (no absolute positioning) */}
                    <div className={`${index % 2 === 1 ? 'md:col-start-2 md:flex md:justify-start md:pl-6' : 'md:col-start-1 md:flex md:justify-end md:pr-6'}`}>
                      <span className="text-lg font-semibold text-primary-600 dark:text-primary-400 whitespace-nowrap">
                        {edu.duration}
                      </span>
                    </div>

                    {/* Content - alternate columns so labels and cards don't overlap */}
                    <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-2 md:row-start-1'}>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                        <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          {edu.institution}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mt-2 font-medium">
                          Score: {edu.score}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}