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
        <div className="max-w-6xl mx-auto w-full px-6 grid grid-cols-2">
          <div className="space-y-5">
            {matters.map((item, inx) => {
              return (
                <div
                  key={inx}
                  className="border border-gold space-y-3 p-6 rounded-2xl"
                >
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
