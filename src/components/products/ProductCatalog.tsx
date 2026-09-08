import { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { verifiedProducts } from '../../data/products';
import { VerifiedProduct } from '../../types';

interface ProductCatalogProps {
  onEnquireProduct: (product: VerifiedProduct) => void;
}

export function ProductCatalog({ onEnquireProduct }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<VerifiedProduct | null>(null);

  const categories = [
    { id: 'all', label: 'All Verified (4)' },
    { id: 'Oil Products', label: 'Oil Products (3)' },
    { id: 'Agricultural Commodities', label: 'Agricultural Commodities (1)' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? verifiedProducts
      : verifiedProducts.filter((p) => p.category === selectedCategory);

  const handleEnquireFromModal = (product: VerifiedProduct) => {
    setActiveModalProduct(null);
    onEnquireProduct(product);
  };

  return (
    <section id="products" className="section-space bg-[#f7f6f2]">
      <div className="page-width">
        <SectionHeading
          eyebrow="Verified Product Catalog"
          title={
            <>
              Products for wholesale <br />
              <em>and commercial requirements.</em>
            </>
          }
          description="ABSS Global Corporation offers cold pressed almond oil, cold pressed groundnut oil, safflower oil, and coconut copra for wholesale enquiry. Specifications and order requirements can be discussed with our team."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12 border-b border-[#dedbd2] pb-4">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-none transition-all ${
                  isActive
                    ? 'bg-[#202a24] text-white font-semibold'
                    : 'bg-[#ece9e1] text-[#5e635f] hover:text-[#202322] hover:bg-[#dedbd2]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setActiveModalProduct}
              onEnquire={onEnquireProduct}
            />
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onEnquire={handleEnquireFromModal}
      />
    </section>
  );
}
