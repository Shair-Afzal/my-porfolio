import React from "react";
import { Smartphone, ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 items-center">
          
          {/* Brand Col */}
          <div className="md:col-span-5 text-left space-y-3">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Shair Afzal
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm font-light">
              React Native Developer specializing in cross-platform mobile applications, REST APIs, Node.js, and modern mobile user experiences.
            </p>
          </div>

          {/* Nav Links Col */}
          <div className="md:col-span-4 flex flex-wrap justify-start md:justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top Col */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile Placeholder"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile Placeholder"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:hunaizk018@gmail.com"
              title="Send Direct Email"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              title="Scroll to top"
              className="p-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 border border-cyan-500/30 text-cyan-400 hover:text-white transition-all ml-2 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Shair Afzal. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-mono text-slate-400">
            Built with React & React Native Principles
          </p>
        </div>

      </div>
    </footer>
  );
}
