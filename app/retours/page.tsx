import { PageHero } from '@/components/page-hero';
import { GsapInit } from '@/components/gsap-init';
import { InfoContent } from '@/components/info-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retours & Remboursements — UrbanMove',
  description: 'Politique de retour 30 jours satisfait ou remboursé.',
};

export default function RetoursPage() {
  return (
    <>
      <GsapInit />
      <PageHero
        eyebrow="Retours"
        title="30 jours pour changer d'avis."
        description="Si votre engin ne vous convient pas, retournez-le sans justification dans les 30 jours. Remboursement intégral sous 5 jours."
        crumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Retours' },
        ]}
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InfoContent
            sections={[
              {
                heading: 'Comment retourner un produit ?',
                body: [
                  "1. Connectez-vous à votre compte et accédez à l'onglet « Mes commandes ».",
                  '2. Sélectionnez la commande à retourner et cliquez sur « Demander un retour ».',
                  "3. Imprimez l'étiquette prépayée et déposez le colis dans n'importe quel point relais.",
                  "4. Une fois le colis reçu et contrôlé, le remboursement est effectué sous 5 jours ouvrés sur votre moyen de paiement initial.",
                ],
              },
              {
                heading: 'Conditions',
                body: [
                  "Le produit doit être retourné dans son emballage d'origine, complet (manuel, accessoires, chargeur) et en état neuf.",
                  "Les engins ayant été utilisés peuvent être retournés dans le cadre de l'essai 7 jours, sous réserve qu'ils n'aient pas été endommagés.",
                ],
              },
              {
                heading: 'Frais de retour',
                body: 'Les frais de retour sont entièrement à notre charge pour les produits défectueux ou en cas d\'erreur de notre part. Pour un simple changement d\'avis, une participation de 14,90 € peut être déduite du remboursement.',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
