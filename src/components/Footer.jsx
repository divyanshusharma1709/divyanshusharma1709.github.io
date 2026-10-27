const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Honors", href: "#honors" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

const externalLinks = [
  { label: "GitHub", href: "https://github.com/divyanshusharma1709" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/divyanshusharma17/" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1_Tozd4c6lzNwI5PjJd51GlQ1Vob32aOD/view?usp=sharing",
  },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950/85 px-6 py-8 text-slate-300">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-base font-semibold tracking-tight text-slate-100">
            Divyanshu Sharma
          </p>
          <p className="max-w-lg text-sm text-slate-400">
            Software engineer focused on distributed systems, machine learning,
            and applied AI products.
          </p>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
            Last updated October 2026
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-150 hover:text-violet-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400">
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-150 hover:text-violet-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
