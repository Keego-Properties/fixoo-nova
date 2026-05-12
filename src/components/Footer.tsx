import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/fixoo-nova-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Fixoo Nova" className="h-14 w-auto" width={56} height={56} loading="lazy" />
            <div>
              <div className="font-display text-xl text-gradient-gold font-semibold">FIXOO NOVA</div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground">BUILDING MAINTENANCE</div>
            </div>
          </div>
          <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
            Your complete property maintenance partner in the UAE. We deliver premium technical services with the precision and care your property deserves.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary mb-4 tracking-wider">EXPLORE</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary mb-4 tracking-wider">CONTACT</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> +971 50 000 0000</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> info@fixoonova.ae</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Dubai, United Arab Emirates</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Fixoo Nova Building Maintenance. All rights reserved.
      </div>
    </footer>
  );
}