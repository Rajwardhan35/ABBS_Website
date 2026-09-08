import { ArrowRight, MoveUpRight, ArrowDownRight, MapPin } from 'lucide-react';
import { companyInfo } from '../../data/company';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[640px] md:min-h-[720px] bg-[#1b211d] text-white flex items-center overflow-hidden"
    >
      {/* Subtle Dark Background Pattern & Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0d1410]/95 via-[#0d1410]/80 to-[#0d1410]/50 z-10"
        aria-hidden="true"
      />
      
      {/* Editorial Background Image with Low Opacity */}
      <div
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4282730/pexels-photo-4282730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')] bg-cover bg-center opacity-25 scale-105"
        aria-hidden="true"
      />

      {/* Grid line accent */}
      <div
        className="absolute inset-0 z-10 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(90deg, transparent 49.8%, rgba(255,255,255,0.4) 50%, transparent 50.2%), linear-gradient(0deg, transparent 49.8%, rgba(255,255,255,0.4) 50%, transparent 50.2%)',
          backgroundSize: '25% 100%, 100% 33.33%',
        }}
        aria-hidden="true"
      />

      <div className="page-width relative z-20 py-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="eyebrow text-[#f08583]">
            {companyInfo.businessRole} · Est. {companyInfo.establishedYear}
          </p>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.02]">
            Quality rooted <br />
            <em className="font-serif italic font-normal text-white/95">in every drop.</em>
          </h1>

          {/* Factual Subtitle */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mb-10 font-sans">
            {companyInfo.name} is a {companyInfo.businessRole.toLowerCase()} of oil products and agricultural commodities, established in {companyInfo.establishedYear}.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-5">
            <a href="#products" className="button button-red">
              <span>View Verified Products</span>
              <MoveUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="button button-outline-light"
            >
              <span>Contact ABSS</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Address Location Pill */}
        <div className="mt-14 pt-8 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-white/70">
          <div className="flex items-center gap-2.5">
            <MapPin size={15} className="text-[#e86a67] flex-none" />
            <span>
              Company address: {companyInfo.address}
            </span>
          </div>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-[#e86a67] hover:text-white transition-colors"
          >
            <span>Learn about our company</span>
            <ArrowDownRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
