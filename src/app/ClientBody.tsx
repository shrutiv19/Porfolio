"use client";

import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

export default function ClientBody({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  const hexagonVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.01 }
      }
    }
  };

  const letterVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut", delay: 2 },
        opacity: { duration: 0.01, delay: 2 }
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {isLoading ? (
        <div className="flex min-h-screen items-center justify-center bg-background">
          <div className="w-[300px] h-[300px]">
            <motion.svg
              viewBox="0 0 100 100"
              initial="hidden"
              animate="visible"
              className="w-full h-full"
            >
              {/* Hexagon */}
              <motion.path
                d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z"
                stroke="#64FFDA"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                variants={hexagonVariants}
              />
              
              {/* Letter S - smoother curves */}
              <motion.path
                d="M65 35 C65 35 55 35 50 35 C42 35 35 38 35 45 C35 52 45 52 50 52 C60 52 65 55 65 62 C65 69 58 72 50 72 C45 72 35 72 35 72"
                stroke="#64FFDA"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={letterVariants}
              />
            </motion.svg>
          </div>
        </div>
      ) : (
        <div id="root">
          {children}
        </div>
      )}
    </ThemeProvider>
  );
}
