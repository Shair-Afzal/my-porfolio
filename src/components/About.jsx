import React from "react";
import {
  GraduationCap,
  Languages,
  MapPin,
  Mail,
  Smartphone,
  Server,
  Zap,
  Layout
} from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "Cross-Platform Mobile",
      desc: "Building high-performance iOS and Android apps using React Native & Expo.",
      icon: Smartphone
    },
    {
      title: "API & Backend Development",
      desc: "Creating and integrating RESTful APIs with Node.js, Express, and MongoDB.",
      icon: Server
    },
    {
      title: "Real-Time & Services",
      desc: "Implementing real-time communication with Socket.IO & Firebase cloud services.",
      icon: Zap
    },
    {
      title: "State & Form Handling",
      desc: "Predictable state with Redux Toolkit and structured form validation with Formik & Yup.",
      icon: Layout
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Professional Positioning
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan">Shair Afzal</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Positioning & Personal Info */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Core Positioning Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Professional Summary
              </h3>
              
              <blockquote className="text-slate-300 leading-relaxed text-base sm:text-lg font-normal border-l-2 border-cyan-500/60 pl-4 py-1 italic">
                "React Native Developer with hands-on experience building cross-platform mobile applications using React Native and Expo. Skilled in developing responsive UI, integrating REST APIs, Firebase, Redux Toolkit, and real-time features. Also experienced with Node.js, Express.js, MongoDB, and building scalable backend services. Passionate about creating clean, reliable, and user-friendly mobile applications."
              </blockquote>
            </div>

            {/* Quick Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Education */}
              <div className="glass-card p-5 rounded-2xl border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-3 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                  <h4 className="font-semibold text-white text-sm">Education</h4>
                </div>
                <p className="text-sm font-semibold text-slate-200">BSCS / Bachelor of Science in Computer Science</p>
                <p className="text-xs text-slate-400">Arid Agriculture University (2024 – 2028)</p>
              </div>

              {/* Location & Contact */}
              <div className="glass-card p-5 rounded-2xl border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-3 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                  <h4 className="font-semibold text-white text-sm">Location</h4>
                </div>
                <p className="text-sm font-semibold text-slate-200">Lahore, Pakistan</p>
                <p className="text-xs text-slate-400">Available for remote & local roles</p>
              </div>

              {/* Languages */}
              <div className="glass-card p-5 rounded-2xl border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-3 text-cyan-400">
                  <Languages className="w-5 h-5" />
                  <h4 className="font-semibold text-white text-sm">Languages</h4>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["English", "Urdu", "Punjabi"].map((lang) => (
                    <span
                      key={lang}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Communication */}
              <div className="glass-card p-5 rounded-2xl border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-3 text-cyan-400">
                  <Mail className="w-5 h-5" />
                  <h4 className="font-semibold text-white text-sm">Direct Contact</h4>
                </div>
                <p className="text-xs text-slate-300 truncate">hunaizk018@gmail.com</p>
                <p className="text-xs text-slate-300">+92 3154086721</p>
              </div>

            </div>
          </div>

          {/* Right Column: Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white text-left flex items-center gap-2 mb-2">
              Key Technical Focus
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {highlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card p-5 rounded-2xl border border-slate-800 glass-card-hover flex items-start gap-4 text-left"
                  >
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
