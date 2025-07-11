import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'C#', 'Java', 'SQL'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      skills: ['ASP.NET Core', 'Entity Framework', 'Django', 'Hangfire', 'ADO.NET'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'Razor Views'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Database',
      skills: ['SQL Server', 'PostgreSQL', 'MySQL'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'DevOps & Tools',
      skills: ['Docker', 'CI/CD', 'Git'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Data Science',
      skills: ['scikit-learn', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300"
            >
              <div className="mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <span className="text-white font-bold text-lg">
                    {category.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className={`inline-block bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 mr-2 mb-2`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Skills Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Always Learning, Always Growing</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
            tools, and methodologies to stay at the forefront of software development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;