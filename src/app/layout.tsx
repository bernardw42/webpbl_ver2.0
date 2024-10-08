'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/app/components/Footer';
import Navbar from './components/NavbarPages';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import Floating from './components/Floating';

const inter = Inter({ subsets: ['latin'] });

function ClientOnly({ children } : { children: React.ReactNode }) {
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) return null;
  
    return <>{children}</>;
  }
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html>
        <body className={inter.className}>
          <Suspense fallback={<div>Loading...</div>}>
          <ClientOnly>
          <Navbar />
          <Floating></Floating>
              {children}
          <Footer />
          </ClientOnly>
          </Suspense>
        </body>
      </html>
    );
  }
  
