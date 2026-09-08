import { useState } from 'react';
import { MoveUpRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Lightbox } from '../common/Lightbox';
import { galleryItems } from '../../data/gallery';

export function VisualGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-space bg-[#202a24] text-white">
      <div className="page-width">
        <SectionHeading
          eyebrow="Visual References"
          title={
            <>
              Botanical & commodity <br />
              <em>reference imagery.</em>
            </>
          }
          description="Illustrative reference photography representing oilseeds, extraction raw materials, and agricultural commodities. Real product photographs will be updated when provided."
          light
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {galleryItems.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-square overflow-hidden bg-[#1b211d] text-left border border-white/10 hover:border-white/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9282f]"
              aria-label={`View ${item.label}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity"
                aria-hidden="true"
              />

              {/* Caption */}
              <div className="absolute inset-x-4 bottom-4 z-10 flex items-end justify-between gap-2">
                <div>
                  <p className="font-sans text-xs font-semibold text-white">
                    {item.label}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-gray-400 mt-0.5">
                    {item.disclaimer}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#d9282f] text-white flex items-center justify-center transition-colors flex-none">
                  <MoveUpRight size={14} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
