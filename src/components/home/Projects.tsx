'use client';

import { useState } from 'react';
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tools: string[];
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Dabur India Financial Analysis',
    description: 'Analyzed 47% asset growth and 10% peak D/E ratio from FY21-FY25. Created comprehensive Excel dashboard for financial metrics visualization.',
    category: 'Financial Analytics',
    tools: ['Generative AI', 'Excel', 'Financial Modeling'],
  image: '/projects/dabur-project.png',
  link: 'https://github.com/vivek2011383/Dabur_Financial_analysis-FY21-FY25-',
  },
  {
    id: 2,
    title: 'Digital Divide & Consumer Behavior',
    description: 'Conducted regression analysis and hypothesis testing on 45K records of CMS data to analyze online consumer behavior patterns.',
    category: 'Market Research',
    tools: ['Python', 'Pandas','Scikit-learn', 'Statistics', 'Excel'],
  image: '/projects/digital-divide.png',
  },
  {
    id: 3,
    title: 'Market Segmentation Analysis',
    description: 'Implemented RFM model to classify customers into segments like "Big Spenders" and "Dormant Buyers" for targeted marketing.',
    category: 'Customer Analytics',
    tools: ['Python','Excel' , 'Matplotlib'],
  image: '/projects/market-segmentation.png',
  link: 'https://github.com/vivek2011383/Spreadsheet-Modelling/blob/main/Customer_Segmentation_Analysis_Vivek_590020267.pdf',
  },
  {
    id: 4,
    title: 'Pizza Sales Dashboard',
    description: 'Created interactive SQL & Power BI dashboard analyzing 21.3K orders and ₹817.8K revenue with detailed sales metrics.',
    category: 'Business Intelligence',
    tools: ['SQL', 'Power BI', 'DAX'],
  image: '/projects/pizza-sales.png',
  link: 'https://github.com/vivek2011383/Pizza-Sales-Project',
  },
  {
    id: 5,
    title: 'HR Analytics Dashboard',
    description: 'Developed comprehensive dashboard analyzing 20.6% attrition rate by various demographics and organizational factors.',
    category: 'HR Analytics',
    tools: ['Power BI', 'Excel', 'SQL'],
  image: '/projects/hr-analytics.png',
  link: 'https://www.linkedin.com/posts/vivekkumar2011383_hr-analytics-powerbi-activity-7292856023671869442-IxLR?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADszCWYBAL6xaUvO40eEG3G8MqZmQOIqcn4',
  },
  {
    id: 20,
    title: 'Nimbly Electronics Product Analysis',
    description: 'Product performance analysis using the BCG matrix and recommendations for portfolio optimization.',
    category: 'Market Research',
    tools: ['Excel', 'Power BI','Marketing Concepts'],
    image: '/projects/image6.png',
    link: 'https://github.com/vivek2011383/Nimbly_Electronics_Products_analysis/blob/main/Product%20Performance%20Analysis%20using%20BCG%20Matrix.pdf',
  },
];

const categories = ['All', 'Financial Analytics', 'Market Research', 'Customer Analytics', 'Business Intelligence', 'HR Analytics', 'Dashboards'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allProjects = [...projects, ...extraDashboards];

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Projects
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
          {/* Project Grid */}
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="project-card cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-[200px] w-full">
                    <div className="absolute inset-0 bg-primary-500/10"></div>
                    {/* Project thumbnail (uses public/ files) */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-sm rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selectedProject.description}
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Tools Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-primary inline-block"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
  // Add dashboard images extracted from the provided assets
  const extraDashboards: Project[] = [
    { id: 6, title: 'Dashboard 1', description: 'Dashboard visualization from portfolio assets.', category: 'Dashboards', tools: ['Excel'], image: '/projects/image8.png' },
    { id: 7, title: 'Dashboard 2', description: 'Dashboard visualization from portfolio assets.', category: 'Dashboards', tools: ['Excel'], image: '/projects/image9.png' },
    { id: 8, title: 'Dashboard 3', description: 'Dashboard visualization from portfolio assets.', category: 'Dashboards', tools: ['Excel'], image: '/projects/image10.png' },
    { id: 9, title: 'Dashboard 4', description: 'Dashboard visualization from portfolio assets.', category: 'Dashboards', tools: ['Power BI'], image: '/projects/image11.png' },
    { id: 10, title: 'Dashboard 5', description: 'Dashboard visualization from portfolio assets.', category: 'Dashboards', tools: ['Excel'], image: '/projects/image12.png' },
    { id: 11, title: 'Dashboard 6', description: 'Dashboard visualization from portfolio assets.', category: 'Dashboards', tools: ['Excel'], image: '/projects/image13.png' },
    { id: 12, title: 'Dashboard 7', description: 'Dashboard visualization from portfolio assets.', category: 'Dashboards', tools: ['Excel'], image: '/projects/image14.png' },
    { id: 13, title: 'Dashboard 8', description: 'Dashboard visualization from portfolio assets.', category: 'Dashboards', tools: ['Excel'], image: '/projects/image15.png' },
  ];
