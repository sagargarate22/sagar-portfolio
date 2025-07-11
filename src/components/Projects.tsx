import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Play, Database, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Movie Recommendation System',
      description: 'Context-based movie recommendation engine using cosine similarity and CountVectorizer for intelligent content filtering and personalized suggestions.',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Django', 'scikit-learn', 'HTML', 'CSS', 'JavaScript', 'Docker'],
      category: 'ai',
      github: 'https://github.com/sagargarate22/Movies_Recommendation_System',
      demo: '#',
      icon: Brain
    },
    {
      id: 2,
      title: 'Weather Data Pipeline',
      description: 'Automated ETL pipeline that fetches, cleans, and stores OpenWeather API data every 15 minutes. Processes raw data to cleaned CSV format and stores in PostgreSQL.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'pandas', 'PostgreSQL', 'Docker', 'ETL', 'APIs'],
      category: 'backend',
      github: 'https://github.com/sagargarate22/weather-data-pipeline',
      demo: '#',
      icon: Database
    },
    {
      id: 3,
      title: 'Expense Tracker Web API',
      description: 'Comprehensive expense management system with category breakdowns, scheduled email reports (daily/monthly), Razor email templates, and interactive charts using Hangfire scheduler.',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['ASP.NET Core', 'PostgreSQL', 'Docker', 'Hangfire', 'SMTP', 'Razor'],
      category: 'backend',
      github: 'https://github.com/sagargarate22/ExpenseTrackerApi',
      demo: '#',
      icon: Play
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'ai', name: 'AI/ML', count: projects.filter(p => p.category === 'ai').length }
  ];

  const filteredProjects = React.useMemo(() => {
    if (filter === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === filter);
  }, [filter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const handleFilterChange = (categoryId: string) => {
    setFilter(categoryId);
  };
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing real-world applications that demonstrate my expertise in full-stack development, 
            data processing, and intelligent systems
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleFilterChange(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Filter size={16} />
              {category.name}
              <span className={`px-2 py-1 rounded-full text-xs ${
                filter === category.id ? 'bg-white/20' : 'bg-gray-200'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <project.icon size={20} className="text-gray-700" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-2xl text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-2xl text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No projects found for this category.</p>
          </motion.div>
        )}
        {/* GitHub CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Explore More on GitHub</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
              Check out my complete portfolio of projects, contributions, and open-source work on GitHub.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/sagargarate22"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              <Github size={20} />
              View GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;