
import skills from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080e1b] px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            My Technical Expertise
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            My <span className="text-blue-400">Skills</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400">
            Here are the technologies and tools I use to build
            modern, scalable and user-friendly web applications.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {skills.map((category, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-[#111c30]/80 p-7 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-blue-500/10"
            >

              {/* Category Header */}
              <div className="mb-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-3xl transition group-hover:bg-blue-500/20">
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {category.category}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {category.items.length} Technologies
                  </p>
                </div>

              </div>

              <p className="mb-8 text-sm leading-6 text-gray-400">
                {category.description}
              </p>

              {/* Individual Skills */}
              <div className="space-y-7">

                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>

                    {/* Skill Name */}
                    <div className="mb-3 flex items-center justify-between">

                      <div className="flex items-center gap-3">
                        <span className="text-lg">
                          {skill.icon}
                        </span>

                        <span className="text-sm font-medium text-gray-300">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-sm font-semibold text-blue-400">
                        {skill.level}%
                      </span>

                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 overflow-hidden rounded-full bg-[#080e1b]">

                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />

                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Message */}
        <div className="mt-16 rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 text-center">

          <h3 className="text-2xl font-bold text-white">
            Always Learning, Always Growing!
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            Technology never stops evolving, and neither do I.
            I'm continuously learning new tools and improving
            my skills to build better digital experiences.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-block rounded-lg bg-blue-500 px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-600"
          >
            Let's Work Together ↗
          </a>

        </div>

      </div>
    </section>
  );
};

export default Skills;
