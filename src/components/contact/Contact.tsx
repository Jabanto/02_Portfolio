import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-primary-light">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-text-primary mb-6">
            Currently open to select full-time roles and consulting engagements.
          </h2>
          <p className="font-inter text-text-secondary mb-10">
            I typically respond within 24-48 hours.
          </p>
          <motion.a
            href="https://calendar.app.google/6UCWf4FgBegWnLiB9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 211, 238, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-accent text-primary font-inter font-medium px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors"
          >
            <Mail size={20} />
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
