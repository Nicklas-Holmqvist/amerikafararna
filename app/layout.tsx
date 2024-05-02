import { Analytics } from '@vercel/analytics/react';
import { DM_Serif_Display, Special_Elite } from 'next/font/google';

import './globals.css';
import Header from './components/Header';

const specialElite = Special_Elite({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-specialElite',
});
const serifDisplay = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-serifDisplay',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={`${serifDisplay.variable} ${specialElite.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
