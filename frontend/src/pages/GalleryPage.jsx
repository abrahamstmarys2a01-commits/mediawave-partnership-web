import React, { useState } from 'react';
import { Camera, ZoomIn, Building2, Calendar, Sparkles } from 'lucide-react';
import { galleryPhotos } from '../data/mockData';
import LightboxModal from '../components/LightboxModal';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = ['All', 'MoU Signing', 'Workshops', 'College Visits', 'Training', 'Events', 'Team'];

  const filteredPhotos = activeCategory === 'All'
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-14 sm:py-16 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5 sm:space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Memories</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold font-['Outfit'] leading-tight">
            Gallery & Event Photographs
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
            Capturing MoU ceremonies, university visits, student hackathons, and technical bootcamps across campuses.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
        
        {/* Category Pills */}
        <div className="flex items-center sm:justify-center gap-2 mb-8 sm:mb-10 overflow-x-auto scrollbar-none py-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-56 xs:h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] font-bold text-blue-300 uppercase tracking-wider border border-white/10">
                {photo.category}
              </div>

              <div className="absolute top-3 right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 text-left text-white">
                <h3 className="text-sm sm:text-base font-bold font-['Outfit'] line-clamp-1 group-hover:text-blue-300 transition-colors">
                  {photo.title}
                </h3>
                <div className="flex items-center gap-2.5 sm:gap-3 text-[10px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  <span className="flex items-center gap-1 truncate">
                    <Building2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-blue-400 shrink-0" />
                    <span className="truncate">{photo.college}</span>
                  </span>
                  <span className="flex items-center gap-1 shrink-0">
                    <Calendar className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-blue-400" />
                    {photo.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />

    </div>
  );
}
