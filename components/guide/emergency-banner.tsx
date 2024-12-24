'use client';

import { AlertCircle, Phone } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export function EmergencyBanner() {
  const handleEmergencyCall = () => {
    window.location.href = 'tel:112';
  };

  return (
    <Alert variant="destructive" className="mb-6">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Emergency Services</AlertTitle>
      <AlertDescription className="flex items-center justify-between">
        <span>If this is a life-threatening emergency, call emergency services immediately.</span>
        <Button variant="destructive" size="sm" onClick={handleEmergencyCall}>
          <Phone className="mr-2 h-4 w-4" />
          Call 112
        </Button>
      </AlertDescription>
    </Alert>
  );
}