import React from 'react';
import { Layers, Sparkles, ArrowRight, ExternalLink, Code2, CheckCircle2 } from 'lucide-react';
import { realProjects } from '../data/mockData';

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-20">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <span>Engineering Showcase</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-['Outfit']">
            Real-World Technology Projects
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Live enterprise software, student capstone solutions, and scalable cloud architectures delivered by Media Wave Technology.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {realProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-300 uppercase tracking-wider border border-white/10">
                    {proj.category}
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 font-['Outfit'] group-hover:text-blue-600 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mt-1">
                      {proj.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tech Architecture:</div>
                    <div className="flex flex-wrap gap-2">
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="text-xs font-medium bg-slate-100 text-slate-800 px-3 py-1 rounded-lg border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-between text-xs text-blue-800 font-bold">
                  <span>Impact: {proj.metrics}</span>
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
