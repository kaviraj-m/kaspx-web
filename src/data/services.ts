import {
  Globe,
  ShoppingCart,
  Smartphone,
  Code2,
  Monitor,
  Sparkles,
  Server,
  Blocks,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  title: string;
  image: string;
  desc: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: 'Business Website',
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop',
    desc: 'Professional and high-converting websites tailored to your business goals.',
    icon: Globe,
  },
  {
    title: 'E-commerce',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    desc: 'Robust online stores with seamless checkout and inventory management.',
    icon: ShoppingCart,
  },
  {
    title: 'Mobile Apps',
    image:
      'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop',
    desc: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
  },
  {
    title: 'Web App',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    desc: 'Scalable and interactive web applications using modern technologies.',
    icon: Code2,
  },
  {
    title: 'Desktop Apps',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop',
    desc: 'High-performance software solutions for Windows, macOS, and Linux.',
    icon: Monitor,
  },
  {
    title: 'AI Integration',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    desc: 'Smart solutions powered by advanced machine learning models.',
    icon: Sparkles,
  },
  {
    title: 'IT & Server Support',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    desc: 'Reliable infrastructure management and 24/7 technical support.',
    icon: Server,
  },
  {
    title: 'Web 3.0 & Blockchain',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2064&auto=format&fit=crop',
    desc: 'Decentralized applications and secure blockchain implementations.',
    icon: Blocks,
  },
];

export const heroServiceHighlights = services.slice(0, 3);

export const heroTagline =
  'From business websites and e-commerce to mobile apps, AI integration, and blockchain — we deliver end-to-end digital solutions built for growth.';
