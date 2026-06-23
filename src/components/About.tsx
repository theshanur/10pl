export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">
              <span className="text-gradient-gold">About 10PL</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">
              10PL is the premier T10 cricket league, bringing together the
              finest talent, passionate fans, and world-class entertainment.
              Season 5 promises to be the biggest yet — with more teams, more
              matches, and more excitement.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">
              From nail-biting finishes to record-breaking performances, 10PL
              delivers cricket at its most thrilling. Join us for an
              unforgettable season.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "16 elite teams competing",
                "50+ action-packed matches",
                "Live streaming worldwide",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-zinc-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-xs text-gold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-gold/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-lg border border-gold/30 bg-navy-card glow-gold">
              <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-navy-muted to-navy">
                <div className="text-center">
                  <div className="text-5xl">🏟️</div>
                  <p className="mt-3 text-sm font-medium uppercase tracking-wider text-gold">
                    Stadium Preview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
