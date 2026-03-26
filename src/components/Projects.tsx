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
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      tech: ["React.js", "Node.js", "Socket.io", "WebRTC", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/sejalkutriyar/Student-Track-Record.git",
      live: "https://student-track-record.onrender.com/",
    },
    {
      title: "AI Agent Manager",
      description: "An AI Agent System exploring Long-term Memory and Context Awareness for AI Agents. Acts as an intelligent auditor making decisions based on historical supplier performance using Google Gemini and ChromaDB.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      tech: ["Python", "Streamlit", "Gemini AI", "ChromaDB", "SQLite"],
      github: "https://github.com/sejalkutriyar/AI_Agent_Manager.git",
      live: "https://ai-agent-sejal-01.streamlit.app/",
    },
    {
      title: "The Recursive Grid",
      description: "An interactive 3x3 logic puzzle game built with React. The objective is to manipulate grid values through strategic clicks, triggering ripple effects based on specific divisibility rules.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/sejalkutriyar/The-Recursive-Grid.git",
      live: "https://the-recursive-grid-wheat.vercel.app/",
    },
    {
      title: "Zomato Pro Hub",
      description: "A full-stack MERN application for managing restaurant operations and delivery partners. Features real-time order tracking, dashboard for managers, and a dedicated interface for riders.",
      image: "https://picsum.photos/id/42/800/600",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/sejalkutriyar/Zomato_Project.git",
      live: "https://zomato-project-sand.vercel.app/",
    },
    {
      title: "Badminton Booking Court",
      description: "A production-like MVP for booking badminton courts. Includes dynamic pricing, inventory management, atomic bookings, and an admin panel to manage courts and coaches.",
      image: "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?auto=format&fit=crop&q=80&w=800",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/sejalkutriyar/Badminton-Booking-Court.git",
      live: "https://badminton-booking-court-xi.vercel.app/",
    },
    {
      title: "NewsDeck Reader Pro",
      description: "A modern, feature-rich news reader application built with React Native and Expo. Categorizes top headlines, features offline reading capabilities and intuitive search.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
      tech: ["React Native", "Expo", "NewsData.io", "AsyncStorage"],
      github: "https://github.com/sejalkutriyar/NewsDeck-Reader-Pro.git",
      live: "https://news-deck-reader-pro.vercel.app/",
    },
    {
      title: "AI Text Summarizer",
      description: "A simple Python app that summarizes long text into concise summaries using Hugging Face Transformers with the facebook/bart-large-cnn model and a clean Gradio UI.",
      image: "https://picsum.photos/id/20/800/600",
      tech: ["Python", "Hugging Face", "Gradio", "PyTorch"],
      github: "https://github.com/sejalkutriyar/Text_Summarize.git",
      live: null,
    },
    {
      title: "Smart Assistive Chatbot",
      description: "A minimal, accessible chatbot scaffold with GPT-based summaries, text-to-speech output, Braille-ready text output, and an accessible frontend with voice input.",
      image: "https://picsum.photos/id/60/800/600",
      tech: ["Node.js", "Express", "OpenAI", "Web Speech API"],
      github: "https://github.com/sejalkutriyar/ChatBot.git",
      live: null,
    },
    {
      title: "Authentication App",
      description: "A simple React-based Authentication implementation that demonstrates basic login functionality and secure routing paradigms.",
      image: "https://picsum.photos/id/0/800/600",
      tech: ["React", "React Router", "CSS"],
      github: "https://github.com/sejalkutriyar/Authentication-App.git",
      live: "https://moonlit-melomakarona-dafdda.netlify.app/",
    },
    {
      title: "Next SpaceX Launcher",
      description: "A front-end application displaying SpaceX launches, leveraging React and modern UI libraries to present an engaging space exploration experience.",
      image: "https://picsum.photos/id/119/800/600",
      tech: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/sejalkutriyar/Next-SpaceX-Launcher.git",
      live: "https://next-spacex.netlify.app/",
    },
    {
      title: "StopWatch App",
      description: "A modern React Stopwatch app with start, stop, reset, and lap features. Includes a beautiful, colorful UI with gradients, animated transitions, and responsive design.",
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "Vite", "CSS"],
      github: "https://github.com/sejalkutriyar/StopWatch.git",
      live: "https://watchstop.netlify.app/",
    },
    {
      title: "Currency Converter",
      description: "A responsive application allowing users to convert between multiple currencies using real-time exchange rates. Perfect for travelers and finance enthusiasts.",
      image: "https://picsum.photos/id/201/800/600",
      tech: ["React", "Vite", "REST APIs"],
      github: "https://github.com/sejalkutriyar/Currency_Converter.git",
      live: "https://fantastic-salmiakki-487b91.netlify.app/",
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
