'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const toolsData = {
  labels: ['Power BI', 'Excel', 'Python', 'SQL', 'Statistical Analysis', 'Data Visualization'],
  datasets: [
    {
      label: 'Hours of Experience',
      data: [80, 200, 150, 100, 50, 250],
      backgroundColor: 'rgba(14, 165, 233, 0.5)',
      borderColor: 'rgba(14, 165, 233, 1)',
      borderWidth: 2,
    },
  ],
};

const projectTimelineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  datasets: [
    {
      label: 'Projects Completed',
      data: [1, 2, 2, 3, 4, 4, 5, 6, 7, 8],
      borderColor: 'rgba(14, 165, 233, 1)',
      backgroundColor: 'rgba(14, 165, 233, 0.1)',
      tension: 0.4,
      fill: true,
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
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function PortfolioInsights() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simulated visitor count - replace with actual analytics
    setVisitorCount(Math.floor(Math.random() * 1000) + 500);
  }, []);

  return (
    <section id="insights" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Portfolio Insights
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tools Usage Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Tools Expertise</h3>
              <div className="h-[400px]">
                <Bar data={toolsData} options={chartOptions} />
              </div>
            </motion.div>

            {/* Project Timeline Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Project Growth Timeline</h3>
              <div className="h-[400px]">
                <Line data={projectTimelineData} options={chartOptions} />
              </div>
            </motion.div>
          </div>

          {/* Visitor Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-4">Portfolio Visitors</h3>
            <p className="text-4xl font-bold text-primary-500">{visitorCount.toLocaleString()}</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Unique Visitors</p>
          </motion.div>

          {/* Resume Analysis Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <button
              onClick={() => alert('Resume analysis feature coming soon!')}
              className="button-primary"
            >
              Analyze My Resume with AI
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}