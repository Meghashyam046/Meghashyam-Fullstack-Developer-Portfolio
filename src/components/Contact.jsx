import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { fadeIn, staggerContainer } from '../utils/motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Message sent successfully!')
    setTimeout(() => {
      setStatus('')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'shyamroyal916kdm@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 7993148967'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Tirupati, AP'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-dark">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeIn('up', 0.2)} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-light mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-light/70 max-w-2xl mx-auto font-body">
            Let's discuss your next project or collaboration opportunity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={fadeIn('right', 0.3)} className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-light mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="text-primary mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-light font-heading font-medium mb-1">
                        {item.title}
                      </h4>
                      <p className="text-light/70 font-body">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/5 p-6 rounded-lg border border-primary/20">
              <h4 className="text-xl font-heading font-bold text-light mb-4">
                Why Work With Me?
              </h4>
              <ul className="space-y-3 text-light/80 font-body">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>On time to Deliver the projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Fast turnaround and reliable delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Clean, maintainable code practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Good communication skills</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={fadeIn('left', 0.3)}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-light font-heading font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light/5 border border-light/20 rounded-lg text-light focus:outline-none focus:border-primary transition-colors font-body"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-light font-heading font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light/5 border border-light/20 rounded-lg text-light focus:outline-none focus:border-primary transition-colors font-body"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-light font-heading font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light/5 border border-light/20 rounded-lg text-light focus:outline-none focus:border-primary transition-colors font-body"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-light font-heading font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-light/5 border border-light/20 rounded-lg text-light focus:outline-none focus:border-primary transition-colors font-body resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary hover:bg-primary/80 text-light rounded-lg font-heading font-medium transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>

              {status && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-secondary font-heading font-medium"
                >
                  {status}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
