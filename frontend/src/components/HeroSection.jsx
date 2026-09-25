import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, Building2, Users, Presentation, 
  Laptop, CheckCircle2, ShieldCheck, Award, Zap, Code 
} from 'lucide-react';
import { impactStats } from '../data/mockData';

export default function HeroSection({ onOpenPartnerModal }) {
  return (
    <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[#050b14] via-[#071328] to-[#050b14] text-white">
      
      {/* Dynamic Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] md:w-[650px] h-[250px] sm:h-[350px] bg-blue-600/20 sm:bg-blue-600/25 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-10 right-10 w-60 sm:w-96 h-60 sm:h-96 bg-sky-500/10 sm:bg-sky-500/15 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-60 sm:w-96 h-60 sm:h-96 bg-indigo-600/15 sm:bg-indigo-600/20 rounded-full blur-[80px] sm:blur-[110px] pointer-events-none" />

      {/* Modern Grid Matrix Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf812_1px,transparent_1px)] [background-size:20px_20px] sm:[background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Floating Pill */}
        <div className="flex items-center justify-center lg:justify-start mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-[11px] sm:text-xs font-semibold text-blue-300 backdrop-blur-xl shadow-lg shadow-blue-950/50">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="tracking-wide">Technology</span>
            <span className="text-slate-600">•</span>
            <span className="tracking-wide">Education</span>
            <span className="text-slate-600">•</span>
            <span className="tracking-wide">Industry</span>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Outfit'] leading-[1.15]">
              Building Future-Ready <br />
              <span className="text-gradient-hero">
                Tech Talent
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Connecting technology, education and industry through innovative software solutions, hands-on industrial bootcamps and high-impact academia partnerships.
            </p>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                to="/courses"
                className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 active:scale-95 transition-all text-center"
              >
                <span>Explore Our Programs</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              
              <Link
                to="/partner-with-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-blue-500/50 font-bold text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl backdrop-blur-xl shadow-lg active:scale-95 transition-all text-center"
              >
                <span>Partner With Us</span>
              </Link>
            </div>

            {/* Highlights Badges */}
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-y-2.5 sm:gap-x-4 text-[11px] sm:text-xs md:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 border border-white/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>MoU Certified Programs</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 border border-white/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% Practical Labs</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 border border-white/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Live Project Deployment</span>
              </div>
            </div>

          </div>

          {/* Right Hero Showcase Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Main Image Frame with Ambient Glow */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900 group">
                <img
                  src="/mediawave-office.png"
                  alt="Media Wave Technology Solutions Office"
                  className="w-full h-[280px] xs:h-[340px] sm:h-[420px] md:h-[480px] object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-slate-950/20" />
                
                {/* Floating Badge: Learn • Build • Grow */}
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-slate-950/85 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 text-right text-[10px] sm:text-xs shadow-2xl animate-float">
                  <div className="font-['Outfit'] font-black text-sky-400 tracking-wider">
                    LEARN
                  </div>
                  <div className="font-['Outfit'] font-black text-white tracking-wider">
                    BUILD
                  </div>
                  <div className="font-['Outfit'] font-black text-blue-400 tracking-wider">
                    GROW
                  </div>
                </div>

                {/* Bottom Overlay Pill */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 bg-slate-950/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 border border-white/15 flex items-center justify-between shadow-xl">
                  <div>
                    <div className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-bold text-sky-400 font-['Outfit']">
                      <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                      <span>Media Wave Academy</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium mt-0.5">Empowering 1,500+ Engineers</p>
                  </div>
                  <div className="flex -space-x-1.5 sm:-space-x-2 overflow-hidden">
                    <img className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full ring-2 ring-blue-500 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Student" />
                    <img className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full ring-2 ring-sky-500 object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80" alt="Student" />
                    <img className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full ring-2 ring-emerald-500 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Student" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Floating Statistics Ribbon */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            
            <div className="bg-slate-900/75 backdrop-blur-xl border border-slate-800 hover:border-blue-500/50 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-['Outfit']">10+</div>
                <div className="text-[11px] sm:text-xs md:text-sm text-slate-400 font-medium">Colleges Connected</div>
              </div>
            </div>

            <div className="bg-slate-900/75 backdrop-blur-xl border border-slate-800 hover:border-sky-500/50 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-sky-500/20 border border-sky-500/30 text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-['Outfit']">1,500+</div>
                <div className="text-[11px] sm:text-xs md:text-sm text-slate-400 font-medium">Students Trained</div>
              </div>
            </div>

            <div className="bg-slate-900/75 backdrop-blur-xl border border-slate-800 hover:border-indigo-500/50 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Presentation className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-['Outfit']">25+</div>
                <div className="text-[11px] sm:text-xs md:text-sm text-slate-400 font-medium">Workshops Done</div>
              </div>
            </div>

            <div className="bg-slate-900/75 backdrop-blur-xl border border-slate-800 hover:border-emerald-500/50 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Laptop className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-['Outfit']">15+</div>
                <div className="text-[11px] sm:text-xs md:text-sm text-slate-400 font-medium">Industry Projects</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
