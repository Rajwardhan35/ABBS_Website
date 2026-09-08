import { VerifiedProduct } from '../types';

/**
 * STRICTLY VERIFIED PRODUCTS (4 ONLY)
 * Only products explicitly verified by the client are rendered publicly.
 * Descriptions are strictly factual and do not claim unverified capabilities or applications.
 */
export const verifiedProducts: VerifiedProduct[] = [
  {
    id: 'cold-pressed-almond-oil',
    name: 'Cold Pressed Almond Oil',
    category: 'Oil Products',
    description: 'Cold pressed almond oil available for wholesale enquiry. Trade specifications and order requirements can be discussed with our team.',
    image: 'https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'from-[#b97946] to-[#553421]',
    tradeStatus: 'Available for wholesale enquiry',
  },
  {
    id: 'cold-pressed-groundnut-oil',
    name: 'Cold Pressed Groundnut Oil',
    category: 'Oil Products',
    description: 'Cold pressed groundnut oil available for wholesale enquiry. Trade specifications and order requirements can be discussed with our team.',
    image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'from-[#d9a84b] to-[#715024]',
    tradeStatus: 'Available for wholesale enquiry',
  },
  {
    id: 'safflower-oil',
    name: 'Safflower Oil',
    category: 'Oil Products',
    description: 'Safflower oil available for wholesale enquiry. Trade specifications and order requirements can be discussed with our team.',
    image: 'https://images.pexels.com/photos/39281916/pexels-photo-39281916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'from-[#bb4d2c] to-[#481d18]',
    tradeStatus: 'Available for wholesale enquiry',
  },
  {
    id: 'coconut-copra',
    name: 'Coconut Copra',
    category: 'Agricultural Commodities',
    description: 'Coconut copra agricultural commodity available for wholesale enquiry. Trade specifications and order requirements can be discussed with our team.',
    image: 'https://images.pexels.com/photos/8995296/pexels-photo-8995296.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'from-[#8c6a42] to-[#312419]',
    tradeStatus: 'Available for wholesale enquiry',
  },
];
