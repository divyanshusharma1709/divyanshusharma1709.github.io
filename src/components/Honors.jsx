import { motion } from "framer-motion";

const honorsData = [
  {
    title: "Second Prize, Paul Baran Young Scholars Celestini Prize India",
    issuer: "The Marconi Society",
    year: "2019",
    month: "Oct 2019",
    description:
      "Awarded second prize for VisionAir, a privacy-preserving mobile application that estimates local air quality from a smartphone image while keeping user data private.",
  },
  {
    title: "Encouragement Award, Singapore-India Hackathon 2019",
    issuer: "AICTE, Education Ministry of Singapore, IIT Madras",
    year: "2019",
    month: "Sep 2019",
    description:
      "Recognized in the top 5 for ReflectoMate, a mental health support application combining conversational assessments, psychological screening, drawing-based interaction, and guided interventions to detect and address early signs of depression.",
  },
  {
    title: "Winner, Smart India Hackathon 2019 - Software Edition",
    issuer: "AICTE, ABB",
    year: "2019",
    month: "Mar 2019",
    description:
      "Won the national software edition of Smart India Hackathon for solving an industry problem statement from ABB.",
  },
  {
    title: "Winner, HackTillEnd",
    issuer: "ACM, Intel",
    year: "2018",
    month: "Oct 2018",
    description:
      "Won HackTillEnd in a competitive hackathon setting organized with ACM and Intel.",
  },
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

const HonorCard = ({ honor }) => {
  return (
    <ScrollReveal>
      <article className="mx-auto flex w-full max-w-5xl flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 shadow-lg shadow-slate-950/60 transition-transform duration-150 hover:-translate-y-1 hover:shadow-xl md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-300">
              Honor
            </p>
            <h3 className="max-w-3xl text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              {honor.title}
            </h3>
          </div>
          <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-300">
            {honor.year}
          </span>
        </div>

        <p className="text-sm font-medium text-slate-200">{honor.issuer}</p>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
          {honor.month}
        </p>
        <p className="text-sm text-slate-300 md:text-[0.95rem]">
          {honor.description}
        </p>
      </article>
    </ScrollReveal>
  );
};

const Honors = () => {
  return (
    <section
      id="honors"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-12 px-6 py-16"
    >
      <ScrollReveal>
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
            Honors & Awards
          </h2>
          <p className="max-w-2xl text-sm text-slate-400 md:text-[0.95rem]">
            Selected recognitions across research, product engineering, and
            competitive hackathons.
          </p>
        </div>
      </ScrollReveal>

      <div className="flex w-full flex-col gap-6 text-white md:gap-8">
        {honorsData.map((honor) => (
          <HonorCard key={honor.title} honor={honor} />
        ))}
      </div>
    </section>
  );
};

export default Honors;
