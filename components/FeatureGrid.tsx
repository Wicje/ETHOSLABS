'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const features = [
  {
    title: "Frontend & WebGL",
    description: "We craft high-performance visual experiences using cutting-edge technologies like Three.js, React, and custom GLSL shaders.",
    image: "https://picsum.photos/seed/code-abstract/400/400?blur=1"
  },
  {
    title: "Product Engineering",
    description: "Seamless API integrations and robust system architecture designed for high-availability digital products and marketplaces.",
    image: "https://picsum.photos/seed/server-rack/400/400?blur=1",
    highlight: true
  },
  {
    title: "UX & UX Strategy",
    description: "Digital-first brand identity and high-fidelity UX flows. We turn complex user journeys into intuitive, elegant interfaces.",
    image: "https://picsum.photos/seed/design-system/400/400?blur=1"
  },
  {
    title: "Growth & Marketing",
    description: "Data-driven ads and strategic marketing campaigns. We scale your product from prototype to market leader through targeted reach.",
    image: "https://picsum.photos/seed/chart-growth/400/400?blur=1"
  }
];

export default function FeatureGrid() {
  return (
    <section className="bg-brand-red-dark grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white/10">
      {features.map((feature, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className={`p-8 border-r border-white/10 last:border-r-0 flex flex-col space-y-6 group transition-colors duration-500 ${feature.highlight ? 'bg-brand-red-light' : 'hover:bg-brand-red/40'}`}
        >
          <div className="flex justify-between items-start">
            <h3 className="font-display font-bold text-xl uppercase leading-none max-w-[150px]">
              {feature.title}
            </h3>
            {/* Corner Accent */}
            <div className="w-4 h-4 border-t border-r border-white/40" />
          </div>

          <div className="relative aspect-square w-16 overflow-hidden border border-white/20">
            <Image 
              src={feature.image} 
              alt={feature.title} 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-sm leading-relaxed text-white/90 font-sans">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </section>
  );
}
