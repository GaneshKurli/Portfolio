import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const technicalSkills = [
  { name: 'Python', level: 75, color: 'bg-blue-500', shadow: 'shadow-blue-500/50' },
  { name: 'SQL', level: 80, color: 'bg-cyan-500', shadow: 'shadow-cyan-500/50' },
  { name: 'Excel', level: 90, color: 'bg-green-500', shadow: 'shadow-green-500/50' },
  { name: 'Tableau', level: 85, color: 'bg-purple-500', shadow: 'shadow-purple-500/50' },
  { name: 'Power BI', level: 80, color: 'bg-indigo-500', shadow: 'shadow-indigo-500/50' },
  { name: 'Pandas / NumPy', level: 70, color: 'bg-orange-500', shadow: 'shadow-orange-500/50' },
];

const tools = [
  { name: 'Python', icon: '🐍' },
  { name: 'SQL', icon: '🗄' },
  { name: 'Excel', icon: '📊' },
  { name: 'Tableau', icon: '📈' },
  { name: 'Power BI', icon: '⚡' },
  { name: 'Pandas', icon: '🐼' },
  { name: 'Jupyter', icon: '📓' },
  { name: 'Git', icon: '🌿' },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-3 block">
            Core Competencies // TECH STACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4 uppercase tracking-tighter">
            Skills & Proficiency
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills - Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="text-blue-400 font-mono text-xs">[02]</span>
              Technical Mastery
            </h3>
            <div className="space-y-8">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-bold tracking-wider text-foreground/80 uppercase">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono text-blue-400 bg-blue-500/5 px-2 py-0.5 rounded">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-foreground/5 rounded-full overflow-hidden relative border border-foreground/5">
                    <motion.div
                      className={`absolute top-0 left-0 h-full ${skill.color} ${skill.shadow} shadow-lg`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
                    >
                      {/* Scanning glow effect on progress bar */}
                      <motion.div 
                        className="absolute inset-0 bg-white/20"
                        animate={{ left: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Currently Learning */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="text-blue-400 font-mono text-xs">[03]</span>
              Digital Toolkit
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="p-4 rounded-xl bg-foreground/5 border border-foreground/10 flex flex-col items-center justify-center gap-3 hover:border-blue-500/40 hover:bg-blue-500/5 hover:scale-105 transition-all duration-300 group backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{tool.icon}</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-foreground/50">{tool.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20 backdrop-blur-md relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-blue-400 font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                  Currently Learning
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'Big Data', 'R Language', 'Cloud Computing'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md bg-foreground/5 border border-foreground/10 text-foreground/60 transition-colors hover:text-blue-400 hover:border-blue-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <motion.div 
                className="absolute -right-4 -bottom-4 text-blue-500/5"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="border-[20px] border-current w-32 h-32 rounded-full border-dashed opacity-50" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
