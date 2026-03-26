import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

import InitialLoader from './components/InitialLoader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark'); // Default to dark mode for a premium feel

  useEffect(() => {
    // Check local storage for theme preference or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 second loading screen
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-primary-500/30">

      
      <AnimatePresence mode="wait">
        {loading && <InitialLoader key="loader" />}
      </AnimatePresence>
      
      {!loading && (
        <div className="flex flex-col min-h-screen">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          
          <main className="flex-grow">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
