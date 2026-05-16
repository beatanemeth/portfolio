import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: 'Beata Nemeth | Systems-First Architect & AI Engineer',
  description:
    'Architecting scalable digital backbones and AI-driven automation systems. Bridging biological precision with software scalability.',
  openGraph: {
    title: 'Beata Nemeth | Systems-First Architect & AI Engineer',
    description:
      'Architecting scalable digital backbones and AI-driven automation systems. Bridging biological precision with software scalability.',
    url: 'https://beatanemeth.github.io/portfolio/', // Update with your actual site URL
    siteName: 'Beata Nemeth Portfolio',
    images: [
      {
        url: 'https://beatanemeth.github.io/portfolio/og-image.webp', // Ensure this exists in public/
        width: 1200,
        height: 630,
        alt: 'Beata Nemeth Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beata Nemeth | Systems-First Architect & AI Engineer',
    description:
      'Architecting scalable digital backbones and AI-driven automation systems. Bridging biological precision with software scalability.',
    images: ['https://beatanemeth.github.io/portfolio/og-image.webp'],
  },
};
