'use client';

import { useState, useCallback } from 'react';
import { GuideState } from '@/types/guide';
import { generateFirstAidInstructions, GeminiError } from '@/lib/gemini';
import { createInstruction } from '@/lib/guide-utils';

const initialState: GuideState = {
  instructions: [],
  isLoading: false,
  error: null
};

export function useGuideState() {
  const [state, setState] = useState<GuideState>(initialState);

  const handleSubmit = useCallback(async (input: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const steps = await generateFirstAidInstructions(input);
      const instructions = steps.map(step => createInstruction(step));
      setState(prev => ({
        ...prev,
        instructions,
        isLoading: false
      }));
    } catch (error) {
      console.error('Failed to generate instructions:', error);
      const errorMessage = error instanceof GeminiError
        ? error.message
        : 'Failed to generate instructions. Please try again.';
      
      setState(prev => ({
        ...prev,
        error: errorMessage,
        isLoading: false
      }));
    }
  }, []);

  const resetState = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    state,
    handleSubmit,
    resetState
  };
}