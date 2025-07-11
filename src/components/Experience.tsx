import React from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const timeline = [
    {
      type: 'work',
      title: 'Software Engineer',
      organization: 'Tech Company',
      period: '2024 – Present',
      description: 'Developing full-stack applications using C#, ASP.NET Core, and React. Building scalable APIs, implementing automated job scheduling, and optimizing database performance.',
      icon: Briefcase,
      color: 'from-blue-500 to-purple-500'
    },
    {
      type: 'education',
      title: 'B.E. Computer Science',
      organization: 'Rajendra Mane College of Engineering and Technology',
      period: '2020 – 2024',
      description: 'Comprehensive study of computer science fundamentals, software engineering principles, and modern development practices. Graduated with strong foundation in algorithms, data structures, and system design.',
      icon: GraduationCap,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My journey in software development and continuous learning
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Node */}
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg z-10`}
                >
                  <item.icon size={24} className="text-white" />
                </motion.div>

                {/* Content Card */}
                <motion.div 
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className={`w-3 h-3 bg-gradient-to-r ${item.color} rounded-full mr-3`}></div>
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        {item.type === 'work' ? 'Experience' : 'Education'}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">{item.organization}</h4>
                    
                    <div className="flex items-center text-gray-500 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm font-medium">{item.period}</span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready for New Challenges</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
              I'm always excited to take on new projects and collaborate with innovative teams. 
              Let's build something amazing together!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;