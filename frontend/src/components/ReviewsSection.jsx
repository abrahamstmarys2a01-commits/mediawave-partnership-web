import React, { useState, useEffect } from 'react';
import { 
  Star, ChevronLeft, ChevronRight, Quote, Building2, 
  CheckCircle2, GraduationCap, PenSquare, Sparkles, LayoutGrid, 
  SlidersHorizontal, MessageSquareHeart, Award 
} from 'lucide-react';
import { studentReviews as initialReviews } from '../data/mockData';
import AddReviewModal from './AddReviewModal';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(initialReviews);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' or 'grid'
  const [filterRating, setFilterRating] = useState('all'); // 'all', '5', '4'

  // Load reviews from localStorage on mount and listen to updates
  const loadReviews = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('mediawave_student_reviews') || '[]');
      if (stored.length > 0) {
        // Merge stored user reviews first, then standard reviews avoiding duplicates by id
        const merged = [...stored, ...initialReviews.filter(r => !stored.some(s => s.id === r.id))];
        setReviews(merged);
      } else {
        setReviews(initialReviews);
      }
    } catch (err) {
      console.error('Failed reading reviews from storage', err);
      setReviews(initialReviews);
    }
  };

  useEffect(() => {
    loadReviews();

    const handleReviewsUpdated = () => {
      loadReviews();
    };

    window.addEventListener('reviews-updated', handleReviewsUpdated);
    return () => window.removeEventListener('reviews-updated', handleReviewsUpdated);
  }, []);

  const handleReviewSubmitted = (newReview) => {
    // Refresh reviews and set index to newly created one
    setReviews(prev => [newReview, ...prev]);
    setCurrentIndex(0);
  };

  // Filtered reviews
  const displayedReviews = reviews.filter(r => {
    if (filterRating === '5') return r.rating === 5;
    if (filterRating === '4') return r.rating >= 4;
    return true;
  });

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? displayedReviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === displayedReviews.length - 1 ? 0 : prev + 1));
  };

  const current = displayedReviews[currentIndex] || displayedReviews[0] || reviews[0];

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Action Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Student Experiences & Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Outfit']">
              What Students Say About Media Wave
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Real feedback from students across top engineering colleges and universities who experienced our hands-on workshops.
            </p>
          </div>

          {/* Action & View Toggles */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle */}
            <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 border border-slate-200">
              <button
                onClick={() => setViewMode('carousel')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'carousel'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Featured View
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>All Reviews ({reviews.length})</span>
              </button>
            </div>

            {/* Write Review CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-blue-500/25 active:scale-95 transition-all"
            >
              <PenSquare className="w-4 h-4" />
              <span>+ Write a Review</span>
            </button>
          </div>
        </div>

        {/* VIEW MODE 1: Interactive Carousel */}
        {viewMode === 'carousel' && current && (
          <div className="max-w-4xl mx-auto relative">
            
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200/80 relative overflow-hidden group hover:border-blue-300 transition-all duration-300">
              
              {/* Background quote decoration */}
              <Quote className="absolute top-6 right-8 w-28 h-28 text-slate-100/80 -rotate-12 pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Student Avatar & Metadata */}
                <div className="md:col-span-4 text-center md:text-left flex flex-col items-center md:items-start space-y-3">
                  <div className="relative">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-xl border-2 border-blue-500/40"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1.5 rounded-full shadow-md">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
                        {current.name}
                      </h3>
                      {current.isUserSubmitted && (
                        <span className="bg-emerald-100 text-emerald-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                          Recent
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-blue-600 flex items-center justify-center md:justify-start gap-1 mt-0.5">
                      <Building2 className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate max-w-[200px]">{current.college}</span>
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      {current.course}
                    </p>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 pt-1">
                    {[...Array(current.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <div className="md:col-span-8 space-y-4 text-left">
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed italic font-normal">
                    "{current.review}"
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-emerald-600 font-medium">
                    <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200/60">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Student Review</span>
                    </div>
                    {current.date && (
                      <span className="text-slate-400 text-[11px] font-normal">
                        Posted on {current.date}
                      </span>
                    )}
                  </div>
                </div>

              </div>

            </div>

            {/* Prev / Next Arrows */}
            {displayedReviews.length > 1 && (
              <>
                <button
                  onClick={prevReview}
                  className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-400 hover:scale-105 active:scale-95 flex items-center justify-center transition-all z-10"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextReview}
                  className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-400 hover:scale-105 active:scale-95 flex items-center justify-center transition-all z-10"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {displayedReviews.length > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                {displayedReviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
            )}

          </div>
        )}

        {/* VIEW MODE 2: Grid View of All Reviews */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedReviews.map((rev) => (
              <div 
                key={rev.id}
                className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/90 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-start gap-3.5">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-12 h-12 rounded-xl object-cover ring-2 ring-blue-500/30 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="font-bold text-slate-900 text-sm font-['Outfit'] truncate">
                          {rev.name}
                        </h4>
                        {rev.isUserSubmitted && (
                          <span className="bg-emerald-100 text-emerald-700 text-[10px] font-extrabold px-1.5 py-0.5 rounded-md shrink-0">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-blue-600 font-medium truncate flex items-center gap-1 mt-0.5">
                        <Building2 className="w-3 h-3 shrink-0" />
                        <span className="truncate">{rev.college}</span>
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(rev.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                    <span className="text-[11px] text-slate-400 font-medium ml-1.5">{rev.course}</span>
                  </div>

                  {/* Review text */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic line-clamp-4">
                    "{rev.review}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Student
                  </span>
                  <span>{rev.date || 'Participant'}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner Invite */}
        <div className="mt-14 bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="text-center md:text-left space-y-1.5">
            <h4 className="text-xl sm:text-2xl font-extrabold font-['Outfit']">
              Attended a Media Wave Workshop or Bootcamp?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Share your feedback, project takeaways, and learning experience with fellow engineering peers.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-premium px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/30 flex items-center gap-2 shrink-0 active:scale-95 transition-all"
          >
            <MessageSquareHeart className="w-4 h-4" />
            <span>Post Your Review Now</span>
          </button>
        </div>

      </div>

      {/* Review Submission Modal */}
      <AddReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onReviewSubmitted={handleReviewSubmitted}
      />

    </section>
  );
}
