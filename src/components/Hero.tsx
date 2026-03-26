import { motion, type Variants } from 'framer-motion';
import { Mail, Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-10 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left content */}
          <motion.div 
            className="flex-1 w-full max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-sm font-semibold tracking-wide border border-primary-200 dark:border-primary-800">
                Hello, I'm
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-slate-900 dark:text-white">Sejal </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-600">Kumari</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-6">
              Full Stack Developer & AI Enthusiast
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
              I build scalable, modern digital experiences. Crafting beautiful frontend interfaces accompanied by robust backend architectures. Focused on clean code, responsive design, and cutting-edge web technologies.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10">
              <a href="#projects" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-medium transition-colors cursor-pointer group shadow-lg shadow-primary-500/30">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a href="#contact" className="inline-flex items-center gap-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-6 py-3 rounded-full font-medium transition-colors cursor-pointer border border-transparent dark:border-slate-700">
                Contact Me
              </a>
              
              <a href="https://drive.google.com/file/d/1qLjHHIizL8DfVOB1I-cmOShGBR_yDhtN/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium px-4 py-3 rounded-full transition-colors cursor-pointer underline-offset-4 hover:underline">
                <Download size={18} />
                Frontend Resume
              </a>
              <a href="https://drive.google.com/file/d/10TEOK8AyYZ-4b4dq2QOzUDsf4_bDe2I_/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium px-4 py-3 rounded-full transition-colors cursor-pointer underline-offset-4 hover:underline">
                <Download size={18} />
                MERN Resume
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 text-slate-500 dark:text-slate-400">
              <a href="https://github.com/sejalkutriyar" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer p-2 -m-2">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sejalkutriyar/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer p-2 -m-2">
                <FaLinkedin size={24} />
              </a>
              <a href="https://x.com/sejal_kuma23465" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer p-2 -m-2">
                <FaTwitter size={24} />
              </a>
              <a href="mailto:seju020322@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer p-2 -m-2">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image/Graphic */}
          <motion.div 
            className="flex-1 hidden lg:flex justify-center w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer dashed rotate ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-300 dark:border-primary-700 animate-[spin_20s_linear_infinite]" />
              
              {/* Inner glowing effect */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary-500 to-purple-600 opacity-20 dark:opacity-40 blur-2xl animate-pulse" />
              
              {/* Image container */}
              <div className="absolute inset-6 rounded-full bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-900 overflow-hidden shadow-2xl flex items-center justify-center">
                {/* Fallback avatar if no image is available */}
                <span className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary-400 to-purple-500">
                  SK
                </span>
                {/* <img src="/profile.jpg" alt="Sejal Kumari" className="w-full h-full object-cover" /> */}
              </div>

              {/* Floating badges */}
              <motion.div 
                className="absolute top-10 -left-6 glass px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm font-semibold dark:text-white">Available</span>
              </motion.div>

              <motion.div 
                className="absolute bottom-16 -right-8 glass px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-xl">✨</span>
                <span className="text-sm font-semibold dark:text-white">Web Dev</span>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
