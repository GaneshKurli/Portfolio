import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SideSocials } from './SideSocials';
import { LoadingScreen } from './LoadingScreen';
import { FuturisticBackground } from './FuturisticBackground';
import { ThemeProvider } from '../context/ThemeProvider';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LayoutInner>
        {children}
      </LayoutInner>
    </ThemeProvider>
  );
}

function LayoutInner({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scroll while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <FuturisticBackground />
      <Navbar />
      <SideSocials />
      
      <main className={`flex-grow transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </main>

      {!isLoading && <Footer />}
    </div>
  );
}
