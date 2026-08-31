import React from "react";
import { groupedSkills } from "../data/skills";
import {
  Smartphone,
  Layout,
  Server,
  Layers,
  Zap,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "Smartphone":
        return Smartphone;
      case "Layout":
        return Layout;
      case "Server":
        return Server;
      case "Layers":
        return Layers;
      case "Zap":
        return Zap;
      default:
        return Smartphone;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient-cyan">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Categorized technical capabilities across mobile app development, state management, real-time protocols, and backend services.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {groupedSkills.map((cat, idx) => {
            const IconComponent = getCategoryIcon(cat.iconName);
            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-800 glass-card-hover flex flex-col justify-between space-y-6 relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-slate-400 font-light">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-slate-800/80" />

                  {/* Skill List Items */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`flex items-center justify-between p-2.5 rounded-xl border transition-colors ${
                          skill.highlight
                            ? "bg-slate-900/90 border-cyan-500/30"
                            : "bg-slate-950/50 border-slate-800/60"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 ${
                              skill.highlight ? "text-cyan-400" : "text-slate-500"
                            }`}
                          />
                          <span
                            className={`text-sm font-medium ${
                              skill.highlight ? "text-white" : "text-slate-300"
                            }`}
                          >
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${
                            skill.highlight
                              ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                              : "bg-slate-800/80 text-slate-400"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
