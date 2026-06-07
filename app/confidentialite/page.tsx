import { PageHero } from '@/components/page-hero';
import { GsapInit } from '@/components/gsap-init';
import { InfoContent } from '@/components/info-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Confidentialité — UrbanMove',
};

export default function ConfidentialitePage() {
  return (
    <>
      <GsapInit />
      <PageHero
        title="Politique de confidentialité"
        description="Nous prenons la protection de vos données très au sérieux. Voici comment nous les utilisons."
        crumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Confidentialité' },
        ]}
      />
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InfoContent
            sections={[
              {
                heading: 'Responsable du traitement',
                body: 'UrbanMove SAS, 42 Rue de la Roquette, 75011 Paris. Contact DPO : dpo@urbanmove.fr.',
              },
              {
                heading: 'Données collectées',
                body: [
                  'Lors de la création de compte : nom, prénom, email, mot de passe (haché).',
                  "Lors d'une commande : adresse de livraison, téléphone, coordonnées bancaires (jamais stockées chez nous, gérées par notre PSP Stripe).",
                  "Lors de la navigation : cookies techniques, analytics anonymisés.",
                ],
              },
              {
                heading: 'Finalité',
                body: [
                  'Exécution des commandes, SAV, comptabilité.',
                  "Newsletter et communications commerciales (uniquement avec votre consentement explicite).",
                  'Amélioration de nos services et statistiques anonymisées.',
                ],
              },
              {
                heading: 'Durée de conservation',
                body: '3 ans après le dernier contact pour les prospects, 10 ans pour les obligations comptables, durée du compte pour les clients.',
              },
              {
                heading: 'Vos droits',
                body: "Vous disposez d'un droit d'accès, de rectification, d'effacement, de portabilité et d'opposition. Pour les exercer, écrivez à dpo@urbanmove.fr. Vous pouvez également saisir la CNIL.",
              },
              {
                heading: 'Cookies',
                body: 'Nous utilisons uniquement des cookies techniques nécessaires au bon fonctionnement du site et des cookies analytics anonymisés (Plausible). Aucun cookie publicitaire.',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
