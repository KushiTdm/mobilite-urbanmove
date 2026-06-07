import * as React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  strokeWidth?: number;
};

function createIcon(path: React.ReactNode, displayName: string) {
  const Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ size = 24, strokeWidth = 1.75, className, ...props }, ref) => (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        {path}
      </svg>
    )
  );
  Icon.displayName = displayName;
  return Icon;
}

export const IconBike = createIcon(
  <>
    <circle cx="5.5" cy="17.5" r="3.5" />
    <circle cx="18.5" cy="17.5" r="3.5" />
    <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" stroke="none" />
    <path d="M12 17.5V14l-3-3 4-3 2 3h3" />
  </>,
  'IconBike'
);

export const IconScooter = createIcon(
  <>
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="18" r="2" />
    <path d="M9 18h6l1-3h2l3-9h-3" />
    <path d="M14 6h3" />
    <path d="M6 15l3-7" />
  </>,
  'IconScooter'
);

export const IconSkateboard = createIcon(
  <>
    <path d="M3 14l18-4" />
    <path d="M5.5 13.5l1.2 2.5" />
    <path d="M17 11l1.2 2.5" />
    <circle cx="7" cy="17.5" r="1.5" />
    <circle cx="11" cy="16.5" r="1.5" />
    <circle cx="15.5" cy="15.5" r="1.5" />
    <circle cx="19.5" cy="14.5" r="1.5" />
  </>,
  'IconSkateboard'
);

export const IconBolt = createIcon(
  <path d="M13 2 4.5 14H11l-1 8 8.5-12H12l1-8Z" />,
  'IconBolt'
);

export const IconShield = createIcon(
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </>,
  'IconShield'
);

export const IconStar = createIcon(
  <path
    fill="currentColor"
    d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
  />,
  'IconStar'
);

export const IconChevronRight = createIcon(<path d="m9 18 6-6-6-6" />, 'IconChevronRight');
export const IconChevronDown = createIcon(<path d="m6 9 6 6 6-6" />, 'IconChevronDown');
export const IconChevronLeft = createIcon(<path d="m15 18-6-6 6-6" />, 'IconChevronLeft');
export const IconArrowRight = createIcon(
  <>
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </>,
  'IconArrowRight'
);
export const IconArrowUpRight = createIcon(
  <>
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </>,
  'IconArrowUpRight'
);

export const IconCheck = createIcon(<path d="M20 6 9 17l-5-5" />, 'IconCheck');
export const IconCheckCircle = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="m8 12 3 3 5-6" />
  </>,
  'IconCheckCircle'
);

export const IconMapPin = createIcon(
  <>
    <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </>,
  'IconMapPin'
);

export const IconPhone = createIcon(
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />,
  'IconPhone'
);

export const IconMail = createIcon(
  <>
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="m2 7 10 7 10-7" />
  </>,
  'IconMail'
);

export const IconMenu = createIcon(
  <>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </>,
  'IconMenu'
);

export const IconClose = createIcon(
  <>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </>,
  'IconClose'
);

export const IconBattery = createIcon(
  <>
    <rect x="2" y="7" width="17" height="10" rx="2" />
    <path d="M22 11v2" />
    <path d="M5 10v4" />
    <path d="M8 10v4" />
    <path d="M11 10v4" />
  </>,
  'IconBattery'
);

export const IconWind = createIcon(
  <>
    <path d="M2 8h14a3 3 0 1 0-3-3" />
    <path d="M2 12h18a3 3 0 1 1-3 3" />
    <path d="M2 16h10" />
  </>,
  'IconWind'
);

export const IconAward = createIcon(
  <>
    <circle cx="12" cy="9" r="6" />
    <path d="m9 13.5-2 8 5-3 5 3-2-8" />
  </>,
  'IconAward'
);

export const IconUsers = createIcon(
  <>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>,
  'IconUsers'
);

export const IconClock = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </>,
  'IconClock'
);

export const IconSpeed = createIcon(
  <>
    <path d="M12 22a10 10 0 1 0-10-10" />
    <path d="m12 12 5-3" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </>,
  'IconSpeed'
);

export const IconLeaf = createIcon(
  <>
    <path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 17-9-1 5-2 11-6 14a7 7 0 0 1-4 2Z" />
    <path d="M2 22c2-7 5-12 14-15" />
  </>,
  'IconLeaf'
);

