import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Cloud } from 'lucide-react';

const pillars = [
  {
    icon: Sparkles,
    title: 'AI-Powered Applications',
    description: 'Building intelligent systems that leverage machine learning and LLMs to solve real-world problems at scale.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-Grade Systems',
    description: 'Architecting robust, secure, and maintainable software that mission-critical businesses rely on daily.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Modern Web',
    description: 'Deploying and scaling applications on cloud infrastructure with modern web technologies and best practices.',
  },
];

const Solution: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-primary-light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-text-primary mb-4">
            What I Build
          </h2>
          <p className="font-inter text-text-secondary max-w-2xl mx-auto">
            Specialized expertise across the full stack, from AI integration to production deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1] 
              }}
              whileHover={{ y: -5 }}
              className="bg-secondary p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <pillar.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-grotesk font-semibold text-xl text-text-primary mb-3">
                {pillar.title}
              </h3>
              <p className="font-inter text-text-secondary leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
