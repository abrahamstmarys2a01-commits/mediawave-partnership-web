import React from 'react';
import { X, Building2, MapPin, Calendar, CheckCircle2, Award, Users, ArrowRight, BookOpen, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PartnershipModal({ college, onClose, onSelectWorkshop }) {
  if (!college) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-100 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image with Badges */}
        <div className="relative h-48 xs:h-56 sm:h-72 w-full overflow-hidden bg-slate-900 rounded-t-2xl sm:rounded-t-3xl">
          <img 
            src={college.mouImage || college.image} 
            alt={college.name}
            className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/60 hover:bg-black/90 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 text-white">
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              <span className="bg-blue-600/90 text-white text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full backdrop-blur-md">
                {college.badge || "MoU Signed"}
              </span>
              <span className="bg-emerald-600/90 text-white text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full backdrop-blur-md">
                {college.badge2 || "Active Partner"}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-['Outfit'] leading-tight">
              {college.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-1.5 mt-0.5 sm:mt-1">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
              <span className="truncate">{college.location}</span>
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100 text-center">
            <div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium">MoU Date</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">{college.mouDate}</div>
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Students Trained</div>
              <div className="text-xs sm:text-sm font-bold text-blue-600 mt-0.5">{college.studentsBenefited || 350}+</div>
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Established</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">{college.established || "2010"}</div>
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Collaboration</div>
              <div className="text-xs sm:text-sm font-bold text-emerald-600 mt-0.5">Active MoU</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 font-['Outfit']">About the Partnership</h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {college.description}
            </p>
          </div>

          {/* Key Workshop Highlights */}
          {college.workshopConducted && (
            <div className="bg-blue-50/80 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-blue-100 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900 font-['Outfit']">
                <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Major Workshop Conducted:</span>
              </div>
              <p className="text-xs sm:text-sm text-blue-800 font-medium pl-6">
                {college.workshopConducted}
              </p>
            </div>
          )}

          {/* Photo Gallery Grid */}
          {college.gallery && college.gallery.length > 0 && (
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2 font-['Outfit']">MoU & Workshop Photos</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                {college.gallery.map((imgUrl, i) => (
                  <div key={i} className="relative h-20 sm:h-24 rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm group">
                    <img 
                      src={imgUrl} 
                      alt={`MoU Moment ${i+1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Controls */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <Link 
              to={`/partnerships/${college.id}`}
              onClick={onClose}
              className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-semibold flex items-center gap-1"
            >
              <span>View Full Institutional Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button 
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
              <Link 
                to="/partner-with-us"
                onClick={onClose}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 shadow-md shadow-blue-500/20 text-center transition-colors"
              >
                Partner With Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
