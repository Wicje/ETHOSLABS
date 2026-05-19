'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

export default function Navbar() {
  const [isPinned, setIsPinned] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [time, setTime] = useState('');
  const [copied, setCopied] = useState(false);

  const isOpen = isPinned || isHovered;

  const togglePinned = () => {
    setIsPinned(!isPinned);
  };

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('hello@ethoslabs.io');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-[100] bg-white text-black border-b border-black/5">
      <div className="max-w-[1800px] mx-auto px-6 py-6 md:py-8">
        {/* Main Row */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Logo & Mobile Contact Toggle */}
          <div className="w-full md:col-span-3 flex justify-between items-center">
            <Link href="/" className="text-2xl md:text-3xl font-display font-medium tracking-tighter shrink-0">
              EthosLabs
            </Link>
            
            <div className="flex md:hidden items-center gap-4">
              <button 
                onClick={copyEmail}
                className="text-[11px] font-bold uppercase tracking-widest bg-black text-white px-4 py-2 rounded-full"
              >
                {copied ? 'Copied' : 'Contact'}
              </button>
            </div>
          </div>

          {/* Index Column - Compact on mobile */}
          <div className="grid grid-cols-2 md:block md:col-span-2 gap-4 w-full h-auto">
            <div className="space-y-1">
              <h4 className="font-bold text-[11px] md:text-sm mb-2 opacity-40 md:opacity-100 uppercase tracking-wider md:normal-case md:tracking-normal">Index</h4>
              <div className="text-[13px] text-black/60 flex flex-col space-y-1">
                <span className="cursor-not-allowed">Writing <span className="text-[10px] opacity-40 lowercase">(soon)</span></span>
                <a href="#projects" className="hover:text-black transition-colors">Ethos Tools®</a>
              </div>
            </div>

            <div className="md:hidden space-y-1">
              <h4 className="font-bold text-[11px] opacity-40 uppercase tracking-wider">Connect</h4>
              <div className="text-[13px] text-black/60 flex flex-col space-y-1">
                <a href="#" className="hover:text-black transition-colors">Twitter (X)</a>
              </div>
            </div>
          </div>

          {/* About Column */}
          <div className="md:col-span-4 space-y-4 w-full">
            <h4 className="hidden md:block font-bold text-sm">About EL</h4>
            <p className="text-[13px] text-black/60 leading-relaxed max-w-[340px]">
              EthosLabs is a design engineering studio building products and websites for AI and future-tech companies.
            </p>
            <button 
              onClick={togglePinned}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="text-[12px] md:text-[13px] font-bold flex items-center gap-2 hover:opacity-60 transition-opacity border-b border-black/10 pb-1 md:border-0 md:pb-0"
            >
              {isPinned ? 'Close Studio Details ↑' : 'See Studio Details ↓'}
            </button>
          </div>

          <div className="md:col-span-3 md:text-right hidden md:block">
            <button 
              onClick={copyEmail} 
              className="text-[13px] text-black/40 hover:text-black transition-colors"
            >
              {copied ? 'email copied' : 'hello@ethoslabs.io'}
            </button>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pt-10 md:pt-16 pb-8 border-t border-black/5 mt-8">
                {/* Leadership & Services */}
                <div className="md:col-span-3 grid grid-cols-2 md:block gap-10 md:gap-0 md:space-y-12">
                  <div className="space-y-2">
                    <h5 className="font-bold text-sm">Leadership</h5>
                    <div className="text-[13px] text-black/60">
                      <p className="font-medium text-black">Will Thomson</p>
                      <p>Founder / Design Engineer - <a href="#" className="underline">X</a></p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h5 className="font-bold text-sm">Services</h5>
                    <div className="text-[13px] text-black/60 flex flex-col space-y-1">
                      <span>Frontend Engineering</span>
                      <span>Interaction Design</span>
                      <span>Integration Engineering</span>
                      <span>UX / Flow design</span>
                      <span>Creative Dev (WebGL)</span>
                    </div>
                  </div>
                </div>

                {/* Second mobile column for labels */}
                <div className="md:hidden space-y-4">
                  <h5 className="font-bold text-sm">Labels</h5>
                  <div className="grid grid-cols-2 gap-2 text-[13px] text-black/60">
                    <div className="flex items-center gap-2">
                        <span className="opacity-40">⊕</span> Client
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="opacity-40">⊠</span> Internal
                    </div>
                  </div>
                </div>

                <div className="hidden md:block md:col-span-3 space-y-4">
                   <h5 className="font-bold text-sm">Labels</h5>
                    <div className="text-[13px] text-black/60 flex flex-col space-y-2">
                      <div className="flex items-center gap-2">
                         <span className="opacity-40">⊕</span> Client
                      </div>
                      <div className="flex items-center gap-2">
                         <span className="opacity-40">⊠</span> Internal
                      </div>
                    </div>
                </div>

                {/* Philosophy */}
                <div className="md:col-span-3 space-y-4">
                  <h5 className="font-bold text-sm">Philosophy</h5>
                  <div className="text-[13px] text-black/60 space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-2 rounded-full border border-black/20 mt-1.5" />
                      <span>Care, obsessively</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 rounded-full border border-black/20 mt-1.5" />
                      <span>Build to elevate</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 rounded-full border border-black/20 mt-1.5" />
                      <span>Internal extension</span>
                    </div>
                  </div>
                </div>

                {/* Contact & Location */}
                <div className="md:col-span-3 grid grid-cols-2 md:block gap-10 md:gap-12">
                   <div className="space-y-4">
                    <h5 className="font-bold text-sm">Contact</h5>
                    <div className="text-[13px] text-black/60 flex flex-col space-y-1">
                      <button 
                        onClick={copyEmail} 
                        className="text-left hover:text-black transition-colors"
                      >
                        {copied ? 'copied' : 'hello@ethoslabs.io'}
                      </button>
                      <a href="#">X (Twitter)</a>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h5 className="font-bold text-sm">Location</h5>
                    <div className="text-[13px] text-black/60">
                      <p className="font-mono uppercase tracking-tighter text-black/80">NZT: {time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
