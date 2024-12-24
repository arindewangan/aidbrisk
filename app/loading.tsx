import { Card, CardContent } from '@/components/ui/card';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[50vh]">
      <Card>
        <CardContent className="flex items-center justify-center p-8">
          <LoadingSpinner size="lg" />
        </CardContent>
      </Card>
    </div>
  );
}