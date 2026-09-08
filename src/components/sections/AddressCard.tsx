import { MapPin, MoveUpRight, Building } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { companyInfo } from '../../data/company';

export function AddressCard() {
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    companyInfo.address
  )}`;

  return (
    <section className="section-space bg-[#ece9e1]/40 border-t border-[#dedbd2]">
      <div className="page-width">
        <div className="bg-[#f7f6f2] border border-[#dedbd2] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="Company Address"
              title={
                <>
                  Karad, <br />
                  <em>Maharashtra.</em>
                </>
              }
              className="mb-6"
            />

            <div className="flex items-start gap-4 text-[#202322]">
              <div className="w-12 h-12 rounded-none bg-[#ece9e1] border border-[#dedbd2] flex items-center justify-center text-[#d9282f] flex-none">
                <MapPin size={22} />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-widest text-[#d9282f] font-semibold block">
                  Company Address
                </span>
                <p className="text-lg sm:text-xl font-bold text-[#202322] leading-snug">
                  Company address: {companyInfo.addressLines[0]} {companyInfo.addressLines[1]}
                </p>
                <p className="text-sm text-[#5e635f]">
                  Karad, Maharashtra 415109, India.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-outline"
              >
                <span>Open in Google Maps</span>
                <MoveUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Address Details Box */}
          <div className="lg:col-span-5 bg-[#202a24] text-white p-8 border-t-2 border-[#d9282f]">
            <div className="flex items-center gap-3 mb-6">
              <Building size={20} className="text-[#e86a67]" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-white">
                Address Details
              </h3>
            </div>

            <dl className="space-y-4 text-sm divide-y divide-white/10">
              <div className="pt-3 flex justify-between gap-4">
                <dt className="text-[#9ba49b] font-mono text-xs flex-none">Entity</dt>
                <dd className="text-white font-medium text-right">{companyInfo.name}</dd>
              </div>
              <div className="pt-3 flex justify-between gap-4">
                <dt className="text-[#9ba49b] font-mono text-xs flex-none">Role</dt>
                <dd className="text-white font-medium text-right">{companyInfo.businessRole}</dd>
              </div>
              <div className="pt-3 flex justify-between gap-4">
                <dt className="text-[#9ba49b] font-mono text-xs flex-none">Company Address</dt>
                <dd className="text-white font-medium text-right">{companyInfo.address}</dd>
              </div>
              <div className="pt-3 flex justify-between gap-4">
                <dt className="text-[#9ba49b] font-mono text-xs flex-none">Pincode</dt>
                <dd className="text-white font-mono text-right">{companyInfo.pincode}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
