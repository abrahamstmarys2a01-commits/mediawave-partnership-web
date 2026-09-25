import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Calendar, CheckCircle2, ArrowRight, Award, FileText, Search, Plus } from 'lucide-react';
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
    <div className="pt-24 pb-20">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 text-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <span>Official Institutional Network</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-['Outfit']">
            Our College Partnerships & MoUs
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Collaborating with premier engineering, arts, and science institutions across India to cultivate next-generation technologists.
          </p>
        </div>
      </section>

      {/* Main Content & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Search & Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by college name or city..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:border-blue-600 outline-none shadow-sm"
            />
          </div>

          <Link
            to="/partner-with-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Initiate New College MoU</span>
          </Link>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredColleges.map((college) => (
            <div 
              key={college.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img 
                  src={college.mouImage || college.image} 
                  alt={college.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/95 backdrop-blur-md p-1.5 pr-3 rounded-full shadow-md">
                  <div className={`w-7 h-7 rounded-full ${college.logoColor || 'bg-blue-600'} text-white flex items-center justify-center text-[10px] font-bold`}>
                    {college.name.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-xs font-bold text-slate-800 truncate max-w-[140px]">
                    {college.name}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                  {college.type}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 font-['Outfit'] group-hover:text-blue-600 transition-colors">
                    {college.name}
                  </h3>
                  
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    {college.location}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-[11px] font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md border border-blue-100">
                      {college.badge || "MoU Signed"}
                    </span>
                    <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                      {college.badge2 || "Active Training"}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-2">
                    {college.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedCollege(college)}
                    className="py-2 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors text-center"
                  >
                    Quick Preview
                  </button>
                  <Link
                    to={`/partnerships/${college.id}`}
                    className="py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1 shadow-sm"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Modal preview */}
      <PartnershipModal
        college={selectedCollege}
        onClose={() => setSelectedCollege(null)}
      />

    </div>
  );
}
