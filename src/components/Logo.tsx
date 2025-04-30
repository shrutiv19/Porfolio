"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[42px] h-[42px]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
        <title>Logo</title>
        <g transform="translate(-8.000000, -2.000000)">
          <g transform="translate(11.000000, 5.000000)">
            <polygon
              stroke="#64FFDA"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="39 0 0 22 0 67 39 90 78 67 78 22"
              fill="none"
            />
            <path
              d="M48 32 C48 32 42 32 39 32 C33 32 28 34 28 39 C28 44 35 45 39 45 C46 45 50 47 50 52 C50 57 45 59 39 59 C36 59 30 59 30 59"
              stroke="#64FFDA"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
        </g>
      </svg>
    </motion.div>
  );
};

export default Logo;
