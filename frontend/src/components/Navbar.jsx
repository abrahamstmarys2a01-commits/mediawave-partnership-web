import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, ChevronRight, Phone, Mail, Award, BookOpen, 
  GraduationCap, Building2, Sparkles, ArrowRight 
} from 'lucide-react';
import { companyInfo } from '../data/mockData';
import Logo from './Logo';

export default function Navbar({ onOpenPartnerModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Courses', path: '/courses' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-nav shadow-lg shadow-slate-900/5 py-2.5' 
        : 'bg-white/95 backdrop-blur-md py-3.5 border-b border-slate-100'
    }`}>
      <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo with official image */}
          <Link to="/" className="flex items-center group -ml-1 sm:ml-0">
            <Logo variant="dark" size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 bg-slate-100/70 p-1.5 rounded-2xl border border-slate-200/60">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 ${
                    isActive 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Primary Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/partner-with-us"
              className="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-xs xl:text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 active:scale-95 transition-all"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/partner-with-us"
              className="btn-premium bg-blue-600 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-sm"
            >
              Partner
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-100">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2">
            <Link
              to="/partner-with-us"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-blue-600/25"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-3 text-xs text-slate-500 flex items-center justify-between px-2 font-medium">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-blue-600" /> {companyInfo.phone}</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-blue-600" /> {companyInfo.email}</span>
          </div>
        </div>
      )}
    </header>
  );
}
