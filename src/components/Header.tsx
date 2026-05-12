'use client';

import { PERSONAL_DATA } from '@/constants/general';
import { INTERNAL_LINKS } from '@/constants/links';
import Image from 'next/image';
import Link from 'next/link';
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

const menuItems = ['About', 'Solutions', 'Contact'];

const MenuItem = ({ linkText, linkKey, onClick, isMobile = false }: Item) => (
  <Link
    href={INTERNAL_LINKS[linkKey]}
    onClick={onClick}
    className={`${
      isMobile ? 'text-very-dark-blue' : 'text-very-light-gray'
    } hover:text-moderate-lime-green w-fit px-8 py-4 text-xs font-semibold transition-transform duration-300 hover:scale-105 active:scale-95 sm:text-sm lg:text-lg`}
  >
    {linkText}
  </Link>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <ContainerWrapper as="header" id="headerSection" className="relative z-50">
      <Container className="flex items-end gap-2 py-2">
        <Image
          src="/bn_logo_white.png"
          alt="Beata Nemeth initials"
          width={80}
          height={80}
          priority
        />

        <h6 className="mb-0">{PERSONAL_DATA.NAME}</h6>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden items-center gap-4 md:flex lg:gap-8">
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
