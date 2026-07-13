import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  'React', 'TypeScript', 'Python', 'Node.js', 
  'AWS', 'Docker', 'PostgreSQL', 'GraphQL',
  'Redis', 'Kubernetes', 'Terraform', 'Next.js'
];

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Shipped' },
  { value: '10+', label: 'Technologies' },
];

const Stack: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-primary-light overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Tech Stack
          </h2>
          <p className="font-inter text-text-secondary max-w-2xl mx-auto">
            Proficient across modern technologies, from frontend frameworks to cloud infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: [0.25, 0.1, 0.25, 1] 
              }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(34, 211, 238, 0.5)' }}
              className="font-inter text-sm px-6 py-3 bg-secondary border border-white/10 rounded-full text-text-secondary hover:text-text-primary transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1] 
              }}
              className="text-center"
            >
              <div className="font-grotesk font-bold text-3xl md:text-4xl text-accent mb-2">
                {stat.value}
              </div>
              <div className="font-inter text-sm text-text-secondary">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
