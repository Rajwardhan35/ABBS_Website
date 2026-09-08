import { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${
        centered
          ? 'text-center max-w-2xl mx-auto'
          : 'flex flex-col md:flex-row md:items-end justify-between gap-8'
      } ${className}`}
    >
      <div className={centered ? '' : 'max-w-2xl'}>
        <p
          className={`eyebrow ${
            light ? 'text-[#f08583]' : 'text-[#d9282f]'
          } ${centered ? 'justify-center' : ''}`}
        >
          {eyebrow}
        </p>
        <h2 className={`${light ? 'text-white' : 'text-[#202322]'}`}>
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={`text-sm md:text-base leading-relaxed max-w-md ${
            light ? 'text-gray-300' : 'text-[#696e69]'
          } ${centered ? 'mx-auto mt-4' : 'mb-2'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
