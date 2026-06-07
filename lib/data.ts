import {
  IconBattery,
  IconWind,
  IconBolt,
  IconShield,
  IconAward,
  IconUsers,
  IconStar,
  IconClock,
  IconLeaf,
  IconTruck,
  IconHeadset,
  IconCreditCard,
  IconRefresh,
} from '@/components/icons';

type IconType = typeof IconBolt;

export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  type: 'trottinette' | 'velo' | 'skateboard' | 'accessoire';
  price: string;
  oldPrice?: string | null;
  badge: string;
  badgeColor: string;
  autonomy: string;
  speed: string;
  charge: string;
  image: string;
  gallery?: string[];
  features: string[];
  rating: number;
  reviews: number;
  description: string;
  specs: { label: string; value: string }[];
};

export const NAV_LINKS = [
  { label: 'Produits', href: '/produits' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: 'urbanglide-pro',
    name: 'UrbanGlide Pro',
    category: 'Trottinette électrique',
    type: 'trottinette',
    price: '799',
    oldPrice: '999',
    badge: 'Bestseller',
    badgeColor: 'bg-emerald-500',
    autonomy: '45 km',
    speed: '25 km/h',
    charge: '4h',
    image:
      'https://images.pexels.com/photos/26708106/pexels-photo-26708106.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/26708106/pexels-photo-26708106.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/9322186/pexels-photo-9322186.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/15260665/pexels-photo-15260665.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    features: ['Moteur 350W', 'Frein à disque', 'Écran LED', 'Pliable'],
    rating: 4.9,
    reviews: 312,
    description:
      "L'UrbanGlide Pro combine puissance, autonomie et confort dans un châssis ultra-pliable. Idéale pour les trajets quotidiens longue distance.",
    specs: [
      { label: 'Poids', value: '14,2 kg' },
      { label: 'Charge max.', value: '120 kg' },
      { label: 'Pneus', value: '10" tubeless' },
      { label: 'Étanchéité', value: 'IPX5' },
      { label: 'Suspension', value: 'Double ressort' },
      { label: 'Connectivité', value: 'Bluetooth + App' },
    ],
  },
  {
    id: 2,
    slug: 'cityvolt-s7',
    name: 'CityVolt S7',
    category: 'Vélo électrique',
    type: 'velo',
    price: '1 490',
    oldPrice: '1 890',
    badge: '-21%',
    badgeColor: 'bg-rose-500',
    autonomy: '80 km',
    speed: '25 km/h',
    charge: '5h',
    image:
      'https://images.pexels.com/photos/19411371/pexels-photo-19411371.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/19411371/pexels-photo-19411371.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/8936927/pexels-photo-8936927.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/8811401/pexels-photo-8811401.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    features: ['Batterie 36V 13Ah', '7 vitesses Shimano', 'GPS intégré', 'Anti-vol'],
    rating: 4.8,
    reviews: 187,
    description:
      "Le CityVolt S7 redéfinit le confort urbain. Son moteur silencieux et son système d'assistance intelligent vous accompagnent sur tous les types de terrain.",
    specs: [
      { label: 'Poids', value: '21 kg' },
      { label: 'Cadre', value: 'Aluminium 6061' },
      { label: 'Roues', value: '28"' },
      { label: 'Freinage', value: 'Hydraulique Tektro' },
      { label: 'Éclairage', value: 'LED intégrée' },
      { label: 'Garantie cadre', value: '5 ans' },
    ],
  },
  {
    id: 3,
    slug: 'flexride-mini',
    name: 'FlexRide Mini',
    category: 'Trottinette légère',
    type: 'trottinette',
    price: '349',
    oldPrice: null,
    badge: 'Nouveau',
    badgeColor: 'bg-sky-500',
    autonomy: '25 km',
    speed: '20 km/h',
    charge: '3h',
    image:
      'https://images.pexels.com/photos/15260665/pexels-photo-15260665.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/15260665/pexels-photo-15260665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/36696336/pexels-photo-36696336.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/9322186/pexels-photo-9322186.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    features: ['Poids 9 kg', 'Pneus tubeless', 'LED avant/arrière', 'App mobile'],
    rating: 4.7,
    reviews: 94,
    description:
      "La FlexRide Mini est l'alliée parfaite des derniers kilomètres. Pliée, elle se glisse partout : métro, bureau, coffre.",
    specs: [
      { label: 'Poids', value: '9 kg' },
      { label: 'Charge max.', value: '100 kg' },
      { label: 'Pneus', value: '8" pneumatiques' },
      { label: 'Étanchéité', value: 'IP54' },
      { label: 'Frein', value: 'Électronique + tambour' },
      { label: 'Connectivité', value: 'Bluetooth' },
    ],
  },
  {
    id: 4,
    slug: 'metroboard-x',
    name: 'MetroBoard X',
    category: 'Skateboard électrique',
    type: 'skateboard',
    price: '599',
    oldPrice: '749',
    badge: 'Populaire',
    badgeColor: 'bg-amber-500',
    autonomy: '30 km',
    speed: '38 km/h',
    charge: '2h',
    image:
      'https://images.pexels.com/photos/11990138/pexels-photo-11990138.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/11990138/pexels-photo-11990138.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1144184/pexels-photo-1144184.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1170149/pexels-photo-1170149.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    features: ['Double moteur', 'Télécommande BT', 'Deck bambou', 'Frein régénératif'],
    rating: 4.6,
    reviews: 143,
    description:
      "Vitesse, accélération, confort : le MetroBoard X délivre une expérience de glisse électrique inégalée. Deck bambou flex 7 plis.",
    specs: [
      { label: 'Poids', value: '7,8 kg' },
      { label: 'Deck', value: 'Bambou + fibre verre' },
      { label: 'Moteurs', value: '2 × 600W' },
      { label: 'Roues', value: '90 mm urétane' },
      { label: 'Modes', value: '4 niveaux' },
      { label: 'Télécommande', value: 'Sans fil 2.4GHz' },
    ],
  },
];

