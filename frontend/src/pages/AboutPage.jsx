import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Award, Users, CheckCircle2, ShieldCheck, Sparkles, Target, Compass, Heart, ArrowRight } from 'lucide-react';
import { companyInfo, impactStats } from '../data/mockData';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <span>About Our Company</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-['Outfit']">
            Bridging Industry & Academia Through <span className="text-blue-400">Technology</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Empowering institutions and students with modern software engineering competencies, hands-on bootcamps, and live client projects.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-slate-900">
              Who We Are & What Drives Us
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Founded with the objective of eliminating the disconnect between textbook theory and modern industry demands, <strong>Media Wave Technology</strong> provides comprehensive technology training, institutional partnerships, and digital solutions.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We work alongside engineering colleges, arts & science universities, and polytechnic institutes to create customized skill tracks spanning Full Stack Web, Cloud Infrastructure, Mobile Architectures, and Agentic AI workflows.
            </p>
            <div className="pt-2">
              <Link 
                to="/partner-with-us" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-lg shadow-blue-500/20"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img 
                src="/mediawave-office.png" 
                alt="Media Wave Technology Innovation Lab & Office" 
                className="w-full h-[360px] object-cover object-[center_35%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To build an interconnected ecosystem where every graduating engineer possesses practical, verifiable software development mastery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Collaborate with 100+ universities across India, empowering over 50,000 students through hands-on technical bootcamps and live projects by 2028.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">Our Values</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hands-on practical rigor, institutional transparency, student mentorship, and relentless software quality in every workshop.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership & Core Principles */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 font-['Outfit']">
            Our Core Strengths
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Why premier institutions trust Media Wave Technology for skill enhancement and student enablement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-base mb-2 font-['Outfit']">1. Real Industry Instructors</h4>
            <p className="text-slate-600 text-xs sm:text-sm">Mentors with active engineering roles building enterprise systems, bringing real architecture challenges into the lab.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-base mb-2 font-['Outfit']">2. Zero Fluff, 100% Code</h4>
            <p className="text-slate-600 text-xs sm:text-sm">Our bootcamps emphasize live coding, debugging sessions, Git versioning, and deploying live production applications.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-base mb-2 font-['Outfit']">3. Long-Term MoU Frameworks</h4>
            <p className="text-slate-600 text-xs sm:text-sm">Structured multi-year collaborations that include guest lectures, hackathons, faculty training, and direct placement pipelines.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
