import { useConfig } from "@/lib/config";

const linkClass =
  "underline decoration-gray-300 dark:decoration-gray-600 hover:text-black dark:hover:text-white";

export default function HomeIntro() {
  const BLOG = useConfig();

  return (
    <section className="mb-10 md:mb-14 text-gray-700 dark:text-gray-300 leading-8">
      <p>
        I&apos;m building{" "}
        <a
          href="https://meshapplied.com"
          className={linkClass}
          target="_blank"
          rel="noreferrer"
        >
          mesh.applied
        </a>
        : task-specialized open models and inference kernels so they run fast on
        local hardware. Before that I built{" "}
        <a
          href="https://growmesh.io"
          className={linkClass}
          target="_blank"
          rel="noreferrer"
        >
          mesh.
        </a>
        , a builder space in Budapest, from 0 to 35 people.
      </p>
      <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
        <a
          href={BLOG.githubLink}
          className={linkClass}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {" · "}
        <a
          href={BLOG.linkedinLink}
          className={linkClass}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        {" · "}
        <a
          href={BLOG.socialLink}
          className={linkClass}
          target="_blank"
          rel="noreferrer"
        >
          X
        </a>
      </p>
    </section>
  );
}
