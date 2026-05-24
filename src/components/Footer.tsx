'use client';

import { Terminal, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';

export default function Footer() {
  const scrollToHero = () => {
    const element = document.getElementById('hero');
    if (element) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="border-t border-white/5 bg-[#030712]/50 backdrop-blur-md py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Logo and Brand */}
        <button 
          onClick={scrollToHero} 
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
            <Terminal className="w-4.5 h-4.5" />
          </div>
          <div className="text-left">
            <span className="font-outfit font-bold text-base tracking-tight block text-white group-hover:text-primary transition-colors">
              Fady Kaiser
            </span>
            <span className="font-mono text-[9px] text-gray-500 tracking-widest block uppercase">
              Full-Stack Developer
            </span>
          </div>
        </button>

        {/* Copyright */}
        <p className="text-xs text-gray-500 font-mono flex items-center justify-center gap-1.5">
          <span>&copy; {new Date().getFullYear()} Fady Kaiser. All rights reserved.</span>
          <span className="text-gray-600">|</span>
          <span className="flex items-center gap-1">
            Built with 
            <Heart className="w-3 h-3 text-[#ef4444] fill-[#ef4444]" /> 
            in Cairo, Egypt
          </span>
        </p>

        {/* Action Links */}
        <div className="flex items-center gap-5 text-xs text-gray-500 font-mono">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}
