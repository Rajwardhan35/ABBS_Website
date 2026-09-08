import { Building2, Calendar, MapPin, Package } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { companyInfo } from '../../data/company';

const pillars = [
  {
    number: '01',
    title: 'Established in 2018',
    description: `ABSS Global Corporation was established in ${companyInfo.establishedYear}.`,
    icon: Calendar,
  },
  {
    number: '02',
    title: 'Manufacturer & Trader',
    description: 'Operating as a manufacturer and wholesale trader of oil products and agricultural commodities.',
    icon: Building2,
  },
  {
    number: '03',
    title: 'Company Address',
    description: `Company address: ${companyInfo.address}.`,
    icon: MapPin,
  },
  {
    number: '04',
    title: 'Verified Product Range',
    description: 'Offering cold pressed almond oil, cold pressed groundnut oil, safflower oil, and coconut copra.',
    icon: Package,
  },
];

export function WhyABSS() {
  return (
    <section id="why-abss" className="section-space bg-[#ece9e1]/50 border-y border-[#dedbd2]">
      <div className="page-width">
        <SectionHeading
          eyebrow="Why ABSS"
          title={
            <>
              Core details <br />
              <em>and company facts.</em>
            </>
          }
          description="Verified business information and product details for ABSS Global Corporation."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="bg-[#f7f6f2] p-8 border border-[#dedbd2] flex flex-col justify-between hover:border-[#202322] transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-[#d9282f] tracking-widest font-semibold">
                      {pillar.number}
                    </span>
                    <Icon
                      size={24}
                      className="text-[#5e635f] group-hover:text-[#d9282f] transition-colors"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#202322] mb-3 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#5e635f] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
