import React from 'react';
import { X, Clock, Award, CheckCircle2, ArrowRight, BookOpen, Layers, Briefcase, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseModal({ course, onClose }) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-8 text-white rounded-t-2xl relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              {course.category}
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold px-3 py-1 rounded-full">
              {course.level}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] mt-1">
            {course.title}
          </h3>
          <p className="text-sm text-slate-300 mt-2 max-w-xl">
            {course.shortDesc}
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div>
              <div className="text-xs text-slate-500 font-medium">Program Duration</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">{course.duration}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Delivery Mode</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">Instructor-Led + Labs</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Industry Capstone</div>
              <div className="text-sm font-bold text-blue-600 mt-0.5">Live Client Projects</div>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {course.techStack?.map((tech) => (
                <span key={tech} className="bg-slate-100 text-slate-800 font-medium text-xs px-3 py-1.5 rounded-lg border border-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Curriculum Modules */}
          {course.modules && (
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-3 font-['Outfit']">Curriculum Outline</h4>
              <div className="space-y-2">
                {course.modules.map((mod, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hands-on Projects */}
          <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100">
            <h4 className="text-sm font-bold text-blue-900 mb-1 flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-600" />
              <span>Hands-on Project Portfolio</span>
            </h4>
            <p className="text-sm text-blue-800">
              {course.handsOnProjects}
            </p>
          </div>

          {/* Career Roles */}
          {course.careerRoles && (
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Target Career Roles</h4>
              <div className="flex flex-wrap gap-2">
                {course.careerRoles.map((role) => (
                  <span key={role} className="bg-emerald-50 text-emerald-800 border border-emerald-200/70 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Briefcase className="w-3 h-3 text-emerald-600" />
                    {role}
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
              className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1"
            >
              <span>View Full Course Syllabus Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button 
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50"
              >
                Close
              </button>
              <Link 
                to="/contact"
                onClick={onClose}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 shadow-md shadow-blue-500/20 text-center"
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
