export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-lg border border-gold/30 bg-gradient-to-br from-navy-card via-navy-light to-navy px-8 py-16 text-center md:px-16 glow-gold">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgb(212_175_55_/_8%),_transparent_60%)]" />

          <div className="relative">
            <h2 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">
              <span className="text-gradient-gold">Ready to Join?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
              Register your team for Season 5 or get tickets to the most
              exciting cricket league.
            </p>

            <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 rounded border border-gold/30 bg-navy/60 px-5 text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-gold"
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded bg-gradient-gold px-8 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90"
              >
                Get Started
              </button>
            </form>

            <p className="mt-4 text-sm text-zinc-500">
              Team registration open · Limited spots available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
