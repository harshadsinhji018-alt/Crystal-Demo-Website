import {useState} from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackLabel,
  loading = 'lazy',
}: ResilientImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#09142B] via-[#060E1E] to-[#040812] text-[#E6CB7A] ${className}`}
      >
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <svg
            viewBox="0 0 200 200"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 150 L200 50 M0 100 L200 0 M50 200 L200 120"
              stroke="#D4AF37"
              strokeWidth="0.6"
              fill="none"
            />
          </svg>
        </div>
        <svg
          viewBox="0 0 48 48"
          className="mb-3 h-10 w-10 text-[#D4AF37]/80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <polygon points="24,4 42,18 36,42 12,42 6,18" />
          <line x1="24" y1="4" x2="24" y2="42" />
          <line x1="6" y1="18" x2="42" y2="18" />
        </svg>
        <span className="font-serif text-base tracking-wide text-[#F7F3EB]/90 px-4 text-center">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
