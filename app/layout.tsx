import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/header';
import { Providers } from './providers';
import { validateEnv } from '@/lib/env';

// Validate environment variables
validateEnv();

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AidBrisk - AI-Powered First Aid Assistant',
  description: 'Empowering individuals with real-time, AI-guided first aid assistance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}