
import { useState, useEffect } from "react";


const Hero = () => {
  const roles = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "Modern Web App Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#080e1b] px-6 py-20"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]"></div>
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]"></div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="mb-5 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            ✨ Welcome to my portfolio
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="text-blue-400">Ramchand</span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-gray-300 sm:text-3xl">
            I'm a{" "}
            <span className="text-blue-400 transition-all duration-300">
              {roles[roleIndex]}
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
            I create beautiful, responsive and user-friendly websites.
            Passionate about modern web technologies and building
            amazing digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-500 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-600"
            >
              View My Work ↗
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:border-blue-400 hover:text-blue-400"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-6">
            <span className="text-sm text-gray-500">
              Follow me:
            </span>

            <a
              href="https://github.com/Ramchandmk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-blue-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/ramchand-kolhi-7a3932372"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-blue-400"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="flex justify-center">
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl"></div>

            {/* Profile */}
            <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border-4 border-blue-400/50 bg-gradient-to-br from-blue-500/30 to-purple-600/30 shadow-2xl shadow-blue-500/20 sm:h-96 sm:w-96">
              <img
                src="/images/profile.png"
                alt="Ramchand profile"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-[#111c30] px-5 py-3 shadow-xl">
              <p className="text-sm font-semibold text-white">
                💻 Full Stack Developer
              </p>
            </div>

            <div className="absolute -right-5 top-10 rounded-xl border border-white/10 bg-[#111c30] px-4 py-3 shadow-xl">
              <p className="text-sm font-semibold text-blue-400">
                React.js ⚛️
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
