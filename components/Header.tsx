'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import VAMonogram from './VAMonogram';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/courses', label: 'Courses' },
    { href: '/classes', label: 'Online & Offline' },
    { href: '/summer-camps', label: 'Summer Camps' },
    { href: '/grades', label: 'Grade Coverage' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-sandalwood-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group hover:opacity-80 transition-opacity">
            <VAMonogram size={48} className="group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <div className="flex items-baseline space-x-2">
                <span className="text-lg md:text-xl font-serif font-bold text-gray-800 tracking-tight">
                  VIDVATTA
                </span>
              </div>
              <span className="text-xs text-gray-600 tracking-wider uppercase">
                ACADEMY
              </span>
              <div className="hidden sm:block mt-1">
                <p className="text-[10px] font-semibold text-sandalwood-700 tracking-wider">
                  JOIN · LEARN · RULE
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-vedic-maroon transition-colors duration-200 font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-saffron-600 hover:bg-saffron-700 text-white px-6 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg font-medium"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-vedic-maroon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-vedic-maroon transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-4 bg-saffron-600 text-white px-6 py-2 rounded-full text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

