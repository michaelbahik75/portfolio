"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Portfolio() {
  const [isDark, setIsDark] = React.useState(true);

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-all duration-500 ${
        isDark
          ? "text-white bg-[linear-gradient(to_bottom_right,#0f172a,#1e293b,#312e81)]"
          : "text-gray-900 bg-gradient-to-br from-slate-50 via-white to-indigo-100"
      }`}
    >
      {/* Glow */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-[-150px] left-[-100px] w-[400px] h-[400px] rounded-full blur-[120px] ${
            isDark ? "bg-indigo-500 opacity-30" : "bg-indigo-300 opacity-40"
          }`}
        />
        <div
          className={`absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] rounded-full blur-[120px] ${
            isDark ? "bg-purple-500 opacity-30" : "bg-blue-300 opacity-40"
          }`}
        />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* Toggle */}
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 
            hover:scale-110 transition"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* HERO */}
        <section
          className={`backdrop-blur-lg border shadow-xl ${
            isDark
              ? "bg-white/10 border-white/10"
              : "bg-white/20 border-gray-200"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold"
              >
                Amar Raj Bahik
              </motion.h1>

              <p className={isDark ? "mt-4 text-xl text-gray-300" : "mt-4 text-xl text-gray-600"}>
                Full Stack JavaScript Developer | Next.js & NestJS Specialist
              </p>

              <p className={isDark ? "mt-4 text-gray-400" : "mt-4 text-gray-600"}>
                Building scalable full-stack web applications with modern JavaScript technologies
              </p>

              {/* SOCIAL */}
              <div className="flex gap-4 mt-6">
                {[
                  { icon: <FaGithub />, link: "https://github.com/michaelbahik75" },
                  { icon: <FaLinkedin />, link: "https://linkedin.com/in/michaelbahik75" },
                  { icon: <Mail />, link: "mailto:michaelbahik75@gmail.com" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300
                    ${
                      isDark
                        ? "bg-white/10 border border-white/10 hover:bg-indigo-500"
                        : "bg-gray-900 text-white hover:bg-indigo-600"
                    } hover:scale-110`}
                  >
                    <span className="text-xl">{item.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* PROFILE */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="flex justify-center"
            >
              <div
                className="h-72 w-72 overflow-hidden shadow-2xl border"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  borderColor: isDark ? "rgba(255,255,255,0.1)" : "#e5e7eb",
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Amar Raj Bahik"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </motion.div>

          </div>
        </section>

        {/* ABOUT */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>

          <p className={isDark ? "text-gray-400 leading-relaxed" : "text-gray-600 leading-relaxed"}>
            Full Stack JavaScript Developer with a degree in Computer Engineering and
            hands-on experience building production-ready web applications.
          </p>

          <p className={isDark ? "text-gray-400 mt-4 leading-relaxed" : "text-gray-600 mt-4 leading-relaxed"}>
            I specialize in backend systems using NestJS & Node.js and frontend apps using Next.js & React.
          </p>

          <p className={isDark ? "text-gray-400 mt-4 leading-relaxed" : "text-gray-600 mt-4 leading-relaxed"}>
            Currently working at TechAxis on scalable production systems.
          </p>
        </section>

        {/* SKILLS */}
        <section
          className={`backdrop-blur-lg border-y ${
            isDark
              ? "bg-white/5 border-white/10"
              : "bg-white/20 border-gray-200"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-semibold mb-8">Technical Skills</h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Frontend", items: "Next.js, React, Tailwind CSS" },
                { title: "Backend", items: "Node.js, Express, NestJS" },
                { title: "Database", items: "MongoDB, MySQL" },
                { title: "Languages", items: "JavaScript, TypeScript, Python" },
              ].map((skill, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl shadow-lg border ${
                    isDark
                      ? "bg-white/10 border-white/10"
                      : "bg-white/40 border-gray-200"
                  }`}
                >
                  <h3 className="font-semibold mb-2">{skill.title}</h3>
                  <p className={isDark ? "text-gray-300 text-sm" : "text-gray-600 text-sm"}>
                    {skill.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          className={`backdrop-blur-lg border-y ${
            isDark
              ? "bg-white/5 border-white/10"
              : "bg-white/20 border-gray-200"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-semibold mb-6">Experience</h2>

            <div
              className={`p-6 rounded-2xl shadow-lg border ${
                isDark
                  ? "bg-white/10 border-white/10"
                  : "bg-white/40 border-gray-200"
              }`}
            >
              <h3 className="font-semibold text-lg">
                Full Stack JavaScript Developer
              </h3>

              <p className={isDark ? "text-gray-400 text-sm" : "text-gray-600 text-sm"}>
                TechAxis · Jan 2026 – Present
              </p>

              <p className={isDark ? "text-gray-300 mt-2" : "text-gray-600 mt-2"}>
                Built scalable full-stack applications and production APIs using modern frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>

          <div className={`grid md:grid-cols-2 gap-6 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              Kathmandu, Nepal
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              9861757851
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" strokeWidth={2.2} />
              michaelbahik75@gmail.com
            </div>

            <div className="flex items-center gap-3">
              <FaGithub className="w-5 h-5 scale-110" />
              github.com/michaelbahik75
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className={`text-center py-8 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          © {new Date().getFullYear()} Amar Raj Bahik
        </footer>

      </div>
    </div>
  );
}