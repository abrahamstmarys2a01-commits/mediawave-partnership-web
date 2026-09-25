import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Calendar, Building2, ArrowRight, Code2, Users, Search, Plus } from 'lucide-react';
import { workshops } from '../data/mockData';
import WorkshopModal from '../components/WorkshopModal';

export default function WorkshopsPage() {
  const [filterTag, setFilterTag] = useState('All');
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const tags = ['All', 'Web Development', 'Full Stack Development', 'Java Full Stack', 'Mobile App Development', 'AI & Emerging Tech'];

  const filteredWorkshops = filterTag === 'All' 
    ? workshops 
    : workshops.filter((w) => w.techCategory === filterTag || w.title.includes(filterTag));

  return (
    <div className="pt-24 pb-20">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <span>Hands-on Bootcamps</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-['Outfit']">
            Technical Workshops & Training
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Live coding sessions, architecture breakdowns, and direct industry mentorship conducted inside college lab auditoriums.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setFilterTag(t)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filterTag === t
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <Link
            to="/partner-with-us"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Host Workshop at Your College</span>
          </Link>
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorkshops.map((ws) => (
            <div
              key={ws.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={ws.image}
                    alt={ws.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {ws.techCategory}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 font-['Outfit'] group-hover:text-blue-600 transition-colors">
                    {ws.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {ws.techTags.map((tag) => (
                      <span key={tag} className="text-[11px] font-medium bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md border border-blue-100">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {ws.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-2 text-xs text-slate-500 border-t border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-blue-500" />
                      <span>{ws.collegeName}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      <span>{ws.date} • {ws.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedWorkshop(ws)}
                  className="py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors text-center"
                >
                  Quick View
                </button>
                <Link
                  to={`/workshops/${ws.id}`}
                  className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1 shadow-sm"
                >
                  <span>Full Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* Quick Modal */}
      <WorkshopModal
        workshop={selectedWorkshop}
        onClose={() => setSelectedWorkshop(null)}
      />

    </div>
  );
}
