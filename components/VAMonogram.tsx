import Image from 'next/image';

type VAMonogramProps = {
  size?: number;
  className?: string;
  useImage?: boolean;
  imageSrc?: string;
};

export default function VAMonogram({ 
  size = 60, 
  className = "", 
  useImage = false,
  imageSrc = "/logo.png"
}: VAMonogramProps) {
  // If using an image file instead of SVG
  if (useImage && imageSrc) {
    return (
      <Image
        src={imageSrc}
        alt="Vidvatta Academy Logo"
        width={size}
        height={size}
        className={className}
        priority
      />
    );
  }

  // SVG version of the VA monogram
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-gray-800 ${className}`}
    >
      {/* Interlocked VA Monogram - Elegant overlapping design with serifs */}
      {/* V Letter (upright, with serifs) */}
      <path
        d="M6 10 L6 12 L6 45 L14 45 L14 24 L28 45 L32 45 L46 24 L46 45 L54 45 L54 10 L44 10 L44 12 L30 35 L16 12 L16 10 Z"
        fill="currentColor"
      />
      
      {/* Serif details for V */}
      <path d="M6 10 L10 10 L10 12 L6 12 Z" fill="currentColor" />
      <path d="M50 10 L54 10 L54 12 L50 12 Z" fill="currentColor" />
      
      {/* A Letter (inverted, overlapping V) - creating elegant interlock */}
      {/* Bottom of A */}
      <path
        d="M16 45 L22 34 L38 34 L44 45 L30 45 Z"
        fill="currentColor"
      />
      {/* Left side of A */}
      <path
        d="M20 38 L30 18 L22 38 Z"
        fill="currentColor"
      />
      {/* Right side of A */}
      <path
        d="M40 38 L30 18 L38 38 Z"
        fill="currentColor"
      />
      {/* A crossbar - white to show elegant overlap effect */}
      <path
        d="M22 30 L38 30 L38 34 L22 34 Z"
        fill="white"
      />
    </svg>
  );
}
