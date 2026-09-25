import React from 'react';
import { Building2, Users, Presentation, Cpu, Award, Sparkles } from 'lucide-react';

export default function ImpactDarkSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#050b14] via-[#071328] to-[#050b14] text-white relative overflow-hidden border-y border-slate-800/80">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[380px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Title */}
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/90 border border-blue-500/40 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] leading-tight">
              Creating Opportunities, <br />
              <span className="text-gradient-hero">Building Futures</span>
            </h2>
            <p className="text-sm text-slate-400 max-w-sm mx-auto lg:mx-0 leading-relaxed font-normal">
              Transforming classroom curriculum into verified industry milestones through certified technological mastery and live projects.
            </p>
          </div>

          {/* Right 4 Stats Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-5">
            
            <div className="glass-dark p-6 rounded-3xl text-center space-y-2.5 hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">10+</div>
              <div className="text-xs text-slate-400 font-medium">College Partnerships</div>
            </div>

            <div className="glass-dark p-6 rounded-3xl text-center space-y-2.5 hover:border-sky-400/60 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-500/30 text-sky-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Presentation className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">25+</div>
              <div className="text-xs text-slate-400 font-medium">Workshops Conducted</div>
            </div>

            <div className="glass-dark p-6 rounded-3xl text-center space-y-2.5 hover:border-indigo-400/60 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">1,500+</div>
              <div className="text-xs text-slate-400 font-medium">Students Reached</div>
            </div>

            <div className="glass-dark p-6 rounded-3xl text-center space-y-2.5 hover:border-emerald-400/60 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">20+</div>
              <div className="text-xs text-slate-400 font-medium">Technology Programs</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
