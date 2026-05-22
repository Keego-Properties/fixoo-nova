import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Clock,
  Sparkles,
  Wrench,
  Building2,
  Phone,
  Star,
  CheckCircle2,
  Quote,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import banner from "@/assets/hero-banner.jpg";
import ac from "@/assets/service-ac.jpg";
import reno from "@/assets/service-renovation.jpg";
import clean from "@/assets/service-cleaning.jpg";
import electrical from "@/assets/service-electrical.jpg";
import plumbing from "@/assets/service-plumbing.jpg";
import team from "@/assets/team.jpg";
import living from "@/assets/project-living.jpg";
import kitchen from "@/assets/project-kitchen.jpg";

const features = [
  {
    icon: Clock,
    title: "On-Time Service",
    desc: "We respect your schedule. Every job, every visit.",
  },
  {
    icon: Shield,
    title: "Trusted Experts",
    desc: "Licensed, insured and meticulously trained team.",
  },
  { icon: Sparkles, title: "Premium Finish", desc: "Master-craft quality across every detail." },
  { icon: Wrench, title: "End-to-End Care", desc: "From a leaking tap to full villa renovation." },
];

const services = [
  {
    img: ac,
    title: "AC & HVAC",
    desc: "Duct cleaning, servicing and full HVAC maintenance for healthy, cool spaces.",
  },
  {
    img: reno,
    title: "Renovation",
    desc: "Villa, apartment, office and bathroom transformations with luxurious finishes.",
  },
  {
    img: clean,
    title: "Deep Cleaning",
    desc: "Sofa, mattress, carpet, curtain and full deep-clean for homes and offices.",
  },
  {
    img: electrical,
    title: "Electrical & ELV",
    desc: "Wiring, panels, intercom, CCTV and access control by certified engineers.",
  },
  {
    img: plumbing,
    title: "Plumbing",
    desc: "Leak repair, fixture upgrades, water tank cleaning and full bathroom retrofits.",
  },
  {
    img: kitchen,
    title: "Kitchen Upgrades",
    desc: "Bespoke joinery, marble surfaces and modern fittings, installed end-to-end.",
  },
];

const process = [
  { n: "01", t: "Book", d: "Tell us what you need by phone, WhatsApp or our online form." },
  { n: "02", t: "Survey", d: "Our specialist visits, inspects and prepares a transparent quote." },
  {
    n: "03",
    t: "Execute",
    d: "Certified technicians arrive on time and deliver clean, careful work.",
  },
  { n: "04", t: "Aftercare", d: "Workmanship warranty and proactive follow-up on every job." },
];

const testimonials = [
  {
    name: "Aisha R.",
    role: "Villa Owner, Jumeirah",
    quote:
      "From the first call to the final polish, the team was meticulous. The villa feels brand new.",
  },
  {
    name: "Daniel K.",
    role: "Office Manager, DIFC",
    quote:
      "Reliable, on time and incredibly professional. Our office maintenance has never been smoother.",
  },
  {
    name: "Priya S.",
    role: "Apartment Resident, Marina",
    quote:
      "The deep cleaning service was outstanding. Worth every dirham — I've already booked again.",
  },
  {
    name: "Omar H.",
    role: "Property Manager, Abu Dhabi",
    quote:
      "Their preventive maintenance plan reduced our emergency callouts in the first month itself.",
  },
  {
    name: "Nadia M.",
    role: "Homeowner, Arabian Ranches",
    quote:
      "The team handled AC servicing and deep cleaning in one visit, with spotless execution.",
  },
  {
    name: "Rahul P.",
    role: "Tenant, Downtown Dubai",
    quote:
      "Booking was effortless and the technicians were punctual, polite and very detail oriented.",
  },
  {
    name: "Leila S.",
    role: "Office Admin, Business Bay",
    quote:
      "From electrical fixes to routine checks, everything was documented and delivered professionally.",
  },
  {
    name: "Yousef A.",
    role: "Villa Owner, Palm Jumeirah",
    quote:
      "They treated our home with real care. The finishing quality felt premium at every step.",
  },
];

