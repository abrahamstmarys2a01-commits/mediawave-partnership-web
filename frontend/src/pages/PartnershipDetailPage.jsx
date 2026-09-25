import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Building2, MapPin, Calendar, CheckCircle2, Award, Users, 
  ArrowLeft, ArrowRight, FileText, Download, ShieldCheck, Mail, Phone 
} from 'lucide-react';
import { trustedColleges, workshops, studentReviews } from '../data/mockData';

export default function PartnershipDetailPage() {
  const { id } = useParams();
  
  // Find matching college or fallback to first
  const college = trustedColleges.find((c) => c.id === id) || trustedColleges[0];
  const collegeWorkshops = workshops.filter((w) => w.collegeId === college.id || w.collegeName.includes(college.name.split(' ')[0]));
  const collegeReviews = studentReviews.filter((r) => r.college.includes(college.name.split(' ')[0]));

  return (
    <div className="pt-24 pb-20">
      
      {/* Back button bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link 
          to="/partnerships" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Partnerships</span>
        </Link>
      </div>

      {/* College Hero Dossier */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 text-white relative">
          
          <div className="relative h-72 sm:h-96 w-full">
            <img 
              src={college.mouImage || college.image} 
              alt={college.name} 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 text-white space-y-2">
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {college.badge || "MoU Signed"}
                </span>
                <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Established {college.established || "1980"}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-['Outfit']">
                {college.name}
              </h1>
              <p className="text-sm sm:text-base text-slate-300 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                {college.location} • {college.type}
              </p>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-slate-950 border-t border-slate-800 text-center">
            <div>
              <div className="text-xs text-slate-400">MoU Execution Date</div>
              <div className="text-base font-bold text-white mt-0.5">{college.mouDate}</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Students Trained</div>
              <div className="text-base font-bold text-blue-400 mt-0.5">{college.studentsBenefited || '300+'}+ Candidates</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Programs Delivered</div>
              <div className="text-base font-bold text-white mt-0.5">3 Bootcamps</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">MoU Status</div>
              <div className="text-base font-bold text-emerald-400 mt-0.5">Active Alliance</div>
            </div>
          </div>

        </div>

        {/* Detailed Collaboration Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">
                Institutional Collaboration Overview
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {college.description} Under this joint charter, Media Wave Technology acts as the industry curriculum partner, conducting faculty development seminars, student hackathons, and deploying full-stack development lab toolchains directly on campus.
              </p>
              
              <div className="pt-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Charter Highlights & Scope</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Live Industry Project Allocations</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Campus Placement Priority Channel</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Faculty Development Workshops</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Industry Mentorship & Office Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Gallery from College */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 font-['Outfit']">
                Ceremony & Workshop Photographs
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {college.gallery && college.gallery.length > 0 ? (
                  college.gallery.map((imgSrc, idx) => (
                    <div key={idx} className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-56 bg-slate-900 group">
                      <img 
                        src={imgSrc} 
                        alt={`${college.name} photo ${idx + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-56 bg-slate-900 group col-span-full">
                    <img 
                      src={college.mouImage || college.image} 
                      alt={college.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Sidebar Action */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
              <h3 className="text-xl font-bold font-['Outfit']">
                Partner Your Institution
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
                Want to establish a similar industry-academia training framework with Media Wave Technology?
              </p>
              <Link
                to="/partner-with-us"
                className="w-full block text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3 rounded-xl shadow-lg transition-all"
              >
                Request College Partnership
              </Link>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3 text-xs text-slate-600">
              <div className="font-bold text-slate-900 text-sm">Academic Relations Desk</div>
              <p>For official transcript verification or MoU renewal inquiries:</p>
              <p className="font-medium text-blue-600">{companyInfo.email}</p>
              <p className="font-medium text-slate-800">{companyInfo.phone}</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
