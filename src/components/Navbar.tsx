'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { countries } from '@/data/countries';
import { getCountry, setCountry as saveCountry } from '@/lib/store';

const LeafLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2C16 2 6 8 6 18C6 24.627 10.373 28 16 30C21.627 28 26 24.627 26 18C26 8 16 2 16 2Z" fill="#2D8C4E"/>
    <path d="M16 8V24M16 16C13 13 10 14 10 14M16 20C19 17 22 18 22 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('CO');
  const countryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedCountry(getCountry());
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
        setCountryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleCountrySelect = (code: string) => {
    setSelectedCountry(code);
    saveCountry(code);
    setCountryOpen(false);
  };

  const currentCountry = countries.find(c => c.code === selectedCountry) || countries[0];

  const navLinks = [
    { href: '/recetas', label: 'Recetas' },
    { href: '/lista', label: 'Mi Lista' },
    { href: '/planifica', label: 'Planifica tu Semana' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <LeafLogo />
          <span className="text-xl font-bold text-[#2D8C4E]">Nutre</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-[#2D8C4E] transition">
              {link.label}
            </Link>
          ))}

          {/* Country selector */}
          <div ref={countryRef} className="relative">
            <button
              onClick={() => setCountryOpen(!countryOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#2D8C4E] transition text-sm"
            >
              <span className="text-lg">{currentCountry.flag}</span>
              <span className="hidden lg:inline">{currentCountry.name}</span>
              <svg className={`w-3.5 h-3.5 transition-transform ${countryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {countryOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 max-h-80 overflow-y-auto">
                {countries.map(c => (
                  <button
                    key={c.code}
                    onClick={() => handleCountrySelect(c.code)}
                    className={`w-full text-left px-4 py-2 flex items-center gap-3 hover:bg-green-50 transition text-sm ${c.code === selectedCountry ? 'bg-green-50 text-[#2D8C4E] font-semibold' : 'text-gray-700'}`}
                  >
                    <span className="text-lg">{c.flag}</span>
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="https://mpago.li/2TTtDgT" target="_blank" rel="noopener" className="bg-[#2D8C4E] text-white px-5 py-2 rounded-full hover:bg-[#246E3E] transition font-semibold">
            Desbloquear Todo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menú">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 shadow-lg">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block text-gray-700 hover:text-[#2D8C4E] font-medium py-1">
              {link.label}
            </Link>
          ))}

          {/* Country selector mobile */}
          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-400 mb-2">🌎 Tu país</p>
            <div className="grid grid-cols-3 gap-2 max-h-40 overflow-y-auto">
              {countries.map(c => (
                <button
                  key={c.code}
                  onClick={() => { handleCountrySelect(c.code); setOpen(false); }}
                  className={`text-left px-2 py-1.5 rounded-lg text-xs flex items-center gap-1 ${c.code === selectedCountry ? 'bg-green-50 text-[#2D8C4E] font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <span>{c.flag}</span> {c.name}
                </button>
              ))}
            </div>
          </div>

          <a href="https://mpago.li/2TTtDgT" target="_blank" rel="noopener" onClick={() => setOpen(false)} className="block bg-[#2D8C4E] text-white px-4 py-3 rounded-full text-center font-semibold hover:bg-[#246E3E]">
            Desbloquear Todo
          </a>
        </div>
      )}
    </nav>
  );
}
