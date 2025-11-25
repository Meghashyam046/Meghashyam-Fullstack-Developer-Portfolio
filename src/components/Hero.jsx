import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { fadeIn, staggerContainer } from '../utils/motion'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark via-primary/20 to-dark">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center opacity-10"></div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center">
          <motion.div variants={fadeIn('up', 0.2)} className="mb-6">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-light mb-4">
              Hi, I'm <span className="text-primary">Meghashyam</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-heading font-medium text-secondary mb-6">
              Fullstack Developer
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn('up', 0.4)}
            className="text-lg md:text-xl text-light/80 max-w-2xl mx-auto mb-8 font-body"
          >
            Crafting beautiful, scalable web applications with modern technologies.
            Skilled in React, Node.js etc.
          </motion.p>

          <motion.div
            variants={fadeIn('up', 0.6)}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary hover:bg-primary/80 text-light rounded-lg font-heading font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-secondary text-secondary hover:bg-secondary hover:text-dark rounded-lg font-heading font-medium transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.8)}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-primary transition-colors transform hover:scale-110 duration-300"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-primary transition-colors transform hover:scale-110 duration-300"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:john@example.com"
              className="text-light hover:text-primary transition-colors transform hover:scale-110 duration-300"
            >
              <Mail size={28} />
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn('up', 1)}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#projects" className="flex flex-col items-center text-light/60 hover:text-primary transition-colors group">
            <span className="text-sm font-heading mb-2">Scroll Down</span>
            <ArrowDown size={24} className="animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
