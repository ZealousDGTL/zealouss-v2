'use client';

import { motion } from 'framer-motion';

interface DynamicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function DynamicButton({ 
  children, 
  onClick, 
  className = '' 
}: DynamicButtonProps) {
  return (
    <motion.button
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        bg-gradient-to-r from-purple-600 to-blue-600
        hover:from-purple-500 hover:to-blue-500
        text-white font-semibold
        py-4 px-8
        rounded-[2rem]
        shadow-lg
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
