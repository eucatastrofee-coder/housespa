export interface Service {
  id: string | number;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: string | number;
  duration: string | number; // in minutes
  image: string;
  categories: string[];
  featured: boolean;
  bookingUrl: string;
  benefits: string[];
}

export interface FAQItem {
  id: string | number;
  question: string;
  answer: string;
  category: "booking" | "safety" | "therapists" | "health";
}

export interface Testimonial {
  id: string | number;
  quote: string;
  author: string;
  role: string;
  service: string;
  image?: string;
}
