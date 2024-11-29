import React, { ReactNode } from 'react';
import Header from '../components/header';
import './/globals.css';
import BackgroundAnime from '@/components/background-animation';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <html>
      <BackgroundAnime/>
      <body>
        <Header />
        <main className="mx-auto px-10 pt-16 text-center">
          {children}
        </main>
      </body>
    </html>
  );
}

Layout.displayName = 'Layout';