import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, Award, CheckCircle2, ArrowLeft, ArrowRight, 
  BookOpen, Layers, Briefcase, Code, Terminal, Send 
} from 'lucide-react';
import { courses } from '../data/mockData';

export default function CourseDetailPage() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id) || courses[0];

  return (
    <div className="pt-24 pb-20">
      
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link 
          to="/courses" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Programs</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8 sm:p-12 text-white rounded-3xl shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {course.category}
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold px-3 py-1 rounded-full">
                {course.level}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold font-['Outfit']">
              {course.title}
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {course.fullDesc}
            </p>
          </div>
        </div>

        {/* Course Details Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          
          <div className="lg:col-span-8 space-y-8">
            
            {/* Tech Stack */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 font-['Outfit']">
                Technologies & Tools Covered
              </h2>
              <div className="flex flex-wrap gap-2">
                {course.techStack.map((tech) => (
                  <span key={tech} className="bg-slate-100 text-slate-800 font-semibold text-xs px-3.5 py-2 rounded-xl border border-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Curriculum Modules */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 font-['Outfit']">
                Curriculum Structure & Module Breakdown
              </h2>
              <div className="space-y-3">
                {course.modules?.map((mod, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="font-medium">{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hands-on Projects */}
            <div className="bg-blue-50/70 p-8 rounded-3xl border border-blue-100 space-y-2">
              <h3 className="text-lg font-bold text-blue-950 font-['Outfit'] flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-600" />
                <span>Capstone Project Deliverables</span>
              </h3>
              <p className="text-sm text-blue-900 leading-relaxed">
                {course.handsOnProjects}. Every student builds, commits to GitHub, and deploys live functional web instances with domain binding and HTTPS.
              </p>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">Program Summary</h3>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span>Duration</span>
                  <span className="font-bold text-slate-900">{course.duration}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span>Prerequisite</span>
                  <span className="font-bold text-slate-900">Basic Programming</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span>Mode</span>
                  <span className="font-bold text-slate-900">Campus Labs + Online</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3 rounded-xl shadow-md transition-all"
                >
                  Enroll / Inquire Now
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
