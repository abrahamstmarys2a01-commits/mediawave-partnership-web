import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, MapPin, FileCheck, ArrowRight } from 'lucide-react';
import { mouHighlights } from '../data/mockData';

export default function MoUSigningSection({ onSelectMou }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="mou" className="py-16 sm:py-20 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Our Industry - Academia Partnerships</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
              MoU Signing Highlights
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link 
              to="/partnerships" 
              className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 mr-2"
            >
              <span>View All MoUs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Scroll Navigation Arrows */}
            <button 
              onClick={() => scroll('left')}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Timeline Scroll */}
        <div 
          ref={scrollRef}
          className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto scrollbar-none pb-4 pt-1 w-full scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {mouHighlights.map((mou) => (
            <div 
              key={mou.id}
              onClick={() => onSelectMou && onSelectMou(mou)}
              className="flex-shrink-0 w-[260px] xs:w-[290px] sm:w-[330px] bg-slate-50 hover:bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Top Badge: Year */}
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-600 text-white text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-sm">
                  {mou.year}
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 flex items-center gap-1">
                  <FileCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  Official Charter
                </span>
              </div>

              {/* Photo */}
              <div className="relative h-36 sm:h-44 rounded-xl overflow-hidden bg-slate-900 mb-3 sm:mb-4">
                <img 
                  src={mou.image} 
                  alt={mou.collegeName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-[10px] sm:text-[11px] text-white/90 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md truncate">
                  {mou.location}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2 flex-1">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 font-['Outfit'] group-hover:text-blue-600 transition-colors">
                  {mou.collegeName}
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{mou.location}</span>
                </p>
                <div className="text-xs font-semibold text-blue-700 bg-blue-50/80 p-2 rounded-lg border border-blue-100/60 truncate">
                  {mou.mouSigned}
                </div>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {mou.shortDesc}
                </p>
              </div>

              {/* Bottom detail action */}
              <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                <span>View MoU Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
