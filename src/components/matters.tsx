import Image from "next/image";

export default function Matters() {
  const matters = [
    {
      title: "For Sponsors",
      desc: "Reach a highly engaged local and regional audience through on-ground visibility, digital promotions, and league-wide branding.",
    },

    {
      title: "For Team Owners",
      desc: "Own a franchise and establish your brand as a recognized sports entity.Gain premium exposure through team branding, media coverage, social content, and tournament promotions.",
    },
    {
      title: "For Players",
      desc: "Get a professional platform to showcase talent and compete at a higher level. Increase visibility among businesses, sponsors, and cricket enthusiasts while building a personal sports profile.",
    },
    {
      title: "For Fans",
      desc: "Experience competitive cricket, exciting match-day action, and community engagement. Support your favorite teams and become part of a growing local sports movement.",
    },
  ];

  return (
    <section className="py-20 ">
      <div>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-foreground">
            WHY 10PL MATTERS
          </h2>
        </div>
        <div className="max-w-6xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-5">
            {matters.map((item, inx) => {
              return (
                <div
                  key={inx}
                  className="relative border border-gold hover:border-gold-dark space-y-3 p-6 rounded-2xl hover:bg-navy-light duration-300 ease-in-out overflow-hidden group"
                >
                  <div className="pointer-events-none absolute inset-0">
                    <div className="group-hover:scale-125 duration-300 ease-in-out absolute top-1/2 left-0 h-full w-4 -translate-y-1/2 bg-[url('/golden_lighting_2.png')] bg-contain bg-no-repeat bg-center" />
                  </div>
                  <h2 className="">{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div>
            <Image
              src={"/batsman.png"}
              width={500}
              height={400}
              alt="Batsman"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
