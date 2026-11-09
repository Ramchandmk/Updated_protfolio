
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080e1b] px-6 py-24"
    >

      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">

          <p className="mb-4 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            My Recent Work
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            My <span className="text-blue-400">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400">
            Here are some of my recent projects where I have
            applied my skills and creativity to build modern
            and user-friendly web applications.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

        {/* Bottom Button */}
        <div className="mt-16 text-center">

          <a
            href="https://github.com/Ramchandmk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg border border-blue-400/40 px-8 py-4 font-semibold text-blue-400 transition hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
          >
            Explore More on GitHub
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  );
};

export default Projects;
