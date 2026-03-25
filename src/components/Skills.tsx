import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React / Vite", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 80 },
        { name: "Framer Motion", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 70 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      title: "Tools & AI Architecture",
      color: "from-purple-500 to-fuchsia-500",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 60 },
        { name: "LangChain", level: 70 },
        { name: "Figma", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 group"
            >
              <h3 className={`text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                      {/* Progress Fill */}
                      <motion.div
                        className={`h-2.5 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
