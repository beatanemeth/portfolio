const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

export const withBasePath = (path: string) => `${basePath}${path}`;
