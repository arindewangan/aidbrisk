import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Phone, Globe, Wifi, Camera, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: Heart,
      title: 'AI-Powered Guidance',
      description: 'Get instant, step-by-step first aid instructions powered by advanced AI',
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Access help in multiple languages for global accessibility',
    },
    {
      icon: Wifi,
      title: 'Offline Access',
      description: 'Download essential guides for use without internet connection',
    },
    {
      icon: Camera,
      title: 'AR Integration',
      description: 'Visual guidance through augmented reality for proper technique',
    },
    {
      icon: Phone,
      title: 'Emergency Contact',
      description: 'One-tap emergency services with GPS location sharing',
    },
    {
      icon: FileText,
      title: 'Incident Reporting',
      description: 'Document and share successful interventions to help others',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Your AI-Powered First Aid Assistant</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Empowering you to save lives with real-time, expert guidance
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/guide">
            <Button size="lg" className="text-lg px-8">
              Start AI Guide
            </Button>
          </Link>
          
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Icon className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </section>

      <section className="text-center bg-muted rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Join thousands of users who are prepared to help others in emergencies.
        </p>
        <Button size="lg" variant="secondary" className="text-lg px-8">
          Learn More
        </Button>
      </section>
    </div>
  );
}