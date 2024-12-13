export interface PartnershipInquiry {
  title: string;
  description: string;
  benefits: string[];
  requirements: string[];
  contactInfo: {
    email: string;
    phone: string;
    kakao?: string;
  };
} 