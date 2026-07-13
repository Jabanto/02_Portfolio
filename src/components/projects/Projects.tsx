import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI Document Processor',
    description: 'Intelligent document parsing system using LLMs to extract structured data from unstructured documents with 95% accuracy.',
    tags: ['Python', 'OpenAI', 'FastAPI', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Enterprise Dashboard',
    description: 'Real-time analytics dashboard for monitoring KPIs across multiple business units with role-based access control.',
    tags: ['React', 'TypeScript', 'Node.js', 'Redis'],
    link: '#',
  },
  {
    title: 'Cloud Infrastructure Platform',
    description: 'Infrastructure-as-code platform automating AWS deployments with built-in security scanning and cost optimization.',
    tags: ['AWS', 'Terraform', 'Docker', 'CI/CD'],
    link: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-32 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Featured Projects
          </h2>
          <p className="font-inter text-text-secondary max-w-2xl mx-auto">
            Selected work showcasing technical depth and production-quality solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1] 
              }}
              whileHover={{ y: -5 }}
              className="bg-secondary rounded-2xl border border-accent/20 overflow-hidden group"
            >
              <div className="p-8">
                <h3 className="font-grotesk font-semibold text-xl text-text-primary mb-3">
                  {project.title}
                </h3>
                <p className="font-inter text-text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-inter text-xs px-3 py-1 bg-accent/10 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 font-inter text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  View Project
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
