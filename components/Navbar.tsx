'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="#home" className="group flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-soft">
            Z
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">Zubaida</p>
            <p className="text-xs text-slate-500">Digital Marketing Specialist</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="#contact" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Get Free SEO Audit
            <ArrowRight size={16} />
          </Link>
        </div>

        <button type="button" className="inline-flex items-center rounded-2xl border border-slate-200 bg-white p-3 text-slate-700 transition hover:border-slate-300 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white/98 py-4 md:hidden">
          <div className="container flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-base font-medium text-slate-700" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800" onClick={() => setOpen(false)}>
              Get Free SEO Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
