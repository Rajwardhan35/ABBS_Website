import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { CompanyOverview } from './components/sections/CompanyOverview';
import { ProductCatalog } from './components/products/ProductCatalog';
import { WhyABSS } from './components/sections/WhyABSS';
import { BusinessProcess } from './components/sections/BusinessProcess';
import { VisualGallery } from './components/sections/VisualGallery';
import { AddressCard } from './components/sections/AddressCard';
import { ContactSection } from './components/sections/ContactSection';
import { VerifiedProduct } from './types';

export function App() {
  const [selectedProductName, setSelectedProductName] = useState<string | undefined>(undefined);

  // When a user clicks 'Enquire' on any product card or modal:
  const handleEnquireProduct = (product: VerifiedProduct) => {
    setSelectedProductName(product.name);
    // Smooth scroll to the contact section
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // IntersectionObserver for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f6f2] text-[#202322]">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <CompanyOverview />
        <ProductCatalog onEnquireProduct={handleEnquireProduct} />
        <WhyABSS />
        <BusinessProcess />
        <VisualGallery />
        <AddressCard />
        <ContactSection
          selectedProductName={selectedProductName}
          onClearSelectedProduct={() => setSelectedProductName(undefined)}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
