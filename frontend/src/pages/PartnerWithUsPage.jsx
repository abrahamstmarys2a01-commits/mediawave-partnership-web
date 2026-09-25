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
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-14 sm:py-16 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5 sm:space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Institutional Collaboration</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold font-['Outfit'] leading-tight">
            Partner Your Institution with Media Wave
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
            Empower your students with structured industrial curricula, certified bootcamps, and direct industry internship channels.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left: MoU Steps & Benefits */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit']">
                Why Partner With Us?
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs sm:text-sm">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Customized Hands-on Curricula</h4>
                    <p className="text-slate-500 mt-0.5 leading-relaxed">Aligned with latest market demand (React, Spring Boot, React Native, Agentic AI).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs sm:text-sm">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Faculty Development Programs (FDP)</h4>
                    <p className="text-slate-500 mt-0.5 leading-relaxed">Empowering department professors and lab assistants on modern development toolchains.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs sm:text-sm">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Verified Certifications & Internships</h4>
                    <p className="text-slate-500 mt-0.5 leading-relaxed">Students receive verifiable industry credentials and priority access to client project development.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Quick Institutional Hotline:
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-600 font-semibold">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{companyInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="break-all">{companyInfo.email}</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right: Partner Form */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit'] mb-1">
              Initiate Collaboration
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mb-6">
              Fill in the institutional inquiry form below. Our director of academic partnerships will reach out promptly.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit']">Inquiry Submitted Successfully!</h4>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for your interest in partnering with Media Wave Technology. We will contact your office within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Dr. / Prof. / Mr. Name"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">Designation / Role *</label>
                    <input
                      type="text"
                      required
                      value={formData.designation}
                      onChange={(e) => setFormData({...formData, designation: e.target.value})}
                      placeholder="e.g. Principal / HOD CSE / Placement Officer"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">College / University Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.college}
                      onChange={(e) => setFormData({...formData, college: e.target.value})}
                      placeholder="e.g. SRM Institute of Science & Tech"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">Official Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="principal@college.edu.in"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">Contact Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 63691 53235"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">Collaboration Type</label>
                    <select
                      value={formData.collabType}
                      onChange={(e) => setFormData({...formData, collabType: e.target.value})}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none"
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
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">Additional Requirements / Preferred Dates</label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Specify target student batches, branch specialization, lab facilities or specific dates..."
                    className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-premium w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-3.5 px-6 rounded-xl shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98] text-xs sm:text-sm"
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
