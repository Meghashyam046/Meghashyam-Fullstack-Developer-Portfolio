import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { fadeIn, staggerContainer } from '../utils/motion'
import { projects } from '../data/mockData'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'frontend', 'fullstack', 'backend']

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-dark to-dark/95">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeIn('up', 0.2)} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-light mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-light/70 max-w-2xl mx-auto font-body">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.4)}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-heading font-medium capitalize transition-all duration-300 ${
                filter === category
                  ? 'bg-primary text-light shadow-lg scale-105'
                  : 'bg-light/10 text-light/70 hover:bg-light/20 hover:text-light'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn('up', index * 0.1)}
              className="bg-light/5 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-light/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-light mb-2">
                  {project.title}
                </h3>
                <p className="text-light/70 mb-4 font-body text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-secondary rounded-full text-xs font-heading font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-light/70 hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm font-heading">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-light/70 hover:text-primary transition-colors"
                  >
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
