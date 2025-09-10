import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Company',
  description: 'A modern company website.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