export const IconSparkles = createIcon(
  <>
    <path d="M12 3v3" />
    <path d="M12 18v3" />
    <path d="M5.6 5.6 7.7 7.7" />
    <path d="m16.3 16.3 2.1 2.1" />
    <path d="M3 12h3" />
    <path d="M18 12h3" />
    <path d="M5.6 18.4 7.7 16.3" />
    <path d="m16.3 7.7 2.1-2.1" />
    <circle cx="12" cy="12" r="3" />
  </>,
  'IconSparkles'
);

export const IconTruck = createIcon(
  <>
    <path d="M3 6h12v9H3z" />
    <path d="M15 9h4l3 3v3h-7" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </>,
  'IconTruck'
);

export const IconHeadset = createIcon(
  <>
    <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
    <path d="M3 14a2 2 0 0 1 2-2h1v6H5a2 2 0 0 1-2-2v-2Z" />
    <path d="M21 14a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2Z" />
    <path d="M18 18a4 4 0 0 1-4 4h-2" />
  </>,
  'IconHeadset'
);

export const IconCreditCard = createIcon(
  <>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
    <path d="M6 15h2" />
  </>,
  'IconCreditCard'
);

export const IconHeart = createIcon(
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
  'IconHeart'
);

export const IconShoppingBag = createIcon(
  <>
    <path d="M5 8h14l-1 13H6L5 8Z" />
    <path d="M9 8V5a3 3 0 0 1 6 0v3" />
  </>,
  'IconShoppingBag'
);

export const IconLock = createIcon(
  <>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </>,
  'IconLock'
);

export const IconQuote = createIcon(
  <>
    <path d="M3 10c0-3 2-5 5-5v3c-1.5 0-2 1-2 2v6H3v-6Z" fill="currentColor" stroke="none" />
    <path d="M13 10c0-3 2-5 5-5v3c-1.5 0-2 1-2 2v6h-3v-6Z" fill="currentColor" stroke="none" />
  </>,
  'IconQuote'
);

export const IconInstagram = createIcon(
  <>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </>,
  'IconInstagram'
);

export const IconTwitter = createIcon(
  <path d="M22 5.8a8.4 8.4 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.7 1A4.2 4.2 0 0 0 12 9.4a12 12 0 0 1-8.7-4.4 4.2 4.2 0 0 0 1.3 5.6 4.2 4.2 0 0 1-1.9-.5v.1A4.2 4.2 0 0 0 6 14.3a4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.5 8.5 0 0 1 2 19a12 12 0 0 0 6.4 1.9c7.7 0 12-6.4 12-12v-.5A8.7 8.7 0 0 0 22 5.8Z" />,
  'IconTwitter'
);

export const IconYoutube = createIcon(
  <>
    <path d="M22.5 6.4a2.8 2.8 0 0 0-2-2C18.6 4 12 4 12 4s-6.6 0-8.5.4a2.8 2.8 0 0 0-2 2C1 8.3 1 12 1 12s0 3.7.5 5.6a2.8 2.8 0 0 0 2 2C5.4 20 12 20 12 20s6.6 0 8.5-.4a2.8 2.8 0 0 0 2-2c.5-1.9.5-5.6.5-5.6s0-3.7-.5-5.6Z" />
    <path d="m10 15 5-3-5-3v6Z" fill="currentColor" stroke="none" />
  </>,
  'IconYoutube'
);

export const IconLinkedIn = createIcon(
  <>
    <rect x="2" y="2" width="20" height="20" rx="3" />
    <circle cx="7" cy="8" r="1.2" fill="currentColor" />
    <path d="M6 11h2v7H6zM11 11h2v1.2a2.5 2.5 0 0 1 2-1.2c2 0 2.5 1.5 2.5 3.2V18h-2v-3.5c0-.9-.4-1.5-1.2-1.5-.9 0-1.3.7-1.3 1.5V18h-2v-7Z" fill="currentColor" stroke="none" />
  </>,
  'IconLinkedIn'
);

export const IconLogo = createIcon(
  <>
    <path d="M3 17h6l2-4 3 7 3-10 2 7h2" />
    <circle cx="3" cy="17" r="1" fill="currentColor" />
    <circle cx="21" cy="17" r="1" fill="currentColor" />
  </>,
  'IconLogo'
);

export const IconSettings = createIcon(
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </>,
  'IconSettings'
);

export const IconChat = createIcon(
  <>
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-4-1l-5 1 1-5a8.5 8.5 0 1 1 17-3.4Z" />
  </>,
  'IconChat'
);

export const IconRefresh = createIcon(
  <>
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    <path d="M3 21v-5h5" />
  </>,
  'IconRefresh'
);

export const IconPlay = createIcon(
  <path d="M6 4v16l13-8L6 4Z" fill="currentColor" />,
  'IconPlay'
);
