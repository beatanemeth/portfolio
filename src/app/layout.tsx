import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { montserrat, raleway } from '../utils/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Beata Nemeth | Systems-First Architect & AI Engineer',
  description:
    'Architecting scalable digital backbones and AI-driven automation systems. Bridging biological precision with software scalability.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${raleway.variable} antialiased`}
    >
      <body>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
