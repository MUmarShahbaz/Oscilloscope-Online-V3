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

export function NavBar({nav_items}:{nav_items: Array<{href: string, text: string}>}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className='sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-md shadow-sm shadow-primary/15'>
      <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>

        {/* Brand / Logo (Wrapped in Link for user navigation) */}
        <Link href='/' className='flex items-center gap-3 text-xl font-bold tracking-tight text-foreground'>
          <Image
            src='/icon.svg'
            alt='Logo'
            width={48}
            height={48}
            priority
          />
          <span>Oscilloscope Online</span>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden sm:flex items-center gap-6'>
          {nav_items.map((item) => (
            <NavLink key={item.text} href={item.href}>
              {item.text}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className='block sm:hidden'>
          <button
            onClick={toggleMenu}
            aria-label='Toggle navigation menu'
            className='p-2 rounded-lg text-foreground hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40'
          >
            <HugeiconsIcon
              icon={isOpen ? Cancel : Menu}
              size={24}
              className='text-primary'
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='sm:hidden border-t border-primary/10 bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col space-y-3 animate-in slide-in-from-top-2 duration-200'>
          {nav_items.map((item) => (
            <NavLink
              key={item.text}
              href={item.href}
              onClick={closeMenu}
              className='py-1 text-base'
            >
              {item.text}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export function Footer({nav_items}:{nav_items: Array<{href: string, text: string}>}) {
  return (
    <footer className='z-50 border-t border-primary/10 bg-card flex flex-col shadow-sm shadow-primary/15'>
      <div className='w-full max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8'>
        {/* Brand Section */}
        <div className='flex flex-col items-center md:items-start gap-2'>
          <Link
            href='https://mumarshahbaz.com'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-3 text-xl font-medium tracking-tight text-foreground hover:opacity-90 transition-opacity'
          >
            <Image
              className='rounded-xl border border-primary/10 shadow-xs'
              src='/mus.png'
              alt='MUS Logo'
              width={40}
              height={40}
              priority
            />
            <span>
              From <span className='font-bold text-primary underline'>MUmarShahbaz</span>
            </span>
          </Link>
        </div>

        {/* Quick Links Section */}
        <div className='flex flex-col items-center md:items-end gap-3'>
          <span className='text-sm font-bold text-foreground tracking-tight uppercase'>
            Quick Links
          </span>
          <div className='flex items-center gap-6'>
            {nav_items.map((item) => (
              <NavLink key={item.text} href={item.href}>
                {item.text}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className='w-full border-t border-primary/10 py-6 text-center'>
        <p className='text-xs text-muted-foreground/80 font-medium'>
          © 2025 M. Umar Shahbaz. All rights reserved. Released under the Apache-2.0 License.
        </p>
      </div>
    </footer>
  );
}