import React from 'react';
import { motion } from 'framer-motion';

const InitialLoader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-dark text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="w-16 h-16 border-t-4 border-r-4 border-primary-500 rounded-full animate-spin relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 w-full h-full border-t-4 border-l-4 border-primary-300 rounded-full animate-ping opacity-20"></div>
        </motion.div>
        
        <motion.h1
          className="mt-8 text-2xl font-light tracking-[0.3em] uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Loading
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default InitialLoader;
