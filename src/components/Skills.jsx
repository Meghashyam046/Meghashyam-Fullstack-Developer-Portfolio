import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motion'
import { skills } from '../data/mockData'

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeIn('up', 0.2)} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-light mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-light/70 max-w-2xl mx-auto font-body">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              variants={fadeIn('up', index * 0.1)}
              className="bg-gradient-to-br from-primary/10 to-secondary/5 p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="text-xl font-heading font-bold text-secondary mb-6 text-center">
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-light font-heading text-sm">{skill.name}</span>
                      <span className="text-secondary font-heading text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-light/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
