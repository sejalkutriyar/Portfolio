import { motion, type Variants } from 'framer-motion';
import { Code, Server, Layout, Camera, BookOpen, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const scrollVariants: Variants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  const interestsArea = [
    { icon: <Code />, label: "Clean Code" },
    { icon: <Server />, label: "Backend Architecture" },
    { icon: <Layout />, label: "UI/UX Design" },
    { icon: <BookOpen />, label: "Continuous Learning" },
    { icon: <Camera />, label: "Photography" },
    { icon: <Code />, label: "Code Debugger" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={scrollVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-600">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
              <p>
                Hello! I am <strong className="text-primary-600 dark:text-primary-400 font-semibold">Sejal Kumari</strong>, a passionate software developer with a strong focus on creating dynamic, intuitive, and responsive web applications. 
              </p>
              <p>
                My journey into tech began with a curiosity about how the digital platforms we use daily are built. Today, I am experienced in modern full-stack development, specializing in building robust architectures and sleek user interfaces that provide exceptional user experiences.
              </p>
              <div className="p-6 mt-8 rounded-2xl glass border border-primary-100 dark:border-slate-800 bg-primary-50/50 dark:bg-slate-800/50 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary-500 rounded-l-2xl"/>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">Career Goals</h3>
                <p className="text-base text-slate-600 dark:text-slate-400">
                  I aim to contribute to meaningful projects that solve real-world problems. In the future, I aspire to delve deeper into Artificial Intelligence and Cloud Computing, aiming to become an architect who bridges cutting-edge tech with scalable applications.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Interests & Focus</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {interestsArea.map((interest, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors shadow-sm"
                  >
                    <div className="text-primary-500 dark:text-primary-400 mb-3 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                      {interest.icon}
                    </div>
                    <span className="font-medium text-slate-700 dark:text-slate-300 text-center">{interest.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
