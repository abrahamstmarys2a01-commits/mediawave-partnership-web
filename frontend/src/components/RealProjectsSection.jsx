import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight, ExternalLink, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { realProjects } from '../data/mockData';

export default function RealProjectsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Real-World Projects</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
              Learning Through Real Projects
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-1">
              "Real Projects. Real Experience. Real Growth."
            </p>
          </div>

          <div>
            <Link 
              to="/projects" 
              className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Project Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {realProjects.map((proj) => (
            <div 
              key={proj.id}
              className="bg-slate-50 hover:bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Screenshot Banner */}
                <div className="relative h-36 sm:h-40 overflow-hidden bg-slate-900">
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-blue-300 border border-white/10 uppercase tracking-wider">
                    {proj.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-3.5 sm:p-4 space-y-2">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 font-['Outfit'] group-hover:text-blue-600 transition-colors line-clamp-1">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-medium bg-white text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Metric */}
              <div className="p-3.5 sm:p-4 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs text-blue-700 font-semibold bg-blue-50/50">
                <span className="truncate text-[11px] sm:text-xs">{proj.metrics}</span>
                <Sparkles className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
