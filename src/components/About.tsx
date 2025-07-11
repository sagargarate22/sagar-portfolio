import React from 'react';
import { Code2, Database, Cloud, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const features = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Building end-to-end applications with modern frameworks and best practices.'
    },
    {
      icon: Database,
      title: 'Backend Architecture',
      description: 'Designing scalable APIs and database solutions for complex business requirements.'
    },
    {
      icon: Cloud,
      title: 'DevOps & Automation',
      description: 'Implementing CI/CD pipelines and automated deployment strategies.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Creating high-performance applications with efficient algorithms and caching.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  I'm a passionate Software Engineer with expertise in building robust full-stack applications 
                  and real-time systems. My journey in software development has been driven by a love for 
                  solving complex problems and creating efficient, scalable solutions.
                </p>
                <p className="text-lg leading-relaxed">
                  With strong backend expertise in <span className="font-semibold text-blue-600">C# and ASP.NET Core</span>, 
                  I specialize in designing RESTful APIs, implementing automated job scheduling with Hangfire, 
                  and building data-driven applications. My <span className="font-semibold text-blue-600"> Python</span> skills complement my backend arsenal, 
                  enabling me to create intelligent systems and automated pipelines.
                </p>
                <p className="text-lg leading-relaxed">
                  I'm passionate about API design, automated testing, and implementing CI/CD pipelines 
                  that ensure reliable software delivery.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, I enjoy exploring new technologies
                  and staying updated with the latest industry trends. I believe in writing clean, 
                  maintainable code that not only works but stands the test of time.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  <feature.icon 
                    size={28} 
                    className="text-blue-600 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;