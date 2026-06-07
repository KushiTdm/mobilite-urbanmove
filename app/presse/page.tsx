import { PageHero } from '@/components/page-hero';
import { GsapInit } from '@/components/gsap-init';
import { IconArrowUpRight } from '@/components/icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Presse — UrbanMove',
  description: 'Espace presse et communiqués UrbanMove.',
};

const ARTICLES = [
  {
    media: 'Les Échos',
    title: 'UrbanMove lève 8 M€ pour démocratiser la mobilité électrique en région',
    date: 'Mai 2025',
  },
  {
    media: 'Le Monde',
    title: '« On a sous-estimé l\'appétit pour le vélo électrique » — interview Marie Lefèvre',
    date: 'Mars 2025',
  },
  {
    media: 'Capital',
    title: 'Top 100 des start-up à suivre en 2025',
    date: 'Janvier 2025',
  },
  {
    media: 'Frandroid',
    title: 'Test : la CityVolt S7, le meilleur vélo électrique sous 1500 €',
    date: 'Décembre 2024',
  },
];

export default function PressePage() {
  return (
    <>
      <GsapInit />
      <PageHero
        eyebrow="Presse"
        title="UrbanMove dans les médias."
        description="Communiqués, interviews et téléchargements pour journalistes."
        crumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Presse' },
        ]}
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6" data-reveal>
            Ils parlent de nous
          </h2>
          <div data-stagger className="space-y-3 mb-14">
            {ARTICLES.map((a) => (
              <a
                key={a.title}
                href="#"
                data-stagger-item
                className="group flex items-center justify-between gap-4 bg-gray-50 hover:bg-emerald-50/40 border border-gray-100 hover:border-emerald-200 rounded-2xl p-5 transition-all"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">
                    {a.media} · {a.date}
                  </p>
                  <p className="font-semibold text-gray-900 group-hover:text-emerald-700">
                    {a.title}
                  </p>
                </div>
                <IconArrowUpRight
                  size={18}
                  className="text-gray-400 group-hover:text-emerald-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0"
                  strokeWidth={2}
                />
              </a>
            ))}
          </div>

          <div
            data-reveal
            className="bg-gray-50 border border-gray-100 rounded-3xl p-8"
          >
            <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
              Contact presse
            </h3>
            <p className="text-gray-600 mb-3">
              Pour toute demande de visuels, interview ou prêt produit :
            </p>
            <a
              href="mailto:presse@urbanmove.fr"
              className="text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              presse@urbanmove.fr
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
