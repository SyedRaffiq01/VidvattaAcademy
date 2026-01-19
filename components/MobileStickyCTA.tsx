'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 bg-white border-t border-sandalwood-200 shadow-2xl">
      <div className="container mx-auto px-4 py-3">
        <div className="flex gap-3">
          <Link
            href="/contact"
            className="flex-1 bg-vedic-maroon hover:bg-vedic-maroon/90 text-white px-4 py-3 rounded-full text-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Enroll Now</span>
          </Link>
          <a
            href="tel:+917892505452"
            className="bg-vedic-green hover:bg-vedic-green/90 text-white px-4 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            aria-label="Call Now"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
