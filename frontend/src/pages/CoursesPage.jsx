import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Layers, Server, Smartphone, Database, Cpu, ArrowRight, Code, BookOpen, Search } from 'lucide-react';
import { courses } from '../data/mockData';
import CourseModal from '../components/CourseModal';

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-6 h-6 text-blue-600" />;
      case 'Layers': return <Layers className="w-6 h-6 text-sky-600" />;
      case 'Server': return <Server className="w-6 h-6 text-indigo-600" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-purple-600" />;
      case 'Database': return <Database className="w-6 h-6 text-emerald-600" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-amber-600" />;
      default: return <Code className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="pt-24 pb-20">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <span>Career Pathways</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-['Outfit']">
            Industry-Ready Technology Programs
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Structured full-stack engineering, cloud architecture, and AI curricula designed to prepare students for tier-1 IT product and services roles.
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(course.icon)}
                  </div>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                    {course.level}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-['Outfit'] group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {course.shortDesc}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Tech Stack:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {course.techStack.map((tech) => (
                      <span key={tech} className="text-[11px] bg-slate-50 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-blue-800 bg-blue-50/70 p-3 rounded-xl border border-blue-100/60 flex items-start gap-2">
                  <Code className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{course.handsOnProjects}</span>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors text-center"
                >
                  Quick View
                </button>
                <Link
                  to={`/courses/${course.id}`}
                  className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1 shadow-sm"
                >
                  <span>Full Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Course Modal */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />

    </div>
  );
}
