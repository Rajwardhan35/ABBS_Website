import { useEffect } from 'react';
import { X, MoveUpRight, Info } from 'lucide-react';
import { VerifiedProduct } from '../../types';

interface ProductModalProps {
  product: VerifiedProduct | null;
  onClose: () => void;
  onEnquire: (product: VerifiedProduct) => void;
}

export function ProductModal({ product, onClose, onEnquire }: ProductModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-[#f7f6f2] w-full max-w-2xl border border-[#dedbd2] relative shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 text-[#202322] hover:bg-[#d9282f] hover:text-white flex items-center justify-center transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9282f]"
          aria-label="Close product details modal"
        >
          <X size={20} />
        </button>

        {/* Modal Content (Scrollable) */}
        <div className="overflow-y-auto">
          {/* Product Reference Image Banner */}
          <div className="relative aspect-[16/9] w-full bg-[#dedbd2]">
            <img
              src={product.image}
              alt={`${product.name} visual reference`}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-4 left-4 z-10">
              <span className="bg-[#202a24] text-white font-mono text-[9px] uppercase tracking-wider px-2.5 py-1">
                {product.category}
              </span>
              <span className="ml-2 bg-white/90 text-[#202322] font-mono text-[9px] uppercase tracking-wider px-2 py-0.5">
                Visual reference
              </span>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-8 sm:p-10 space-y-6">
            <div>
              <p className="eyebrow text-[#d9282f] mb-2">Verified Product</p>
              <h2
                id="product-modal-title"
                className="text-3xl sm:text-4xl font-bold text-[#202322] tracking-tight"
              >
                {product.name}
              </h2>
            </div>

            <p className="text-[#5e635f] text-base leading-relaxed">
              {product.description}
            </p>

            {/* Trade Specifications Notice */}
            <div className="p-4 bg-[#ece9e1]/60 border-l-2 border-[#d9282f] flex items-start gap-3">
              <Info size={18} className="text-[#d9282f] flex-none mt-0.5" />
              <div className="text-xs text-[#5e635f] leading-relaxed">
                <strong className="block text-[#202322] font-mono uppercase tracking-wider mb-0.5">
                  Wholesale Trade Specifications
                </strong>
                Product specifications, order quantities, and commercial details can be discussed directly with the ABSS Global Corporation team.
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onEnquire(product)}
                className="button button-red flex-1"
              >
                <span>Enquire About This Product</span>
                <MoveUpRight size={16} />
              </button>

              <button
                type="button"
                onClick={onClose}
                className="button button-outline px-6"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
