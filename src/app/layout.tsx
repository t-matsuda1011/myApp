import React, { ReactNode } from 'react';
import Header from '../components/header';
import './/globals.css';
import BackgroundAnime from '@/components/background-animation';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <html>
      <body>
        <Header />
        <main className="mx-auto px-10 pt-16 pb-20 text-center">
          {children}
        </main>
        <BackgroundAnime/>
      </body>
    </html>
  );
}

Layout.displayName = 'Layout';