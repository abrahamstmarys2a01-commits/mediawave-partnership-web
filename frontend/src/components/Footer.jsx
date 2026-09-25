import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Mail, Phone, MapPin, ArrowUpRight, Sparkles, Heart 
} from 'lucide-react';
import { companyInfo } from '../data/mockData';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background glowing ambient light */}
      <div className="absolute top-0 left-1/4 w-60 sm:w-96 h-60 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-60 sm:w-96 h-60 sm:h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-3.5 sm:space-y-4">
            <Link to="/" className="flex items-center group">
              <Logo variant="light" size="md" />
            </Link>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              We connect technology, education, and industry through hands-on technical bootcamps, college MoUs, curriculum innovation, and high-impact digital products.
            </p>

            <div className="flex items-center space-x-2.5 sm:space-x-3 pt-1 sm:pt-2">
              <a href={companyInfo.socials.linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28"/></svg>
              </a>
              <a href={companyInfo.socials.twitter} target="_blank" rel="noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all" aria-label="Twitter / X">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href={companyInfo.socials.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-700 hover:border-blue-700 transition-all" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
              </a>
              <a href={companyInfo.socials.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all" aria-label="Instagram">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href={companyInfo.socials.youtube} target="_blank" rel="noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all" aria-label="YouTube">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 font-['Outfit']">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/partnerships" className="hover:text-blue-400 transition-colors">Partnerships</Link></li>
              <li><Link to="/workshops" className="hover:text-blue-400 transition-colors">Workshops</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">Courses</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-400 transition-colors">Gallery</Link></li>
              <li><Link to="/reviews" className="hover:text-blue-400 transition-colors">Student Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 font-['Outfit']">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Mobile Applications</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors">ERP Solutions</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors">AI Integration</Link></li>
              <li><Link to="/workshops" className="hover:text-blue-400 transition-colors">Training Programs</Link></li>
              <li><Link to="/partner-with-us" className="hover:text-blue-400 transition-colors">College MoU Initiatives</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-white font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 font-['Outfit']">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{companyInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate">{companyInfo.email}</span>
              </li>
              <li className="pt-1.5">
                <Link 
                  to="/partner-with-us" 
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
                >
                  <span>Book Institutional Visit</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-500 text-center sm:text-left">
          <p>© 2026 Media Wave Technology. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms & Conditions</span>
            <button 
              onClick={scrollToTop}
              className="text-blue-400 hover:text-blue-300 hover:underline font-medium"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
