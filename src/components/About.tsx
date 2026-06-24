export default function About() {
  return (
    <section id="about" className="py-20 relative md:py-32 bg-[url('/stadium.png')] bg-no-repeat bg-[40%] bg-right">
       <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-full w-full -translate-x-1/2 bg-linear-to-r from-navy via-navy to-navy/40" />
      </div>
      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-wide md:text-6xl">
              <span className="text-gradient-gold">About 10PL</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">
              10PL is a premium tennis-ball cricket league created to take grassroots 
              cricket from gully culture to stadium-level sports entertainment. 
              Season 5 is positioned as a UAE-born cricket property with India and global audience reach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
