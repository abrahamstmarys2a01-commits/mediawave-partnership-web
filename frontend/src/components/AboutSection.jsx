import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/mockData';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Media Wave</span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Outfit'] leading-tight">
              We Connect Technology, <br className="hidden sm:inline" />
              <span className="text-gradient-electric">Education & Industry</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              {companyInfo.about}
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 pt-2 text-left">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Enterprise Technology Solutions</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Industry-Aligned Training</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Formal College MoUs</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Real-World Project Exposure</span>
              </div>
            </div>

            <div className="pt-2 sm:pt-3">
              <Link
                to="/about"
                className="btn-premium inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-lg shadow-blue-500/25 active:scale-95 transition-all w-full sm:w-auto text-center"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image Display */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group hover-lift">
              <img
                src="/mediawave-office.png"
                alt="Media Wave Technology Innovation Lab & Office"
                className="w-full h-[260px] xs:h-[320px] sm:h-[400px] md:h-[440px] object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-100 shadow-2xl flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] sm:text-xs font-extrabold text-blue-600 uppercase tracking-wide truncate">Innovation & Excellence</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 truncate">Official Tech Partner for Universities</div>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 text-white flex items-center justify-center font-black text-xs sm:text-sm shadow-md shrink-0">
                  MW
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
