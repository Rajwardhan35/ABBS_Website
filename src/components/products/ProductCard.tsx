import { MoveUpRight, ArrowRight } from 'lucide-react';
import { VerifiedProduct } from '../../types';

interface ProductCardProps {
  product: VerifiedProduct;
  onSelect: (product: VerifiedProduct) => void;
  onEnquire: (product: VerifiedProduct) => void;
}

export function ProductCard({ product, onSelect, onEnquire }: ProductCardProps) {
  return (
    <article className="bg-[#f7f6f2] border border-[#dedbd2] flex flex-col justify-between group hover:border-[#202322] transition-colors">
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#dedbd2]">
        <img
          src={product.image}
          alt={`${product.name} visual reference`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Subtle Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"
          aria-hidden="true"
        />

        {/* Category & Reference Label */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
          <span className="bg-[#202a24]/90 text-white font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-none backdrop-blur-sm">
            {product.category}
          </span>
          <span className="bg-white/90 text-[#202322] font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 w-fit">
            Visual reference
          </span>
        </div>

        {/* Quick View Button */}
        <button
          type="button"
          onClick={() => onSelect(product)}
          className="absolute bottom-3 right-3 z-10 w-10 h-10 rounded-full bg-white text-[#202322] hover:bg-[#d9282f] hover:text-white flex items-center justify-center transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9282f]"
          aria-label={`View specifications for ${product.name}`}
        >
          <MoveUpRight size={17} />
        </button>
      </div>

      {/* Product Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#202322] tracking-tight mb-2">
            {product.name}
          </h3>
          <p className="text-xs text-[#696e69] leading-relaxed line-clamp-3 mb-6">
            {product.description}
          </p>
        </div>

        {/* Card Actions */}
        <div className="pt-4 border-t border-[#dedbd2] flex items-center justify-between">
          <button
            type="button"
            onClick={() => onSelect(product)}
            className="text-xs font-mono uppercase tracking-wider text-[#5e635f] hover:text-[#202322] transition-colors"
          >
            Details
          </button>

          <button
            type="button"
            onClick={() => onEnquire(product)}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#d9282f] font-semibold hover:translate-x-0.5 transition-transform"
          >
            <span>Enquire</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}
