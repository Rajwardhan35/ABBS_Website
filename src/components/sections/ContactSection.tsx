import { useState, useEffect, FormEvent } from 'react';
import { Mail, MapPin, Check, Copy, ExternalLink, ArrowRight, MoveUpRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { companyInfo } from '../../data/company';
import { verifiedProducts } from '../../data/products';
import { EnquiryFormData } from '../../types';
import { formatEnquirySummary, createMailtoLink } from '../../utils/enquiryHelper';

interface ContactSectionProps {
  selectedProductName?: string;
  onClearSelectedProduct?: () => void;
}

export function ContactSection({
  selectedProductName,
  onClearSelectedProduct,
}: ContactSectionProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productName: selectedProductName || 'General Wholesale Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync when selectedProductName changes from external click
  useEffect(() => {
    if (selectedProductName) {
      setFormData((prev) => ({
        ...prev,
        productName: selectedProductName,
      }));
    }
  }, [selectedProductName]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopySummary = async () => {
    const summary = formatEnquirySummary(formData);
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setCopied(false);
    if (onClearSelectedProduct) onClearSelectedProduct();
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      productName: 'General Wholesale Enquiry',
      message: '',
    });
  };

  return (
    <section id="contact" className="section-space bg-[#f7f6f2]">
      <div className="page-width">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              eyebrow="Contact & Enquiry"
              title={
                <>
                  Discuss your <br />
                  <em>wholesale requirements.</em>
                </>
              }
              description="Reach out to initiate a trade discussion or enquire about our verified products."
            />

            <div className="space-y-6 pt-4 border-t border-[#dedbd2]">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-[#d9282f] flex-none mt-1" />
                <div className="text-sm">
                  <strong className="block text-[#202322] font-mono text-xs uppercase tracking-wider mb-1">
                    Company Address
                  </strong>
                  <p className="text-[#5e635f] leading-relaxed">
                    {companyInfo.addressLines[0]} <br />
                    {companyInfo.addressLines[1]}
                  </p>
                </div>
              </div>

              {/* Commercial Enquiries */}
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-[#d9282f] flex-none mt-1" />
                <div className="text-sm">
                  <strong className="block text-[#202322] font-mono text-xs uppercase tracking-wider mb-1">
                    Commercial Enquiries
                  </strong>
                  <p className="text-[#5e635f] leading-relaxed">
                    Submit your details using the form to generate a structured wholesale enquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: B2B Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#dedbd2] shadow-sm">
            {submitted ? (
              <div className="space-y-6 py-4">
                <div className="w-12 h-12 rounded-full bg-[#ece9e1] text-[#31733d] flex items-center justify-center">
                  <Check size={24} />
                </div>

                <div>
                  <span className="eyebrow text-[#31733d] mb-1">Enquiry Prepared</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#202322] tracking-tight">
                    Your wholesale enquiry is ready.
                  </h3>
                  <p className="text-sm text-[#5e635f] mt-2 leading-relaxed">
                    You can open this pre-formatted enquiry directly in your email client or copy the formatted summary to your clipboard to forward to ABSS Global Corporation.
                  </p>
                </div>

                {/* Preformatted Summary Preview */}
                <div className="bg-[#f7f6f2] p-4 border border-[#dedbd2] font-mono text-xs text-[#202322] whitespace-pre-wrap max-h-48 overflow-y-auto leading-relaxed">
                  {formatEnquirySummary(formData)}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={createMailtoLink(formData)}
                    className="button button-red flex-1"
                  >
                    <span>Open in Email Client</span>
                    <ExternalLink size={15} />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="button button-outline flex-1"
                  >
                    {copied ? (
                      <>
                        <span>Copied to Clipboard!</span>
                        <Check size={15} className="text-green-600" />
                      </>
                    ) : (
                      <>
                        <span>Copy Summary</span>
                        <Copy size={15} />
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-4 border-t border-[#dedbd2]">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-mono uppercase tracking-wider text-[#5e635f] hover:text-[#d9282f] transition-colors inline-flex items-center gap-2"
                  >
                    <span>Send Another Enquiry</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#202322] tracking-tight mb-1">
                    Wholesale Order Enquiry
                  </h3>
                  <p className="text-xs text-[#696e69]">
                    Fill in your company and product requirements below.
                  </p>
                </div>

                {/* Row 1: Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="enquiry-fullname"
                      className="block font-mono text-xs uppercase tracking-wider text-[#202322] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="enquiry-fullname"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-[#f7f6f2] border border-[#dedbd2] text-[#202322] text-sm focus:border-[#d9282f] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-company"
                      className="block font-mono text-xs uppercase tracking-wider text-[#202322] mb-2"
                    >
                      Company / Business Name *
                    </label>
                    <input
                      id="enquiry-company"
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({ ...formData, companyName: e.target.value })
                      }
                      placeholder="Your company / business name"
                      className="w-full px-4 py-3 bg-[#f7f6f2] border border-[#dedbd2] text-[#202322] text-sm focus:border-[#d9282f] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="enquiry-email"
                      className="block font-mono text-xs uppercase tracking-wider text-[#202322] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 bg-[#f7f6f2] border border-[#dedbd2] text-[#202322] text-sm focus:border-[#d9282f] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="block font-mono text-xs uppercase tracking-wider text-[#202322] mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 bg-[#f7f6f2] border border-[#dedbd2] text-[#202322] text-sm focus:border-[#d9282f] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Product Dropdown */}
                <div>
                  <label
                    htmlFor="enquiry-product"
                    className="block font-mono text-xs uppercase tracking-wider text-[#202322] mb-2"
                  >
                    Product of Interest *
                  </label>
                  <select
                    id="enquiry-product"
                    required
                    value={formData.productName}
                    onChange={(e) =>
                      setFormData({ ...formData, productName: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#f7f6f2] border border-[#dedbd2] text-[#202322] text-sm focus:border-[#d9282f] focus:outline-none transition-colors"
                  >
                    <option value="General Wholesale Enquiry">
                      General Wholesale Enquiry
                    </option>
                    {verifiedProducts.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="enquiry-message"
                    className="block font-mono text-xs uppercase tracking-wider text-[#202322] mb-2"
                  >
                    Order Requirements & Message *
                  </label>
                  <textarea
                    id="enquiry-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Specify order requirements or product questions..."
                    className="w-full px-4 py-3 bg-[#f7f6f2] border border-[#dedbd2] text-[#202322] text-sm focus:border-[#d9282f] focus:outline-none transition-colors resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button type="submit" className="button button-red w-full sm:w-auto">
                    <span>Prepare Wholesale Enquiry</span>
                    <MoveUpRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
