import React, { useState, useEffect } from 'react';
import { Star, Building2, GraduationCap, Quote, CheckCircle2, PenSquare, Sparkles, MessageSquareHeart } from 'lucide-react';
import { studentReviews as initialReviews } from '../data/mockData';
import AddReviewModal from '../components/AddReviewModal';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      setReviews(initialReviews);
    }
  };

  useEffect(() => {
    loadReviews();
    window.addEventListener('reviews-updated', loadReviews);
    return () => window.removeEventListener('reviews-updated', loadReviews);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf815_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student Feedback & Testimonials</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-['Outfit']">
            Student Reviews & Testimonials
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Read real experiences from engineering and science students who attended our technical bootcamps and workshops across Tamil Nadu.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-blue-500/25 active:scale-95 transition-all"
            >
              <PenSquare className="w-4 h-4" />
              <span>+ Share Your Review</span>
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">
              All Verified Student Reviews ({reviews.length})
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">Real feedback from workshop participants</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5"
          >
            <PenSquare className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              <Quote className="absolute top-6 right-6 w-16 h-16 text-slate-100 -rotate-12 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {rev.isUserSubmitted && (
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                      Recent Submission
                    </span>
                  )}
                </div>

                <p className="text-slate-700 text-sm italic leading-relaxed">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-4 relative z-10">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-2xl object-cover border-2 border-blue-500/30 shadow-sm shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-slate-900 text-sm font-['Outfit'] truncate">{rev.name}</h4>
                  <div className="text-xs font-semibold text-blue-600 flex items-center gap-1 truncate mt-0.5">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{rev.college}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 truncate mt-0.5">{rev.course}</div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Review Modal */}
      <AddReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onReviewSubmitted={(newRev) => setReviews(prev => [newRev, ...prev])}
      />

    </div>
  );
}
