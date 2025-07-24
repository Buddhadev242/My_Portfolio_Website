'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Buddhadev Kuila
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 cursor-pointer"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors cursor-pointer w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors cursor-pointer w-full text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors cursor-pointer w-full text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors cursor-pointer w-full text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors cursor-pointer w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}