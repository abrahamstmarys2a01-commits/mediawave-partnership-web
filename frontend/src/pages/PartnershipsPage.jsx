import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Calendar, CheckCircle2, ArrowRight, Award, FileText, Search, Plus, Sparkles } from 'lucide-react';
import { trustedColleges } from '../data/mockData';
import PartnershipModal from '../components/PartnershipModal';

export default function PartnershipsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollege, setSelectedCollege] = useState(null);

  const filteredColleges = trustedColleges.filter((c) => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-14 sm:py-16 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5 sm:space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Institutional Network</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold font-['Outfit'] leading-tight">
            Our College Partnerships & MoUs
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
            Collaborating with premier engineering, arts, and science institutions across India to cultivate next-generation technologists.
          </p>
        </div>
      </section>

      {/* Main Content & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
        
        {/* Search & Actions Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 sm:gap-4 mb-8">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by college name or city..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:border-blue-600 outline-none shadow-sm"
            />
          </div>

          <Link
            to="/partner-with-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all text-center"
          >
            <Plus className="w-4 h-4" />
            <span>Initiate New College MoU</span>
          </Link>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredColleges.map((college) => (
            <div
              key={college.id}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                  <img
                    src={college.image}
                    alt={college.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/95 backdrop-blur-md p-1 pr-2.5 rounded-full shadow-md max-w-[85%]">
                    <div className={`w-6 h-6 rounded-full ${college.logoColor || 'bg-blue-600'} text-white flex items-center justify-center text-[10px] font-black shrink-0`}>
                      {college.name.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-slate-800 truncate">
                      {college.name}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit'] group-hover:text-blue-600 transition-colors line-clamp-1">
                      {college.name}
                    </h3>
                    
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span className="truncate">{college.location}</span>
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-md border border-blue-100">
                        <FileText className="w-3 h-3 text-blue-600 shrink-0" />
                        <span>{college.badge || "MoU Signed"}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md border border-slate-200">
                        <Award className="w-3 h-3 text-slate-500 shrink-0" />
                        <span>{college.badge2 || "Active Partner"}</span>
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mt-2.5 line-clamp-2">
                      {college.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedCollege(college)}
                  className="py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors text-center truncate"
                >
                  Quick View
                </button>
                <Link
                  to={`/partnerships/${college.id}`}
                  className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1 shadow-sm text-center truncate"
                >
                  <span className="truncate">View Charter</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* Modal */}
      <PartnershipModal
        college={selectedCollege}
        onClose={() => setSelectedCollege(null)}
      />

    </div>
  );
}
