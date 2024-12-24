import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function GuideHeader() {
  return (
    <Card className="bg-primary-foreground">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">AI First Aid Guide</CardTitle>
        <CardDescription>
          Describe the situation or symptoms, and I'll provide step-by-step first aid instructions.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}