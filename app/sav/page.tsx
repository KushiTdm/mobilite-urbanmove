import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { GsapInit } from '@/components/gsap-init';
import { InfoContent } from '@/components/info-content';
import { IconHeadset, IconShield, IconClock, IconArrowRight } from '@/components/icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SAV — UrbanMove',
  description: 'Service après-vente UrbanMove : interventions sous 48h, garantie 2 ans.',
};

const PILLARS = [
  {
    icon: IconHeadset,
    title: 'Conseillers experts',
    desc: 'Notre équipe technique connaît chaque produit de A à Z.',
  },
  {
    icon: IconClock,
    title: 'Intervention 48h',
    desc: 'Diagnostic et réparation rapide en atelier ou à domicile.',
  },
  {
    icon: IconShield,
    title: 'Garantie 2 ans',
    desc: 'Pièces et main d\'œuvre comprises pendant 24 mois.',
  },
];

export default function SavPage() {
  return (
    <>
      <GsapInit />
      <PageHero
        eyebrow="SAV"
        title="On reste là, après la commande."
        description="Le SAV UrbanMove ne s'arrête pas à la livraison. Diagnostic, réparation, mise à jour : on prend soin de votre engin pendant toute sa vie."
        crumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'SAV' },
        ]}
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-5 mb-16" data-stagger>
            {PILLARS.map((p) => (
              <div
                key={p.title}
                data-stagger-item
                className="bg-emerald-50/50 border border-emerald-100/50 rounded-3xl p-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-4">
                  <p.icon size={22} strokeWidth={2} />
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <InfoContent
            sections={[
              {
                heading: 'Faire une demande SAV',
                body: [
                  'Pour signaler un problème, contactez-nous par téléphone, mail ou via le formulaire en bas de page.',
                  'Indiquez : le numéro de commande, la nature du problème, et 1 à 3 photos/vidéos si possible. Notre équipe revient vers vous sous 24h ouvrées.',
                ],
              },
              {
                heading: 'Pièces détachées',
                body: 'Nous garantissons la disponibilité des pièces détachées pendant 5 ans après l\'arrêt de commercialisation d\'un modèle. Catalogue accessible sur demande.',
              },
              {
                heading: 'Réparation hors garantie',
                body: 'Nous réparons aussi votre engin hors garantie à tarif transparent : devis gratuit sous 72h, sans engagement. Atelier à Paris 11e.',
              },
            ]}
          />

          <div className="mt-12 text-center" data-reveal>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-emerald-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors"
            >
              Ouvrir un ticket SAV
              <IconArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
