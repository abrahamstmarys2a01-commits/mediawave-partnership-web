import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Building2, Presentation, CheckCircle2 } from 'lucide-react';

export default function PartnerCtaSection({ onOpenPartnerModal }) {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 text-white p-6 sm:p-10 md:p-14 overflow-hidden shadow-2xl border border-blue-700/40">
          
          {/* Ambient light circles */}
          <div className="absolute top-0 right-0 w-60 sm:w-96 h-60 sm:h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-blue-200 backdrop-blur-md uppercase tracking-wider">
              <span>Partner With Us</span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Outfit'] tracking-tight leading-tight">
              Let's Build the Next Generation of Tech Talent
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Bring industry-focused training, hands-on workshops and official technology programs to your institution.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link
                to="/partner-with-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-900 font-bold text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl shadow-lg active:scale-95 transition-all text-center"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 text-blue-600 shrink-0" />
              </Link>

              <button
                onClick={() => onOpenPartnerModal && onOpenPartnerModal("Workshop Request")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-700/80 hover:bg-blue-600 text-white border border-white/20 font-semibold text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl backdrop-blur-md active:scale-95 transition-all text-center"
              >
                <Presentation className="w-4 h-4 shrink-0" />
                <span>Request a Workshop</span>
              </button>
            </div>

            {/* Subtext info */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-y-2 sm:gap-x-6 text-[11px] sm:text-xs text-blue-200">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" /> No cost initial campus consultation</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" /> Customizable curriculum</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" /> Industry certifications</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
