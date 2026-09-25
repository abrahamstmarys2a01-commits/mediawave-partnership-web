import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Cpu, Award } from 'lucide-react';
import { companyInfo } from '../data/mockData';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Media Wave</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Outfit'] leading-tight">
              We Connect Technology, <br />
              <span className="text-gradient-electric">Education & Industry</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              {companyInfo.about}
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
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

            <div className="pt-3">
              <Link
                to="/about"
                className="btn-premium inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-3.5 rounded-2xl shadow-lg shadow-blue-500/25 active:scale-95 transition-all"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image Display */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group hover-lift">
              <img
                src="/mediawave-office.png"
                alt="Media Wave Technology Innovation Lab & Office"
                className="w-full h-[380px] sm:h-[440px] object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-slate-100 shadow-2xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-extrabold text-blue-600 uppercase tracking-wide">Innovation & Excellence</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">Official Tech Partner for Universities</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 text-white flex items-center justify-center font-black text-sm shadow-md">
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
