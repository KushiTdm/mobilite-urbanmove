import { PageHero } from '@/components/page-hero';
import { GsapInit } from '@/components/gsap-init';
import { InfoContent } from '@/components/info-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales — UrbanMove',
};

export default function MentionsPage() {
  return (
    <>
      <GsapInit />
      <PageHero
        title="Mentions légales"
        crumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Mentions légales' },
        ]}
      />
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InfoContent
            sections={[
              {
                heading: 'Éditeur du site',
                body: [
                  'UrbanMove SAS au capital de 50 000 €.',
                  'Siège social : 42 Rue de la Roquette, 75011 Paris, France.',
                  'RCS Paris 884 321 098. TVA : FR12 884321098.',
                  'Directeur de la publication : Marie Lefèvre.',
                ],
              },
              {
                heading: 'Hébergement',
                body: 'Site hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.',
              },
              {
                heading: 'Propriété intellectuelle',
                body: "L'ensemble des éléments du site (textes, visuels, marques, logos) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.",
              },
              {
                heading: 'Contact',
                body: 'Pour toute question relative au site : bonjour@urbanmove.fr.',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
