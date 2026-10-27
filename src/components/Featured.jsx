import { motion } from "framer-motion";

const Featured = () => {
  return (
    <section className="flex w-full items-center justify-center px-6 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto flex w-full max-w-5xl flex-col gap-4 rounded-2xl border border-sky-500/30 bg-sky-950/30 p-6 md:flex-row md:items-center md:justify-between md:p-8"
      >
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky-400">
            Currently Building
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
            Elliot AI
          </h2>
          <p className="max-w-xl text-sm text-slate-300 md:text-[0.95rem]">
            A proactive personal AI companion that knows you over time — your patterns, goals, 
            and blind spots — and acts before you ask. Long-term memory, voice I/O, 
            calendar integration, and a hybrid RAG pipeline built from scratch.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["Next.js", "Claude API", "pgvector", "OpenAI", "PostgreSQL"].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-700/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a
            href="https://elliotai.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-sky-500/60 bg-sky-700 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-600"
          >
            Visit site &nbsp;↗
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Featured;