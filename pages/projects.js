import Container from "@/components/Container";

const linkClass =
  "underline decoration-gray-300 dark:decoration-gray-600 hover:text-black dark:hover:text-white";

const projects = [
  {
    name: "mesh.applied",
    period: "2026–present",
    url: "https://meshapplied.com",
    summary:
      "Task-specialized open models and the Goethe inference framework for fast local inference.",
  },
  {
    name: "mesh.",
    period: "Oct 2023–present",
    url: "https://growmesh.io",
    summary: "Builder space started in Budapest in 2023.",
  },
  {
    name: "ksis",
    period: "Jun 2025",
    url: null,
    summary: "New interface for the old KSIS dance portal in Hungary.",
  },
  {
    name: "replyguy",
    period: "Nov 2024",
    url: null,
    summary: "A Twitter (X) plugin to add an AI reply button.",
  },
];

export default function Projects() {
  return (
    <Container
      title="Projects"
      description="Projects that I shipped."
    >
      <article className="text-gray-700 dark:text-gray-300 leading-8">
        <h1 className="font-bold text-3xl text-black dark:text-white mb-6">
          Projects
        </h1>
        {projects.map((project) => (
          <article key={project.name} className="mb-6 md:mb-8">
            <header className="flex flex-col justify-between md:flex-row md:items-baseline">
              <h2 className="text-lg md:text-xl font-medium mb-2 text-black dark:text-gray-100">
                {project.url ? (
                  <a
                    href={project.url}
                    className={linkClass}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h2>
              <time className="flex-shrink-0 text-gray-600 dark:text-gray-400">
                {project.period}
              </time>
            </header>
            <p className="text-gray-700 dark:text-gray-300">{project.summary}</p>
          </article>
        ))}
      </article>
    </Container>
  );
}
