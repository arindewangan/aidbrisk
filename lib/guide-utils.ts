import { Instruction } from '@/types/guide';

export function generateInstructionId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function createInstruction(text: string): Instruction {
  return {
    id: generateInstructionId(),
    text,
    isCompleted: false
  };
}

export function toggleInstructionComplete(
  instructions: Instruction[],
  id: string
): Instruction[] {
  return instructions.map(instruction =>
    instruction.id === id
      ? { ...instruction, isCompleted: !instruction.isCompleted }
      : instruction
  );
}

export function createMockInstructions(): Instruction[] {
  const mockSteps = [
    'Check the scene for safety',
    'Assess the person\'s condition',
    'Call emergency services if needed',
    'Begin appropriate first aid measures'
  ];
  
  return mockSteps.map(text => createInstruction(text));
}