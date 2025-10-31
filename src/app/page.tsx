import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Skills from '@/components/home/Skills';
import Projects from '@/components/home/Projects';

import Certifications from '@/components/home/Certifications';
import PortfolioInsights from '@/components/home/PortfolioInsights';
import Contact from '@/components/home/Contact';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Vivek Kumar - Business Analytics Portfolio',
  description: 'MBA Business Analytics student portfolio showcasing data-driven insights and analytical capabilities',
  keywords: ['Business Analytics', 'Data Analysis', 'Business Intelligence', 'MBA', 'Portfolio'],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <PortfolioInsights />
      <Contact />
      <Footer />
    </main>
  );
}