import { motion } from 'framer-motion'
import { Code2, Database, Globe, Server } from 'lucide-react'
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => {
  const highlights = [
    {
      icon: <Code2 size={32} />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React, Vue, and modern CSS frameworks.'
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      description: 'Creating robust server-side applications with Node.js, Express, and RESTful API design.'
    },
    {
      icon: <Database size={32} />,
      title: 'Database Management',
      description: 'Designing and optimizing databases using MongoDB, PostgreSQL, and MySQL.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Full Stack Solutions',
      description: 'Delivering end-to-end web applications with seamless integration and deployment.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark/95 to-dark">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeIn('up', 0.2)} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-light mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-light/70 max-w-2xl mx-auto font-body">
            Passionate about creating impactful digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={fadeIn('right', 0.3)}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 rounded-lg blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
                alt="Developer workspace"
                className="relative rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeIn('left', 0.3)} className="space-y-6">
            <h3 className="text-3xl font-heading font-bold text-light">
              Hi, I'm Meghashyam
            </h3>
            <p className="text-light/80 font-body leading-relaxed">
              A passionate fullstack developer with building web applications.
              I specialize in creating scalable, user-friendly solutions that solve real-world problems.
            </p>
            <p className="text-light/80 font-body leading-relaxed">
              My journey in web development started with a curiosity about how websites work,
              which evolved into a career dedicated to crafting exceptional digital experiences.
              I thrive on learning new technologies and staying current with industry trends.
            </p>
            <p className="text-light/80 font-body leading-relaxed">
              Find me contributing to open-source projects,
              writing technical blogs, or exploring new frameworks and tools.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeIn('up', index * 0.1)}
              className="bg-light/5 backdrop-blur-sm p-6 rounded-lg border border-light/10 hover:border-primary/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-primary mb-4">{item.icon}</div>
              <h4 className="text-lg font-heading font-bold text-light mb-2">
                {item.title}
              </h4>
              <p className="text-light/70 font-body text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About
