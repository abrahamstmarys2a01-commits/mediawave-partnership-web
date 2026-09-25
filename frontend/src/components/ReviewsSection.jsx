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

  // Load reviews from localStorage on mount and listen to updates
  const loadReviews = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('mediawave_student_reviews') || '[]');
      if (stored.length > 0) {
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
    setReviews(prev => [newReview, ...prev]);
    setCurrentIndex(0);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[currentIndex] || reviews[0];

  return (
    <section id="reviews" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] md:w-[700px] h-[250px] sm:h-[350px] bg-blue-100/40 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Action Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Student Experiences & Feedback</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Outfit'] leading-tight">
              What Students Say About Media Wave
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-1.5 sm:mt-2 max-w-xl">
              Real feedback from students across top engineering colleges and universities who experienced our hands-on workshops.
            </p>
          </div>

          {/* Action & View Toggles */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* View Mode Toggle */}
            <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 border border-slate-200">
              <button
                onClick={() => setViewMode('carousel')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'carousel'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Featured
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  viewMode === 'grid'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>All ({reviews.length})</span>
              </button>
            </div>

            {/* Write Review CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-premium inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg shadow-blue-500/25 active:scale-95 transition-all whitespace-nowrap"
            >
              <PenSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>+ Write Review</span>
            </button>
          </div>
        </div>

        {/* VIEW MODE 1: Interactive Carousel */}
        {viewMode === 'carousel' && current && (
          <div className="max-w-4xl mx-auto relative px-1 sm:px-6">
            
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-xl sm:shadow-2xl border border-slate-200/80 relative overflow-hidden group hover:border-blue-300 transition-all duration-300">
              
              {/* Background quote decoration */}
              <Quote className="absolute top-4 right-4 sm:top-6 sm:right-8 w-16 h-16 sm:w-28 sm:h-28 text-slate-100/80 -rotate-12 pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
                
                {/* Student Avatar & Metadata */}
                <div className="md:col-span-4 text-center md:text-left flex flex-col items-center md:items-start space-y-2.5 sm:space-y-3">
                  <div className="relative">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl object-cover shadow-xl border-2 border-blue-500/40"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1 sm:p-1.5 rounded-full shadow-md">
                      <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 justify-center md:justify-start flex-wrap">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                        {current.name}
                      </h3>
                      {current.isUserSubmitted && (
                        <span className="bg-emerald-100 text-emerald-700 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full">
                          Recent
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-blue-600 flex items-center justify-center md:justify-start gap-1 mt-0.5">
                      <Building2 className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate max-w-[200px]">{current.college}</span>
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5 sm:mt-1">
                      {current.course}
                    </p>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 pt-0.5">
                    {[...Array(current.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <div className="md:col-span-8 space-y-3 sm:space-y-4 text-left">
                  <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed italic font-normal">
                    "{current.review}"
                  </p>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 sm:pt-2 text-xs text-emerald-600 font-medium">
                    <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-emerald-200/60 text-[11px] sm:text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Verified Student Review</span>
                    </div>
                    {current.date && (
                      <span className="text-slate-400 text-[10px] sm:text-[11px] font-normal">
                        Posted on {current.date}
                      </span>
                    )}
                  </div>
                </div>

              </div>

            </div>

            {/* Prev / Next Arrows */}
            {reviews.length > 1 && (
              <div className="flex items-center justify-between sm:block mt-4 sm:mt-0">
                <button
                  onClick={prevReview}
                  className="sm:absolute sm:-left-4 sm:top-1/2 sm:-translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg sm:shadow-xl border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-400 hover:scale-105 active:scale-95 flex items-center justify-center transition-all z-10"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Mobile Dots in center */}
                <div className="flex sm:hidden items-center justify-center gap-1.5">
                  {reviews.slice(0, 6).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentIndex === idx ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-300'
                      }`}
                      aria-label={`Go to review ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextReview}
                  className="sm:absolute sm:-right-4 sm:top-1/2 sm:-translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg sm:shadow-xl border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-400 hover:scale-105 active:scale-95 flex items-center justify-center transition-all z-10"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Desktop Dots Indicator */}
            {reviews.length > 1 && (
              <div className="hidden sm:flex items-center justify-center gap-2 mt-8">
                {reviews.map((_, idx) => (
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {reviews.map((rev) => (
              <div 
                key={rev.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-md border border-slate-200/90 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3 sm:space-y-4">
                  {/* Card Header */}
                  <div className="flex items-start gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover ring-2 ring-blue-500/30 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm font-['Outfit'] truncate">
                          {rev.name}
                        </h4>
                        {rev.isUserSubmitted && (
                          <span className="bg-emerald-100 text-emerald-700 text-[10px] font-extrabold px-1.5 py-0.5 rounded-md shrink-0">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] sm:text-xs text-blue-600 font-medium truncate flex items-center gap-1 mt-0.5">
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
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium ml-1.5 truncate">{rev.course}</span>
                  </div>

                  {/* Review text */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic line-clamp-4">
                    "{rev.review}"
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    Verified Student
                  </span>
                  <span>{rev.date || 'Participant'}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner Invite */}
        <div className="mt-10 sm:mt-14 bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl border border-slate-800 text-center md:text-left">
          <div className="space-y-1 sm:space-y-1.5">
            <h4 className="text-lg sm:text-xl md:text-2xl font-extrabold font-['Outfit']">
              Attended a Media Wave Workshop or Bootcamp?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Share your feedback, project takeaways, and learning experience with fellow engineering peers.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-premium px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 shrink-0 active:scale-95 transition-all w-full sm:w-auto"
          >
            <MessageSquareHeart className="w-4 h-4 shrink-0" />
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
