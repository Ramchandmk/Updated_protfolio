
import experience from "../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#080e1b] px-6 py-24"
    >

      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-20 text-center">

          <p className="mb-4 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            My Professional Journey
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            My <span className="text-blue-400">Experience</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400">
            My development journey, learning experiences and
            the skills I have gained while building modern
            web applications.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Vertical Line */}
          <div className="absolute bottom-0 left-[15px] top-0 w-[2px] bg-gradient-to-b from-blue-500 via-blue-400/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">

            {experience.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col md:w-1/2 ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-12"
                    : "md:ml-auto md:pl-12"
                }`}
              >

                {/* Timeline Dot */}
                <div className={`absolute left-[8px] top-8 z-10 h-4 w-4 rounded-full border-4 border-[#080e1b] bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)] md:left-auto ${
                  index % 2 === 0
                    ? "md:-right-[8px]"
                    : "md:-left-[8px]"
                }`} />

                {/* Experience Card */}
                <div className="ml-12 rounded-2xl border border-white/10 bg-[#111c30]/80 p-7 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-blue-500/10 md:ml-0">

                  {/* Duration & Type */}
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-3">

                    <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-400">
                      {item.duration}
                    </span>

                    <span className="text-xs text-gray-500">
                      {item.type}
                    </span>

                  </div>

                  {/* Role */}
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {item.role}
                  </h3>

                  {/* Company */}
                  <p className="mt-2 font-medium text-blue-400">
                    {item.company}
                  </p>

                  {/* Description */}
                  <p className="mt-5 text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mt-7">

                    <h4 className="mb-4 text-sm font-semibold text-white">
                      Key Responsibilities
                    </h4>

                    <ul className="space-y-3">

                      {item.responsibilities.map((task, taskIndex) => (
                        <li
                          key={taskIndex}
                          className="flex items-start gap-3 text-sm leading-6 text-gray-400"
                        >
                          <span className="mt-1 text-blue-400">
                            ▹
                          </span>

                          {task}
                        </li>
                      ))}

                    </ul>

                  </div>

                  {/* Technologies */}
                  <div className="mt-7">

                    <h4 className="mb-4 text-sm font-semibold text-white">
                      Technologies Used
                    </h4>

                    <div className="flex flex-wrap gap-2">

                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded-md border border-white/10 bg-[#080e1b] px-3 py-2 text-xs text-gray-300 transition hover:border-blue-400/50 hover:text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom Message */}
        <div className="mt-20 rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 text-center">

          <h3 className="text-2xl font-bold text-white">
            Growing Every Day!
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            Every project is an opportunity to learn something
            new, improve my skills and create better digital
            experiences.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-block rounded-lg bg-blue-500 px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-600"
          >
            Let's Connect ↗
          </a>

        </div>

      </div>

    </section>
  );
};

export default Experience;
