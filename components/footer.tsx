import Link from 'next/link';
import { FOOTER_GROUPS, FOOTER_LEGAL } from '@/lib/data';
import {
  IconLogo,
  IconInstagram,
  IconTwitter,
  IconYoutube,
  IconLinkedIn,
  IconMapPin,
  IconMail,
  IconPhone,
} from './icons';

const SOCIALS = [
  { Icon: IconInstagram, label: 'Instagram', href: 'https://instagram.com' },
  { Icon: IconTwitter, label: 'Twitter', href: 'https://twitter.com' },
  { Icon: IconYoutube, label: 'YouTube', href: 'https://youtube.com' },
  { Icon: IconLinkedIn, label: 'LinkedIn', href: 'https://linkedin.com' },
];

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(16,185,129,0.15) 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <IconLogo size={20} className="text-white" strokeWidth={2} />
              </div>
              <span className="font-display font-bold text-white text-xl tracking-tight">
                Urban<span className="text-emerald-400">Move</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-6 max-w-sm">
              La référence de la mobilité douce en France depuis 2019. Trottinettes, vélos
              et skateboards électriques sélectionnés avec soin.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <IconMapPin size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                <span>42 Rue de la Roquette, 75011 Paris</span>
              </li>
              <li className="flex items-start gap-3">
                <IconPhone size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                <a href="tel:+33142001122" className="hover:text-white transition-colors">
                  +33 1 42 00 11 22
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IconMail size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                <a
                  href="mailto:bonjour@urbanmove.fr"
                  className="hover:text-white transition-colors"
                >
                  bonjour@urbanmove.fr
                </a>
              </li>
            </ul>
          </div>

          {FOOTER_GROUPS.map(({ title, links }) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Suivez-nous</h4>
            <div className="flex gap-2">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-emerald-500 border border-white/10 flex items-center justify-center transition-all hover:scale-110 hover:border-emerald-500"
                >
                  <Icon size={16} className="text-gray-300" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-500">© 2025 UrbanMove SAS. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {FOOTER_LEGAL.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-gray-500 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
