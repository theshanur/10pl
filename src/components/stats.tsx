"use client";

import {
  CalendarDays,
  Smartphone,
  Trophy,
  UserPlus,
  Users,
  UserStar,
  Zap,
} from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Users className="size-9" strokeWidth={1} />,
      value: "16",
      label: "TEAMS",
    },

    {
      icon: <Zap className="size-9" strokeWidth={1} />,
      value: "60",
      label: "MATCHES",
    },
    {
      icon: <UserStar className="size-9" strokeWidth={1} />,
      value: "240",
      label: "PLAYERS",
    },
    {
      icon: <CalendarDays className="size-9" strokeWidth={1} />,
      value: "08",
      label: "DAYS",
    },
    {
      icon: <UserPlus className="size-9" strokeWidth={1} />,
      value: "5,000-7,000",
      label: "LIVE AUDIENCE",
    },
    {
      icon: <Smartphone className="size-9" strokeWidth={1} />,
      value: "30M+",
      label: "DIGITAL REACH",
    },
    {
      icon: <Trophy className="size-9" strokeWidth={1} />,
      value: "AED 1M",
      label: "PRIZE POOL",
    },
  ];

  return (
    <section id="season" className="py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">
            —— THE SCALE OF SEASON 5 ——
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-foreground">
            NUMBERS THAT DEFINE 10PL
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.slice(0, 4).map((stat, idx) => (
            <div
              key={idx}
              className="border overflow-hidden border-primary/50 relative rounded-lg p-8 text-center bg-card transition-colors group"
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-2 left-1/2 h-10 w-full -translate-x-1/2 bg-[url('/golden_lighting.png')] bg-cover bg-top" />
              </div>
              <div className="relative flex items-center flex-col">
                <div className="text-primary mb-4">{stat.icon}</div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.value}
                </h1>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row of Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {stats.slice(4).map((stat, idx) => (
            <div
              key={idx}
              className="border overflow-hidden border-primary/50 relative rounded-lg p-8 text-center bg-card transition-colors group"
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-2 left-1/2 h-10  w-full -translate-x-1/2 bg-[url('/golden_lighting.png')] bg-cover bg-top" />
              </div>
              <div className="relative flex items-center flex-col gap-3">
                <div className="text-primary mb-4">{stat.icon}</div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-2 font-heading">
                  {stat.value}
                </h1>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
