import React from 'react';

const cascadeLogo = new URL('/logos/cascade.webp', import.meta.url).href;
const easleyDunnLogo = new URL('/logos/easley_dunn.jpeg', import.meta.url).href;
const amazonLogo = new URL('/logos/amazon.svg', import.meta.url).href;
const nyuLogo = new URL('/logos/nyu.png', import.meta.url).href;
const aeroleadsLogo = new URL('/logos/aeroleads.png', import.meta.url).href;
const iiitLogo = new URL('/logos/iiit-hyderabad.jpg', import.meta.url).href;
const ggsipuLogo = new URL('/logos/ggsipu.svg', import.meta.url).href;

const TimelineItem = ({ year, title, subtitle, description, logo, isLeft }) => (
  <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} w-full items-center justify-center gap-4`}>
    <div className={`w-[45%] ${isLeft ? 'text-right' : 'text-left'}`}>
      <div className="relative rounded-xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/60 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900">
        {logo && (
          <div className={`mb-3 flex ${isLeft ? 'justify-end' : 'justify-start'}`}>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1">
              <img
                src={logo}
                alt={subtitle}
                className="h-9 w-9 rounded-full bg-slate-100 p-1 object-contain"
              />
            </div>
          </div>
        )}
        <span className={`absolute top-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 -z-10 ${
          isLeft ? '-right-14 translate-x-full' : '-left-14 -translate-x-full'
        }`}>
          {year}
        </span>
        <h3 className="mb-1 text-lg font-semibold text-slate-100">{title}</h3>
        <p className="mb-2 text-sm font-medium text-sky-300">{subtitle}</p>
        <p className="text-sm text-slate-300">{description}</p>
      </div>
    </div>

    <div className="relative flex h-[30px] w-[30px] items-center justify-center">
      <div className="z-10 h-5 w-5 rounded-full border-4 border-slate-950 bg-slate-200 shadow-md shadow-slate-900/60"></div>
    </div>

    <div className="w-[45%]"></div>
  </div>
);

const Timeline = () => {
  // Sorted by end date (most recent first; ongoing roles at the top)
  const timelineData = [
    {
      year: 'Jun 2026 – Aug 2026',
      title: 'Software Engineer',
      subtitle: 'Cascade Intelligence, Inc. (a16z speedrun) · Remote, USA',
      logo: cascadeLogo,
      description:
        'Sole engineer on a 4-person team. Tripled RFP match precision (20% to 60%) with no recall loss (90%) by re-architecting the vector RAG matching pipeline: enriching retrieval with web-sourced firm data, restructuring LLM prompts, and adding explicit exclusion filtering. Helped convert 3 enterprise AEC clients into paying accounts.',
    },
    {
      year: 'Dec 2025 – May 2026',
      title: 'Software Engineer',
      subtitle: 'Easley‑Dunn Productions, Inc. · Remote, USA',
      logo: easleyDunnLogo,
      description:
        'Developed an end‑to‑end AI narration system for a VR surgery simulator, integrating real‑time LLM inference with stateful session recording for procedural review and trainee feedback.',
    },
    {
      year: 'Aug 2025 – Dec 2025',
      title: 'Software Development Engineer (Contract through Apex Systems)',
      subtitle: 'Amazon · Customer Shipment and Tracking · Bellevue, WA',
      logo: amazonLogo,
      description:
        'Owned large‑scale A/B experiments for lost‑package customer experiences, helping drive $2.1M+ in annualized revenue impact, and migrated experiment configuration to AWS AppConfig to cut rollout effort by 75%.',
    },
    {
      year: 'Sep 2023 – May 2025',
      title: 'M.S. in Computer Science',
      subtitle: 'New York University · Manhattan, NY',
      logo: nyuLogo,
      description: 'GPA: 3.78 / 4.0 – Focus on machine learning, distributed systems, and data engineering.',
    },
    {
      year: 'Aug 2021 – Aug 2023',
      title: 'Software Development Engineer',
      subtitle: 'AeroLeads · Bengaluru, India',
      logo: aeroleadsLogo,
      description:
        'Designed campaign orchestration services handling 1.5M+ daily emails and a production email verification system achieving 92% accuracy, improving throughput by 80% and eliminating timeouts under peak traffic.',
    },
    {
      year: 'May 2020 – Jul 2021',
      title: 'Software Engineer / Researcher',
      subtitle: 'CVIT Lab · IIIT Hyderabad · Telangana, India',
      logo: iiitLogo,
      description:
        'Improved state‑of-the‑art zero‑shot human action recognition with a semantic-aware VAE (+4.3% / +2.9% on NTU‑60/120) and developed dataset‑agnostic graph CNNs for 3D skeleton data.',
    },
    {
      year: 'Aug 2017 – Jun 2021',
      title: 'B.Tech in Computer Science and Engineering',
      subtitle: 'Guru Gobind Singh Indraprastha University · New Delhi, India',
      logo: ggsipuLogo,
      description: 'GPA: 9.05 / 10 – Undergraduate research in computer vision and applied machine learning.',
    },
  ];

  return (
    <section id="experience" className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="relative mb-16 text-center text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
          Experience &amp; Education
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-[1px] transform">
            <div className="h-full bg-slate-800"></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} {...item} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
