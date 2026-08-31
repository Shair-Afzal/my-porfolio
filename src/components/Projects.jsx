import React, { useState } from "react";
import { projectsData, projectFilters } from "../data/projects";
import {
  ExternalLink,
  Smartphone,
  Globe,
  Tag,
  Code2,
  ShoppingBag,
  Stethoscope,
  Video,
  Dumbbell,
  Truck,
  Sun,
  Layers
} from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "All") return true;
    return project.filterTags.includes(activeFilter);
  });

  const getProjectIcon = (id) => {
    switch (id) {
      case "enaam":
        return Layers;
      case "running-tribe":
        return ShoppingBag;
      case "fitness-freak":
        return Dumbbell;
      case "docmeet":
        return Stethoscope;
      case "live-streaming":
        return Video;
      case "ecommerce-mobile":
        return ShoppingBag;
      case "websevis-logistics":
        return Truck;
      case "solarkon":
        return Sun;
      default:
        return Smartphone;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            A showcase of real-world mobile applications and web projects developed during professional engineering work.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Filter Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectFilters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/50 scale-105"
                    : "glass-card text-slate-400 hover:text-white hover:border-slate-700 border border-slate-800"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredProjects.map((project) => {
            const IconComp = getProjectIcon(project.id);
            return (
              <div
                key={project.id}
                className="glass-card rounded-3xl border border-slate-800 glass-card-hover flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Mockup Visual Card Header */}
                  <div className={`h-48 bg-gradient-to-br ${project.accentColor} p-6 relative flex flex-col justify-between overflow-hidden`}>
                    
                    {/* Background Pattern Grid Overlay */}
                    <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
                    <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                    {/* Top Row Badge & Type Icon */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-950/80 text-cyan-300 border border-slate-800 backdrop-blur-md">
                        <Tag className="w-3 h-3 text-cyan-400" />
                        {project.badgeText}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center text-white backdrop-blur-md">
                        {project.type === "web" ? (
                          <Globe className="w-4 h-4 text-cyan-400" />
                        ) : (
                          <Smartphone className="w-4 h-4 text-cyan-400" />
                        )}
                      </div>
                    </div>

                    {/* Center App Icon Mockup */}
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-slate-950/90 border border-slate-700 flex items-center justify-center text-cyan-400 shadow-xl group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-white tracking-tight drop-shadow-md">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-300 font-mono">
                          {project.category}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    
                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Footer Action Button */}
                <div className="p-6 pt-0">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs bg-cyan-500/15 hover:bg-cyan-500 text-cyan-300 hover:text-white border border-cyan-500/30 hover:border-cyan-400 transition-all duration-200 shadow-md group-hover:shadow-cyan-500/20"
                    >
                      <span>View Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs bg-slate-900/60 text-slate-400 border border-slate-800">
                      <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Mobile Project ({project.company})</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
