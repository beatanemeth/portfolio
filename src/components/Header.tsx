'use client';

import { PERSONAL_DATA } from '@/constants/general';
import { INTERNAL_LINKS } from '@/constants/links';
import { cn } from '@/utils/cn';
import { withBasePath } from '@/utils/path';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Container from './Container';
import ContainerWrapper from './ContainerWrapper';

interface Item {
  linkText: string;
  linkKey: keyof typeof INTERNAL_LINKS;
  onClick?: () => void;
  isMobile?: boolean;
}

const menuItems = ['About', 'Solutions', 'Blog', 'Contact'];

const MenuItem = ({ linkText, linkKey, onClick, isMobile = false }: Item) => {
  const pathname = usePathname();
  const href = INTERNAL_LINKS[linkKey];

  // If it's an anchor link and we are not on the home page, prefix with '/'
  const resolvedHref =
    href.startsWith('#') && pathname !== '/' ? `/${href}` : href;

  return (
    <Link
      href={resolvedHref}
      onClick={onClick}
      className={cn(
        'w-fit px-4 py-2 text-sm font-semibold transition-all duration-300',
        'hover:text-moderate-lime-green hover:scale-105 active:scale-95',
        'after:bg-moderate-lime-green relative after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full', // subtle underline flourish
        isMobile ? 'text-very-dark-blue' : 'text-very-light-gray',
        'sm:text-lg lg:text-lg',
      )}
    >
      {linkText}
    </Link>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <ContainerWrapper
      as="header"
      id="headerSection"
      variant="primary"
      className="shadow-very-dark-blue/80 sticky top-0 z-50 shadow-xl/40 backdrop-blur-md"
    >
      <Container className="flex items-center gap-2 py-5 lg:py-8">
        {/* Logo */}
        <div className="flex flex-col gap-2 lg:flex-row lg:items-end">
          <Link href="/">
            <Image
              src={withBasePath('/bn_logo.webp')}
              alt="Beata Nemeth initials"
              width={80}
              height={0}
              style={{ width: '60px', height: 'auto' }}
              priority
            />
          </Link>
          <h6 className="mb-0 leading-none">{PERSONAL_DATA.NAME}</h6>
        </div>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden gap-4 md:flex lg:gap-8">
          {menuItems.map((item) => (
            <MenuItem
              key={item}
              linkText={item}
              linkKey={item.toUpperCase() as keyof typeof INTERNAL_LINKS}
            />
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-very-light-gray ml-auto block text-3xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </Container>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="bg-very-soft-blue absolute top-full left-0 flex w-full flex-col items-center py-8 shadow-xl md:hidden">
          {menuItems.map((item) => (
            <MenuItem
              key={item}
              linkText={item}
              linkKey={item.toUpperCase() as keyof typeof INTERNAL_LINKS}
              onClick={() => setIsMenuOpen(false)}
              isMobile
            />
          ))}
        </div>
      )}
    </ContainerWrapper>
  );
}
