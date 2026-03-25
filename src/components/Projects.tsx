import { motion, type Variants } from 'framer-motion';
import { MonitorPlay } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const projects = [
    {
      title: "EduTrack Platform",
      description: "A comprehensive Integrated Student Track Record & PTM Video Suite with WebRTC implementation. Features role-based access control and live parent-teacher communication.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
      tech: ["React.js", "Node.js", "Socket.io", "WebRTC", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/sejalkutriyar/Student-Track-Record.git",
      live: "https://student-track-record.onrender.com/",
    },
    {
      title: "EstateML Price Predictor",
      description: "End-to-end machine learning pipeline for predicting house prices. Incorporates complex data preprocessing, localized feature engineering, and a responsive web dashboard.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      tech: ["Python", "Scikit", "Flask", "React", "Docker"],
      github: "https://github.com/sejalkutriyar/estateml",
      live: null,
    },
    {
      title: "Nexus AI Chatbot",
      description: "A highly interactive AI chatbot built with modern frontend frameworks and integrated with advanced language models to provide contextual, natural language responses.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      tech: ["Next.js", "TypeScript", "Tailwind", "OpenAI API"],
      github: "https://github.com/sejalkutriyar/nexus-ai",
      live: "https://nexus-ai-demo.com",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="group bg-slate-50 dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-200 dark:border-slate-700">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FaGithub size={18} />
                    Code
                  </a>
                  
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors ml-auto"
                    >
                      <MonitorPlay size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
