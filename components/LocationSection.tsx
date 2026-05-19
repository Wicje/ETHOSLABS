'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function LocationSection() {
  return (
    <section className="relative min-h-[90vh] bg-brand-red-dark flex items-center justify-center overflow-hidden border-b border-white/10">
      {/* Background Code/Tech Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/fullstack-tech/1920/1080?grayscale"
          alt="Tech Stack Backdrop"
          fill
          className="object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        {/* Intense Red Wash */}
        <div className="absolute inset-0 bg-brand-red/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-red-dark via-transparent to-brand-red-dark" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col md:flex-row justify-between items-end md:items-center min-h-[60vh]">
        {/* Massive Text Overlay */}
        <div className="flex flex-col">
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold text-[18vw] md:text-[15vw] leading-[0.7] uppercase tracking-tighter"
          >
            DESIGN
          </motion.h2>
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-bold text-[18vw] md:text-[15vw] leading-[0.7] uppercase tracking-tighter ml-[10vw] md:ml-[15vw]"
          >
            SYSTEMS
          </motion.h2>
        </div>

        {/* Small Text Blocks */}
        <div className="flex flex-col lg:flex-row gap-12 mt-12 md:mt-0 font-sans items-start">
          <div className="max-w-[300px] space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white border-b border-brand-red-light pb-2 inline-block">Future Proof Tech</h4>
            <p className="text-sm leading-relaxed text-white/90">
              We leverage modern frameworks and serverless architecture to ensure your product scales without friction. Performance is our baseline.
            </p>
          </div>
          <div className="max-w-[300px] space-y-4 relative">
             {/* Decorative curve accent */}
            <div className="absolute -top-10 -right-10 w-32 h-32 border-t-2 border-r-2 border-brand-red-light rounded-tr-full opacity-30 hidden lg:block" />
            <h4 className="text-sm font-bold uppercase tracking-widest text-white border-b border-brand-red-light pb-2 inline-block">Strategic Growth</h4>
            <p className="text-sm leading-relaxed text-white/90">
              Marketing is integrated into our engineering process. We build with attribution and scalability in mind from the very first line of code.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Architecture Detail */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] aspect-[4/3] z-20 pointer-events-none opacity-50">
        <Image 
          src="https://picsum.photos/seed/abstract-red/800/600"
          alt="Visual Detail"
          width={800}
          height={600}
          className="object-contain"
          style={{ transform: 'rotate(-5deg)' }}
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
}
