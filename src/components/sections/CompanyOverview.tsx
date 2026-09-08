import { ArrowRight, MapPin } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { companyInfo } from '../../data/company';

export function CompanyOverview() {
  return (
    <section id="about" className="section-space bg-[#f7f6f2]">
      <div className="page-width">
        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Company Overview"
              title={
                <>
                  Established in 2018. <br />
                  <em>Manufacturer & wholesale trader.</em>
                </>
              }
            />

            <div className="space-y-6 text-[#5e635f] text-base leading-relaxed">
              <p className="text-lg text-[#202322] font-medium leading-relaxed">
                Established in {companyInfo.establishedYear}, {companyInfo.name} is a {companyInfo.businessRole.toLowerCase()} offering cold pressed almond oil, cold pressed groundnut oil, safflower oil, and coconut copra.
              </p>

              <p>
                We supply oil products and agricultural commodities for wholesale requirements and commercial orders. Product specifications and order quantities can be coordinated directly with our team.
              </p>

              <div className="pt-4 flex items-start gap-3 p-4 bg-[#ece9e1]/60 border border-[#dedbd2] rounded">
                <MapPin size={20} className="text-[#d9282f] flex-none mt-1" />
                <div className="text-sm">
                  <strong className="block text-[#202322] font-mono text-xs uppercase tracking-wider mb-1">
                    Company Address
                  </strong>
                  <span className="text-[#5e635f]">{companyInfo.address}</span>
                </div>
              </div>

              <div className="pt-2">
                <a href="#products" className="text-link">
                  <span>Explore Verified Products</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Key Facts Card */}
          <div className="lg:col-span-5 bg-[#202a24] text-white p-8 sm:p-10 rounded-none border-t-4 border-[#d9282f]">
            <p className="font-mono text-xs uppercase tracking-widest text-[#e86a67] mb-6">
              At a Glance
            </p>

            <div className="divide-y divide-white/10 space-y-6">
              <div className="pt-2">
                <span className="block font-mono text-xs text-[#9ba49b] uppercase tracking-wider mb-1">
                  01 · Established
                </span>
                <strong className="text-2xl font-bold text-white tracking-tight">
                  {companyInfo.establishedYear}
                </strong>
                <p className="text-xs text-[#9ba49b] mt-1">
                  Established in {companyInfo.establishedYear}
                </p>
              </div>

              <div className="pt-6">
                <span className="block font-mono text-xs text-[#9ba49b] uppercase tracking-wider mb-1">
                  02 · Business Role
                </span>
                <strong className="text-2xl font-bold text-white tracking-tight">
                  Manufacturer & Trader
                </strong>
                <p className="text-xs text-[#9ba49b] mt-1">
                  {companyInfo.businessRole}
                </p>
              </div>

              <div className="pt-6">
                <span className="block font-mono text-xs text-[#9ba49b] uppercase tracking-wider mb-1">
                  03 · Products
                </span>
                <strong className="text-2xl font-bold text-white tracking-tight">
                  Oils & Commodities
                </strong>
                <p className="text-xs text-[#9ba49b] mt-1">
                  Almond oil, groundnut oil, safflower oil, and coconut copra
                </p>
              </div>

              <div className="pt-6">
                <span className="block font-mono text-xs text-[#9ba49b] uppercase tracking-wider mb-1">
                  04 · Company Address
                </span>
                <strong className="text-xl font-bold text-white tracking-tight">
                  Karad, Maharashtra
                </strong>
                <p className="text-xs text-[#9ba49b] mt-1">
                  {companyInfo.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
