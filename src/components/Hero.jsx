import React from "react";
import {
  Smartphone,
  MapPin,
  Mail,
  ArrowRight,
  Zap,
  Code2,
  CheckCircle2
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/",
      icon: GithubIcon,
      label: "GitHub Profile (Update URL)"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/",
      icon: LinkedinIcon,
      label: "LinkedIn Profile (Update URL)"
    },
    {
      name: "Email",
      href: "mailto:hunaizk018@gmail.com",
      icon: Mail,
      label: "Direct Email"
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center bg-grid-pattern bg-radial-gradient overflow-hidden"
    >
      {/* Background ambient glow shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Mobile App Development</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-300 font-mono tracking-tight">
                Hi, I'm <span className="text-white underline decoration-cyan-500/50 underline-offset-8">Shair Afzal</span>
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                React Native <br className="hidden sm:block" />
                <span className="text-gradient-cyan">Developer</span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              I build reliable, scalable and user-friendly cross-platform mobile applications with React Native, Expo and modern backend technologies.
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-sm text-slate-400">
              <div className="flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-200">Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-lg border border-slate-800">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-200">iOS & Android</span>
              </div>
              <div className="flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-lg border border-slate-800">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-200">Full Stack Capable</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 transition-all hover:border-cyan-500/40"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-2">Connect:</span>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="p-3 rounded-xl glass-card border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-110"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

          </div>

          {/* Right Mobile App Mockup Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-[40px] blur-xl opacity-30 animate-pulse-glow" />

              {/* Mobile Phone Mockup Frame */}
              <div className="relative glass-card bg-slate-950/90 rounded-[38px] p-4 border border-slate-800/90 shadow-2xl overflow-hidden">
                
                {/* Phone Notch & Status Bar */}
                <div className="flex justify-between items-center px-4 pt-1 pb-3">
                  <span className="text-[10px] font-mono text-slate-400">9:41</span>
                  <div className="w-20 h-4 bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-mono text-slate-400">5G</span>
                  </div>
                </div>

                {/* Simulated Screen Content */}
                <div className="bg-slate-900/90 rounded-[28px] p-5 border border-slate-800/60 space-y-4 text-left">
                  
                  {/* Developer Badge Card */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-500/30">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">App.jsx</h4>
                      <p className="text-[11px] text-cyan-400 font-mono">React Native + Expo</p>
                    </div>
                  </div>

                  {/* React Native Code Snippet Preview */}
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-[11px] space-y-1 text-slate-300">
                    <p className="text-slate-500">// Mobile App Architecture</p>
                    <p><span className="text-pink-400">import</span> React <span className="text-pink-400">from</span> <span className="text-emerald-300">'react'</span>;</p>
                    <p><span className="text-pink-400">import</span> &#123; View, Text &#125; <span className="text-pink-400">from</span> <span className="text-emerald-300">'react-native'</span>;</p>
                    <p className="pt-1"><span className="text-blue-400">export default function</span> <span className="text-yellow-300">App</span>() &#123;</p>
                    <p className="pl-3 text-cyan-300">&lt;<span className="text-cyan-400">MobileApp</span></p>
                    <p className="pl-6 text-slate-300">developer=<span className="text-emerald-300">"Shair Afzal"</span></p>
                    <p className="pl-6 text-slate-300">tech=<span className="text-purple-400">&#123;['RN', 'Expo', 'Node']&#125;</span></p>
                    <p className="pl-6 text-slate-300">status=<span className="text-emerald-300">"Ready for Prod"</span></p>
                    <p className="pl-3 text-cyan-300">/&gt;</p>
                    <p>&#125;</p>
                  </div>

                  {/* Live Mobile Highlights Pills */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>REST APIs</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Redux Toolkit</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Firebase</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Real-time</span>
                    </div>
                  </div>

                </div>

                {/* Simulated Home Bar */}
                <div className="pt-3 pb-1 flex justify-center">
                  <div className="w-32 h-1 bg-slate-700 rounded-full" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
