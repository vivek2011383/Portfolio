'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            {/* Animated background */}
            <div className="absolute inset-0 gradient-bg opacity-5"></div>

            {/* Content */}
            <div className="relative text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Copyright © {new Date().getFullYear()} Vivek Kumar | Built with ❤️ 
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}