import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  League: ["Season 5", "Teams", "Schedule", "Standings"],
  About: ["About 10PL", "History", "Venues", "Contact"],
  Legal: ["Privacy", "Terms", "Media"],
};

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-navy-light/30 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/10pl_logo.png" alt="10pl" width={60} height={75} />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              The premier T10 cricket league. Season 5 — bigger, bolder,
              better.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-bold uppercase tracking-wide text-gold">
                {category}
              </h4>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 transition-colors hover:text-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} 10PL. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "Instagram", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-zinc-500 transition-colors hover:text-gold"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
