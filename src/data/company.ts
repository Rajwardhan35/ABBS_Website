import { CompanyInfo } from '../types';

/**
 * STRICTLY VERIFIED COMPANY INFORMATION
 * Only information explicitly verified by the client is included here.
 * Do not add unverified certifications, phone numbers, or emails.
 */
export const companyInfo: CompanyInfo = {
  name: 'ABSS Global Corporation',
  tagline: 'Quality rooted in every drop.',
  establishedYear: 2018,
  businessRole: 'Manufacturer and wholesale trader',
  address: 'C-55, MIDC, Tasavade, Karad, Maharashtra 415109, India',
  addressLines: [
    'C-55, MIDC, Tasavade,',
    'Karad, Maharashtra 415109, India',
  ],
  city: 'Karad',
  state: 'Maharashtra',
  pincode: '415109',
  country: 'India',
};
