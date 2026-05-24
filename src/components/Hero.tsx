'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, ArrowRight, MessageSquare, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';

export default function Hero() {
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Visual background additions */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[25%] left-[20%] w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse duration-10000" />
        <div className="absolute bottom-[20%] right-[15%] w-[35vw] h-[35vw] max-w-[400px] rounded-full bg-secondary/15 blur-[120px] animate-pulse duration-8000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Intro Text Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center"
        >
          {/* Greeting Badge */}
          <motion.div 
            variants={itemVariants as any}
            className="inline-flex self-center lg:self-start items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            Available for full-time & contract roles
          </motion.div>

          {/* Main Title Heading */}
          <motion.h1 
            variants={itemVariants as any}
            className="font-outfit text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          >
            <span className="block text-gray-400 font-light text-2xl sm:text-3xl lg:text-4xl mb-2">Hello, I'm</span>
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent block mb-2">
              Fady Kaiser
            </span>
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-glow text-3xl sm:text-4xl md:text-5xl lg:text-6xl block font-bold leading-normal pt-1">
              Full-Stack Developer
            </span>
          </motion.h1>

          {/* Description summary */}
          <motion.p 
            variants={itemVariants as any}
            className="text-gray-400 font-outfit text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
          >
            I build robust end-to-end architectures. Writing <span className="text-primary font-medium">highly scalable APIs</span> on the backend and crafting <span className="text-secondary font-medium">frictionless user experiences</span> on the frontend.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            variants={itemVariants as any}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="glow-btn group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-outfit font-semibold hover:shadow-lg hover:shadow-primary/25 active:scale-95 transition-all duration-300 w-full sm:w-auto justify-center cursor-pointer"
            >
              Explore My Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* CV Download Dropdown */}
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setCvDropdownOpen(!cvDropdownOpen)}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-outfit font-semibold transition-all duration-300 w-full sm:w-auto justify-center cursor-pointer"
              >
                <Download className="w-4 h-4 text-secondary" />
                Download CV
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${cvDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {cvDropdownOpen && (
                  <>
                    {/* Overlay to close CV selection */}
                    <div className="fixed inset-0 z-40" onClick={() => setCvDropdownOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 left-0 sm:left-auto sm:right-0 mt-2 w-full sm:w-56 glass-panel rounded-xl overflow-hidden shadow-2xl z-50 border border-white/10"
                    >
                      <a
                        href={PERSONAL_INFO.cv.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-primary/10 hover:text-white transition-colors border-b border-white/5"
                        onClick={() => setCvDropdownOpen(false)}
                      >
                        <FileText className="w-4 h-4 text-primary" />
                        <span>.NET Backend CV</span>
                      </a>
                      <a
                        href={PERSONAL_INFO.cv.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-secondary/10 hover:text-white transition-colors"
                        onClick={() => setCvDropdownOpen(false)}
                      >
                        <FileText className="w-4 h-4 text-secondary" />
                        <span>Frontend Developer CV</span>
                      </a>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Quick WhatsApp shortcut */}
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] transition-colors duration-300 w-full sm:w-auto"
              title="Let's Chat on WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="sm:hidden ml-2 font-outfit font-semibold">Chat on WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Dashboard Mockup Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          {/* Animated coding card graphic */}
          <div className="glass-panel p-6 rounded-2xl relative shadow-2xl border border-white/10 group overflow-hidden">
            {/* Glossy sheen reflection */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-40 group-hover:animate-shine" />
            
            {/* Header controls bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                <span className="w-3 h-3 rounded-full bg-[#eab308]" />
                <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
              </div>
              <span className="font-mono text-xs text-gray-500">DeveloperProfile.cs</span>
            </div>

            {/* Code Body */}
            <pre className="font-mono text-[11px] sm:text-xs text-gray-300 overflow-x-auto whitespace-pre leading-relaxed">
              <code>{PERSONAL_INFO.aboutCode}</code>
            </pre>
          </div>

          {/* Visual abstract overlay rings */}
          <div className="absolute top-[-30px] right-[-30px] w-24 h-24 rounded-full border-2 border-primary/20 pointer-events-none -z-10 animate-bounce duration-5000" />
          <div className="absolute bottom-[-20px] left-[-30px] w-16 h-16 rounded-full border border-secondary/30 pointer-events-none -z-10 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
