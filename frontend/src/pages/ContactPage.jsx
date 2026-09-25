import React from 'react';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-12">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <span>Reach Out</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-['Outfit']">
            Contact Media Wave Technology
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            We are here to help institutions, students, and businesses connect through technology and education.
          </p>
        </div>
      </section>

      {/* Main Contact Component */}
      <ContactSection />
    </div>
  );
}
