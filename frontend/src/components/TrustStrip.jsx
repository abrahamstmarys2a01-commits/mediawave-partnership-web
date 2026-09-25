import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Building2, Sparkles } from 'lucide-react';
import { trustedColleges } from '../data/mockData';

export default function TrustStrip() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getAcronym = (name) => {
    if (name.includes('NSN')) return 'NSN';
    if (name.includes('Ramakrishnan')) return 'KRCE';
    if (name.includes('Joseph')) return 'SJC';
    if (name.includes('Shanmugam') || name.includes('Shanmuganathan')) return 'SCE';
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section className="py-10 sm:py-14 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 font-['Outfit']">
            Trusted by Educational Institutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl mx-auto">
            We are proud to collaborate with leading engineering and arts colleges across Karur, Trichy, Pudukkottai & Tamil Nadu.
          </p>
        </div>

        {/* Scroll Container with Controls */}
        <div className="relative flex items-center justify-center">
          
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-2 z-10 w-9 h-9 rounded-full bg-white shadow-lg border border-slate-200 items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-400 hover:scale-105 transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Logo Strip Items */}
          <div 
            ref={scrollRef}
            className="flex items-center justify-start lg:justify-center gap-3 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-1 sm:px-6 w-full scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {trustedColleges.map((college) => (
              <div 
                key={college.id}
                className="flex-shrink-0 flex items-center gap-3 px-3.5 py-2.5 sm:px-5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-slate-50/90 hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-400 shadow-sm hover:shadow-md transition-all duration-300 group cursor-default max-w-[260px] sm:max-w-none"
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${college.logoColor || 'bg-blue-600'} text-white flex items-center justify-center text-[10px] sm:text-xs font-black shadow-md group-hover:scale-105 transition-transform shrink-0`}>
                  {getAcronym(college.name)}
                </div>
                <div className="text-left min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-['Outfit'] truncate sm:whitespace-nowrap">
                    {college.name}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate sm:whitespace-nowrap">
                    {college.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-2 z-10 w-9 h-9 rounded-full bg-white shadow-lg border border-slate-200 items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-400 hover:scale-105 transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
}
