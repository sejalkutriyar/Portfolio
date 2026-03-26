import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <div className="flex gap-6 mb-8">
          <a href="https://github.com/sejalkutriyar" className="hover:text-white transition-colors cursor-pointer">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sejalkutriyar/" className="hover:text-white transition-colors cursor-pointer">
            <FaLinkedin size={20} />
          </a>
          <a href="https://x.com/sejal_kuma23465" className="hover:text-white transition-colors cursor-pointer">
            <FaTwitter size={20} />
          </a>
          <a href="mailto:seju020322@gmail.com" className="hover:text-white transition-colors cursor-pointer">
            <Mail size={20} />
          </a>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium mb-8">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex flex-col items-center text-slate-500 text-sm">
          <p>&copy; {currentYear} Sejal. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
