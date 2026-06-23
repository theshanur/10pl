import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Season 5', href: '#season' },
  { label: 'Sponsorship', href: '#sponsorship' },
  { label: 'Team Ownership', href: '#teams' },
  { label: 'Media', href: '#media' },
  { label: 'Contact', href: '#contact' },
];



export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gold/20 bg-navy/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-28 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/10pl_logo.png" alt="10pl" width={70} height={100} />
        </Link>

       {/* Desktop Navigation */}
       <div className="flex items-center gap-8">
       <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-foreground hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1"
            >
              {item.label}
            </Link>
          ))}
        </div>
       {/* <Link href="/" className="flex items-center gap-2">
          <Image src="/petromann_logo.png" alt="10pl" width={200} height={100} />
        </Link> */}
       </div>
       
      </nav>
    </header>
  );
}
