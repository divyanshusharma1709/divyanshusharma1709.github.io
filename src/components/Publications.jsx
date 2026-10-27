import { motion } from "framer-motion";

const publicationsData = [
  {
    title: "Syntactically Guided Generative Embeddings for Zero-Shot Skeleton Action Recognition",
    venue: "IEEE International Conference on Image Processing (ICIP)",
    year: "2021",
    authors: "Pranay Gupta, Divyanshu Sharma, Ravi Kiran Sarvadevabhatla",
    description:
      "Introduces SynSE, a language-guided generative approach for zero-shot and generalized zero-shot skeleton action recognition with strong results on NTU-60 and NTU-120.",
    paperLink: "https://arxiv.org/abs/2101.11530",
    projectLink:
      "https://cvit.iiit.ac.in/research/projects/cvit-projects/syntactically-guided-generative-embeddings-for-zero-shot-skeleton-action-recognition",
  },
  {
    title:
      "VisionAir: Using Federated Learning to estimate Air Quality using the TensorFlow API for Java",
    venue: "TensorFlow Blog · Developer Stories",
    year: "2020",
    authors:
      "Harshita Diddee, Divyanshu Sharma, Shivani Jindal, Shivam Grover",
    description:
      "Engineering write-up on a privacy-preserving Android system that estimates air quality from smartphone images using on-device training and federated learning.",
    paperLink:
      "https://blog.tensorflow.org/2020/02/visionair-using-federated-learning-to-estimate-airquality-tensorflow-api-java.html",
    ctaLabel: "Read article",
  },
];

const scholarLink =
  "https://scholar.google.com/citations?user=bGH45WgAAAAJ&hl=en";

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

const PublicationCard = ({ publication }) => {
  return (
    <ScrollReveal>
      <article className="mx-auto flex w-full max-w-5xl flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 shadow-lg shadow-slate-950/60 transition-transform duration-150 hover:-translate-y-1 hover:shadow-xl md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-300">
              Publication
            </p>
            <h3 className="max-w-3xl text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              {publication.title}
            </h3>
          </div>
          <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-300">
            {publication.year}
          </span>
        </div>

        <p className="text-sm font-medium text-slate-200">{publication.venue}</p>
        <p className="text-sm text-slate-400">{publication.authors}</p>
        <p className="text-sm text-slate-300 md:text-[0.95rem]">
          {publication.description}
        </p>

        <div className="mt-2 flex flex-wrap gap-3">
          {publication.paperLink && (
            <a
              href={publication.paperLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-violet-500/60 bg-violet-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300/40"
            >
              {publication.ctaLabel || "Read paper"}
              <span aria-hidden="true" className="text-sm">
                ↗
              </span>
            </a>
          )}

          {publication.projectLink && (
            <a
              href={publication.projectLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300/30"
            >
              Project page
              <span aria-hidden="true" className="text-sm">
                ↗
              </span>
            </a>
          )}

          {publication.doiLink && (
            <a
              href={publication.doiLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300/30"
            >
              DOI
              <span aria-hidden="true" className="text-sm">
                ↗
              </span>
            </a>
          )}
        </div>
      </article>
    </ScrollReveal>
  );
};

const Publications = () => {
  return (
    <section
      id="publications"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-12 px-6 py-16"
    >
      <ScrollReveal>
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
            Publications
          </h2>
          <p className="max-w-2xl text-sm text-slate-400 md:text-[0.95rem]">
            Research work spanning generative modeling, multimodal learning, and
            representation learning.
          </p>
          <a
            href={scholarLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 transition-all duration-200 hover:border-violet-400/50 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300/30"
          >
            View Google Scholar
            <span aria-hidden="true" className="text-sm">
              ↗
            </span>
          </a>
        </div>
      </ScrollReveal>

      <div className="flex w-full flex-col gap-6 text-white md:gap-8">
        {publicationsData.map((publication) => (
          <PublicationCard key={publication.title} publication={publication} />
        ))}
      </div>
    </section>
  );
};

export default Publications;
