import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Award, CheckCircle2, ArrowRight, Building2, Terminal, Star, MessageSquarePlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import AddReviewModal from './AddReviewModal';

export default function WorkshopModal({ workshop, onClose }) {
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  if (!workshop) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
        <div 
          className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Banner */}
          <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-900 rounded-t-2xl">
            <img 
              src={workshop.image} 
              alt={workshop.title}
              className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6 text-white">
              <div className="flex items-center gap-2">
                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {workshop.techCategory}
                </span>
                <button
                  onClick={() => setIsReviewOpen(true)}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 transition-colors"
                >
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>Review This Workshop</span>
                </button>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] mt-2 leading-tight">
                {workshop.title}
              </h3>
              <p className="text-sm text-slate-300 flex items-center gap-2 mt-1">
                <Building2 className="w-4 h-4 text-blue-400" />
                {workshop.collegeName}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
              <div>
                <div className="text-xs text-slate-500 font-medium">Date Conducted</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">{workshop.date}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Duration</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">{workshop.duration}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Attendees</div>
                <div className="text-sm font-bold text-blue-600 mt-0.5">{workshop.attendees}+ Students</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Certificate</div>
                <div className="text-sm font-bold text-emerald-600 mt-0.5">Verified Industry</div>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Technologies Taught</h4>
              <div className="flex flex-wrap gap-2">
                {workshop.techTags?.map((tag) => (
                  <span key={tag} className="bg-blue-50 text-blue-700 border border-blue-200/60 font-medium text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-600" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Detailed Overview */}
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-['Outfit']">Workshop Overview</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {workshop.fullDesc}
              </p>
            </div>

            {/* Learning Outcomes */}
            {workshop.outcomes && (
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-3 font-['Outfit']">Practical Learning Outcomes</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {workshop.outcomes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Workshop Event Photographs Preview */}
            {workshop.gallery && workshop.gallery.length > 0 && (
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-2.5 font-['Outfit']">Workshop Session & Group Photos</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {workshop.gallery.map((imgUrl, i) => (
                    <div key={i} className="relative h-20 sm:h-24 rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm group">
                      <img 
                        src={imgUrl} 
                        alt={`Workshop moment ${i+1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Controls */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button 
                onClick={() => setIsReviewOpen(true)}
                className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1.5"
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>Write Student Review</span>
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button 
                  onClick={onClose}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50"
                >
                  Close
                </button>
                <Link 
                  to="/partner-with-us"
                  onClick={onClose}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 shadow-md shadow-blue-500/20 text-center"
                >
                  Host at Your College
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      <AddReviewModal
        isOpen={isReviewOpen}
        initialWorkshop={workshop.title}
        onClose={() => setIsReviewOpen(false)}
      />
    </>
  );
}