type FeatureItem = {
  icon: IconType;
  title: string;
  desc: string;
  color: string;
  bg: string;
};

export const FEATURES: FeatureItem[] = [
  {
    icon: IconBolt,
    title: 'Technologie de pointe',
    desc: 'Batteries lithium dernière génération pour une autonomie maximale et une recharge rapide.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: IconShield,
    title: 'Garantie 2 ans',
    desc: 'Chaque produit est couvert par une garantie constructeur de 2 ans avec SAV en 48h.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
  },
  {
    icon: IconLeaf,
    title: 'Zéro émission',
    desc: 'Réduisez votre empreinte carbone et profitez de déplacements 100% écologiques.',
    color: 'text-sky-500',
    bg: 'bg-sky-50',
  },
  {
    icon: IconAward,
    title: 'Certifiés CE',
    desc: 'Tous nos engins de mobilité respectent les normes européennes de sécurité en vigueur.',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
  },
];

export const TRUST_BADGES = [
  { icon: IconTruck, label: 'Livraison 48h offerte' },
  { icon: IconRefresh, label: '30 jours satisfait ou remboursé' },
  { icon: IconHeadset, label: 'SAV expert 7j/7' },
  { icon: IconCreditCard, label: 'Paiement 3× sans frais' },
];

export const STATS = [
  { value: '12 000+', label: 'Clients satisfaits', icon: IconUsers },
  { value: '98%', label: 'Taux de satisfaction', icon: IconStar },
  { value: '48h', label: 'Livraison express', icon: IconClock },
  { value: '5 ans', label: "D'expertise", icon: IconAward },
];

