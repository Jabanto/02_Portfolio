import React from 'react';
import { motion } from 'framer-motion';

const Problem: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-primary">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-inter text-xl md:text-2xl text-text-secondary leading-relaxed"
        >
          Most engineers can prototype with AI.{' '}
          <span className="text-text-primary">Few can ship it.</span>{' '}
          Companies need someone who understands both the model and the system
          it has to survive in — production traffic, edge cases, and the
          reliability enterprise software demands.
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;
