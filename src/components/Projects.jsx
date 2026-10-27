import { motion } from "framer-motion";

const a2iThumbnail = new URL("/a2i_icon.webp", import.meta.url).href;
const noise_thumbnail = new URL("/311_noise.png", import.meta.url).href;
const ai_dashboard = new URL("/ai_dashboard.png", import.meta.url).href;
const elliotThumbnail = new URL("/elliot-symbol-dark.svg", import.meta.url).href;


const projectsData = [
  {
    title: "Elliot AI – Proactive Personal AI Companion",
    tag: "Product · Personal AI",
    description:
      "A proactive personal AI companion that builds a model of who you are over time — your patterns, habits, goals, and blind spots — and acts on that knowledge without being asked.",
    impact:
      "Hybrid RAG memory system with pgvector + SQL scoring. ~68% LLM cost reduction via intent classification. Voice I/O, Google Calendar integration, and multi-user auth in a production PWA.",
    technologies: ["Next.js", "Claude API", "pgvector", "OpenAI", "PostgreSQL", "Web Push"],
    thumbnail: elliotThumbnail,
    link: "https://elliotai.app",
    linkLabel: "Visit site",
  },
  {
    title: "AI‑Powered Team Dashboard",
    tag: "Product · Agentic AI",
    description:
      "Agentic dashboard built with Next.js and React, using a ReAct‑style LLM agent backed by FastAPI services integrated with LangChain and Mixtral, with Firebase‑based auth and persistence.",
    impact:
      "Gives teams a single surface to securely query workflows and internal data through role‑aware AI agents.",
    technologies: ["Next.js", "React", "FastAPI", "LangChain", "LLMs"],
    thumbnail: ai_dashboard,
    link: "https://dashai.divyanshusharma.com/",
    linkLabel: "Try it out",
  },
  {
    title: "Audio2Image – Cross‑Modal Generation",
    tag: "ML Research · Generative",
    description:
      "Cross‑modal audio‑to‑image system that conditions a frozen Stable Diffusion model on wav2vec 2.0 audio embeddings, generating images directly from raw audio.",
    impact:
      "Deployed as an interactive demo used by researchers and practitioners exploring audio‑conditioned generative models.",
    technologies: ["PyTorch", "Stable Diffusion", "wav2vec 2.0", "Python"],
    thumbnail: a2iThumbnail,
    link: "https://divyanshusharma17-audio2image-demo.hf.space/",
    linkLabel: "Try it out",
  },
  {
    title: "311 Noisy NYC – Real‑Time Noise Analytics",
    tag: "Data Infra · Streaming",
    description:
      "Real‑time distributed pipeline ingesting 10k+ NYC 311 noise complaints per day using Kafka and PySpark, with geospatial aggregation on Dataproc and results served from PostgreSQL.",
    impact:
      "Enables sub‑second, map‑based exploration of city‑wide noise patterns for different time ranges and zoom levels.",
    technologies: ["Kafka", "PySpark", "Dataproc", "PostgreSQL", "FastAPI"],
    thumbnail: noise_thumbnail,
    link: "https://noisemap.divyanshusharma.com/",
    linkLabel: "Try it out",
  }
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <article className="mx-auto flex w-full max-w-5xl flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 shadow-lg shadow-slate-950/60 transition-transform duration-150 hover:-translate-y-1 hover:shadow-xl md:flex-row md:items-start md:p-8">
        {project.thumbnail && (
          <div className="w-full shrink-0 md:w-56">
            <div className="relative h-40 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}

        <div className="flex-1 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              {project.title}
            </h3>
            <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-300">
              {project.tag}
            </span>
          </div>

          <p className="text-sm text-slate-300 md:text-[0.95rem]">
            {project.description}
          </p>
          <p className="text-xs font-medium text-slate-400 md:text-sm">
            {project.impact}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700/70"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-violet-500/60 bg-violet-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300/40"
              >
                {project.linkLabel}
                <span
                  aria-hidden="true"
                  className="text-sm transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            )}
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-12 px-6 py-16"
    >
      <ScrollReveal>
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
            Projects
          </h2>
          <p className="max-w-2xl text-sm text-slate-400 md:text-[0.95rem]">
            A selection of end‑to‑end work across machine learning research,
            data infrastructure, and product engineering. Each project is
            grounded in real‑world usage and measurable impact.
          </p>
        </div>
      </ScrollReveal>

      <div className="flex w-full flex-col gap-6 text-white md:gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
