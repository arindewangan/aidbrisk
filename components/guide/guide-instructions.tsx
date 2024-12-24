'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InstructionItem } from './instruction-item';
import { Instruction } from '@/types/guide';
import { toggleInstructionComplete } from '@/lib/guide-utils';
import { useState } from 'react';

interface GuideInstructionsProps {
  initialInstructions: Instruction[];
}

export function GuideInstructions({ initialInstructions }: GuideInstructionsProps) {
  const [instructions, setInstructions] = useState<Instruction[]>(initialInstructions);

  const handleToggle = (id: string) => {
    setInstructions(prev => toggleInstructionComplete(prev, id));
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>First Aid Instructions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {instructions.map(instruction => (
            <InstructionItem
              key={instruction.id}
              instruction={instruction}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}