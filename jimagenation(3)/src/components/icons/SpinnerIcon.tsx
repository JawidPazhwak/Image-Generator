import React from 'react';
import type { IconProps } from '../../types';

export const SpinnerIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
  >
    <style>{`
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .spinner-path {
        animation: rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: center;
      }
    `}</style>
    <path 
      className="spinner-path" 
      d="M12 2a10 10 0 0 0-3.71 19.38 10 10 0 0 0 11.42-15.67" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);