export default function IndexPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[94vh] flex items-center overflow-hidden">
        <img
          src="https://res.cloudinary.com/dg7r4k0up/image/upload/q_auto/f_auto/v1779367141/fn_kgi5zq.png"
          alt="Fixoo Nova professional maintenance team"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/35 to-background/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,oklch(0.72_0.11_82/2%),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/25 bg-primary/8 text-primary eyebrow mb-8">
              <Building2 className="h-3.5 w-3.5" /> Trusted Service Providers
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.25rem] font-bold leading-[1.08] mb-7">
              Your Complete <br />
              <span className="text-gradient-gold">Property Maintenance</span> <br />
              Partner.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-11 leading-relaxed">
              On-time. Done right. Fixoo Nova brings premium technical services and meticulous
              craftsmanship to homes, villas and businesses across the UAE.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary">
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-outline">
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
            <div
              key={f.title}
              className="group p-8 premium-card premium-card-hover"
            >
              <div className="icon-gold mb-5">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <span className="eyebrow">What We Do</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-3">
              Services crafted with <span className="text-gradient-gold">precision</span>.
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              to="/services"
              key={s.title}
              className="group rounded-2xl overflow-hidden premium-card premium-card-hover"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BANNER STRIP */}
      <section className="relative px-6 lg:px-10">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden border border-primary/15 shadow-elegant relative">
          <img
            src="https://res.cloudinary.com/dg7r4k0up/image/upload/q_auto/f_auto/v1779452825/dcln_rduvyw.png"
            alt="Luxury Dubai villa at golden hour"
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full h-[420px] sm:h-[520px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 sm:px-14 max-w-2xl">
              <span className="eyebrow">
                UAE WIDE COVERAGE
              </span>
              <h2 className="font-display text-4xl sm:text-5xl mt-3 mb-4 leading-tight">
                From a single bulb to a full{" "}
                <span className="text-gradient-gold">villa transformation</span>.
              </h2>
              <p className="text-muted-foreground mb-6">
                One trusted partner for your home, office and investment property — Dubai, Abu
                Dhabi, Sharjah and beyond.
              </p>
              <Link
                to="/services"
                className="btn-primary"
              >
                Browse Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="eyebrow">HOW WE WORK</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-3">
            A <span className="text-gradient-gold">simple</span>, transparent process.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p) => (
            <div
              key={p.n}
              className="relative p-8 premium-card premium-card-hover"
            >
              <div className="font-display text-5xl text-gradient-gold mb-4">{p.n}</div>
              <h3 className="font-semibold text-lg mb-2">{p.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section className="py-20 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <span className="eyebrow">RECENT WORK</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-3">
              Projects we are <span className="text-gradient-gold">proud of</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A glimpse into the spaces we've restored, refined and reimagined for our clients.
          </p>
        </div>
        <div className="grid md:grid-cols-12 gap-4">
          <div className="md:col-span-7 rounded-2xl overflow-hidden border border-border shadow-elegant">
            <img
              src={living}
              alt="Renovated luxury living room"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
          <div className="md:col-span-5 grid gap-4">
            <div className="rounded-2xl overflow-hidden border border-border shadow-elegant">
              <img
                src={kitchen}
                alt="Modern kitchen renovation"
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-full object-cover aspect-[16/10]"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-elegant">
              <img
                src={plumbing}
                alt="Marble bathroom renovation"
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-full object-cover aspect-[16/10]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY US split */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden border border-border shadow-elegant">
          <img
            src={team}
            alt="Fixoo Nova service team"
            loading="lazy"
            width={1600}
            height={1067}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <span className="eyebrow">WHY FIXOO NOVA</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 mb-6">
            A team that takes <span className="text-gradient-gold">ownership</span>.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Every Fixoo Nova technician is vetted, trained and uniformed. We use premium tools,
            document our work and stand behind every job with a written warranty.
          </p>
          <ul className="space-y-3">
            {[
              "Licensed and insured across all UAE emirates",
              "Transparent quotes — no hidden surprises",
              "Eco-friendly chemicals and cleaning agents",
              "24/7 emergency response available",
              "Workmanship warranty on every project",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" /> <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="eyebrow">CLIENT VOICES</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-3">
            Trusted by <span className="text-gradient-gold">homeowners</span> & businesses.
          </h2>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem
                key={t.name}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full p-8 premium-card premium-card-hover relative">
                  <Quote className="h-8 w-8 text-primary/40 mb-4" />
                  <p className="text-sm leading-relaxed mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 sm:-left-6 border-primary/30 bg-card/90 hover:bg-card" />
          <CarouselNext className="-right-4 sm:-right-6 border-primary/30 bg-card/90 hover:bg-card" />
        </Carousel>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto rounded-3xl border border-primary/20 bg-card p-12 lg:p-16 text-center shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-transparent" />
          <div className="relative">
            <h2 className="font-display text-4xl sm:text-5xl mb-5">
              Every job. <span className="text-gradient-gold">Same enthusiasm.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              From a single repair to a complete renovation — book a hassle-free appointment with
              our team today.
            </p>
            <a href="tel:+971500000000" className="btn-primary">
              <Phone className="h-4 w-4" /> Call +971 50 000 0000
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
