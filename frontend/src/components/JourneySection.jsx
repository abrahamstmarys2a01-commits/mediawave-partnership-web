import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { journeySteps } from '../data/mockData';

export default function JourneySection() {
  return (
    <section className="py-20 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            <span>Our Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
            From Collaboration to Impact
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            A structured, repeatable methodology that turns academic potential into high-caliber industrial software engineering capability.
          </p>
        </div>

        {/* 6 Step Visual Pipeline with crisp sharp boxes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
          {journeySteps.map((step, index) => (
            <div key={step.stepNumber} className="relative flex flex-col items-center text-center group">
              
              {/* Sharp Step Image Container */}
              <div className="relative w-full h-32 rounded-none overflow-hidden shadow-sm border border-slate-200 bg-slate-100 mb-3 group-hover:shadow-xl group-hover:border-blue-600 transition-all duration-300">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                
                {/* Sharp Number Badge */}
                <div className="absolute top-0 left-0 bg-blue-600 text-white text-[11px] font-black px-2 py-1 shadow-md uppercase tracking-wider">
                  {step.stepNumber}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-sm font-bold text-slate-900 font-['Outfit'] group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                {step.subtitle}
              </p>

              {/* Connecting Arrow for Desktop (except last item) */}
              {index < journeySteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-16 -translate-y-1/2 text-slate-300 z-10 pointer-events-none">
                  <ChevronRight className="w-5 h-5 text-blue-500/60" />
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
