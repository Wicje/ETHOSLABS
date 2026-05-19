'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function AudienceSection() {
  return (
    <section className="relative min-h-[80vh] bg-brand-red-dark flex flex-col items-center justify-center py-20 px-8 overflow-hidden border-b border-white/10">
      {/* Corner Brackets */}
      <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-white/20" />
      <div className="absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2 border-white/20" />
      <div className="absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-white/20" />
      <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-white/20" />

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 items-center z-10">
        {/* Left Text */}
        <div className="space-y-4 md:text-right">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[4rem] md:text-[5vw] font-display font-bold uppercase leading-[0.8] tracking-tighter"
          >
            STRATEGY
            <span className="block text-[10px] tracking-[0.5em] mt-2 opacity-40">.... .... .... ....</span>
          </motion.h2>
          <p className="text-sm md:text-base leading-relaxed text-white md:ml-auto">
            We don&apos;t just build websites; we engineer digital destinations. Our strategy focuses on technical excellence coupled with aggressive growth metrics.
          </p>
        </div>

        {/* Center Image with Circle Overlay */}
        <div className="relative flex justify-center items-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-square max-w-[400px]"
          >
            {/* Crosshair Overlay */}
            <div className="absolute inset-0 border border-white/20 z-10" />
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 z-10" />
            <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/20 z-10" />
            
            {/* The Image Circle */}
            <div className="relative w-full h-full overflow-hidden rounded-full border-2 border-brand-red-light p-2">
               <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                    src="https://picsum.photos/seed/tech-core/800/800?grayscale"
                    alt="Process Focus"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
               </div>
            </div>
          </motion.div>
        </div>

        {/* Right Text */}
        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[4rem] md:text-[5vw] font-display font-bold uppercase leading-[0.8] tracking-tighter"
          >
            EXECUTION
            <span className="block text-[10px] tracking-[0.5em] mt-2 opacity-40">.... .... .... ....</span>
          </motion.h2>
          <p className="text-sm md:text-base leading-relaxed text-white">
             From prototype to production, our execution is ruthless. We leverage Next.js, WebGL, and custom API layers to deliver a product that is ahead of the curve.
          </p>
        </div>
      </div>
    </section>
  );
}
