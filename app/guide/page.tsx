'use client';

import { GuideInput } from '@/components/guide/guide-input';
import { GuideInstructions } from '@/components/guide/guide-instructions';
import { EmergencyBanner } from '@/components/guide/emergency-banner';
import { GuideHeader } from '@/components/guide/guide-header';
import { GuideError } from '@/components/guide/guide-error';
import { GuideContainer } from '@/components/guide/guide-container';
import { useGuideState } from '@/hooks/use-guide-state';

export default function GuidePage() {
  const { state, handleSubmit } = useGuideState();

  return (
    <GuideContainer>
      <EmergencyBanner />
      <GuideHeader />
      <div className="mt-8">
        <GuideInput onSubmit={handleSubmit} isLoading={state.isLoading} />
        {state.error && <GuideError message={state.error} />}
        {state.instructions.length > 0 && (
          <GuideInstructions initialInstructions={state.instructions} />
        )}
      </div>
    </GuideContainer>
  );
}