import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'dist',
  basePath: isProd ? '/portfolio' : '',
  // Use unoptimized images for GitHub Pages static export
  // This is the simplest way to avoid needing a custom loader file
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
