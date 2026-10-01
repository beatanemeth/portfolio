import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: 'Beata Nemeth | Data Engineering',
  description:
    'A data engineering mindset, turning scattered, manual information into clean, automated data pipelines. From neurobiology research to data systems.',
  openGraph: {
    title: 'Beata Nemeth | Data Engineering',
    description:
      'A data engineering mindset, turning scattered, manual information into clean, automated data pipelines. From neurobiology research to data systems.',
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
    title: 'Beata Nemeth | Data Engineering',
    description:
      'A data engineering mindset, turning scattered, manual information into clean, automated data pipelines. From neurobiology research to data systems.',
    images: ['https://beatanemeth.github.io/portfolio/og-image.webp'],
  },
};
