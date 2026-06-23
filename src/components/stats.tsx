'use client'

export default function Stats() {
  const stats = [
    { icon: '👥', value: '16', label: 'TEAMS' },
    { icon: '⚡', value: '60', label: 'MATCHES' },
    { icon: '🏏', value: '240', label: 'PLAYERS' },
    { icon: '📅', value: '08', label: 'DAYS' },
    { icon: '👨‍👩‍👧‍👦', value: '5,000-7,000', label: 'LIVE AUDIENCE' },
    { icon: '📱', value: '30M+', label: 'DIGITAL REACH' },
    { icon: '🏆', value: 'AED 1M', label: 'PRIZE POOL' },
  ]

  return (
    <section id="season" className="py-20 md:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">
          —— THE SCALE OF SEASON 5 ——
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-foreground text-balance">
            NUMBERS THAT DEFINE 10PL
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.slice(0, 4).map((stat, idx) => (
            <div
              key={idx}
              className="border border-primary/50 rounded-lg p-8 text-center hover:bg-card/30 transition-colors group"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.value}</div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Second Row of Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {stats.slice(4).map((stat, idx) => (
            <div
              key={idx}
              className="border border-primary/50 rounded-lg p-8 text-center hover:bg-card/30 transition-colors group"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.value}</div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}