import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const contactInfo = [
    {
      title: "Email Address",
      value: "hunaizk018@gmail.com",
      href: "mailto:hunaizk018@gmail.com",
      icon: Mail,
      desc: "Send me a direct email anytime"
    },
    {
      title: "Phone Number",
      value: "+92 3154086721",
      href: "tel:+923154086721",
      icon: Phone,
      desc: "Available for call or WhatsApp"
    },
    {
      title: "Current Location",
      value: "Lahore, Pakistan",
      href: null,
      icon: MapPin,
      desc: "BSCS Student at Arid Agriculture University"
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Trigger mailto fallback link for user
    const mailtoUri = `mailto:hunaizk018@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Portfolio Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUri;
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("hunaizk018@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact <span className="text-gradient-cyan">Shair Afzal</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Looking for a React Native Developer for mobile app development or full-time roles? Reach out directly!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Contact Information
            </h3>

            {contactInfo.map((info, idx) => {
              const IconComp = info.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-slate-800 glass-card-hover flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {info.title}
                    </h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-base font-bold text-white hover:text-cyan-400 transition-colors block truncate"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base font-bold text-white truncate">
                        {info.value}
                      </p>
                    )}
                    <p className="text-xs text-slate-400 font-light pt-0.5">
                      {info.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Quick Copy Card */}
            <div className="glass-card p-5 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Email</h4>
                  <p className="text-xs font-mono text-cyan-300">hunaizk018@gmail.com</p>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 text-left">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-cyan-400" />
                Send a Direct Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Mailer Opened!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your default email client has been prepared with your message to <strong>hunaizk018@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:text-white border border-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Mobile App Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your mobile application requirements or message..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
