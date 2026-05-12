import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Clock, Sparkles, Wrench, Building2, Phone } from "lucide-react";
import hero from "@/assets/hero-building.jpg";
import ac from "@/assets/service-ac.jpg";
import reno from "@/assets/service-renovation.jpg";
import clean from "@/assets/service-cleaning.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fixoo Nova — Premium Building Maintenance in Dubai" },
      { name: "description", content: "Premium property maintenance, AC servicing, renovation, deep cleaning and ELV solutions across the UAE." },
    ],
  }),
});

const features = [
  { icon: Clock, title: "On-Time Service", desc: "We respect your schedule. Every job, every visit." },
  { icon: Shield, title: "Trusted Experts", desc: "Licensed, insured and meticulously trained team." },
  { icon: Sparkles, title: "Premium Finish", desc: "Master-craft quality across every detail." },
  { icon: Wrench, title: "End-to-End Care", desc: "From a leaking tap to full villa renovation." },
];

const services = [
  { img: ac, title: "AC & HVAC", desc: "Duct cleaning, servicing and full HVAC maintenance for healthy, cool spaces." },
  { img: reno, title: "Renovation", desc: "Villa, apartment, office and bathroom transformations with luxurious finishes." },
  { img: clean, title: "Deep Cleaning", desc: "Sofa, mattress, carpet, curtain and full deep-clean for homes and offices." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img src={hero} alt="Premium Dubai skyline" className="absolute inset-0 h-full w-full object-cover opacity-40" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs tracking-[0.2em] font-medium mb-6">
              <Building2 className="h-3.5 w-3.5" /> TRUSTED SERVICE PROVIDERS
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6">
              Your Complete <br />
              <span className="text-gradient-gold">Property Maintenance</span> <br />
              Partner.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              On-time. Done right. Fixoo Nova brings premium technical services and meticulous craftsmanship to homes, villas and businesses across the UAE.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:opacity-90 transition">
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-medium hover:border-primary hover:text-primary transition">
                Book a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition shadow-elegant">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shadow-gold">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs tracking-[0.3em] text-primary font-medium">WHAT WE DO</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-3">Services crafted with <span className="text-gradient-gold">precision</span>.</h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link to="/services" key={s.title} className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition shadow-elegant">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto rounded-3xl border border-primary/30 bg-card p-12 lg:p-16 text-center shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
          <div className="relative">
            <h2 className="font-display text-4xl sm:text-5xl mb-5">Every job. <span className="text-gradient-gold">Same enthusiasm.</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">From a single repair to a complete renovation — book a hassle-free appointment with our team today.</p>
            <a href="tel:+971500000000" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-gold">
              <Phone className="h-4 w-4" /> Call +971 50 000 0000
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