export const REVIEWS = [
  {
    name: 'Thomas M.',
    location: 'Paris 11e',
    rating: 5,
    text: "La trottinette UrbanGlide Pro a complètement changé mes trajets quotidiens. Silencieuse, puissante et confortable. Je ne reviens plus aux transports en commun !",
    product: 'UrbanGlide Pro',
    avatar: 'TM',
    avatarColor: 'bg-sky-500',
  },
  {
    name: 'Léa R.',
    location: 'Lyon 2e',
    rating: 5,
    text: "Le CityVolt S7 est un vrai bijou. L'assistance électrique est parfaitement dosée et l'autonomie tient vraiment ses promesses. Livraison rapide et service impeccable.",
    product: 'CityVolt S7',
    avatar: 'LR',
    avatarColor: 'bg-emerald-500',
  },
  {
    name: 'Karim B.',
    location: 'Bordeaux',
    rating: 5,
    text: "Le MetroBoard X est une bête de course ! Les virages sont précis, l'accélération est bluffante. L'équipe UrbanMove a répondu à toutes mes questions rapidement.",
    product: 'MetroBoard X',
    avatar: 'KB',
    avatarColor: 'bg-amber-500',
  },
];

export const FAQS = [
  {
    q: 'La trottinette électrique est-elle légale en France ?',
    a: "Oui, les engins de déplacement personnel motorisés (EDPM) sont légaux en France depuis 2019. Ils doivent circuler sur les pistes cyclables ou les routes à 50 km/h. La vitesse est limitée à 25 km/h.",
  },
  {
    q: 'Quels sont les délais de livraison ?',
    a: "Nous livrons en 48h ouvrées pour la France métropolitaine. Une livraison express en 24h est disponible pour un supplément de 9,90€. La livraison gratuite est offerte dès 500€ d'achat.",
  },
  {
    q: "Puis-je essayer un produit avant de l'acheter ?",
    a: "Oui ! Notre showroom parisien vous permet de tester l'ensemble de notre gamme. Des sessions d'essai sont également organisées dans plusieurs villes. Consultez notre agenda en ligne.",
  },
  {
    q: 'Quelle est votre politique de retour ?',
    a: "Vous disposez de 30 jours pour retourner votre produit sans justification. Le remboursement est effectué sous 5 jours ouvrés. Les frais de retour sont offerts pour les produits défectueux.",
  },
  {
    q: 'Proposez-vous des solutions de financement ?',
    a: "Oui, nous proposons le paiement en 3 ou 12 fois sans frais via notre partenaire Alma, pour tout achat supérieur à 300€.",
  },
  {
    q: 'Comment fonctionne la garantie 2 ans ?',
    a: "Tous nos produits sont couverts par une garantie constructeur de 2 ans (pièces et main d'œuvre). En cas de panne, notre SAV intervient en 48h ouvrées avec prêt d'un véhicule de remplacement si nécessaire.",
  },
];

export const FOOTER_GROUPS = [
  {
    title: 'Boutique',
    links: [
      { label: 'Trottinettes', href: '/produits?type=trottinette' },
      { label: 'Vélos électriques', href: '/produits?type=velo' },
      { label: 'Skateboards', href: '/produits?type=skateboard' },
      { label: 'Accessoires', href: '/produits?type=accessoire' },
    ],
  },
  {
    title: 'Aide',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Livraison', href: '/livraison' },
      { label: 'Retours', href: '/retours' },
      { label: 'SAV', href: '/sav' },
    ],
  },
  {
    title: 'Société',
    links: [
      { label: 'À propos', href: '/a-propos' },
      { label: 'Blog', href: '/blog' },
      { label: 'Presse', href: '/presse' },
      { label: 'Carrières', href: '/carrieres' },
    ],
  },
];

export const FOOTER_LEGAL = [
  { label: 'Confidentialité', href: '/confidentialite' },
  { label: 'CGV', href: '/cgv' },
  { label: 'Mentions légales', href: '/mentions-legales' },
];
