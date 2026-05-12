'use client';

import { Button } from '@heroui/react';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // Clear the hash from the URL so anchor links work again
    if (window.location.hash) {
      window.history.pushState(
        {},
        document.title,
        window.location.pathname + window.location.search,
      );
    }
  };

  return (
    <div
      className={`fixed right-8 bottom-8 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <Button
        isIconOnly
        aria-label="Back to top"
        variant="primary"
        size="lg"
        className="bg-very-soft-violet text-very-dark-blue shadow-2xl"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </Button>
    </div>
  );
}
