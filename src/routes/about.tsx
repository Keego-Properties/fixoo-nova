import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Fixoo Nova Building Maintenance" },
      { name: "description", content: "Fixoo Nova is your trusted property maintenance partner in the UAE. Discover our mission, vision and craft." },
    ],
  }),
});

function About() {
  return (
    <>
      <section className="px-6 lg:px-10 pt-24 pb-16 max-w-7xl mx-auto">
        <span className="text-xs tracking-[0.3em] text-primary font-medium">WHO WE ARE</span>
        <h1 className="font-display text-5xl sm:text-6xl mt-4 mb-6 max-w-4xl leading-tight">
          Unifying the thread between people and their <span className="text-gradient-gold">comfort</span>.
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Fixoo Nova was built to make life easy across the MENA region. We deliver exceptional maintenance and technical services with the precision, transparency and care your property deserves.
        </p>
      </section>

      <section className="px-6 lg:px-10 py-16 max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {[
          { icon: Target, title: "Our Mission", desc: "To make property maintenance effortless — practical, convenient solutions delivered on time, every time." },
          { icon: Eye, title: "Our Vision", desc: "To be the most trusted name in premium building maintenance across the UAE and beyond." },
          { icon: Award, title: "Our Promise", desc: "Master-level execution. Transparent reporting. The same enthusiasm on every single job." },
        ].map((c) => (
          <div key={c.title} className="p-8 rounded-2xl bg-card border border-border shadow-elegant">
            <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shadow-gold">
              <c.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl mb-3">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </section>

      <section className="px-6 lg:px-10 py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs tracking-[0.3em] text-primary font-medium">OUR PRACTICE</span>
            <h2 className="font-display text-4xl mt-3 mb-6">All that we do, <span className="text-gradient-gold">we do well</span>.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We adopt a systematic strategy to plan every job — adding measurable value to your property and your day. From the first call to the final inspection, our team operates with discipline and care.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a Fixoo Nova client, you receive accurate reports on time. Our proactive support team keeps you informed about the condition of your property, providing every service a landlord or tenant might ever need.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "10+", l: "Years of Craft" },
              { n: "5,000+", l: "Jobs Completed" },
              { n: "98%", l: "Client Retention" },
              { n: "24/7", l: "Support" },
            ].map((s) => (
              <div key={s.l} className="p-8 rounded-2xl bg-card border border-border text-center shadow-elegant">
                <div className="font-display text-4xl text-gradient-gold mb-1">{s.n}</div>
                <div className="text-xs tracking-widest text-muted-foreground uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
