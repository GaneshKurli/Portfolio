import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, BriefcaseIcon, CheckCircle, Rocket, Star } from 'lucide-react';

const timelineItems = [
  {
    icon: BookOpen,
    year: '2023',
    title: 'Started Learning Data Analysis',
    description: 'Began my data analytics journey with Excel and SQL fundamentals, discovering my passion for turning raw data into meaningful insights.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    tags: ['Excel', 'SQL Basics', 'Data Fundamentals'],
    status: 'completed',
  },
  {
    icon: Star,
    year: '2024',
    title: 'Expanded to Visualization Tools',
    description: 'Mastered Tableau and Power BI, building interactive dashboards and creating compelling visual stories from complex datasets.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    tags: ['Tableau', 'Power BI', 'Data Storytelling'],
    status: 'completed',
  },
  {
    icon: CheckCircle,
    year: '2024-2025',
    title: 'Completed 3+ Real-World Projects',
    description: 'Applied skills to real datasets — IPL cricket analysis, bank loan risk assessment, and WOO-Commerce analytics.',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    tags: ['IPL Dashboard', 'Loan Analysis', 'WOO-Commerce'],
    status: 'completed',
  },
  {
    icon: BriefcaseIcon,
    year: '2025',
    title: 'Learned Python for Data Science',
    description: 'Dived into Python ecosystem for data analysis — Pandas, NumPy, Matplotlib — and started applying it to analytical workflows.',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    status: 'completed',
  },
  {
    icon: Rocket,
    year: 'Now',
    title: 'Preparing for Data Analyst Roles',
    description: 'Actively building my portfolio, strengthening SQL and Python skills, and preparing for full-time Data Analyst opportunities.',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    tags: ['Job Ready', 'Portfolio Building', 'Interview Prep'],
    status: 'active',
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      className="py-24 bg-foreground/[0.02] dark:bg-foreground/[0.03] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Learning Timeline
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-foreground/60 max-w-xl mx-auto">
            A snapshot of my data analytics learning journey — from fundamentals to building real-world projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {timelineItems.map((item, idx) => (
              <motion.div
                key={item.title}
                className="relative flex gap-6 sm:pl-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Icon node on the timeline line */}
                <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full ${item.bgColor} border ${item.borderColor} flex items-center justify-center hidden sm:flex`}>
                  <item.icon size={20} className={item.color} />
                  {item.status === 'active' && (
                    <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
                  )}
                </div>

                {/* Content card */}
                <div className={`flex-grow p-5 rounded-2xl ${item.bgColor} border ${item.borderColor} hover:shadow-lg transition-all duration-300`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-bold tracking-widest uppercase ${item.color}`}>{item.year}</span>
                    {item.status === 'active' && (
                      <span className="px-2 py-0.5 text-xs font-semibold bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/20">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/65 leading-relaxed mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-full bg-foreground/10 text-foreground/60 border border-foreground/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
