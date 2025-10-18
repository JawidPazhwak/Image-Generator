export interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  aspectRatio: string;
  setAspectRatio: (ratio: string) => void;
}

export interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
  prompt: string;
  aspectRatio: string;
}

export interface IconProps {
    className?: string;
}