import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { MainWrapper } from '@/components/main-wrapper';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainWrapper.Public>{children}</MainWrapper.Public>
      </body>
    </html>
  );
}
