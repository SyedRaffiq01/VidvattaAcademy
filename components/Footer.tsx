import Link from 'next/link';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-sandalwood-800 text-white overflow-hidden">
      {/* Top border line */}
      <div className="h-0.5 bg-vedic-maroon w-full"></div>
      
      {/* Background pattern with reduced opacity for better text visibility */}
      <div className="absolute inset-0 vedic-bg-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-vedic-gold mb-3">
                Vidvatta Academy
              </h3>
              <p className="text-sandalwood-100 text-sm md:text-base leading-relaxed max-w-md">
                Building Sharp Minds with Abacus & Vedic Mathematics! A holistic brain development program blending ancient Vedic wisdom with modern teaching methods.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-vedic-gold">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-sandalwood-100 hover:text-vedic-gold transition-colors text-sm md:text-base font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-sandalwood-100 hover:text-vedic-gold transition-colors text-sm md:text-base font-medium">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-sandalwood-100 hover:text-vedic-gold transition-colors text-sm md:text-base font-medium">
                  Online & Offline Classes
                </Link>
              </li>
              <li>
                <Link href="/summer-camps" className="text-sandalwood-100 hover:text-vedic-gold transition-colors text-sm md:text-base font-medium">
                  Summer Camps
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sandalwood-100 hover:text-vedic-gold transition-colors text-sm md:text-base font-medium">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-vedic-gold">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2.5">
                <Phone className="w-5 h-5 mt-0.5 text-vedic-gold flex-shrink-0" />
                <div className="text-sandalwood-100 text-sm md:text-base">
                  <a href="tel:+917892505452" className="hover:text-vedic-gold transition-colors block font-medium">
                    +91 78925 05452
                  </a>
                  <a href="tel:+919886931521" className="hover:text-vedic-gold transition-colors block font-medium mt-1">
                    +91 98869 31521
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Mail className="w-5 h-5 mt-0.5 text-vedic-gold flex-shrink-0" />
                <a 
                  href="mailto:Vidvatta.academy@gmail.com" 
                  className="text-sandalwood-100 hover:text-vedic-gold transition-colors text-sm md:text-base font-medium break-all"
                >
                  Vidvatta.academy@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-5 h-5 mt-0.5 text-vedic-gold flex-shrink-0" />
                <span className="text-sandalwood-100 text-sm md:text-base font-medium">
                  Arehalli, Uttarahalli, Bangalore
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-sandalwood-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a
              href="https://instagram.com/vidvatta.academy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sandalwood-100 hover:text-vedic-gold transition-colors font-medium"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm md:text-base">Follow Us</span>
            </a>
          </div>
          <p className="text-sandalwood-100 text-sm md:text-base text-center md:text-right font-medium">
            © {new Date().getFullYear()} Vidvatta Academy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
