'use client';

import { motion } from 'framer-motion';
import { Server, Layout, Zap, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';

export default function Services() {
  const serviceIcons: Record<string, React.ReactNode> = {
    'Server': <Server className="w-6 h-6 text-primary animate-pulse" />,
    'Layout': <Layout className="w-6 h-6 text-secondary" />,
    'Zap': <Zap className="w-6 h-6 text-accent" />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[30%] right-[-10%] w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Professional <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-gray-400 font-outfit text-lg max-w-2xl mx-auto leading-relaxed">
            I build specialized solutions, ensuring reliable server code, fast loads, and stunning visual interfaces.
          </p>
        </div>

        {/* Services Grid list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {SERVICES.map((serv) => (
            <motion.div
              key={serv.title}
              variants={itemVariants as any}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between h-[450px] relative group overflow-hidden"
            >
              {/* Highlight sphere background */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

              <div className="flex flex-col gap-6">
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center self-start">
                  {serviceIcons[serv.iconName]}
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-outfit font-extrabold text-xl sm:text-2xl text-white group-hover:text-primary transition-colors">
                    {serv.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {serv.description}
                  </p>
                </div>

                {/* Features list */}
                <ul className="list-none flex flex-col gap-2 border-t border-white/5 pt-5">
                  {serv.features.map((feat, idx) => (
                    <li key={idx} className="flex gap-2 items-center text-xs sm:text-sm text-gray-300">
                      <ArrowUpRight className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative CTA */}
              <span className="font-outfit text-xs font-bold text-gray-500 group-hover:text-primary transition-colors mt-4 block self-start">
                Enterprise Standards & Solid SOLID Patterns
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
