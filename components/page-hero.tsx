import Link from 'next/link';
import { IconChevronRight } from './icons';

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-emerald-50/40 border-b border-gray-100 pt-20 pb-14 sm:pt-24 sm:pb-16 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-pattern opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {crumbs && (
          <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-5" aria-label="fil d'ariane">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-gray-900 transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-gray-700 font-medium">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <IconChevronRight size={12} className="text-gray-300" strokeWidth={2} />
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-balance max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
