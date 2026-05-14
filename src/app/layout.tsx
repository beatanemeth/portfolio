import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { siteMetadata } from '@/utils/metadata';
import clsx from 'clsx';
import { montserrat, raleway } from '../utils/fonts';
import './globals.css';

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(montserrat.variable, raleway.variable, 'antialiased')}
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
