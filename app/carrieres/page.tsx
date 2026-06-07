import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { GsapInit } from '@/components/gsap-init';
import { IconArrowUpRight, IconMapPin } from '@/components/icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carrières — UrbanMove',
  description: 'Rejoignez UrbanMove et bougez le monde avec nous.',
};

const JOBS = [
  {
    title: 'Mécanicien·ne cycle expérimenté·e',
    location: 'Paris 11e',
    type: 'CDI',
    href: '/contact',
  },
  {
    title: 'Conseiller·ère showroom',
    location: 'Paris 11e',
    type: 'CDI',
    href: '/contact',
  },
  {
    title: 'Développeur·euse Full-Stack (Next.js / Node)',
    location: 'Remote France',
    type: 'CDI',
    href: '/contact',
  },
  {
    title: 'Responsable supply chain',
    location: 'Paris',
    type: 'CDI',
    href: '/contact',
  },
  {
    title: 'Stage marketing digital (6 mois)',
    location: 'Paris 11e',
    type: 'Stage',
    href: '/contact',
  },
];

export default function CarrieresPage() {
  return (
    <>
      <GsapInit />
      <PageHero
        eyebrow="Carrières"
        title="Construisons la mobilité de demain, ensemble."
        description="Chez UrbanMove, on aime les gens curieux, exigeants et bienveillants. Si tu te reconnais, regarde nos offres."
        crumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Carrières' },
        ]}
      />
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-stagger className="space-y-3">
            {JOBS.map((j) => (
              <Link
                key={j.title}
                href={j.href}
                data-stagger-item
                className="group flex items-center justify-between gap-4 bg-gray-50 hover:bg-emerald-50/50 border border-gray-100 hover:border-emerald-200 rounded-3xl p-5 sm:p-6 transition-all"
              >
                <div>
                  <h3 className="font-display font-bold text-gray-900 group-hover:text-emerald-700 mb-1.5">
                    {j.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <IconMapPin size={12} strokeWidth={2} /> {j.location}
                    </span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full font-semibold">
                      {j.type}
                    </span>
                  </div>
                </div>
                <span className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all">
                  <IconArrowUpRight size={18} strokeWidth={2} />
                </span>
              </Link>
            ))}
          </div>

          <div
            data-reveal
            className="mt-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8 text-center"
          >
            <h3 className="font-display text-xl font-bold mb-2">
              Rien ne te correspond ?
            </h3>
            <p className="text-gray-300 mb-5">
              Envoie-nous une candidature spontanée, on regarde toujours.
            </p>
            <a
              href="mailto:carrieres@urbanmove.fr"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-5 py-3 rounded-xl transition-colors"
            >
              carrieres@urbanmove.fr
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
