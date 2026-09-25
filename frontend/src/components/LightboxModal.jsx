import React from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Building2, Tag } from 'lucide-react';

export default function LightboxModal({ item, onClose, onNext, onPrev }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Top Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all z-20"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      {onPrev && (
        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 p-3 rounded-full transition-all z-20 hidden sm:flex items-center justify-center"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Button */}
      {onNext && (
        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 p-3 rounded-full transition-all z-20 hidden sm:flex items-center justify-center"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Modal Container */}
      <div 
        className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] max-h-[60vh] overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title || "Gallery image"}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-6 bg-slate-900 text-white space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="bg-blue-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              {item.category || "Event"}
            </span>
            <div className="flex items-center gap-4 text-xs text-slate-400">
              {item.college && (
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-blue-400" />
                  {item.college}
                </span>
              )}
              {item.date && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  {item.date}
                </span>
              )}
            </div>
          </div>

          <h3 className="text-xl font-bold font-['Outfit'] text-white">
            {item.title}
          </h3>

          {item.caption && (
            <p className="text-sm text-slate-300 leading-relaxed">
              {item.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
