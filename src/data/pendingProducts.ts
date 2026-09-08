/**
 * PENDING / UNVERIFIED PRODUCTS
 * 
 * IMPORTANT: DO NOT RENDER PUBLICLY.
 * These products appeared in early prototypes but have NOT been verified by the client.
 * They are preserved here in quarantine and will remain inactive until explicit client confirmation.
 */
export interface PendingProduct {
  name: string;
  category: string;
  status: 'PENDING_VERIFICATION';
}

export const pendingProducts: PendingProduct[] = [
  { name: 'Flaxseed Oil', category: 'Oil products', status: 'PENDING_VERIFICATION' },
  { name: 'Mustard Oil', category: 'Oil products', status: 'PENDING_VERIFICATION' },
  { name: 'Coconut Oil', category: 'Oil products', status: 'PENDING_VERIFICATION' },
  { name: 'Sesame Oil', category: 'Oil products', status: 'PENDING_VERIFICATION' },
  { name: 'Sunflower Oil', category: 'Oil products', status: 'PENDING_VERIFICATION' },
];
