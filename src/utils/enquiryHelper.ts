import { EnquiryFormData } from '../types';
import { companyInfo } from '../data/company';

/**
 * Formats a clean, professional B2B Wholesale Enquiry text summary.
 */
export function formatEnquirySummary(data: EnquiryFormData): string {
  return [
    `========================================`,
    `WHOLESALE ENQUIRY — ${companyInfo.name.toUpperCase()}`,
    `========================================`,
    `Date: ${new Date().toLocaleDateString('en-GB')}`,
    ``,
    `BUYER DETAILS:`,
    `- Contact Person: ${data.fullName}`,
    `- Company / Business: ${data.companyName}`,
    `- Email Address: ${data.email}`,
    `- Phone / Mobile: ${data.phone || 'Not specified'}`,
    ``,
    `ORDER SPECIFICATIONS:`,
    `- Product of Interest: ${data.productName}`,
    `- Message / Requirements:`,
    `  ${data.message.split('\n').join('\n  ')}`,
    ``,
    `COMPANY DETAILS:`,
    `- Company: ${companyInfo.name}`,
    `- Company Address: ${companyInfo.address}`,
    `========================================`,
  ].join('\n');
}

/**
 * Creates an RFC-compliant mailto: URI with the pre-filled enquiry details.
 */
export function createMailtoLink(data: EnquiryFormData, targetEmail?: string): string {
  const recipient = targetEmail || (import.meta.env.VITE_CONTACT_EMAIL as string) || '';
  const subject = encodeURIComponent(
    `Wholesale Enquiry: ${data.productName} — ${data.companyName}`
  );
  const body = encodeURIComponent(formatEnquirySummary(data));
  return `mailto:${recipient}?subject=${subject}&body=${body}`;
}
