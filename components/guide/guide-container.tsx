'use client';

import { ReactNode } from 'react';

interface GuideContainerProps {
  children: ReactNode;
}

export function GuideContainer({ children }: GuideContainerProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">{children}</div>
    </div>
  );
}