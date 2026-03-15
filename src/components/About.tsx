import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: 'Data Analysis',
    description: 'Collecting, cleaning, and interpreting complex datasets to find patterns.',
    icon: '📊',
    color: 'border-blue-500/30 bg-blue-500/5',
  },
  {
    title: 'Visualization',
    description: 'Creating impactful stories using Tableau, Power BI, and Python libraries.',
    icon: '📈',
    color: 'border-cyan-500/30 bg-cyan-500/5',
  },
  {
    title: 'Problem Solving',
    description: 'Applying analytical thinking to solve real-world business challenges.',
    icon: '🧩',
    color: 'border-purple-500/30 bg-purple-500/5',
  },
  {
    title: 'Data Science',
    description: 'Continuous learning of Python, Pandas, and Machine Learning concepts.',
    icon: '🧪',
    color: 'border-indigo-500/30 bg-indigo-500/5',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative overflow-hidden transition-colors duration-300">
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
            System Analysis // WHO I AM
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4 uppercase tracking-tighter">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-blue-400 font-mono text-sm">[01]</span>
              Passionate about Data & Insights
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-6 text-lg">
              Hello! I'm <span className="text-blue-400 font-bold">Ganesh Kurli</span>, a passionate Data Analyst student with a deep interest in turning raw data into actionable insights. My journey is fueled by a curiosity to understand the "why" behind every trend and a commitment to helping businesses make data-driven decisions.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              I specialize in data cleaning, exploratory analysis, and creating interactive visualizations that simplify complex narratives. Whether it's optimization, forecasting, or storytelling — I'm dedicated to the craft of analysis.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: 'Projects', value: '3+' },
                { label: 'Tools', value: '5+' },
                { label: 'Passion', value: '100%' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 backdrop-blur-sm">
                  <p className="text-2xl font-black text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                className={`p-6 rounded-2xl border ${feature.color} backdrop-blur-md hover:scale-[1.03] transition-all duration-300 group`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h4 className="text-lg font-bold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
