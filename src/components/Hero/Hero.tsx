import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { usePingPongVideo } from '../../hooks/usePingPongVideo';

const Hero: React.FC = () => {
  const { videoRef, isMobile, shouldUseVideo } = usePingPongVideo({
    src: '/hero-transition.mp4',
  });

  const scrollToWork = () => {
    const element = document.querySelector('#work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {shouldUseVideo && !isMobile ? (
        <video
          ref={videoRef}
          src={`${process.env.PUBLIC_URL}/hero-transition.mp4`}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          autoPlay
          poster={`${process.env.PUBLIC_URL}/hero-frame-1.png`}
        />
      ) : (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hero-frame-1.png)` }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-text-primary mb-9 tracking-tight"
        >
          Engineering intelligence
          <br />
          <span className="text-accent">into production.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-inter text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-4"
        >
          Formed software engineer & solutions architect building AI-powered applications and enterprise systems that scale.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 211, 238, 0.4)' }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToWork}
          className="bg-accent text-primary font-inter font-medium px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors"
        >
          My Career Path
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-text-secondary"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
