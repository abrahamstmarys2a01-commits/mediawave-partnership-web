import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layout, Layers, Server, Smartphone, Database, Cpu, 
  ArrowRight, CheckCircle, Code, Award, Sparkles 
} from 'lucide-react';
import { courses } from '../data/mockData';

export default function CoursesSection({ onSelectCourse }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />;
      case 'Layers': return <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />;
      case 'Server': return <Server className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />;
      case 'Database': return <Database className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />;
      default: return <Code className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />;
    }
  };

  return (
    <section id="courses" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-100/40 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Courses We Offer</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Outfit'] leading-tight">
              Industry-Ready Technology Programs
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-1.5 sm:mt-2 max-w-2xl">
              Practical curriculum, expert technical mentorship and production-grade capstone projects.
            </p>
          </div>

          <div>
            <Link 
              to="/courses" 
              className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <span>View All Courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-sm hover-lift flex flex-col justify-between group glow-border"
            >
              <div className="space-y-3.5 sm:space-y-4">
                
                {/* Top Row: Icon + Level */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/80 border border-blue-200/60 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    {getIcon(course.icon)}
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold bg-slate-100 text-slate-700 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full border border-slate-200">
                    {course.level}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Outfit'] group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-1.5 line-clamp-2 leading-relaxed">
                    {course.shortDesc}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-1.5">
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">Technology Stack:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {course.techStack.map((tech) => (
                      <span key={tech} className="text-[11px] sm:text-xs bg-slate-50 text-slate-700 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg border border-slate-200 font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Projects bullet */}
                <div className="text-[11px] sm:text-xs text-blue-900 bg-blue-50/80 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-blue-100 flex items-start gap-2 font-medium">
                  <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{course.handsOnProjects}</span>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 sm:pt-6 mt-3 sm:mt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectCourse(course)}
                  className="btn-premium w-full py-2.5 sm:py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  <span>View Program Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
