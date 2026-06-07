import { PageHero } from '@/components/page-hero';
import { GsapInit } from '@/components/gsap-init';
import { InfoContent } from '@/components/info-content';
import { IconTruck, IconClock, IconMapPin, IconCheck } from '@/components/icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Livraison — UrbanMove',
  description: 'Modalités, délais et zones de livraison UrbanMove.',
};

const STEPS = [
  { icon: IconCheck, title: 'Commande validée', desc: 'Préparation sous 24h ouvrées dans notre entrepôt parisien.' },
  { icon: IconTruck, title: 'Expédition', desc: 'Transport sécurisé par notre partenaire Colissimo ou Chronopost.' },
  { icon: IconMapPin, title: 'Suivi en temps réel', desc: 'Lien de tracking envoyé par mail et SMS.' },
  { icon: IconClock, title: 'Livraison 48h', desc: 'Vous recevez votre engin chez vous, monté et prêt à rouler.' },
];

export default function LivraisonPage() {
  return (
    <>
      <GsapInit />
      <PageHero
        eyebrow="Livraison"
        title="Chez vous en 48h, partout en France."
        description="Livraison standard offerte dès 500€, sinon 14,90€. Express 24h disponible. Tous nos engins sont assemblés et testés avant expédition."
        crumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Livraison' },
        ]}
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16" data-stagger>
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                data-stagger-item
                className="relative bg-gray-50 border border-gray-100 rounded-3xl p-6"
              >
                <span className="absolute -top-3 left-6 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Étape {i + 1}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <s.icon size={22} strokeWidth={2} />
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <InfoContent
            sections={[
              {
                heading: 'Zones de livraison',
                body: [
                  'Nous livrons en France métropolitaine, Corse et Monaco. Pour la Belgique, le Luxembourg, la Suisse et les DROM, contactez-nous pour un devis personnalisé.',
                  "Pour les engins lourds (vélos électriques), la livraison s'effectue sur rendez-vous via notre transporteur partenaire avec créneau de 2h.",
                ],
              },
              {
                heading: 'Tarifs',
                body: [
                  'Standard (48h) : 14,90 € — GRATUIT dès 500 € d\'achat.',
                  'Express (24h) : 24,90 € en supplément.',
                  'Point relais : 6,90 €.',
                ],
              },
              {
                heading: 'Que faire en cas de retard ?',
                body: "Si votre commande n'arrive pas dans les délais annoncés, écrivez-nous à bonjour@urbanmove.fr ou appelez le +33 1 42 00 11 22. Nous prenons en charge le suivi et compensons systématiquement les retards de plus de 5 jours.",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
