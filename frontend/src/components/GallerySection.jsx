import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Eye, ArrowRight, Building2, Calendar, ZoomIn } from 'lucide-react';
import { galleryPhotos } from '../data/mockData';

export default function GallerySection({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'MoU Signing', 'Workshops', 'College Visits', 'Training', 'Events'];

  const filteredPhotos = activeCategory === 'All'
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-60 sm:w-96 h-60 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-60 sm:w-96 h-60 sm:h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span>From Gallery</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
              Moments From Our Journey
            </h2>
          </div>

          <div>
            <Link 
              to="/gallery" 
              className="text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Category Filter Pills - Touch friendly scrolling on mobile */}
        <div className="flex items-center gap-2 pb-6 sm:pb-8 overflow-x-auto scrollbar-none py-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Modern Masonry-Style Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {filteredPhotos.map((photo, index) => {
            const isSpan2 = index === 0 || index === 3;
            
            return (
              <div
                key={photo.id}
                onClick={() => onOpenLightbox(photo)}
                className={`relative group rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800/80 hover:border-blue-500/50 shadow-lg transition-all duration-300 ${
                  isSpan2 ? 'sm:col-span-2' : 'col-span-1'
                }`}
                style={{ minHeight: isSpan2 ? '220px' : '190px' }}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                  style={{ minHeight: isSpan2 ? '220px' : '190px', maxHeight: '320px' }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top category badge */}
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-black/60 backdrop-blur-md px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] font-bold text-blue-300 border border-white/10 uppercase tracking-wider">
                  {photo.category}
                </div>

                {/* Hover zoom icon */}
                <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Bottom Content info */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-left">
                  <p className="text-xs sm:text-sm font-bold text-white font-['Outfit'] line-clamp-1 group-hover:text-blue-300 transition-colors">
                    {photo.title}
                  </p>
                  <div className="flex items-center gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] text-slate-400 mt-0.5 sm:mt-1">
                    <span className="flex items-center gap-1 truncate">
                      <Building2 className="w-3 h-3 text-blue-400 shrink-0" />
                      <span className="truncate">{photo.college}</span>
                    </span>
                    <span className="flex items-center gap-1 shrink-0">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      {photo.date}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
