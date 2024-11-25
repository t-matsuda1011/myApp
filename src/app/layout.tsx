import React, { ReactNode } from 'react';
import Header from '../components/header';
import './/globals.css';
import BackgroundAnime from '@/components/background-animation';

type Props = { children: ReactNode };

const Layout: React.FC<Props> = React.memo(({ children }: Props) => {
  return (
    <html>
      <body>
        <Header />
        <main className="mx-auto px-10 pt-16 text-center">
          {children}
        </main>
        <BackgroundAnime/>
      </body>
    </html>
  );
});

Layout.displayName = 'Layout';
export default Layout;