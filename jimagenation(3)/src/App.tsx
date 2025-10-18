// Fix: This file was empty, causing module resolution errors.
// This implementation provides the root React component for the application.
import React, { useState } from 'react';
import { PromptInput } from './components/PromptInput';
import { ImageDisplay } from './components/ImageDisplay';
import { generateImage } from './services/geminiService';

function App() {
  const [prompt, setPrompt] = useState<string>('');
  const [aspectRatio, setAspectRatio] = useState<string>('1:1');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!prompt.trim()) {
      return;
    }

    setIsLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const url = await generateImage(prompt, aspectRatio);
      setImageUrl(url);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unexpected error occurred. Please check the console for more details.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans flex flex-col items-center justify-center p-4 selection:bg-cyan-400/20" style={{ background: 'radial-gradient(circle, #0f172a 0%, #020617 100%)' }}>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%224%22%20height%3D%224%22%20viewBox%3D%220%200%204%204%22%3E%3Cpath%20fill%3D%22%230891b2%22%20fill-opacity%3D%220.1%22%20d%3D%22M0%202h2V0h2v2H2v2H0V2z%22%3E%3C/path%3E%3C/svg%3E')]"></div>
      <main className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start z-10">
        <div className="flex flex-col gap-8">
          <header>
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 font-orbitron tracking-tighter shadow-[0_0_15px] shadow-cyan-500/30">
              IMAGEN-4.0
            </h1>
            <p className="text-slate-400 mt-2 font-exo text-lg">
              AI Image Generation powered by Gemini. Describe your vision and watch it materialize.
            </p>
          </header>
          <PromptInput
            prompt={prompt}
            setPrompt={setPrompt}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            aspectRatio={aspectRatio}
            setAspectRatio={setAspectRatio}
          />
        </div>
        <ImageDisplay
          imageUrl={imageUrl}
          isLoading={isLoading}
          error={error}
          prompt={prompt}
          aspectRatio={aspectRatio}
        />
      </main>
      <footer className="w-full max-w-6xl mx-auto text-center mt-8 text-slate-500 text-sm font-exo z-10">
        <p>&copy; {new Date().getFullYear()} AI Vision Systems. Powered by Google Gemini API.</p>
      </footer>
    </div>
  );
}

export default App;
