import React, { ReactNode } from 'react';
import Header from '../components/header';
import './/globals.css';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <html>
      <body>
        <Header />
        <main className="mx-auto px-10 pt-16 max-w-7xl flex items-center justify-between">
          {children}
        </main>
      </body>
    </html>
  )
}