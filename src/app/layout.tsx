import React, { ReactNode } from 'react';
import Header from '../components/header';
import './/globals.css';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <html>
      <body>
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}