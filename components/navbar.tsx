'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/data';
import { IconMenu, IconClose, IconShoppingBag, IconLogo } from './icons';

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  // Hors de la home, on force le style "solid" (fond hero clair par défaut)
  const [scrolled, setScrolled] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(!isHome || window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white/85 backdrop-blur-xl shadow-[0_2px_30px_rgba(0,0,0,0.04)] border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all ${
                scrolled || menuOpen
                  ? 'bg-gradient-to-br from-gray-900 to-gray-700'
                  : 'bg-white/15 backdrop-blur-md border border-white/20'
              }`}
            >
              <IconLogo size={20} className="text-white" strokeWidth={2} />
            </div>
            <span
              className={`font-display font-bold text-lg tracking-tight transition-colors ${
                scrolled || menuOpen ? 'text-gray-900' : 'text-white'
              }`}
            >
              Urban<span className="text-emerald-400">Move</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  className={`relative text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? scrolled
                        ? 'text-gray-900 bg-gray-100/80'
                        : 'text-white bg-white/15 backdrop-blur-md'
                      : scrolled
                      ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/60'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/contact"
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/85 hover:text-white'
              }`}
            >
              Se connecter
            </Link>
            <Link
              href="/produits"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <IconShoppingBag size={16} strokeWidth={2} />
              Nos produits
            </Link>
          </div>

          <button
            aria-label="Menu"
            className={`lg:hidden p-2 -mr-2 rounded-lg active:bg-gray-200/70 transition-colors ${
              scrolled || menuOpen ? 'hover:bg-gray-100/70' : 'hover:bg-white/10'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <IconClose size={22} className="text-gray-900" strokeWidth={2} />
            ) : (
              <IconMenu
                size={22}
                className={scrolled ? 'text-gray-900' : 'text-white'}
                strokeWidth={2}
              />
            )}
          </button>
        </div>
      </div>

    </header>

      {/* Mobile drawer — rendu hors du header pour éviter les containing-blocks
          créés par backdrop-filter qui cassent le position:fixed */}
      <div
        aria-hidden={!menuOpen}
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-2 max-w-7xl mx-auto overflow-y-auto h-full">
          {NAV_LINKS.map((l, i) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.label}
                href={l.href}
                className={`flex items-center justify-between px-4 py-4 rounded-2xl text-base font-medium border ${
                  isActive
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-gray-50 text-gray-900 border-gray-100 hover:bg-gray-100'
                } transition-all`}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {l.label}
                <span className="opacity-60">→</span>
              </Link>
            );
          })}
          <div className="pt-4 grid grid-cols-2 gap-2">
            <Link
              href="/contact"
              className="px-4 py-3.5 rounded-2xl border border-gray-200 text-center text-sm font-semibold text-gray-700"
            >
              Se connecter
            </Link>
            <Link
              href="/produits"
              className="px-4 py-3.5 rounded-2xl bg-gray-900 text-white text-center text-sm font-semibold"
            >
              Nos produits
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
