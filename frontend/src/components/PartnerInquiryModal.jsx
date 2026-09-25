import React, { useState } from 'react';
import { X, Send, CheckCircle2, Building2, User, Mail, Phone, BookOpen, MessageSquare } from 'lucide-react';

export default function PartnerInquiryModal({ isOpen, onClose, initialType = "MoU Partnership" }) {
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    email: '',
    phone: '',
    type: initialType,
    studentsCount: '100 - 300',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-100 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-700 p-2 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">
              Thank You for Reaching Out!
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
              Our Academic Relations & Technology Partnership team will review your details and contact you within 24 business hours to coordinate the next steps.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-700 shadow-md transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">Institution Collaboration</span>
              <h3 className="text-2xl font-extrabold text-slate-900 font-['Outfit'] mt-1">
                Partner With Media Wave Technology
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Bring hands-on industrial bootcamps, official MoUs, and live technology mentoring to your college.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Dr. / Prof. / Mr. Name"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">College / University *</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="text" 
                      required
                      value={formData.college}
                      onChange={(e) => setFormData({...formData, college: e.target.value})}
                      placeholder="Institution Name & City"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Official Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="hod.cse@college.edu"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 63691 53235"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Collaboration Requirement</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none"
                  >
                    <option value="Institutional MoU Signing">Institutional MoU Signing</option>
                    <option value="Hands-on Workshop (Web / Full-Stack / AI)">Hands-on Workshop (Web / Full-Stack / AI)</option>
                    <option value="Semester Long Training Program">Semester Long Training Program</option>
                    <option value="Faculty Development Program (FDP)">Faculty Development Program (FDP)</option>
                    <option value="Student Placement & Internship Drive">Student Placement & Internship Drive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Estimated Student Strength</label>
                  <select
                    value={formData.studentsCount}
                    onChange={(e) => setFormData({...formData, studentsCount: e.target.value})}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none"
                  >
                    <option value="50 - 100 Students">50 - 100 Students</option>
                    <option value="100 - 300 Students">100 - 300 Students</option>
                    <option value="300 - 600 Students">300 - 600 Students</option>
                    <option value="Entire Department / College (600+)">Entire Department / College (600+)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Specific Requirements or Message</label>
                <textarea 
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Share preferred workshop dates, student branches, specific technologies of interest, or queries..."
                  className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Partnership Request</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
