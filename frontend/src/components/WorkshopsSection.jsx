import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Calendar, Building2, ArrowRight, Code2, Sparkles, BookOpen, Clock, Star, MessageSquarePlus } from 'lucide-react';
import { workshops } from '../data/mockData';
import AddReviewModal from './AddReviewModal';

export default function WorkshopsSection({ onSelectWorkshop }) {
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [selectedWorkshopForReview, setSelectedWorkshopForReview] = useState('');

  const handleOpenReview = (wsTitle) => {
    setSelectedWorkshopForReview(wsTitle);
    setReviewModalOpen(true);
  };

  return (
    <section id="workshops" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Workshops & Training</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Outfit']">
              From Classrooms to Real-World Technology
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Hands-on workshops, expert architecture guidance and practical live-coding labs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleOpenReview('')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold transition-all shadow-sm"
            >
              <MessageSquarePlus className="w-4 h-4 text-blue-600" />
              <span>+ Student Review</span>
            </button>

            <Link 
              to="/workshops" 
              className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors"
            >
              <span>View All Workshops</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3 Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((ws) => (
            <div 
              key={ws.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover-lift flex flex-col justify-between group glow-border"
            >
              <div>
                {/* Workshop Image Banner */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img 
                    src={ws.image} 
                    alt={ws.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-blue-600/95 backdrop-blur-md text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                    {ws.techCategory}
                  </div>

                  {/* Add review quick button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenReview(ws.title);
                    }}
                    className="absolute top-3 right-3 bg-white/90 hover:bg-white text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 backdrop-blur-sm transition-all"
                  >
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span>Review</span>
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3.5">
                  <h3 className="font-bold text-base text-slate-900 font-['Outfit'] group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                    {ws.title}
                  </h3>

                  {/* Tech tags */}
                  <div className="text-[11px] text-blue-800 font-medium bg-blue-50/80 p-2.5 rounded-xl border border-blue-100 leading-relaxed">
                    <span className="font-bold text-slate-800">Tech: </span>
                    {ws.techTags.slice(0, 3).join(', ')}
                  </div>

                  {/* Meta details */}
                  <div className="space-y-1.5 pt-1 text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-2 truncate">
                      <Building2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span className="truncate">{ws.collegeName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{ws.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleOpenReview(ws.title)}
                  className="py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>Add Review</span>
                </button>

                <button
                  onClick={() => onSelectWorkshop(ws)}
                  className="btn-premium py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Review Modal */}
      <AddReviewModal
        isOpen={reviewModalOpen}
        initialWorkshop={selectedWorkshopForReview}
        onClose={() => setReviewModalOpen(false)}
      />

    </section>
  );
}
