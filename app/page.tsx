'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import ProjectCarousel from '@/components/ProjectCarousel';
import AudienceSection from '@/components/AudienceSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen selection:bg-brand-red selection:text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red-light origin-left z-[110]"
        style={{ scaleX }}
      />

      <Hero />
      <FeatureGrid />
      <ProjectCarousel />
      <AudienceSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
