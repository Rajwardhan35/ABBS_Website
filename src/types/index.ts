export type ProductCategory = 'Oil Products' | 'Agricultural Commodities';

export interface VerifiedProduct {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  accent: string;
  tradeStatus: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  establishedYear: number;
  businessRole: string;
  address: string;
  addressLines: string[];
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  label: string;
  disclaimer: string;
}

export interface EnquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  productName: string;
  message: string;
}
