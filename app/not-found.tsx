import Link from 'next/link';
import { IconArrowRight } from '@/components/icons';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="font-display text-7xl sm:text-8xl font-bold text-emerald-600 mb-4">404</p>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Cette page a pris la fuite
        </h1>
        <p className="text-gray-600 mb-8">
          Elle a sans doute filé en trottinette électrique sans laisser d'adresse.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gray-900 hover:bg-emerald-600 text-white font-semibold px-5 py-3 rounded-xl transition-colors"
        >
          Retour à l'accueil
          <IconArrowRight size={16} strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  );
}
