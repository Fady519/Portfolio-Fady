'use client';

import { motion } from 'framer-motion';
import { Award, Code2, Users, GraduationCap, Cpu } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '@/lib/data';

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      },
    }),
  };

  const statIcons = [
    <GraduationCap key="edu" className="w-5 h-5 text-primary" />,
    <Code2 key="code" className="w-5 h-5 text-secondary" />,
    <Users key="sprints" className="w-5 h-5 text-accent" />,
    <Cpu key="tech" className="w-5 h-5 text-primary" />,
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-gray-400 font-outfit text-lg max-w-2xl mx-auto leading-relaxed">
            Crafting elegant software architectures with scalable patterns and professional craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h3 className="font-outfit text-2xl sm:text-3xl font-bold mb-6 text-white leading-snug">
              Passionate about building software that actually makes sense.
            </h3>
            
            <p className="text-gray-300 font-outfit text-base sm:text-lg leading-relaxed mb-6">
              {PERSONAL_INFO.bio}
            </p>

            <p className="text-gray-400 font-outfit text-base leading-relaxed mb-8">
              Having studied computer science in-depth and committed to 150+ hours of professional backend engineering, I am ready to handle complex backend environments and craft premium client-side user experiences. I specialize in applying clean system-separation principles (Onion architecture, DAL/BLL splits) and robust interface frameworks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl glass-panel border border-white/5 bg-white/2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 self-start">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-outfit font-bold text-white mb-1">Route Academy Graduate</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Earned specialized diplomas in both .NET Core Backend Development and Frontend Track, mastering professional workflows, REST APIs, and responsive architectures.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Stats Grid Column */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                custom={idx}
                variants={cardVariants as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between h-44 hover:border-primary/30 transition-colors duration-300 relative group overflow-hidden"
              >
                {/* Shiny highlight hover border */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center self-start">
                  {statIcons[idx]}
                </div>

                <div>
                  <span className="font-outfit font-extrabold text-3xl sm:text-4xl text-white block mb-1">
                    {stat.value}
                  </span>
                  <span className="font-outfit text-xs sm:text-sm text-gray-400 leading-tight block font-medium">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
