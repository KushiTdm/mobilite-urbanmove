import { PageHero } from '@/components/page-hero';
import { GsapInit } from '@/components/gsap-init';
import { InfoContent } from '@/components/info-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CGV — UrbanMove',
};

export default function CgvPage() {
  return (
    <>
      <GsapInit />
      <PageHero
        title="Conditions générales de vente"
        description="Version en vigueur au 1er janvier 2025."
        crumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'CGV' },
        ]}
      />
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InfoContent
            sections={[
              {
                heading: 'Article 1 — Objet',
                body: "Les présentes CGV régissent les ventes de produits par UrbanMove SAS sur le site urbanmove.fr aux consommateurs finaux résidant en France métropolitaine, en Corse, à Monaco et dans l'Union européenne.",
              },
              {
                heading: 'Article 2 — Commande',
                body: "La commande est confirmée après validation du paiement. UrbanMove se réserve le droit de refuser une commande en cas de motif légitime (rupture de stock, suspicion de fraude).",
              },
              {
                heading: 'Article 3 — Prix et paiement',
                body: "Les prix sont indiqués en euros TTC. Paiement sécurisé par carte bancaire (Stripe), Apple Pay, Google Pay ou paiement en 3× sans frais (Alma) pour les commandes supérieures à 300 €.",
              },
              {
                heading: 'Article 4 — Livraison',
                body: 'Voir la page Livraison pour les modalités complètes. Le transfert de risque a lieu à la livraison.',
              },
              {
                heading: 'Article 5 — Droit de rétractation',
                body: "Conformément à l'article L221-18 du Code de la consommation, le consommateur dispose de 14 jours pour exercer son droit de rétractation. UrbanMove étend ce délai à 30 jours.",
              },
              {
                heading: 'Article 6 — Garantie',
                body: 'Garantie légale de conformité (2 ans) + garantie commerciale UrbanMove (2 ans). Détails complets dans le bon de livraison.',
              },
              {
                heading: 'Article 7 — Litiges',
                body: 'En cas de litige, une solution amiable sera recherchée. À défaut, compétence du Tribunal de Commerce de Paris. Médiateur de la consommation : CNPM Médiation.',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
