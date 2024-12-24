'use client';

import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Instruction } from '@/types/guide';

interface InstructionItemProps {
  instruction: Instruction;
  onToggle: (id: string) => void;
}

export function InstructionItem({ instruction, onToggle }: InstructionItemProps) {
  return (
    <div
      className={cn(
        'flex items-start space-x-3 p-3 rounded-lg transition-colors cursor-pointer',
        instruction.isCompleted ? 'bg-muted/50' : 'hover:bg-muted/30'
      )}
      onClick={() => onToggle(instruction.id)}
    >
      <CheckCircle2
        className={cn(
          'h-5 w-5 mt-0.5',
          instruction.isCompleted ? 'text-green-500' : 'text-muted-foreground'
        )}
      />
      <span
        className={cn(
          'flex-1',
          instruction.isCompleted && 'line-through text-muted-foreground'
        )}
      >
        {instruction.text}
      </span>
    </div>
  );
}