import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gold/20 bg-navy/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/10pl_logo.png" alt="10pl" width={60} height={75} />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-300 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden text-sm text-zinc-300 transition-colors hover:text-gold sm:inline-block"
          >
            Sign in
          </a>
          <Button variant="default" size="lg" render={<a href="#contact" />}>
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
}
