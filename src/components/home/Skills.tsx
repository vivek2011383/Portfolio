'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Analytics & BI Tools',
    skills: [
      { name: 'Power BI', proficiency: 90 },
      { name: 'Excel (Advanced)', proficiency: 95 },
      { name: 'MySQL', proficiency: 85 },
      { name: 'SQL Queries', proficiency: 85 },
    ],
  },
  {
    title: 'Programming & Data Handling',
    skills: [
      { name: 'Python', proficiency: 90 },
      { name: 'Pandas', proficiency: 95 },
      { name: 'NumPy', proficiency: 80 },
      { name: 'Matplotlib', proficiency: 90 },
      { name: 'Seaborn', proficiency: 90 },
    ],
  },
  {
    title: 'Statistical Techniques',
    skills: [
      { name: 'Regression Analysis', proficiency: 90 },
      { name: 'Hypothesis Testing', proficiency: 85 },
      { name: 'Predictive Modelling', proficiency: 80 },
      { name: 'Data Preprocessing', proficiency: 90 },
    ],
  },
  {
    title: 'Professional Skills',
    skills: [
      { name: 'Problem Solving', proficiency: 95 },
      { name: 'Data Storytelling', proficiency: 90 },
      { name: 'Communication', proficiency: 85 },
      { name: 'Project Management', proficiency: 85 },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const chartData = {
    labels: skillCategories[activeCategory].skills.map(skill => skill.name),
    datasets: [
      {
        data: skillCategories[activeCategory].skills.map(skill => skill.proficiency),
        backgroundColor: [
          'rgba(14, 165, 233, 0.8)',
          'rgba(56, 189, 248, 0.8)',
          'rgba(125, 211, 252, 0.8)',
          'rgba(186, 230, 253, 0.8)',
          'rgba(224, 242, 254, 0.8)',
        ],
        borderColor: [
          'rgba(14, 165, 233, 1)',
          'rgba(56, 189, 248, 1)',
          'rgba(125, 211, 252, 1)',
          'rgba(186, 230, 253, 1)',
          'rgba(224, 242, 254, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category Selection */}
            <div className="space-y-4">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full p-4 text-left rounded-lg transition-all ${
                    activeCategory === index
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </motion.button>
              ))}
            </div>

            {/* Skills Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="h-[400px]">
                <Doughnut data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>

          {/* Skills List */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="skill-card bg-white dark:bg-gray-800"
              >
                <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-primary-500 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {skill.proficiency}% Proficiency
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}