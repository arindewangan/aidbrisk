'use client';

import { useState } from 'react';
import { Mic, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface GuideInputProps {
  onSubmit: (input: string) => void;
  isLoading?: boolean;
}

export function GuideInput({ onSubmit, isLoading = false }: GuideInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSubmit(input.trim());
      setInput('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardContent className="pt-6">
          <Textarea
            placeholder="Describe the emergency situation or symptoms..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[100px]"
            disabled={isLoading}
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" size="icon" disabled={isLoading}>
            <Mic className="h-4 w-4" />
          </Button>
          <Button type="submit" disabled={!input.trim() || isLoading}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Get Instructions
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}