
import React from 'react';
import type { IconProps } from '../../types';

export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"></path>
    <path d="M22 2L20 6"></path>
    <path d="M2 22L6 20"></path>
    <path d="M2 2L6 4"></path>
    <path d="M22 22L20 18"></path>
  </svg>
);
