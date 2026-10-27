import p_photo from "/p_photo.png"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen w-full items-center justify-center px-6 pt-32 pb-24 md:px-10"
    >
      <div className="flex w-full max-w-5xl flex-col items-center gap-12 md:flex-row md:items-center md:justify-between">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center md:justify-start"
        >
          <img
            src={p_photo}
            alt="Portrait of Divyanshu Sharma"
            className="h-52 w-52 cursor-pointer rounded-full border border-slate-800 bg-slate-900/60 object-cover shadow-2xl shadow-sky-900/40 transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-sky-500/60 md:h-60 md:w-60"
          />
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:max-w-xl"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
            AI Engineer · Distributed Systems & Applied AI
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl lg:text-6xl">
            Divyanshu Sharma
          </h1>
          <p className="mt-4 text-sm text-slate-300 md:text-base">
            AI Engineer with 3+ years building LLM-powered products, RAG pipelines, and distributed platforms at Amazon and
high-growth startups. NYU CS graduate and Paul Baran Young Scholar who has driven $2.1M+ in revenue impact and
scaled systems to 1.5M+ daily transactions.
          </p>
          <p className="mt-2 text-sm text-slate-400 md:text-base">
            I have shipped production systems that drive multi‑million‑dollar impact, from
            experimentation platforms and email infrastructure to cross‑modal generative models
            and real‑time data pipelines.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-slate-50 shadow-sm shadow-slate-900/60 transition-all duration-150 hover:bg-blue-500"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-600 px-6 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-150 hover:border-blue-400 hover:bg-slate-900/70"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero