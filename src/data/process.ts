import { ProcessStep } from '../types';

/**
 * HONEST B2B PROCUREMENT & ENQUIRY WORKFLOW
 * Strictly verified steps without unsupported claims of batch testing, custom packaging, or specific facility dispatch.
 */
export const procurementSteps: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Wholesale Enquiry',
    description: 'Submit your product requirements, volume estimates, and company details to initiate a wholesale enquiry.',
  },
  {
    stepNumber: '02',
    title: 'Requirement Alignment',
    description: 'Direct discussion with our team to align on product availability, commercial specifications, and supply schedule.',
  },
  {
    stepNumber: '03',
    title: 'Order Confirmation',
    description: 'Agreement on commercial terms and formal confirmation of your wholesale order.',
  },
  {
    stepNumber: '04',
    title: 'Order Coordination',
    description: 'Final order arrangements and commercial details are coordinated directly with ABSS Global Corporation.',
  },
];
