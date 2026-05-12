import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Fixoo Nova" },
      { name: "description", content: "Get in touch with Fixoo Nova for premium building maintenance services in Dubai and across the UAE." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="px-6 lg:px-10 pt-24 pb-12 max-w-7xl mx-auto">
        <span className="text-xs tracking-[0.3em] text-primary font-medium">GET IN TOUCH</span>
        <h1 className="font-display text-5xl sm:text-6xl mt-4 mb-6 max-w-4xl leading-tight">
          Let's make your property <span className="text-gradient-gold">shine</span>.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Hassle-free booking. Premium service. Tell us what you need and our team will be in touch.
        </p>
      </section>

      <section className="px-6 lg:px-10 pb-24 max-w-7xl mx-auto grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: Phone, t: "Phone", v: "+971 50 000 0000", h: "tel:+971500000000" },
            { icon: Mail, t: "Email", v: "info@fixoonova.ae", h: "mailto:info@fixoonova.ae" },
            { icon: MapPin, t: "Address", v: "Dubai, United Arab Emirates" },
            { icon: Clock, t: "Hours", v: "24 / 7 — Always on call" },
          ].map((c) => (
            <a key={c.t} href={c.h ?? "#"} className="block p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-muted-foreground uppercase">{c.t}</div>
                  <div className="font-medium mt-1">{c.v}</div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 p-8 rounded-2xl bg-card border border-border shadow-elegant space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
          </div>
          <Field label="Email" name="email" type="email" required />
          <Field label="Service Required" name="service" />
          <div>
            <label className="text-xs tracking-widest text-muted-foreground uppercase">Message</label>
            <textarea name="message" rows={5} required className="mt-2 w-full bg-background border border-input rounded-lg px-4 py-3 text-sm focus:border-primary focus:outline-none transition" />
          </div>
          <button type="submit" className="w-full px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:opacity-90 transition">
            {sent ? "Thank you — we'll be in touch" : "Send Message"}
          </button>
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs tracking-widest text-muted-foreground uppercase">{label}</label>
      <input name={name} type={type} required={required} className="mt-2 w-full bg-background border border-input rounded-lg px-4 py-3 text-sm focus:border-primary focus:outline-none transition" />
    </div>
  );
}
