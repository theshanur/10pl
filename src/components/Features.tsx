const features = [
  {
    icon: "🏏",
    title: "For Sponsors",
    description:
      "Premium brand visibility across all matches, digital platforms, and fan engagement channels.",
  },
  {
    icon: "👥",
    title: "For Fans",
    description:
      "Experience world-class cricket with live streaming, exclusive content, and fan zone activations.",
  },
  {
    icon: "⭐",
    title: "For Players",
    description:
      "Showcase your talent on a professional stage with top-tier facilities and global exposure.",
  },
  {
    icon: "🏟️",
    title: "For Venues",
    description:
      "Partner with 10PL to host thrilling matches and bring world-class cricket to your city.",
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-gold/10 bg-navy-light/40 py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">
            <span className="text-gradient-gold">Why 10PL Matters</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            A league built for everyone — from players and fans to sponsors and
            venues.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-gold/30 bg-navy-card/60 p-6 transition-colors hover:border-gold/60 hover:bg-navy-muted/80"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-gold">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
