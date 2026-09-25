import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Layers, Server, Smartphone, Database, Cpu, ArrowRight, Code, BookOpen, Search, Sparkles } from 'lucide-react';
import { courses } from '../data/mockData';
import CourseModal from '../components/CourseModal';

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState(null);

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
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-14 sm:py-16 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5 sm:space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Pathways</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold font-['Outfit'] leading-tight">
            Industry-Ready Technology Programs
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
            Structured full-stack engineering, cloud architecture, and AI curricula designed to prepare students for tier-1 IT product and services roles.
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(course.icon)}
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-0.5 sm:py-1 rounded-full border border-slate-200">
                    {course.level}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Outfit'] group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-1.5 leading-relaxed line-clamp-2">
                    {course.shortDesc}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {course.techStack?.map((tech) => (
                    <span key={tech} className="text-[10px] sm:text-[11px] font-medium bg-slate-100 text-slate-700 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hands on preview */}
                <div className="bg-blue-50/70 p-2.5 sm:p-3 rounded-xl border border-blue-100/80 text-[11px] sm:text-xs text-blue-900 flex items-center gap-2">
                  <Code className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate">{course.handsOnProjects}</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 sm:pt-6 mt-3 sm:mt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="btn-premium w-full py-2.5 sm:py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
                >
                  <span>View Syllabus & Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />

    </div>
  );
}
