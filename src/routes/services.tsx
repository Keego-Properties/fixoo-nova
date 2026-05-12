import { createFileRoute } from "@tanstack/react-router";
import { Wind, Paintbrush, Wrench, Home, Sparkles, Sofa, Bed, Bug, Cctv, DoorOpen, Droplets, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — Fixoo Nova" },
      { name: "description", content: "AC servicing, renovation, deep cleaning, ELV systems, pest control, commercial cleaning and more across the UAE." },
    ],
  }),
});

const groups = [
  {
    title: "Maintenance",
    items: [
      { icon: Wind, t: "AC Duct Cleaning", d: "Regular sanitization for clean, healthy indoor air." },
      { icon: Wind, t: "AC Service", d: "Keep your home cool and fresh year-round." },
      { icon: Paintbrush, t: "Painting", d: "Interior & exterior painting that transforms spaces." },
      { icon: ShieldCheck, t: "Annual Maintenance Contracts", d: "Preventive, routine, corrective and civil maintenance." },
      { icon: Wrench, t: "Handyman", d: "From a light bulb to custom fixes — done right." },
    ],
  },
  {
    title: "Renovation",
    items: [
      { icon: Home, t: "Villa & Office Renovation", d: "Full transformations with premium materials and fixtures." },
      { icon: Home, t: "Bathroom Renovation", d: "360° renovation and upgrade with luxurious finishes." },
    ],
  },
  {
    title: "Cleaning",
    items: [
      { icon: Sparkles, t: "Deep Cleaning", d: "Apartments, villas and offices — eco-friendly agents." },
      { icon: Sofa, t: "Sofa Cleaning", d: "Pollution-free sofas, extended life." },
      { icon: Bed, t: "Mattress & Carpet", d: "Removes dust mites, allergens and stains." },
      { icon: Sparkles, t: "Curtain Cleaning", d: "Onsite curtain cleaning — sanitized in place." },
    ],
  },
  {
    title: "ELV Systems",
    items: [
      { icon: Cctv, t: "Intercom & CCTV", d: "Audio-video intercom and surveillance integration." },
      { icon: ShieldCheck, t: "Access Control", d: "Smart, sensor-based door access solutions." },
      { icon: DoorOpen, t: "Gate Barriers & Sliding Doors", d: "Durable, smart entry systems." },
    ],
  },
  {
    title: "Specialized",
    items: [
      { icon: Bug, t: "Pest Control & AMC", d: "Licensed, safe and effective pest management." },
      { icon: Droplets, t: "Water Tank Cleaning", d: "Drain, disinfect, scrub — minimal interruption." },
      { icon: Droplets, t: "Sump Pit & Grease Trap", d: "Commercial cleaning to municipal standards." },
    ],
  },
];

function Services() {
  return (
    <>
      <section className="px-6 lg:px-10 pt-24 pb-12 max-w-7xl mx-auto">
        <span className="text-xs tracking-[0.3em] text-primary font-medium">WHAT WE OFFER</span>
        <h1 className="font-display text-5xl sm:text-6xl mt-4 mb-6 max-w-4xl leading-tight">
          A complete suite of <span className="text-gradient-gold">premium services</span>.
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          From routine upkeep to complete transformations — Fixoo Nova handles every detail with master-level care.
        </p>
      </section>

      <section className="px-6 lg:px-10 pb-24 max-w-7xl mx-auto space-y-16">
        {groups.map((g) => (
          <div key={g.title}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-display text-3xl">{g.title}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {g.items.map((i) => (
                <div key={i.t} className="p-7 rounded-2xl bg-card border border-border hover:border-primary/50 transition shadow-elegant group">
                  <div className="w-11 h-11 rounded-lg bg-gradient-gold flex items-center justify-center mb-4 shadow-gold">
                    <i.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{i.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{i.d}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
