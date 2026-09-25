import React from 'react';
import { Layers, Sparkles, ArrowRight, ExternalLink, Code2, CheckCircle2 } from 'lucide-react';
import { realProjects } from '../data/mockData';

export default function ProjectsPage() {
  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-14 sm:py-16 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5 sm:space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Showcase</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold font-['Outfit'] leading-tight">
            Real-World Technology Projects
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
            Live enterprise software, student capstone solutions, and scalable cloud architectures delivered by Media Wave Technology.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {realProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 xs:h-56 sm:h-60 overflow-hidden bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold text-blue-300 uppercase tracking-wider border border-white/10">
                    {proj.category}
                  </div>
                </div>

                <div className="p-5 sm:p-8 space-y-3.5 sm:space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit'] group-hover:text-blue-600 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mt-1">
                      {proj.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">Tech Architecture:</div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="text-xs font-medium bg-slate-100 text-slate-800 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-8 pt-0">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-between text-xs text-blue-800 font-bold">
                  <span className="truncate">{proj.metrics}</span>
                  <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
