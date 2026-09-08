import { useState } from 'react';

interface ABSSLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

/**
 * CLIENT-SUPPLIED LOGO COMPONENT
 * 
 * In accordance with client guidelines:
 * - Do NOT generate or invent a new company logo.
 * - Displays the real client-supplied logo from /assets/images/ABSS_logo.png (or .svg) if present.
 * - If the asset is not yet placed in /public/assets/images/, displays a refined, restrained
 *   typographic wordmark fallback without 404 console clutter or invented graphic emblems.
 */
export function ABSSLogo({ variant = 'dark', className = '' }: ABSSLogoProps) {
  const [hasImageError, setHasImageError] = useState(false);

  // If the client supplies the file in /public/assets/images/ABSS_logo.png, this will load it cleanly.
  if (!hasImageError) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src="/assets/images/ABSS_logo.png"
          alt="ABSS Global Corporation"
          className={`h-9 w-auto object-contain transition-opacity ${
            variant === 'light' ? 'brightness-0 invert' : ''
          }`}
          onError={() => setHasImageError(true)}
        />
      </div>
    );
  }

  // Pure typographic fallback: clean, restrained, editorial brand mark
  const isLight = variant === 'light';

  return (
    <div className={`inline-flex flex-col select-none leading-none ${className}`}>
      <span
        className={`font-extrabold tracking-[0.14em] text-[15px] ${
          isLight ? 'text-white' : 'text-[#202322]'
        }`}
      >
        ABSS GLOBAL
      </span>
      <span
        className={`font-mono text-[9px] tracking-[0.26em] uppercase mt-1 ${
          isLight ? 'text-[#c2cac3]' : 'text-[#696e69]'
        }`}
      >
        CORPORATION
      </span>
    </div>
  );
}
