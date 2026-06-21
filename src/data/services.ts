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
    desc: 'Professional, high-converting business websites tailored to your brand, goals, and target audience.',
    icon: Globe,
  },
  {
    title: 'E-commerce',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    desc: 'Robust online stores with seamless checkout, secure payments, and easy inventory management.',
    icon: ShoppingCart,
  },
  {
    title: 'Mobile Apps',
    image:
      'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop',
    desc: 'Native and cross-platform mobile apps for iOS and Android with polished user experiences.',
    icon: Smartphone,
  },
  {
    title: 'Web Apps',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    desc: 'Scalable, interactive web applications built with modern frameworks and maintainable architecture.',
    icon: Code2,
  },
  {
    title: 'Desktop Apps',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop',
    desc: 'High-performance desktop applications for Windows, macOS, and Linux with reliable workflows.',
    icon: Monitor,
  },
  {
    title: 'AI Integration',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    desc: 'Smart AI-powered features and automation using advanced machine learning models and tools.',
    icon: Sparkles,
  },
  {
    title: 'Web 3.0 & Blockchain',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2064&auto=format&fit=crop',
    desc: 'Decentralized applications and secure blockchain solutions built for transparency and trust.',
    icon: Blocks,
  },
  {
    title: 'Application Hosting and Maintenance',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    desc: 'Secure application hosting, monitoring, and maintenance to keep your apps running smoothly.',
    icon: Server,
  },
];

export const heroTagline =
  'From business websites and e-commerce to mobile apps, AI integration, application hosting and maintenance, and blockchain — we deliver end-to-end digital solutions built for growth.';
