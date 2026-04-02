import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/app/components/Footer';
import Navbar from './components/NavbarPages';
import Floating from './components/Floating';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Panca Budi Logistindo',
    template: '%s | Panca Budi Logistindo',
  },
  description: 'Panca Budi Logistindo website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <Navbar />
          <Floating />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
