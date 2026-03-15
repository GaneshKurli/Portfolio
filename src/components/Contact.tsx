import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, Linkedin, Mail, Phone, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ganeshkurli845@gmail.com',
    href: 'mailto:ganeshkurli845@gmail.com',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/GaneshKurli',
    href: 'https://github.com/GaneshKurli',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'ganesh-kurli',
    href: 'https://linkedin.com/in/ganesh-kurli',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
  },
  {
    icon: Phone,
    label: 'Location',
    value: 'India',
    href: '#',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden transition-colors duration-300">
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
            Communications Module // ESTABLISH UPLINK
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4 uppercase tracking-tighter">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="text-blue-400 font-mono text-sm">[04]</span>
              Direct Access
            </h3>
            <p className="text-foreground/60 mb-10 text-lg leading-relaxed max-w-md font-medium">
              Ready to collaborate on data-driven projects or just want to say hi? My communication channels are open 24/7.
            </p>

            <div className="grid gap-6">
              {contactInfo.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-6 p-6 rounded-2xl border ${item.borderColor} ${item.bgColor} backdrop-blur-md group hover:scale-[1.02] transition-all duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                >
                  <div className={`p-4 rounded-xl ${item.bgColor} border ${item.borderColor} group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300`}>
                    <item.icon className={item.color} size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-1">{item.label}</p>
                    <p className="text-lg font-black text-foreground group-hover:text-blue-400 transition-colors uppercase tracking-tight">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <div className="mt-12 p-6 rounded-2xl border border-blue-500/10 bg-blue-500/5 backdrop-blur-sm relative overflow-hidden">
               <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] text-blue-400/60">
                 <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                 SATELLITE UPLINK: INDIA
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full translate-x-10 -translate-y-10" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 sm:p-10 rounded-3xl bg-foreground/[0.02] border border-foreground/5 backdrop-blur-xl relative"
          >
            {/* Cyber Corner frame */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-blue-500/10" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-blue-500/10" />

            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center h-48 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={48} className="text-green-400 mb-4" />
                <p className="text-foreground font-semibold">Message Sent!</p>
                <p className="text-foreground/60 text-sm mt-1">Thanks for reaching out. I'll be in touch soon.</p>
              </motion.div>
            ) : (
              <form 
                action="https://formspree.io/f/MAY_NEED_SETUP" 
                method="POST"
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-foreground/10 border border-foreground/15 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-foreground/10 border border-foreground/15 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl bg-foreground/10 border border-foreground/15 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-foreground/10 border border-foreground/15 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
