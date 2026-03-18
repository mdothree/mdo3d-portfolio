import PlatformCard from '@/components/PlatformCard';

type PlatformColor = 'purple' | 'orange' | 'gold';
type PlatformStatus = 'Live' | 'Coming Soon' | 'In Development';

interface PlatformItem {
  name: string;
  description: string;
  path: string;
  color: PlatformColor;
  status: PlatformStatus;
  external?: boolean;
}

interface PlatformCategory {
  category: string;
  items: PlatformItem[];
}

const platforms: PlatformCategory[] = [
  // Spiritual & Divination
  {
    category: 'Spiritual & Divination',
    items: [
      {
        name: 'Oracle Cards',
        description: 'Daily mystical guidance and intuitive readings',
        path: '/oracle',
        color: 'purple',
        status: 'Live',
      },
      {
        name: 'Dream Interpreter',
        description: 'AI-powered dream analysis and symbolism',
        path: '/dreams',
        color: 'purple',
        status: 'Live',
      },
      {
        name: 'Tarot Readings',
        description: 'Traditional tarot card guidance',
        path: '/tarot',
        color: 'purple',
        status: 'Live',
      },
      {
        name: 'Numerology',
        description: 'Life path and destiny number calculations',
        path: '/numerology',
        color: 'purple',
        status: 'Coming Soon',
      },
      {
        name: 'Astrology',
        description: 'Personalized horoscopes and birth charts',
        path: '/astrology',
        color: 'purple',
        status: 'Coming Soon',
      },
      {
        name: 'Feng Shui',
        description: 'Home energy flow analysis',
        path: '/fengshui',
        color: 'purple',
        status: 'Coming Soon',
      },
    ],
  },
  // Professional & Career
  {
    category: 'Professional & Career',
    items: [
      {
        name: 'Resume Analyzer',
        description: 'ATS optimization and resume scoring',
        path: 'https://rigor.design/resume',
        color: 'orange',
        status: 'Live',
        external: true,
      },
      {
        name: 'Cover Letter Generator',
        description: 'AI-powered personalized cover letters',
        path: 'https://rigor.design/cover',
        color: 'orange',
        status: 'Coming Soon',
        external: true,
      },
      {
        name: 'LinkedIn Optimizer',
        description: 'Profile optimization and SEO',
        path: 'https://rigor.design/linkedin',
        color: 'orange',
        status: 'Coming Soon',
        external: true,
      },
      {
        name: 'Interview Prep',
        description: 'AI interview coaching and practice',
        path: 'https://rigor.design/interview',
        color: 'orange',
        status: 'Coming Soon',
        external: true,
      },
    ],
  },
  // Utilities & Productivity
  {
    category: 'Utilities & Productivity',
    items: [
      {
        name: 'PDF Tools',
        description: 'Merge, split, compress PDFs',
        path: 'https://mdothree.com/pdf',
        color: 'gold',
        status: 'Coming Soon',
        external: true,
      },
      {
        name: 'QR Code Generator',
        description: 'Custom QR codes with analytics',
        path: 'https://mdothree.com/qr',
        color: 'gold',
        status: 'Coming Soon',
        external: true,
      },
      {
        name: 'Image Tools',
        description: 'Resize, convert, compress images',
        path: 'https://mdothree.com/image',
        color: 'gold',
        status: 'Coming Soon',
        external: true,
      },
      {
        name: 'Text Tools',
        description: 'Word count, formatter, text diff',
        path: 'https://mdothree.com/text',
        color: 'gold',
        status: 'Coming Soon',
        external: true,
      },
    ],
  },
  // Lead Generation
  {
    category: 'Lead Generation & Scanners',
    items: [
      {
        name: 'Business Lead Scanner',
        description: 'Find and verify business contacts',
        path: 'https://ronnascanner.com/leads',
        color: 'orange',
        status: 'Coming Soon',
        external: true,
      },
      {
        name: 'Email Finder',
        description: 'Discover and verify email addresses',
        path: 'https://ronnascanner.com/emails',
        color: 'orange',
        status: 'Coming Soon',
        external: true,
      },
      {
        name: 'Prospect Research',
        description: 'Deep prospect intelligence',
        path: 'https://ronnascanner.com/prospects',
        color: 'orange',
        status: 'Coming Soon',
        external: true,
      },
    ],
  },
  // Plugins & Extensions
  {
    category: 'Plugins & Extensions',
    items: [
      {
        name: 'Chrome Divination Tab',
        description: 'Daily oracle cards on new tab',
        path: '#',
        color: 'purple',
        status: 'In Development',
      },
      {
        name: 'Discord Oracle Bot',
        description: 'Divination commands for Discord',
        path: '#',
        color: 'purple',
        status: 'In Development',
      },
      {
        name: 'Telegram Oracle Bot',
        description: 'Daily readings via Telegram',
        path: '#',
        color: 'purple',
        status: 'In Development',
      },
      {
        name: 'Good Tea Extension',
        description: 'Tea discovery and brewing timer',
        path: '#',
        color: 'gold',
        status: 'In Development',
      },
    ],
  },
  // Commerce
  {
    category: 'Commerce',
    items: [
      {
        name: 'Runwae',
        description: 'Influencer marketing platform',
        path: 'https://runwae.com',
        color: 'orange',
        status: 'Live',
        external: true,
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-brand-purple via-purple-800 to-brand-gold py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-gold">
            MDO3 Digital
          </h1>
          <p className="text-2xl text-purple-100 mb-4">
            AI-Powered Platforms for Modern Living
          </p>
          <p className="text-lg text-purple-200 max-w-3xl mx-auto">
            From spiritual guidance to professional tools, discover our collection of 15+ digital platforms designed to enhance every aspect of your life.
          </p>
        </div>
      </header>

      {/* Platform Grid */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {platforms.map((category) => (
          <section key={category.category} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-gold">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((platform) => (
                <PlatformCard key={platform.name} {...platform} />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            Part of the Lamar Technology Portfolio
          </p>
          <p className="text-slate-500 text-sm">
            A division of Butts Technologies, LLC
          </p>
          <div className="mt-6 text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} MDO3 Digital. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
