import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Jordan's ability to bridge AI research with production systems is rare. He delivered a solution that exceeded our expectations in both performance and maintainability.",
    name: 'Sarah Chen',
    role: 'CTO, TechScale Inc.',
  },
  {
    quote: "Working with Jordan was seamless. He understood our enterprise requirements from day one and delivered a system that handles millions of transactions daily.",
    name: 'Michael Rodriguez',
    role: 'VP Engineering, DataFlow',
  },
  {
    quote: "Jordan's technical depth is impressive, but what sets him apart is his communication. He makes complex systems understandable and collaborates effectively across teams.",
    name: 'Emily Watson',
    role: 'Product Lead, CloudFirst',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-text-primary mb-4">
            What Colleagues Say
          </h2>
          <p className="font-inter text-text-secondary max-w-2xl mx-auto">
            Feedback from teams and leaders I've had the pleasure to work with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1] 
              }}
              className="bg-secondary p-8 rounded-2xl border border-white/5"
            >
              <Quote className="text-accent/30 mb-6" size={32} />
              <p className="font-inter text-text-secondary leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-grotesk font-semibold text-text-primary">
                  {testimonial.name}
                </div>
                <div className="font-inter text-sm text-text-secondary">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
