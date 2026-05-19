'use client';

import { motion, useAnimationFrame, useMotionValue, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: "Project Zero",
    image: "https://picsum.photos/seed/nollamd/600/800",
    video: "https://assets.mixkit.co/videos/preview/mixkit-tech-digital-data-background-27083-large.mp4",
    link: "https://ethoslabs.io",
    tags: ["Mobile App", "AI Integration"]
  },
  {
    id: 2,
    title: "Brand Identity",
    image: "https://picsum.photos/seed/impulse/600/800",
    video: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-4444-large.mp4",
    link: "https://ethoslabs.io",
    tags: ["WebGL", "Identity"]
  },
  {
    id: 3,
    title: "System Dashboard",
    image: "https://picsum.photos/seed/ballpark/600/800",
    video: "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-lines-background-27419-large.mp4",
    link: "https://ethoslabs.io",
    tags: ["SaaS", "Engineering"]
  },
  {
    id: 4,
    title: "Neural Sphere",
    image: "https://picsum.photos/seed/neural/600/800",
    link: "https://ethoslabs.io",
    tags: ["Generative", "Identity"]
  },
  {
    id: 5,
    title: "HCP Systems",
    image: "https://picsum.photos/seed/hcp/600/800",
    link: "https://ethoslabs.io",
    tags: ["Infrastructure", "Ads"]
  }
];

// Duplicate for infinite effect
const allProjects = [...projects, ...projects, ...projects];

export default function ProjectCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth / 3);
    }
  }, []);

  useAnimationFrame((t, delta) => {
    if (isPaused || isDragging || !containerWidth) return;
    
    let currentX = x.get();
    currentX -= 0.5; // Speed adjustment

    if (currentX <= -containerWidth) {
      currentX = 0;
    }
    x.set(currentX);
  });

  return (
    <section id="projects" className="bg-white py-24 overflow-hidden select-none border-b border-black/5">
      <div className="px-8 mb-12 flex justify-between items-end">
        <h2 className="font-display font-bold text-4xl md:text-6xl text-brand-red-dark uppercase tracking-tighter">
          Selected<br />Works
        </h2>
        <div className="text-[10px] uppercase tracking-[0.3em] text-brand-red-dark/40 font-mono">
          [ 01 — 05 ]
        </div>
      </div>

      <motion.div
        ref={containerRef}
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -containerWidth * 2, right: 0 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-4 px-4 cursor-grab active:cursor-grabbing"
      >
        {allProjects.map((project, idx) => (
          <div key={`${project.id}-${idx}`} className="flex-shrink-0 w-[85vw] md:w-[450px] space-y-4">
            {/* Label Row */}
            <div className="flex items-center gap-3 px-2">
              <div className="w-2.5 h-2.5 rounded-full border border-black/20" />
              <span className="font-mono text-[10px] md:text-xs tracking-[0.1em] text-black/60 uppercase">
                {project.title}
              </span>
            </div>

            {/* Content Card */}
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-neutral-100 group border border-black/5"
            >
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 brightness-90 group-hover:brightness-100"
                />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              )}
              
              {/* Overlay Icon */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
                  <path d="M12 3v18" />
                  <path d="M3 12h18" />
                  <path d="M12 3c2.5 0 4.5 4 4.5 9s-2 9-4.5 9S7.5 17 7.5 12 9.5 3 12 3Z" />
                </svg>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-red-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center space-y-6">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-brand-red-dark font-bold text-xs uppercase tracking-widest shadow-2xl"
                >
                  Visit
                </motion.div>
                
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] border border-white/40 px-3 py-1.5 rounded-full text-white uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </motion.div>

      {/* Manual Drag Hint */}
      <div className="mt-12 flex justify-center">
         <div className="flex items-center gap-4 text-[10px] tracking-[0.4em] text-brand-red-dark/20 uppercase font-mono">
           <span>Drag to explore</span>
           <div className="h-[1px] w-20 bg-brand-red-dark/10" />
         </div>
      </div>
    </section>
  );
}
