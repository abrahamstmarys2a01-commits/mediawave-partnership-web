import React, { useState } from 'react';
import { 
  Building2, CheckCircle2, Award, Users, BookOpen, 
  Send, Phone, Mail, MapPin, Sparkles, ShieldCheck, ArrowRight 
} from 'lucide-react';
import { companyInfo } from '../data/mockData';

export default function PartnerWithUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    college: '',
    email: '',
    phone: '',
    collabType: 'Institutional MoU Signing',
    studentCount: '100 - 300',
    preferredMonth: 'Next Month',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <span>Institutional Collaboration</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-['Outfit']">
            Partner Your Institution with Media Wave
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Empower your students with structured industrial curricula, certified bootcamps, and direct industry internship channels.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: MoU Steps & Benefits */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">
                Why Partner With Us?
              </h2>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Customized Hands-on Curricula</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Aligned with latest market demand (React, Spring Boot, React Native, Agentic AI).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Faculty Development Programs (FDP)</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Empowering department professors and lab assistants on modern development toolchains.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Priority Placement & Internships</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Guaranteed internship opportunities for top workshop performers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-slate-900">NAAC / NBA Accreditation Value</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Documented industry collaboration records, certificates, and student project portfolios.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Have Questions Before Signing?</div>
              <p>Our Academic Director is available for on-campus meetings or virtual video conferences:</p>
              <div className="font-semibold text-blue-600 pt-1">{companyInfo.admissionsEmail}</div>
              <div className="font-semibold text-slate-900">{companyInfo.phone}</div>
            </div>

          </div>

          {/* Right: Partnership Application Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">
                  Partnership Proposal Submitted
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our University Relations Head will review your institution details and reach out within 24 hours to schedule the MoU briefing.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 font-['Outfit'] mb-2">
                  Institutional Collaboration Form
                </h3>
                <p className="text-xs text-slate-500 -mt-1 mb-4">
                  Please provide your college details and our academic coordinators will prepare the MoU charter.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Dr. K. Ramanathan"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Designation / Role *</label>
                    <input
                      type="text"
                      required
                      value={formData.designation}
                      onChange={(e) => setFormData({...formData, designation: e.target.value})}
                      placeholder="e.g. Principal / HOD CSE / Placement Officer"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">College / University Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.college}
                      onChange={(e) => setFormData({...formData, college: e.target.value})}
                      placeholder="e.g. SRM Institute of Science & Tech"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Official Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="principal@college.edu.in"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 63691 53235"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Collaboration Type</label>
                    <select
                      value={formData.collabType}
                      onChange={(e) => setFormData({...formData, collabType: e.target.value})}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none"
                    >
                      <option value="Institutional MoU Signing">Institutional MoU Signing</option>
                      <option value="Campus Technical Workshop">Campus Technical Workshop</option>
                      <option value="Semester Long Training Program">Semester Long Training Program</option>
                      <option value="Faculty Development Program (FDP)">Faculty Development Program (FDP)</option>
                      <option value="Internship & Placement Tie-up">Internship & Placement Tie-up</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Additional Requirements / Preferred Dates</label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Specify target student batches, branch specialization, lab facilities or specific dates..."
                    className="w-full p-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Partnership Application</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
