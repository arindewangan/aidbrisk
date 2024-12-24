'use client';

interface GuideErrorProps {
  message: string;
}

export function GuideError({ message }: GuideErrorProps) {
  return (
    <div className="text-destructive mt-4 p-3 rounded-md bg-destructive/10">
      {message}
    </div>
  );
}