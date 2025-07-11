import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sagargarate22', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sagar-garate-3573ab233', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sagargarate22@gmail.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sagar Garate
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Software Engineer passionate about building scalable applications 
              and solving complex problems with modern technologies.
            </p>
            <div className="text-gray-400">
              📍 Pune, India
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold">Quick Links</h4>
            <div className="space-y-3">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                <motion.button
                  key={link}
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="block text-gray-400 hover:text-white transition-all duration-200 text-left"
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-800 rounded-2xl text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <ArrowUp size={16} />
                Back to top
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Sagar Garate. Made with</span>
              <Heart size={16} className="text-red-400" />
              <span>and lots of coffee.</span>
            </div>
            <div className="text-gray-400 text-sm">
              Built with React, Tailwind CSS & Framer Motion
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;