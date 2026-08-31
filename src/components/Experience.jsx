import React from "react";
import { experienceData } from "../data/experience";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            Career History
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient-cyan">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Hands-on professional timeline building mobile applications across product companies and software houses.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 timeline-line -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-4 top-4 bottom-4 w-0.5 timeline-line -translate-x-1/2 sm:hidden" />

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className="relative flex flex-col sm:flex-row items-start"
                >
                  {/* Timeline Point Center Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 z-10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-transform hover:scale-125 ${
                      item.isCurrent
                        ? "bg-cyan-500 border-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/50"
                        : "bg-slate-900 border-cyan-500/50 text-cyan-400"
                    }`}>
                      <Briefcase className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content Box */}
                  <div
                    className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 text-left ${
                      isEven ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                    }`}
                  >
                    <div className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-800 glass-card-hover relative space-y-4">
                      
                      {/* Period Badge & Current Tag */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        {item.isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 animate-pulse">
                            Present Role
                          </span>
                        )}
                      </div>

                      {/* Role & Company Header */}
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {item.role}
                        </h3>
                        <h4 className="text-base font-semibold text-cyan-400 flex items-center gap-1.5 pt-0.5">
                          {item.company}
                          <span className="text-slate-500 text-xs font-normal">• {item.location}</span>
                        </h4>
                      </div>

                      {/* Exact Prompt Description */}
                      <p className="text-sm text-slate-300 leading-relaxed font-normal">
                        {item.description}
                      </p>

                      {/* Key Highlights List */}
                      {item.highlights && (
                        <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                          <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Focus Areas:</p>
                          {item.highlights.map((hl, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                              <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Skill Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
