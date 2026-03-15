import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDesc: string;
  tools: string[];
  color: string;
  emoji: string;
  github: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'IPL Data Analysis',
    description: 'Tableau Dashboard studying IPL data using filters like year, team, player, and stadium across multiple seasons.',
    longDesc: 'An interactive Tableau dashboard that provides deep insights into IPL cricket data, covering match results, player performance metrics, and team strategies.',
    tools: ['Tableau', 'Data Visualization', 'Excel'],
    color: 'from-orange-400 to-red-500',
    emoji: '🏏',
    github: 'https://github.com/GaneshKurli/IPL-ANALYSIS',
    highlights: ['Strike rate & economy analysis', 'Team performance across seasons', 'Year, Player & Stadium filters'],
  },
  {
    id: 2,
    title: 'Bank Loan Analysis',
    description: 'Excel-based Bank Loan Analytics Dashboard tracking 38K+ loan applications with KPIs, MoM trends, and Good vs Bad Loan classification.',
    longDesc: 'A comprehensive Excel dashboard covering loan approval rates, risk scoring, and borrower demographic profiles to support data-driven lending decisions.',
    tools: ['Excel', 'Pivot Tables', 'Statistical Analysis'],
    color: 'from-green-400 to-emerald-500',
    emoji: '🏦',
    github: 'https://github.com/GaneshKurli/Bank-Loan-Report-Excel',
    highlights: ['38K+ loan applications tracked', 'Good vs Bad Loan classification', 'KPIs with MoM & MTD metrics'],
  },
  {
    id: 3,
    title: 'WOO-Commerce Analysis',
    description: 'Interactive Power BI dashboards with charts and filters to track and visualize business performance using Power Query and DAX.',
    longDesc: 'Built a Power BI analytical layer for e-commerce data, preparing and cleaning data with Power Query and computing key business metrics using DAX formulas.',
    tools: ['Power BI', 'Power Query', 'DAX', 'Data Cleaning'],
    color: 'from-purple-400 to-violet-500',
    emoji: '🛒',
    github: 'https://github.com/GaneshKurli/WOO-Commerce-Analysis',
    highlights: ['Interactive Power BI dashboards', 'Power Query data preparation', 'DAX formulas for key metrics'],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="group relative flex flex-col rounded-3xl bg-blue-500/[0.02] border border-blue-500/10 hover:border-blue-400/30 overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-2 backdrop-blur-sm"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* HUD Corner Frames */}
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-blue-500/0 group-hover:border-blue-500/40 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-blue-500/0 group-hover:border-blue-500/40 transition-all duration-300" />

      {/* Top Accent line */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="p-8 flex flex-col flex-grow relative overflow-hidden">
        {/* Background Digital Stream Effect */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 -rotate-12 pointer-events-none">
          <Github size={120} />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-foreground/[0.03] border border-foreground/5 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300 shadow-inner">
              {project.emoji}
            </div>
            <div>
              <h3 className="text-xl font-black text-foreground group-hover:text-blue-400 transition-colors duration-300 tracking-tight">
                {project.title}
              </h3>
              <p className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest mt-1">Data Analysis Project</p>
            </div>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/30 hover:text-blue-400 transition-all p-2 rounded-xl bg-foreground/5 hover:bg-blue-500/10 border border-foreground/5 hover:border-blue-500/20"
            aria-label={`GitHub for ${project.title}`}
          >
            <Github size={20} />
          </a>
        </div>

        {/* Description */}
        <p className="text-foreground/70 text-sm leading-relaxed mb-6 font-medium">{project.description}</p>

        {/* Highlights */}
        <div className="space-y-3 mb-8 flex-grow">
          {project.highlights.map((h) => (
            <div key={h} className="flex items-center gap-3 text-xs text-foreground/50 group-hover:text-foreground/80 transition-colors">
              <span className={`w-1.5 h-1.5 rounded-sm bg-gradient-to-r ${project.color} flex-shrink-0 animate-pulse`} />
              {h}
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md bg-foreground/5 border border-foreground/10 text-foreground/50 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Footer Button Link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full py-3 rounded-xl border border-foreground/10 bg-foreground/5 flex items-center justify-center gap-3 text-sm font-bold tracking-widest uppercase hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 group/btn overflow-hidden relative"
        >
          <span className="relative z-10 flex items-center gap-2 group-hover/btn:scale-105 transition-transform">
            <ExternalLink size={16} />
            DEPLOY SOURCE
          </span>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"
          />
        </a>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative overflow-hidden transition-colors duration-300">
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
            Digital Archives // DATA INSIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4 uppercase tracking-tighter">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          <p className="mt-8 text-foreground/50 max-w-xl mx-auto text-sm leading-relaxed font-medium">
            Real-world data projects spanning sports analytics, finance, and e-commerce — each architected to tell a clear narrative with data.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
