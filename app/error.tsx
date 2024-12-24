'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[50vh]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-destructive">Something went wrong!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            {error.message || 'An unexpected error occurred. Please try again.'}
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={reset} variant="outline">
            Try again
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}