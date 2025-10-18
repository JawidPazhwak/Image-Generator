
import React from 'react';
import type { PromptInputProps } from '../types';
import { SparklesIcon } from './icons/SparklesIcon';

const ASPECT_RATIOS = ['1:1', '4:3', '3:4', '16:9', '9:16'];

export const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onSubmit, isLoading, aspectRatio, setAspectRatio }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="bg-slate-900/50 p-6 rounded-lg shadow-lg border border-cyan-400/30 backdrop-blur-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-cyan-300 mb-2 font-orbitron uppercase tracking-widest">Aspect Ratio</h3>
        <div className="grid grid-cols-5 gap-2">
          {ASPECT_RATIOS.map(ratio => (
            <button
              key={ratio}
              onClick={() => setAspectRatio(ratio)}
              disabled={isLoading}
              className={`py-2 px-1 text-sm font-semibold rounded-md transition-all duration-200 border
                ${aspectRatio === ratio 
                  ? 'bg-cyan-400 text-slate-900 border-cyan-400 shadow-[0_0_10px_0] shadow-cyan-400/50' 
                  : 'bg-slate-800/50 text-cyan-300 border-slate-600 hover:bg-slate-700 hover:border-cyan-400 disabled:hover:bg-slate-800/50'} 
                disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {ratio}
            </button>
          ))}
        </div>
      </div>
      
      <h2 className="text-lg font-semibold text-cyan-300 mb-2 font-orbitron uppercase tracking-widest">Prompt</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="e.g., A cyborg contemplating a digital sunset..."
        className="w-full h-40 p-3 bg-slate-800/50 border border-slate-600 rounded-md text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition duration-300 resize-none font-exo"
        disabled={isLoading}
      />
      <button
        onClick={onSubmit}
        disabled={isLoading || !prompt.trim()}
        className="mt-4 w-full flex items-center justify-center gap-2 bg-cyan-500 text-slate-900 font-bold py-3 px-4 rounded-md shadow-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:bg-cyan-500/50 font-orbitron tracking-wider"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            RENDERING...
          </>
        ) : (
          <>
            <SparklesIcon className="w-5 h-5" />
            GENERATE
          </>
        )}
      </button>
    </div>
  );
};
