'use client';

import { motion } from 'framer-motion';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
  link?: string;
}

interface Achievement {
  title: string;
  description: string;
}

const certifications: Certification[] = [
  {
    title: 'Data Analytics',
    issuer: 'LinkedIn Learning',
    date: 'October 2025',
    credential: '2c925f4ffd8adf0013a143f68fb2adc6e519c56932943a6c694a0c7a4bb163f7',
    link: 'https://www.linkedin.com/learning/certificates/2c925f4ffd8adf0013a143f68fb2adc6e519c56932943a6c694a0c7a4bb163f7',
  },
  {
    title: 'Data Analytics Program',
    issuer: 'PW Skills',
    date: 'September 2025',
    credential: '26069455-9758-4533-a5c4-9288269c8014',
    link: 'https://pwskills.com/learn/certificate/26069455-9758-4533-a5c4-9288269c8014/?isCareerPath=true',
  },
  {
    title: 'Copilot for Excel',
    issuer: 'PW Skills',
    date: 'October 2025',
    credential: '3e5f8283-f15f-4023-bc25-e3bd776f9c9b',
    link: 'https://pwskills.com/learn/certificate/3e5f8283-f15f-4023-bc25-e3bd776f9c9b/',
  },
  {
    title: 'Digital Marketing Certified',
    issuer: 'HubSpot Academy',
    date: 'October 2025',
    credential: 'af4e8157ee444c4ab4f6fe12a410ab77',
    link: 'https://app-na2.hubspot.com/academy/achievements/nydggcwf/en/1/vivek-kumar/digital-marketing',
  },
  {
    title: 'Foundations of Analytics',
    issuer: 'Great Learning',
    date: 'August 2025',
    credential: 'WFIBITVO',
    link: 'https://www.mygreatlearning.com/certificate/WFIBITVO',
  },
  {
    title: 'Data Science & Analytics',
    issuer: 'HP Life',
    date: 'January 2025',
    credential: '9978dca2-fb67-4169-bb0e-4a369ca3e6f2',
  },
  {
    title: 'Master Data Management for Beginners',
    issuer: 'TCS iON',
    date: 'January 2025',
    credential: '71279-27690390-1016',
  },
];

const achievements: Achievement[] = [
  {
    title: 'Perfect Score in Data Science',
    description: 'Achieved 100/100 in statistical analysis, exploratory data analysis (EDA), and Python programming.',
  },
  {
    title: 'Commerce Excellence',
    description: 'Secured perfect score (40/40) in E-commerce at Delhi University.',
  },
  {
    title: 'Python Mastery',
    description: 'Consistently performed at the top level in Python bootcamp assessments and projects.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Certifications & Achievements
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Professional Certifications</h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                          {cert.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          {cert.issuer}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {cert.date}
                      </span>
                    </div>
                    <div className="mt-2 space-y-1">
                      {cert.credential && (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Credential ID: {cert.credential}
                        </p>
                      )}
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:underline"
                        >
                          <span>Verify Certificate</span>
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Key Achievements</h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary-500"
                  >
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {achievement.title}
                    </h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {achievement.description}
                    </p>
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