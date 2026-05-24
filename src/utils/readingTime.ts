/**
 * Calculates the reading time of a given text string.
 * Assumes an average reading speed of 225 words per minute.
 */
export const calculateReadingTime = (text: string): string => {
  if (!text) return '0 min read';

  const wordsPerMinute = 225;
  const noOfWords = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(noOfWords / wordsPerMinute);

  return `${minutes} min read`;
};
