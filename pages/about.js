import Container from "@/components/Container";
import { useConfig } from "@/lib/config";

const linkClass =
  "underline decoration-gray-300 dark:decoration-gray-600 hover:text-black dark:hover:text-white";

export default function About() {
  const BLOG = useConfig();

  return (
    <Container title="About" description={BLOG.description}>
      <article className="text-gray-700 dark:text-gray-300 leading-8">
        <h1 className="font-bold text-3xl text-black dark:text-white mb-6">
          About
        </h1>
        <p className="mb-4">
          I&apos;m building{" "}
          <a
            href="https://meshapplied.com"
            className={linkClass}
            target="_blank"
            rel="noreferrer"
          >
            mesh.applied
          </a>
          : task-specialized open models and inference kernels so they run fast
          on local hardware. For the past two years our team solved edge compute
          problems and was always compute-supply constrained, so we have a
          specific view on how to solve this. We started as a research collab;
          there was demand from previous customers, so now we&apos;re building
          new kernels and talking to customers. We&apos;ve closed and delivered
          to one so far, and we&apos;re in qualification talks with more.
        </p>
        <p className="mb-4">
          Before that I built{" "}
          <a
            href="https://growmesh.io"
            className={linkClass}
            target="_blank"
            rel="noreferrer"
          >
            mesh.
          </a>
          , CEE&apos;s biggest self-sustaining builder space, from 0 to 35
          members. We contracted and delivered 200k+ USD of software for the
          Hungarian Military, McKinsey, and Semilab. We secured 1M USD of GPU
          credits for our teams from local datacenters, and helped them raise
          1.5M USD in VC. We organised 50+ events and hosted 1000+ builders.
        </p>
        <p className="mb-4">
          I got introduced to software at 7. I learned math from Lajos Pósa,
          competed with Fazekas&apos;s lego robotics team, and later designed a
          decentralized logistics system that won an innovation award and got me
          a research job at 17. Teaming up with Janos, we built a recommendation
          system from buyer interaction, agent-based fluid sims for traffic, and
          a CSGO video-data pipeline for a foundational game-engine model.
          Through a builder launchpad we led 20 teams on high-tech projects and
          received a €10,000 grant for the best one. Another one was a
          high-altitude balloon navigation system that hit 30km on a €2k budget.
        </p>
        <p className="mb-4">
          I&apos;m studying Engineering Physics at Budapest University of
          Technology and Economics, and I&apos;m a SpaceXAI Ambassador.
        </p>
        <p>
          Reach me on{" "}
          <a
            href={BLOG.socialLink}
            className={linkClass}
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          ,{" "}
          <a
            href={BLOG.githubLink}
            className={linkClass}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          ,{" "}
          <a
            href={BLOG.linkedinLink}
            className={linkClass}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          , or{" "}
          <a href={`mailto:${BLOG.email}`} className={linkClass}>
            {BLOG.email}
          </a>
          .
        </p>
      </article>
    </Container>
  );
}
