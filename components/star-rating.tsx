import { IconStar } from './icons';

export function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Note ${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar
          key={i}
          size={size}
          className={
            i < Math.floor(rating)
              ? 'fill-amber-400 text-amber-400'
              : 'fill-gray-200 text-gray-200'
          }
          strokeWidth={0}
        />
      ))}
    </div>
  );
}
