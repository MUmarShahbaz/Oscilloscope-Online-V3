'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HugeiconsIcon } from '@hugeicons/react';
import { Menu, Cancel } from '@hugeicons/core-free-icons';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

function NavLink({ href, children, onClick, className = '' }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm font-medium text-foreground/80 hover:text-primary transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}

// Store navigation data as clean JS objects instead of pre-rendered JSX elements
const NAV_ITEMS = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/start', text: 'Start' },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-md shadow-sm shadow-primary/15">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand / Logo (Wrapped in Link for user navigation) */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/icon.svg"
            alt="Logo"
            width={48}
            height={48}
            priority
          />
          <p className="text-xl font-bold tracking-tight text-foreground">
            Oscilloscope Online
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.text} href={item.href}>
              {item.text}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-foreground hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <HugeiconsIcon
              icon={isOpen ? Cancel : Menu}
              size={24}
              className="text-primary"
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-primary/10 bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col space-y-3 animate-in slide-in-from-top-2 duration-200">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.text}
              href={item.href}
              onClick={closeMenu}
              className="py-1 text-base"
            >
              {item.text}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}