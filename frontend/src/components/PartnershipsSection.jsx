import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Calendar, CheckCircle2, ArrowRight, Award, FileText, Sparkles } from 'lucide-react';
import { trustedColleges } from '../data/mockData';

export default function PartnershipsSection({ onSelectCollege }) {
  const featuredColleges = trustedColleges.slice(0, 3);

  return (
    <section id="partnerships" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-0 w-60 sm:w-96 h-60 sm:h-96 bg-blue-100/50 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-60 sm:w-96 h-60 sm:h-96 bg-sky-100/50 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & MoU Highlight Visual Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 sm:mb-16">
          
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>College Partnerships</span>
            </div>
            
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Outfit'] leading-tight">
              Building Strong <br className="hidden sm:inline" />
              <span className="text-gradient-electric">Industry–Academia Connections</span>
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              We work closely with educational institutions to bring industry knowledge, practical training, faculty development and enterprise technology exposure to students.
            </p>

            <div className="pt-2 sm:pt-3">
              <Link 
                to="/partnerships"
                className="btn-premium inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-lg shadow-blue-500/25 active:scale-95 transition-all w-full sm:w-auto text-center"
              >
                <span>View All Partnerships</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Featured Banner */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group hover-lift">
              <div className="relative h-56 xs:h-64 sm:h-76 overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1000&q=80" 
                  alt="MoU Signing Ceremony"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                
                {/* Header Tag Inside Banner */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl shadow-md border border-slate-100 flex items-center gap-2">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 font-['Outfit']">MoU Signing Ceremony</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 text-white">
                  <p className="text-[10px] sm:text-xs text-sky-300 font-semibold uppercase tracking-wider">Formal Institutional Alliance</p>
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold font-['Outfit'] mt-0.5 leading-snug">Empowering Students with Real Industry Capabilities</h3>
                </div>
              </div>
            </div>

            {/* Floating Annotation */}
            <div className="hidden sm:block absolute -top-4 -right-3 bg-white/95 backdrop-blur-md border border-blue-200 shadow-xl rounded-2xl p-3 text-center rotate-3 transform hover:rotate-0 transition-transform">
              <p className="text-[11px] font-bold text-blue-700 font-['Outfit']">Partnerships that create</p>
              <p className="text-xs font-extrabold text-slate-900">opportunities 🚀</p>
            </div>
          </div>

        </div>

        {/* 3 Featured Partnership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredColleges.map((college) => (
            <div 
              key={college.id}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover-lift flex flex-col justify-between group glow-border"
            >
              <div>
                {/* Card Image Banner */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                  <img 
                    src={college.image} 
                    alt={college.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* College Avatar Badge */}
                  <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 flex items-center gap-2 bg-white/95 backdrop-blur-md p-1 pr-2.5 sm:p-1.5 sm:pr-3 rounded-full shadow-md border border-slate-100 max-w-[85%]">
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full ${college.logoColor || 'bg-blue-600'} text-white flex items-center justify-center text-[10px] font-black shrink-0`}>
                      {college.name.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-slate-800 truncate">
                      {college.name}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-6 space-y-3.5 sm:space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit'] group-hover:text-blue-600 transition-colors line-clamp-1">
                      {college.name}
                    </h3>
                    
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span className="truncate">{college.location}</span>
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
                      <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold bg-blue-50 text-blue-700 px-2.5 sm:px-3 py-1 rounded-lg border border-blue-100">
                        <FileText className="w-3 h-3 text-blue-600 shrink-0" />
                        <span>{college.badge || "MoU Signed"}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 sm:px-3 py-1 rounded-lg border border-slate-200">
                        <Award className="w-3 h-3 text-slate-500 shrink-0" />
                        <span>{college.badge2 || "Workshop Conducted"}</span>
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-slate-400 mt-2.5 sm:mt-3 font-medium">
                      Date: {college.mouDate}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Action Button */}
              <div className="p-4 sm:p-6 pt-0">
                <button
                  onClick={() => onSelectCollege(college)}
                  className="btn-premium w-full py-2.5 sm:py-3 px-4 rounded-xl bg-slate-950 hover:bg-blue-600 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>View Partnership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
