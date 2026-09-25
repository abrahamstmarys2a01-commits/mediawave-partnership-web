import React from 'react';
import { X, Clock, Award, CheckCircle2, ArrowRight, BookOpen, Layers, Briefcase, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseModal({ course, onClose }) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-100 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-5 sm:p-8 text-white rounded-t-2xl sm:rounded-t-3xl relative">
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
              {course.category}
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
              {course.level}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-['Outfit'] mt-1 leading-tight">
            {course.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1.5 sm:mt-2 max-w-xl leading-relaxed">
            {course.shortDesc}
          </p>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100">
            <div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Program Duration</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">{course.duration}</div>
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Delivery Mode</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">Instructor-Led + Labs</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Industry Capstone</div>
              <div className="text-xs sm:text-sm font-bold text-blue-600 mt-0.5">Live Client Projects</div>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Technology Stack</h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {course.techStack?.map((tech) => (
                <span key={tech} className="bg-slate-100 text-slate-800 font-medium text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Curriculum Modules */}
          {course.modules && (
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2.5 sm:mb-3 font-['Outfit']">Curriculum Outline</h4>
              <div className="space-y-2">
                {course.modules.map((mod, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{mod}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hands-on Projects */}
          <div className="bg-blue-50/60 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-blue-100">
            <h4 className="text-xs sm:text-sm font-bold text-blue-900 mb-1 flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Hands-on Project Portfolio</span>
            </h4>
            <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
              {course.handsOnProjects}
            </p>
          </div>

          {/* Career Roles */}
          {course.careerRoles && (
            <div>
              <h4 className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Target Career Roles</h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {course.careerRoles.map((role) => (
                  <span key={role} className="bg-emerald-50 text-emerald-800 border border-emerald-200/70 text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full flex items-center gap-1.5">
                    <Briefcase className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>{role}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <Link 
              to={`/courses/${course.id}`}
              onClick={onClose}
              className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-semibold flex items-center gap-1"
            >
              <span>View Full Course Syllabus Page</span>
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
                to="/contact"
                onClick={onClose}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 shadow-md shadow-blue-500/20 text-center transition-colors"
              >
                Enroll or Inquire
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
