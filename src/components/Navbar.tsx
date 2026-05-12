import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/fixoo-nova-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Fixoo Nova" className="h-12 w-auto" width={48} height={48} />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-lg text-gradient-gold font-semibold tracking-wide">FIXOO NOVA</span>
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground">BUILDING MAINTENANCE</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a href="tel:+971500000000" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-semibold shadow-gold hover:opacity-90 transition">
            <Phone className="h-4 w-4" /> Call Us
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-2" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm font-medium" activeProps={{ className: "text-primary" }}>
                {l.label}
              </Link>
            ))}
            <a href="tel:+971500000000" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-gold text-primary-foreground text-sm font-semibold">
              <Phone className="h-4 w-4" /> Call Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}