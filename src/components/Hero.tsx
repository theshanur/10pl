export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-32">
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gold/30 blur-[120px]" />
        <div className="absolute top-40 right-0 h-[300px] w-[400px] rounded-full bg-navy-light blur-[100px]" />
      </div> */}

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm text-gold-light">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Season 5 — Now Live
        </div> */}

        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-[1.1]">
          <span className="text-gradient-gold">10PL SEASON 5</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-gold-light md:text-xl">
          The Ultimate Cricket League Experience
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
          Join the most exciting T10 cricket league. World-class players,
          thrilling matches, and unforgettable moments await.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <a
            href="#contact"
            className="inline-flex h-12 min-w-[200px] items-center justify-center gap-2 rounded bg-gradient-gold px-8 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90"
          >
            Register Your Team
          </a>
          <a
            href="#features"
            className="inline-flex h-12 min-w-[200px] items-center justify-center gap-2 rounded border border-gold/50 bg-transparent px-8 text-sm font-bold uppercase tracking-wide text-gold transition-colors hover:bg-gold/10"
          >
            View Schedule
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {[
            { value: "16", label: "Teams" },
            { value: "50+", label: "Matches" },
            { value: "100K+", label: "Fans" },
            { value: "10", label: "Venues" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-gold/30 bg-navy-card/80 px-4 py-6 glow-gold"
            >
              <div className="text-2xl font-bold text-white md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-gold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
