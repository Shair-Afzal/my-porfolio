import React from "react";
import { techStackGrid } from "../data/skills";
import {
  Smartphone,
  Box,
  Code,
  Server,
  Cpu,
  Database,
  Layers,
  Flame,
  Zap,
  FileText,
  CheckCircle,
  Wind,
  Layers3
} from "lucide-react";

export default function TechStack() {
  const getTechIcon = (iconName) => {
    switch (iconName) {
      case "Smartphone":
        return Smartphone;
      case "Box":
        return Box;
      case "Code":
        return Code;
      case "Server":
        return Server;
      case "Cpu":
        return Cpu;
      case "Database":
        return Database;
      case "Layers":
        return Layers;
      case "Flame":
        return Flame;
      case "Zap":
        return Zap;
      case "FileText":
        return FileText;
      case "CheckCircle":
        return CheckCircle;
      case "Wind":
        return Wind;
      default:
        return Code;
    }
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Sub-Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h3 className="text-2xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
            <Layers3 className="w-6 h-6 text-cyan-400" />
            Core Technology Stack
          </h3>
          <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
            Tools & frameworks utilized in production mobile apps
          </p>
        </div>

        {/* 12 Tech Stack Icon Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-left">
          {techStackGrid.map((tech) => {
            const IconComp = getTechIcon(tech.icon);
            return (
              <div
                key={tech.name}
                className="glass-card p-4 rounded-2xl border border-slate-800/80 glass-card-hover flex flex-col items-center text-center space-y-3 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-md"
                  style={{
                    backgroundColor: `${tech.color}15`,
                    borderColor: `${tech.color}40`,
                    borderWidth: "1px",
                    color: tech.color
                  }}
                >
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {tech.name}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400 block pt-0.5">
                    {tech.role}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
