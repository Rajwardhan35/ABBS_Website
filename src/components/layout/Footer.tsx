import { MoveUpRight, MapPin, ArrowUp } from 'lucide-react';
import { ABSSLogo } from '../common/ABSSLogo';
import { companyInfo } from '../../data/company';
import { verifiedProducts } from '../../data/products';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#202a24] text-white pt-20 pb-10 border-t border-white/10">
      <div className="page-width">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Role */}
          <div className="space-y-5">
            <ABSSLogo variant="light" />
            <p className="text-sm text-[#9ba49b] leading-relaxed max-w-sm">
              {companyInfo.businessRole}. Established in {companyInfo.establishedYear}.
            </p>
            <p className="font-serif italic text-white/80 text-sm">
              “{companyInfo.tagline}”
            </p>
          </div>

          {/* Column 2: Verified Products */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#e86a67] mb-5">
              Verified Products
            </h3>
            <ul className="space-y-3 font-sans text-sm text-[#9ba49b]">
              {verifiedProducts.map((p) => (
                <li key={p.id}>
                  <a
                    href="#products"
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{p.name}</span>
                    <MoveUpRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#e86a67] mb-5">
              Navigation
            </h3>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-wider text-[#9ba49b]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About ABSS
                </a>
              </li>
              <li>
                <a href="#why-abss" className="hover:text-white transition-colors">
                  Why ABSS
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Enquiry Workflow
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Visual References
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Address */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#e86a67] mb-5">
              Company Address
            </h3>
            <div className="flex items-start gap-3 text-sm text-[#9ba49b] leading-relaxed">
              <MapPin size={18} className="text-[#d9282f] flex-none mt-1" />
              <div>
                <p className="text-white font-medium mb-1">Company Address:</p>
                <p>{companyInfo.addressLines[0]}</p>
                <p>{companyInfo.addressLines[1]}</p>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#e86a67] hover:text-white transition-colors"
              >
                <span>Make a Wholesale Enquiry</span>
                <MoveUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Reference Disclaimer & Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#7d877e]">
          <div className="text-center md:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-[#636c64]">
              Botanical & commodity images displayed on this site are visual references for trade illustration.
            </p>
          </div>

          {/* Back to top trigger */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#9ba49b] hover:text-white transition-colors p-2"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
