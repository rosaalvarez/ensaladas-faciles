'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🥗</span>
          <span className="text-xl font-bold text-green-600">Nutre</span>
        </Link>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/recetas" className="hover:text-green-600 transition">Recetas</Link>
          <Link href="/lista" className="hover:text-green-600 transition">Mi Lista</Link>
          <Link href="/pais" className="hover:text-green-600 transition">🌎 País</Link>
          <a href="https://pay.hotmart.com/C103964546B" target="_blank" rel="noopener" className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
            Desbloquear Todo
          </a>
        </div>
        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-3">
          <Link href="/recetas" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-green-600">Recetas</Link>
          <Link href="/lista" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-green-600">Mi Lista</Link>
          <Link href="/pais" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-green-600">🌎 País</Link>
          <a href="https://pay.hotmart.com/C103964546B" target="_blank" rel="noopener" className="block bg-green-500 text-white px-4 py-2 rounded-full text-center hover:bg-green-600">
            Desbloquear Todo
          </a>
        </div>
      )}
    </nav>
  );
}
