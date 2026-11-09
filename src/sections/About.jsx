
const About = () => {
  const highlights = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Building responsive and modern web applications using the latest technologies.",
    },
    {
      icon: "⚡",
      title: "Clean Code",
      description:
        "Writing clean, reusable and maintainable code with best practices.",
    },
    {
      icon: "🚀",
      title: "Problem Solving",
      description:
        "Turning complex problems into simple and effective digital solutions.",
    },
    {
      icon: "🎯",
      title: "Continuous Learning",
      description:
        "Always exploring new technologies and improving my development skills.",
    },
  ];

  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080e1b] px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            Discover My Journey
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            About <span className="text-blue-400">Me</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400">
            Get to know more about me, my passion for development
            and the technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-3xl" />

              {/* Image */}
              <div className="relative h-[350px] w-[300px] overflow-hidden rounded-3xl border border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-purple-600/20 shadow-2xl shadow-blue-500/10 sm:h-[450px] sm:w-[380px]">
                <img
                  src="/images/profile.png"
                  alt="Ramchand - Full Stack Developer"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-5 rounded-2xl border border-white/10 bg-[#111c30] px-6 py-4 shadow-xl sm:-right-10">
                <p className="text-2xl font-bold text-blue-400">
                  MERN
                </p>
                <p className="text-xs text-gray-400">
                  Stack Developer
                </p>
              </div>

              {/* Small Badge */}
              <div className="absolute -left-5 top-10 rounded-xl border border-white/10 bg-[#111c30] px-4 py-3 shadow-xl">
                <p className="text-sm font-semibold text-white">
                  ✨ Creative Developer
                </p>
              </div>

            </div>
          </div>

          {/* Right - About Text */}
          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Who I Am
            </p>

            <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              I'm Ramchand,
              <span className="text-blue-400">
                {" "}Full Stack Developer
              </span>
            </h3>

            <p className="mt-7 leading-8 text-gray-400">
              I'm a passionate MERN Stack Developer who loves
              creating modern, responsive and user-friendly web
              applications. I enjoy transforming creative ideas
              into functional digital experiences.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              My focus is on developing clean and scalable
              applications using modern frontend and backend
              technologies. I always enjoy learning new skills,
              solving challenges and improving my development
              knowledge.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              My goal is to build meaningful digital products
              that provide great user experiences and solve
              real-world problems.
            </p>

            {/* Personal Details */}
            <div className="mt-8 grid grid-cols-2 gap-5">

              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="mt-1 font-semibold text-white">
                  Ramchand
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Profession</p>
                <p className="mt-1 font-semibold text-white">
                  MERN Stack Developer
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="mt-1 break-all font-semibold text-white">
                  ramchandmakwan@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Availability</p>
                <p className="mt-1 font-semibold text-green-400">
                  Open to Work
                </p>
              </div>

            </div>

            {/* Resume Button */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="/resume.docx"
                download
                className="rounded-lg bg-blue-500 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Download CV ↓
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:border-blue-400 hover:text-blue-400"
              >
                Let's Talk ↗
              </a>

            </div>

          </div>
        </div>

        {/* Highlights */}
        <div className="mt-32">

          <div className="mb-12 text-center">
            <h3 className="text-3xl font-bold text-white">
              What I <span className="text-blue-400">Do</span>
            </h3>

            <p className="mt-4 text-gray-400">
              My approach to building better digital experiences.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {highlights.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-[#111c30]/70 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:bg-[#14233b]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-3xl transition group-hover:bg-blue-500/20">
                  {item.icon}
                </div>

                <h4 className="mb-3 text-lg font-bold text-white">
                  {item.title}
                </h4>

                <p className="text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* Technologies */}
        <div className="mt-28 text-center">

          <h3 className="text-3xl font-bold text-white">
            Technologies I <span className="text-blue-400">Work With</span>
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Tools and technologies I use to build modern web applications.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            {technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-lg border border-white/10 bg-[#111c30] px-6 py-3 text-sm font-medium text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-400"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
