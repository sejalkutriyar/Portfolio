import { motion, type Variants } from 'framer-motion';

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
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden relative">
      {/* Subtle Background decorations */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        <motion.div 
          className="w-full lg:w-3/5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top small title */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="text-primary-500 font-bold tracking-widest uppercase text-xl md:text-2xl">
              SEJAL KUMARI
            </span>
          </motion.div>
          
          {/* Main Huge Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-[5.5rem] font-bold tracking-tight mb-8 leading-[1.05] text-slate-900 dark:text-white max-w-5xl">
            Designing digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-500">solutions</span> that scale.
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-14 max-w-4xl leading-relaxed font-light">
            Hi, I'm Sejal Kumari. A Computer Science student, Full Stack Developer, and continuous learner, passionate about clean code, robust systems, and building web apps that create real-world impact. I transform complex problems into elegant, user-centric solutions using modern technologies.
          </motion.p>

          {/* Buttons Row Matching Screenshot */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-24">
            <a href="#about" className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-primary-600 hover:text-white hover:border-primary-600 dark:hover:bg-primary-500 dark:hover:text-white dark:hover:border-primary-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/25">
              About Me
            </a>
            <a href="#projects" className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-primary-600 hover:text-white hover:border-primary-600 dark:hover:bg-primary-500 dark:hover:text-white dark:hover:border-primary-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/25">
              View Projects
            </a>
            <a href="#experience" className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-primary-600 hover:text-white hover:border-primary-600 dark:hover:bg-primary-500 dark:hover:text-white dark:hover:border-primary-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/25">
              Experience
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-primary-600 hover:text-white hover:border-primary-600 dark:hover:bg-primary-500 dark:hover:text-white dark:hover:border-primary-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/25">
              Contact Me
            </a>
          </motion.div>

        </motion.div>

        {/* Right Image/Graphic */}
        <motion.div 
          className="flex-1 hidden lg:flex justify-center lg:justify-end w-full"
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
              <img src="/profile.jpg" alt="Sejal Kumari" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
        
        </div>

        {/* Bottom Section: Stats & Resumes */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full mt-20"
        >
          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-12 border-t border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-2">50+</h3>
              <p className="text-xs tracking-widest uppercase text-slate-500 font-bold">PROJECTS BUILT</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-2">2 Years</h3>
              <p className="text-xs tracking-widest uppercase text-slate-500 font-bold">CODING EXP</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-2">20+</h3>
              <p className="text-xs tracking-widest uppercase text-slate-500 font-bold">HACKATHONS</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-2">Open</h3>
              <p className="text-xs tracking-widest uppercase text-slate-500 font-bold">SOURCE CONTRIBUTIONS</p>
            </div>
          </div>

          {/* Resumes */}
          <div className="flex gap-4 mt-8 pt-4">
            <a href="https://drive.google.com/file/d/1qLjHHIizL8DfVOB1I-cmOShGBR_yDhtN/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:text-primary-700 underline underline-offset-4 font-medium tracking-wide">
              Download Frontend Resume
            </a>
            <span className="text-slate-400">|</span>
            <a href="https://drive.google.com/file/d/10TEOK8AyYZ-4b4dq2QOzUDsf4_bDe2I_/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-600 hover:text-purple-700 underline underline-offset-4 font-medium tracking-wide">
              Download MERN Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
