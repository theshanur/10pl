import { CirclePlay, Handshake, Network } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-32 min-h-screen bg-[url('/hero-bg-2.jpg')] bg-cover bg-top">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-full w-full -translate-x-1/2 bg-navy/50" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 pt-[50px] lg:pt-[100px]">
        <h1 className="max-w-4xl font-bold leading-tight text-[70px] sm:text-[80px] lg:text-[100px] xl:text-[130px] md:leading-[1.1]">
          <span className="text-gradient-gold">
            10PL <br /> SEASON 5
          </span>
        </h1>
        <h3 className="mt-4 max-w-xl text-lg font-medium md:text-2xl font-heading ">
          From Gully Cricket to a Global Stadium Stage
        </h3>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
          A premium tennis-ball cricket league built for teams, sponsors, fans,
          players and global cricket communities.
        </p>
        <div className="mt-10 max-w-3xl flex flex-col items-start justify-start gap-4 sm:flex-row sm:flex-wrap">
          <a href="#contact">
            <Button className={"h-12 min-w-[280px] w-full uppercase"}>
              <Handshake className="mr-2" />
              Explore Sponsorship
            </Button>
          </a>
          <a href="#contact">
            <Button className={"h-12 min-w-[280px] w-full"} variant={"outline"}>
              <Network className="mr-2" /> TEAM OWNERSHIP
            </Button>
          </a>
          <a href="#contact">
            <Button className={"h-12 min-w-[280px] w-full"} variant={"outline"}>
              <Handshake className="mr-2" />
              REGISTER INTEREST
            </Button>
          </a>
          <a href="#contact">
            <Button className={"h-12 min-w-[280px] w-full"} variant={"outline"}>
              <CirclePlay className="mr-2" /> WATCH SEASON 5
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
