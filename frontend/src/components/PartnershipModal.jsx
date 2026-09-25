import React from 'react';
import { X, Building2, MapPin, Calendar, CheckCircle2, Award, Users, ArrowRight, BookOpen, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PartnershipModal({ college, onClose, onSelectWorkshop }) {
  if (!college) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image with Badges */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900 rounded-t-2xl">
          <img 
            src={college.mouImage || college.image} 
            alt={college.name}
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
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-blue-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md">
                {college.badge || "MoU Signed"}
              </span>
              <span className="bg-emerald-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md">
                {college.badge2 || "Active Partner"}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] leading-tight">
              {college.name}
            </h3>
            <p className="text-sm text-slate-300 flex items-center gap-1.5 mt-1">
              <MapPin className="w-4 h-4 text-blue-400" />
              {college.location}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
            <div>
              <div className="text-xs text-slate-500 font-medium">MoU Date</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">{college.mouDate}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Students Trained</div>
              <div className="text-sm font-bold text-blue-600 mt-0.5">{college.studentsBenefited || '300+'}+</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Partnership Type</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">Institutional</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Status</div>
              <div className="text-sm font-bold text-emerald-600 mt-0.5">Active MoU</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2 font-['Outfit']">Partnership Overview</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              {college.description} Media Wave Technology collaborates directly with the Computer Science & Engineering departments to provide curriculum-aligned training, semester bootcamps, capstone mentoring, and priority campus hiring programs.
            </p>
          </div>

          {/* Key Deliverables & Outcomes */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900 font-['Outfit']">Key Scope & Initiatives</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700">
              <div className="flex items-start gap-2 bg-blue-50/60 p-3 rounded-lg border border-blue-100/50">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Hands-on Technical Workshops & Hackathons</span>
              </div>
              <div className="flex items-start gap-2 bg-blue-50/60 p-3 rounded-lg border border-blue-100/50">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Real-world Industry Project Allocations</span>
              </div>
              <div className="flex items-start gap-2 bg-blue-50/60 p-3 rounded-lg border border-blue-100/50">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Faculty Development Programs (FDP)</span>
              </div>
              <div className="flex items-start gap-2 bg-blue-50/60 p-3 rounded-lg border border-blue-100/50">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Summer & Winter Internship Placements</span>
              </div>
            </div>
          </div>

          {/* Photo Preview Strip */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-3 font-['Outfit']">Event & MoU Photographs</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {college.gallery && college.gallery.length > 0 ? (
                college.gallery.map((imgSrc, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden border border-slate-200 shadow-sm h-28 bg-slate-900 group">
                    <img 
                      src={imgSrc} 
                      alt={`${college.name} photo ${idx + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))
              ) : (
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm h-32 col-span-full bg-slate-900 group">
                  <img 
                    src={college.mouImage || college.image} 
                    alt={college.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <Link 
              to={`/partnerships/${college.id}`}
              onClick={onClose}
              className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1"
            >
              <span>Open Dedicated College Profile Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button 
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
              <Link 
                to="/partner-with-us"
                onClick={onClose}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all text-center"
              >
                Request Similar Partnership
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
