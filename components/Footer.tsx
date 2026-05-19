'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-brand-red selection:bg-brand-red selection:text-white pt-32 pb-12 overflow-hidden border-t border-black/5 font-sans">
      <div className="max-w-[1800px] mx-auto px-6">
        {/* Top Section from previous reference */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-32">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-sm bg-brand-red flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white rotate-45" />
            </div>
            <span className="text-2xl font-display font-medium tracking-tighter text-black">EthosLabs</span>
          </div>
          
          <button className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-[12px] font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
            Book a meeting
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowRight size={14} />
            </div>
          </button>
        </div>

        {/* New Social & Newsletter Section (from user image) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24 items-start">
          {/* Stay up to date */}
          <div className="md:col-span-3">
            <h2 className="text-5xl md:text-6xl font-bold leading-[0.9] tracking-tight">
              Stay up to date
            </h2>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 flex flex-col space-y-1">
            {['Instagram', 'Linkedin', 'Facebook', 'YouTube', 'X'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-5xl md:text-6xl font-bold tracking-tight hover:opacity-50 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 md:col-start-9 space-y-8">
            <h3 className="text-5xl md:text-6xl font-bold tracking-tight">
              Newsletter
            </h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="010101@xyz.com"
                className="flex-grow bg-transparent border border-brand-red rounded-md px-6 py-4 text-brand-red placeholder-brand-red/40 focus:outline-none focus:ring-1 focus:ring-brand-red"
              />
              <button className="bg-brand-red text-white px-8 py-4 rounded-md font-bold text-sm transition-colors hover:bg-brand-red-dark">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Massive Brand Name (Maximized size) */}
        <div className="relative mb-8 -mx-4">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[21.5vw] font-display font-bold leading-none tracking-[-0.05em] uppercase select-none pointer-events-none text-black text-center"
          >
            EthosLabs
          </motion.h1>
        </div>

        {/* Fine Print Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 gap-4">
          <div className="text-[10px] uppercase tracking-[0.3em] text-black/30 font-bold">
            © {currentYear} EthosLabs Studio / Full Stack Design Engineering
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] text-black/30 font-bold">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <a href="#" className="hover:text-black transition-colors">Site Map</a>
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-black/30 font-bold">
            Built by EL / {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} GMT
          </div>
        </div>
      </div>
    </footer>
  );
}
