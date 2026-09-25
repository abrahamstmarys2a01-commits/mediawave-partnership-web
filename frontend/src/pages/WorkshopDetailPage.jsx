import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Building2, Calendar, Clock, Users, Award, CheckCircle2, 
  ArrowLeft, ArrowRight, Terminal, BookOpen, Code, Share2 
} from 'lucide-react';
import { workshops } from '../data/mockData';

export default function WorkshopDetailPage() {
  const { id } = useParams();
  const workshop = workshops.find((w) => w.id === id) || workshops[0];

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-slate-50 min-h-screen">
      
      {/* Back button bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <Link 
          to="/workshops" 
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Workshops</span>
        </Link>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero */}
        <div className="bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800 text-white relative">
          <div className="relative h-56 xs:h-64 sm:h-80 w-full">
            <img 
              src={workshop.image} 
              alt={workshop.title} 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-10 sm:left-10 text-white space-y-1.5 sm:space-y-2">
              <span className="bg-blue-600 text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                {workshop.techCategory}
              </span>
              <h1 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold font-['Outfit'] leading-tight">
                {workshop.title}
              </h1>
              <p className="text-xs sm:text-base text-slate-300 flex items-center gap-1.5 sm:gap-2 truncate">
                <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
                <span className="truncate">Conducted for: {workshop.collegeName} • {workshop.date}</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 bg-slate-950 border-t border-slate-800 text-center">
            <div>
              <div className="text-[10px] sm:text-xs text-slate-400">Total Duration</div>
              <div className="text-xs sm:text-base font-bold text-white mt-0.5">{workshop.duration}</div>
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-slate-400">Student Capacity</div>
              <div className="text-xs sm:text-base font-bold text-blue-400 mt-0.5">{workshop.attendees}+ Participants</div>
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-slate-400">Prerequisites</div>
              <div className="text-xs sm:text-base font-bold text-white mt-0.5">Basic Logic / OOP</div>
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-slate-400">Certification</div>
              <div className="text-xs sm:text-base font-bold text-emerald-400 mt-0.5">Industry Certified</div>
            </div>
          </div>
        </div>

        {/* Workshop Body Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 mt-8 sm:mt-12">
          
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            
            {/* Description */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-3.5 sm:space-y-4">
              <h2 className="text-lg sm:text-2xl font-bold text-slate-900 font-['Outfit']">
                Workshop Scope & Curriculum Overview
              </h2>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-base">
                {workshop.fullDesc}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Technologies & Toolchains</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {workshop.techTags.map((tech) => (
                    <span key={tech} className="bg-blue-50 text-blue-700 font-semibold text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-blue-100 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-3.5 sm:space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-['Outfit']">
                What Students Engineered During the Bootcamp
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {workshop.outcomes?.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Photographs */}
            {workshop.gallery && workshop.gallery.length > 0 && (
              <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-3.5 sm:space-y-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-['Outfit']">
                  Workshop Session & Award Photographs
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  {workshop.gallery.map((img, i) => (
                    <div key={i} className="rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-24 sm:h-36 group">
                      <img src={img} alt={`Session ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Request */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl space-y-4 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold font-['Outfit']">
                Bring this Workshop to Your Campus
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
                Schedule a 2-day or 5-day customized hands-on bootcamp with Media Wave Technology mentors.
              </p>
              <Link
                to="/partner-with-us"
                className="w-full block text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm py-3 rounded-xl shadow-lg transition-all"
              >
                Request Workshop Slot
              </Link>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
