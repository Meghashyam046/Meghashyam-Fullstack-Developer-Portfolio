import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'shyamroyal916kdm@gmail.com.com', label: 'Email' }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-dark/95 border-t border-light/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Dev<span className="text-secondary">Portfolio</span>
            </h3>
            <p className="text-light/70 font-body mb-4">
              Crafting digital experiences with passion and precision.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-light/70 hover:text-primary transition-colors transform hover:scale-110 duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading font-bold text-light mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-light/70 hover:text-primary transition-colors font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-bold text-light mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-light/70 font-body">
              <li>shyamroyal916kdm@gmail.com</li>
              <li>+91 7993148967</li>
              <li>Titupati, Ap</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-light/10 pt-8 text-center">
          <p className="text-light/70 font-body text-sm">
            © {currentYear} Meghashyam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
