import { GoogleGenerativeAI } from '@google/generative-ai';

// Create a singleton instance
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

const FIRST_AID_PROMPT = `You are a first aid expert assistant. Provide clear, step-by-step instructions for the given medical situation. Focus on immediate, life-saving actions. Format the response as a numbered list of steps. Keep each step concise and actionable. If the situation requires immediate professional medical attention, make that the first step.`;

export class GeminiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GeminiError';
  }
}

export async function generateFirstAidInstructions(situation: string): Promise<string[]> {
  if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
    throw new GeminiError('Gemini API key is not configured');
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent([FIRST_AID_PROMPT, situation]);
    
    if (!result.response) {
      throw new GeminiError('No response received from Gemini API');
    }

    const text = result.response.text();
    
    // Split the response into steps and clean up
    const steps = text
      .split('\n')
      .filter(line => line.trim())
      .map(line => line.replace(/^\d+\.\s*/, '').trim());

    if (steps.length === 0) {
      throw new GeminiError('No instructions generated');
    }

    return steps;
  } catch (error) {
    if (error instanceof GeminiError) {
      throw error;
    }
    throw new GeminiError(
      error instanceof Error ? error.message : 'Failed to generate instructions'
    );
  }
}