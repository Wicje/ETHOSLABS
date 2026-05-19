'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] grid grid-cols-1 md:grid-cols-2 bg-brand-red-dark overflow-hidden border-b border-white/10">
      {/* Left side: Large Tech Portrait/Abstract */}
      <div className="relative h-[60vh] md:h-auto overflow-hidden">
        <Image
          src="https://picsum.photos/seed/tech-workspace/1200/1600?grayscale"
          alt="Engineering Backdrop"
          fill
          className="object-cover opacity-80"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-red-dark/60" />
      </div>

      {/* Right side: Typography */}
      <div className="relative flex flex-col justify-center p-8 md:p-16 space-y-8">
        <div className="flex justify-between items-start text-xs uppercase tracking-widest font-mono text-white/80 mb-8 border-b border-white/20 pb-4">
          <div>
            Specialization:<br />
            <span className="text-white font-bold">Full-Stack Lab</span>
          </div>
          <div className="text-right">
            Output:<br />
            <span className="text-white font-bold">High Fidelity</span>
          </div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-bold leading-[0.85] text-[15vw] md:text-[8vw] lg:text-[10vw] uppercase tracking-tighter"
        >
          BUILD.<br />
          ENGINEER.<br />
          SCALE.
        </motion.h1>

        {/* Background Decorative Text/Shape if needed */}
        <div className="absolute bottom-0 right-0 p-4 opacity-5 pointer-events-none">
          <div className="text-[20vw] font-display font-bold leading-none select-none">EL</div>
        </div>
      </div>
    </section>
  );
}
