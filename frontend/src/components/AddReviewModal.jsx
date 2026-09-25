import React, { useState } from 'react';
import { X, Star, Sparkles, Building2, BookOpen, User, CheckCircle2, MessageSquareHeart, Upload } from 'lucide-react';
import { workshops } from '../data/mockData';

const AVATAR_OPTIONS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
];

const RATING_LABELS = {
  1: 'Needs Improvement',
  2: 'Fair Experience',
  3: 'Good Workshop',
  4: 'Very Good & Informative',
  5: 'Exceptional & Highly Recommended!'
};

export default function AddReviewModal({ isOpen, onClose, initialWorkshop = '', onReviewSubmitted }) {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [course, setCourse] = useState(initialWorkshop || '');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');
  const [avatar, setAvatar] = useState(AVATAR_OPTIONS[0]);
  const [customAvatar, setCustomAvatar] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync initial workshop when opened
  React.useEffect(() => {
    if (initialWorkshop) {
      setCourse(initialWorkshop);
    }
  }, [initialWorkshop, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !college.trim() || !review.trim()) return;

    setIsSubmitting(true);

    const newReview = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      college: college.trim(),
      course: course.trim() || "Web Development Workshop",
      rating: Number(rating),
      avatar: customAvatar.trim() || avatar,
      review: review.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      isUserSubmitted: true
    };

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('mediawave_student_reviews') || '[]');
      const updated = [newReview, ...existing];
      localStorage.setItem('mediawave_student_reviews', JSON.stringify(updated));
      window.dispatchEvent(new Event('reviews-updated'));
    } catch (err) {
      console.error('Failed to save review in localStorage', err);
    }

    setIsSubmitting(false);
    setSubmitted(true);

    if (onReviewSubmitted) {
      onReviewSubmitted(newReview);
    }

    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setCollege('');
      setReview('');
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 p-6 text-white relative rounded-t-3xl">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student Feedback Portal</span>
          </div>

          <h3 className="text-2xl font-extrabold font-['Outfit']">
            Share Your Learning Experience
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 mt-1">
            Your review inspires future students and helps colleges connect with modern technology training.
          </p>
        </div>

        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-extrabold text-slate-900 font-['Outfit']">
              Thank You, {name}!
            </h4>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Your review has been posted successfully and is now live on our website!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            
            {/* Student Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Your Full Name *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Vigneshwaran R"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800 text-sm outline-none transition-all"
                />
              </div>
            </div>

            {/* College / Institution */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                College / University / Institution *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Building2 className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  placeholder="e.g. NSN College of Engineering / St. Joseph's College"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800 text-sm outline-none transition-all"
                />
              </div>
            </div>

            {/* Workshop / Course Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Workshop / Course Attended
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <BookOpen className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  placeholder="e.g. Web Development Workshop / Full Stack Bootcamp"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800 text-sm outline-none transition-all"
                />
              </div>
            </div>

            {/* Rating Stars */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Overall Rating: <span className="text-blue-600 font-extrabold">{RATING_LABELS[hoverRating || rating]}</span>
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 hover:scale-125 transition-transform"
                    aria-label={`Rate ${star} star`}
                  >
                    <Star
                      className={`w-7 h-7 ${
                        (hoverRating || rating) >= star
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-slate-300'
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Choose Avatar */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Select Your Avatar
              </label>
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {AVATAR_OPTIONS.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setAvatar(imgUrl);
                      setCustomAvatar('');
                    }}
                    className={`relative rounded-full p-0.5 shrink-0 transition-all ${
                      avatar === imgUrl && !customAvatar
                        ? 'ring-4 ring-blue-600 scale-105'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Avatar ${idx + 1}`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Review Content */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Your Review & Experience *
              </label>
              <textarea
                required
                rows={4}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="What did you learn? How were the mentors and hands-on coding sessions? Share your real experience..."
                className="w-full p-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800 text-sm outline-none transition-all leading-relaxed"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-premium px-7 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white text-sm font-bold shadow-lg shadow-blue-500/25 flex items-center gap-2 active:scale-95 transition-all"
              >
                <MessageSquareHeart className="w-4 h-4" />
                <span>Submit Student Review</span>
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
