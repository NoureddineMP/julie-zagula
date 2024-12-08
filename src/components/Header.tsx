import React from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <a href="tel:+33388000000" className="flex items-center hover:text-blue-600">
              <Phone className="h-4 w-4 mr-1" />
              03 88 00 00 00
            </a>
            <a href="mailto:contact@juliezagula.fr" className="flex items-center hover:text-blue-600">
              <Mail className="h-4 w-4 mr-1" />
              contact@juliezagula.fr
            </a>
          </div>
        </div>
        <nav className="px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-semibold text-gray-800">
              Julie Zagula
            </a>
            <div className="hidden md:flex space-x-8">
              <NavLinks />
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <NavLinks mobile />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

function NavLinks({ mobile }: { mobile?: boolean }) {
  const baseStyles = mobile
    ? "block py-2 text-gray-600 hover:text-blue-600"
    : "text-gray-600 hover:text-blue-600";

  return (
    <>
      <a href="#services" className={baseStyles}>Services</a>
      <a href="#expertise" className={baseStyles}>Expertise</a>
      <a href="#about" className={baseStyles}>À propos</a>
      <a href="#contact" className={baseStyles}>Contact</a>
    </>
  );
}