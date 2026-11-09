
const ProjectCard = ({ project }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111c30]/80 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-blue-500/10">

      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-[#14233b]">

        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#080e1b]/70 to-transparent opacity-0 transition group-hover:opacity-100" />

        <span className="absolute left-4 top-4 rounded-full border border-blue-400/30 bg-[#080e1b]/90 px-4 py-1.5 text-xs font-semibold text-blue-400 backdrop-blur">
          {project.category}
        </span>

      </div>

      {/* Project Details */}
      <div className="p-6">

        <h3 className="text-xl font-bold text-white transition group-hover:text-blue-400">
          {project.title}
        </h3>

        <p className="mt-4 min-h-[84px] text-sm leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">

          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-md border border-white/10 bg-[#080e1b] px-3 py-1.5 text-xs text-gray-300 transition hover:border-blue-400/50 hover:text-blue-400"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}
        <div className="mt-7 flex gap-3">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-blue-400 hover:text-blue-400"
          >
            GitHub ↗
          </a>

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Live Demo ↗
            </a>
          ) : (
            <span className="flex flex-1 cursor-not-allowed items-center justify-center rounded-lg bg-blue-500/20 px-4 py-3 text-sm font-semibold text-blue-300/60">
              Demo Coming Soon
            </span>
          )}

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;
