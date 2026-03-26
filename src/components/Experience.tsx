import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Tech Community Leader & Organizer",
      company: "Various Developer Communities",
      date: "2024 - Present",
      location: "On-Campus / Remote",
      type: "experience",
      points: [
        "Led peer-to-peer coding sessions, mentoring junior students in full-stack web development.",
        "Organized and managed tech workshops, hackathons, and coding bootcamps on campus.",
        "Fostered a collaborative environment to actively discuss system design and algorithmic problem-solving."
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Client Projects",
      date: "2024 - Present",
      location: "Remote",
      type: "experience",
      points: [
        "Designed and developed responsive, high-performance web applications tailored to specific client requirements.",
        "Communicated actively with clients to gather requirements, provide technical consultations, and deliver MVPs on time.",
        "Handled end-to-end deployment, ensuring cross-browser compatibility and optimized web-vitals."
      ]
    },
    {
      title: "Open Source Contributor",
      company: "GSoC, Outreachy, GSSoC & SOB",
      date: "2024 - Present",
      location: "Remote",
      type: "experience",
      points: [
        "Actively contributing to prestigious open-source programs including Google Summer of Code (GSoC), Outreachy, GirlScript Summer of Code (GSSoC), and Summer of Bitcoin (SOB).",
        "Collaborating with global developers to understand large-scale codebases, resolving complex issues, and reviewing pull requests.",
        "Gaining hands-on experience with advanced Git workflows, project architecture, and agile development pipelines."
      ]
    },
    {
      title: "Competitive Programmer & Hackathon Enthusiast",
      company: "20+ Hackathons",
      date: "2024 - Present",
      location: "Various Locations",
      type: "experience",
      points: [
        "Participated in over 20 hackathons, rapidly conceptualizing and building full-stack MVPs under strict time constraints.",
        "Collaborated with cross-functional teams to brainstorm innovative tech solutions and pitch ideas to industry judges.",
        "Strengthened problem-solving skills and ability to quickly learn and implement new libraries and APIs on the fly."
      ]
    },
    {
      title: "Bachelor of Technology",
      company: "Polaris School of Technology",
      date: "2024 - 2028",
      location: "India",
      type: "education",
      points: [
        "Focusing deeply on AI/ML, Full-Stack Web Development, Data Structures, Algorithms, and Core Computer Science concepts.",
        "Participating in peer-to-peer programming sessions, technical workshops, and coding community events."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-600">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline center line */}
          <div className="absolute left-0 md:left-1/2 md:-ml-px top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-300 to-transparent dark:from-primary-600 dark:via-primary-800" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 md:left-1/2 -ml-6 md:-ml-6 top-0 w-12 h-12 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-primary-500 flex items-center justify-center text-white z-10 shadow-lg shadow-primary-500/30">
                  {exp.type === 'experience' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16'}`}>
                  <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 relative group">
                    
                    {/* Arrow mapping */}
                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white dark:bg-slate-800 border-t border-r border-slate-200 dark:border-slate-700 transform ${index % 2 === 0 ? '-right-2 rotate-45 border-b-0 border-l-0 group-hover:border-primary-300 dark:group-hover:border-primary-700' : '-left-2 -rotate-135 group-hover:border-primary-300 dark:group-hover:border-primary-700'}`} />

                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2 justify-start md:justify-end">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white order-2 md:order-1 self-start md:self-auto">
                        {exp.title}
                      </h3>
                    </div>

                    <div className={`flex flex-wrap items-center gap-3 text-sm font-semibold mb-6 text-primary-600 dark:text-primary-400 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary-500 hidden md:inline-block"></span>
                        {exp.company}
                      </span>
                      <span className="hidden sm:inline-block opacity-40">•</span>
                      <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                        <Calendar size={14} />
                        {exp.date}
                      </span>
                      <span className="hidden sm:inline-block opacity-40">•</span>
                      <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <ul className={`space-y-3 text-slate-600 dark:text-slate-400 ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-2 items-start justify-start">
                          <span className={`text-primary-500 mt-1 min-w-[12px] flex ${index % 2 === 0 ? 'md:hidden' : ''}`}>▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
