import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names into a single string, handling conditional classes
 * and resolving Tailwind CSS conflicts (e.g., px-8 and px-0).
 *
 * @param inputs - An array of class values (strings, objects, arrays, etc.)
 * @returns A single string of merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
