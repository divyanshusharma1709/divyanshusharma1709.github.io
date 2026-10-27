const Contact = () => {
  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center px-6 pb-16 pt-10">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-10 shadow-xl shadow-slate-950/60 md:p-14">
        <h1 className="text-center text-4xl md:text-5xl">
          <span className="text-slate-100">
            Get in touch
          </span>
        </h1>
        <p className="text-center text-base font-medium text-slate-300">
          Open to software and ML engineering roles, research collaborations, and interesting side projects.
        </p>
        <a
          href="mailto:divyanshusharma@nyu.edu"
          className="text-nowrap rounded-full border border-violet-500/60 bg-violet-700 px-6 py-3 text-sm font-semibold text-slate-50 shadow-sm shadow-slate-900/60 transition-all duration-150 hover:-translate-y-1 hover:bg-violet-600"
        >
          Contact Me
        </a>
      </div>
    </div>
  )
}

export default Contact
