import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  Quote,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Ways to work", href: "#engagements" },
  { label: "Principles", href: "#principles" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  { value: "18+", label: "Years in software" },
  { value: "35", label: "Engineers led at peak" },
  { value: "7", label: "Promotions in 2 years" },
  { value: "30%", label: "Efficiency gain on $50M programme" },
];

const operatingModel = [
  {
    number: "01",
    title: "Player-coach, not passenger",
    description:
      "I join architecture reviews, flag design risk early, and step in where delivery pressure threatens engineering quality. I don't manage from a distance and review at the end.",
    tag: "Technically close",
  },
  {
    number: "02",
    title: "Forward-deployed by default",
    description:
      "I work where the problem is — inside the customer's environment, on the shop floor, alongside the product team. Co-building from problem definition through to production, not handing over at the end.",
    tag: "Customer-embedded",
  },
  {
    number: "03",
    title: "Structure before pressure",
    description:
      "Delivery guardrails, escalation paths, incident response — I build these when things are calm. Teams shouldn't have to improvise when things aren't.",
    tag: "Operational excellence",
  },
  {
    number: "04",
    title: "Regulated environments, real stakes",
    description:
      "ATO authorisation, export classification controls, audit-ready documentation. High-consequence environments don't change the work — they sharpen it.",
    tag: "Compliance-ready",
  },
  {
    number: "05",
    title: "Evolving with technology, leading through change",
    description:
      "Navigated multiple waves of technology evolution — enterprise modernization, cloud adoption to today's AI transformation — turning emerging capabilities into practical engineering outcomes.",
    tag: "Technology leadership",
  },
  {
    number: "06",
    title: "Build people, metrics will follow",
    description:
      "Created an environment where engineers had clear growth paths, challenging work, and regular coaching. Lower attrition was a consequence of investing in people — not the objective.",
    tag: "Team development",
  },
];

const experience = [
  {
    org: "Collins Aerospace",
    period: "Jul 2023 – Oct 2025",
    context: ["Aerospace manufacturing", "MES", "Digital transformation", "Global programme"],
    title: "First-ever global MES implementation — built from the ground up",
    description:
      "Led delivery of a $50M paper-to-digital programme with no prior MES foundation at site. Partnered with iBaseT (MES ISV) on Solumina platform integration, designed end-to-end execution, coordinated across engineering, manufacturing operations and IT infrastructure under ATO and export compliance requirements.",
    result: "30% efficiency gain · global delivery model · US, Europe, Asia",
  },
  {
    org: "Collins Aerospace",
    period: "Jan 2021 – Jul 2023",
    context: ["Cloud platform", "AWS", "Azure", "Post-merger"],
    title: "Platform scaling for an organisation that doubled in size",
    description:
      "Drove platform consolidation, AWS and Azure migration supporting post-merger growth from 40,000 to 80,000 employees. Coordinated across architecture, infrastructure and business teams to deliver a unified platform. Ran parallel team upskilling programme to build internal capability and reduce external hiring dependency.",
    result: "Unified infrastructure live day one · new workstreams opened internally",
  },
  {
    org: "Wipro · Walmart",
    period: "Jan 2015 – Jun 2017",
    context: ["E-commerce", "React", "Responsive", "Mobile-first"],
    title: "Walmart's first mobile-compatible e-commerce platform",
    description:
      "Stepped into a technical leadership gap on a live project — took ownership of direction for a 7-member team, drove React and responsive design adoption, and delivered a production-ready platform across two market segments on a new technology stack.",
    result: "First mobile platform for client · team self-taught React on a live project",
  },
];

const engagementModels = [
  {
    number: "01",
    title: "Full-time leadership",
    description:
      "Own an engineering org end-to-end: hiring, delivery, culture, roadmap. Best fit for teams building long-term technical and people capability.",
    tag: "Long-term capability",
  },
  {
    number: "02",
    title: "Interim / fractional leadership",
    description:
      "Step into a gap — a departed manager, a stalled programme, a team scaling faster than its structure. Defined engagement, embedded like a full-time leader.",
    tag: "Embedded gap-fill",
  },
  {
    number: "03",
    title: "Delivery & transformation advisory",
    description:
      "Shorter, focused engagements: cloud/DevOps modernisation, platform consolidation, or diagnosing why a programme is stuck. Advisory-only or hands-on, depending on scope.",
    tag: "Focused engagements",
  },
];

const principles = [
  {
    key: "On quality",
    lead: "Quality doesn't slip under delivery pressure.",
    body: "It slips when there's no structure to protect it. Build the structure before the pressure arrives.",
  },
  {
    key: "On culture",
    lead: "Psychological safety is an engineering output.",
    body: "Engineers grow when they feel safe to take risks, not when they're told to. It shows up in how early risks get raised and whether people speak up when something is wrong.",
  },
  {
    key: "On translation",
    lead: "That translation is a leadership job.",
    body: "The best technical decisions happen when engineers and business stakeholders speak the same language. It works in both directions.",
  },
  {
    key: "On legacy",
    lead: "A team's capability is the most durable thing you can build.",
    body: "Programmes end. Platforms get replaced. The engineers you've developed carry what they learned into every team after you.",
  },
  {
    key: "On AI",
    lead: "Adopt AI with judgment, accountability, and engineering discipline.",
    body: "AI is changing how software is built, but not what great engineering requires. The challenge isn't adopting AI — it's adopting it responsibly.",
  },
];

const skillGroups = [
  { label: "Engineering leadership", values: ["Team development", "Technical leadership", "Architecture reviews"] },
  { label: "Delivery", values: ["Global programmes", "Operational excellence", "DevOps"] },
  { label: "Cloud", values: ["AWS", "Azure", "Platform consolidation"] },
  { label: "Product & agile", values: ["SAFe", "Customer-embedded delivery", "Digital transformation"] },
  { label: "AI", values: ["GitHub Copilot", "Claude", "Responsible AI adoption"] },
  { label: "Technical foundations", values: ["Java", "JavaScript", ".NET / Xamarin", "ReactJS", "Angular"] },
];

const learning = [
  {
    meta: "Engineering leadership · AI · Continuous learning",
    title: "Building AI systems to lead AI-enabled teams",
    description:
      "I'm building a local AI knowledge assistant from first principles — not to create another chatbot, but to understand the engineering decisions behind retrieval, AI-assisted development and production-ready AI systems. Every milestone becomes both a technical exercise and an engineering leadership lesson that helps shape my approach to leading AI adoption.",
    status: "In progress",
  },
  {
    meta: "Dutch language · Cultural integration",
    title: "Learning the language is part of joining the culture",
    description:
      "Relocating to the Netherlands isn’t just a career move for me. I’m actively learning Dutch and investing time in understanding the culture, because building trust and leading teams starts with understanding the people you work with.",
    status: "A2 → B1 in progress",
  },
];

const qualities = ["Supportive", "Trustworthy", "Inspiring", "Collaborative", "Empathetic", "Resilient", "Strategic", "Approachable"];

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </header>
  );
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -65%", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Shruthi Sridhara, home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">SS</span>
          <span className="brand-name">Shruthi Sridhara</span>
        </a>
        <div className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={active === item.href.slice(1) ? "active" : ""}>
              {item.label}
            </a>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X /> : <Menu />}
        </Button>
        {open ? (
          <div className="mobile-nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}<ChevronRight aria-hidden="true" />
              </a>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="page-shell hero-layout">
        <div className="hero-copy">
          <p className="availability"><span aria-hidden="true" /> Engineering leadership · Netherlands · Open to work</p>
          <h1>I build teams that ship <strong>complex things reliably.</strong></h1>
          <p className="hero-intro">
            18 years in software — moving between hands-on architecture and team leadership depending on what the work needs. I stay technically close, build the structures that protect quality under pressure, and grow the engineers around me.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg"><a href="#experience">View selected work <ArrowUpRight /></a></Button>
            <Button asChild size="lg" variant="outline"><a href="mailto:shruthiks85@gmail.com">Start a conversation <Mail /></a></Button>
          </div>
        </div>
        <aside className="identity-panel" aria-label="Professional profile">
          <div className="portrait-mark" aria-hidden="true"><span>SS</span></div>
          <div>
            <p className="identity-name">Shruthi Sridhara</p>
            <p className="identity-role">Senior Engineering Leader</p>
          </div>
          <div className="identity-location"><MapPin aria-hidden="true" /> Netherlands</div>
        </aside>
      </div>
      <div className="page-shell metrics-grid" aria-label="Leadership impact">
        {metrics.map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
      </div>
    </section>
  );
}

function OperatingModel() {
  return (
    <section id="about" className="section-band">
      <div className="page-shell">
        <SectionHeading eyebrow="Operating model" title="How I work, not just what I've done" intro="Leadership that stays close to the work, creates clarity before urgency, and leaves teams stronger." />
        <div className="operating-grid">
          {operatingModel.map((item) => (
            <article className="operating-card reveal" key={item.number}>
              <div className="card-index">{item.number}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="text-tag">{item.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  return (
    <section id="experience" className="section-band section-tinted">
      <div className="page-shell">
        <SectionHeading eyebrow="Selected work" title="Programmes that changed something" intro="Complex, high-stakes transformation delivered across teams, borders, and technical domains." />
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item reveal" key={item.title}>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-meta"><p>{item.period}</p><strong>{item.org}</strong></div>
              <div className="project-card">
                <div className="context-tags">{item.context.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="result-line"><Check aria-hidden="true" /><span>{item.result}</span></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaysToWork() {
  return (
    <section id="engagements" className="section-band engagements-band">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Engagement models"
          title="Ways to work with me"
          intro="Three ways to bring this experience into your organisation — depending on what your teams need and for how long."
        />
        <div className="engagement-grid">
          {engagementModels.map((item) => (
            <article className="engagement-card reveal" key={item.number}>
              <div className="card-index">{item.number}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="text-tag">{item.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section id="principles" className="section-band">
      <div className="page-shell principles-layout">
        <SectionHeading eyebrow="What I believe" title="Lessons earned over 18 years" intro="Across projects, products, programmes, teams, challenges, and deliveries." />
        <div className="principles-list">
          {principles.map((item, index) => (
            <article className="principle reveal" key={item.key}>
              <div className="principle-number">0{index + 1}</div>
              <div><p className="principle-key">{item.key}</p><h3>{item.lead}</h3><p>{item.body}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-band skills-band" aria-labelledby="skills-title">
      <div className="page-shell">
        <SectionHeading eyebrow="Capabilities" title="Leadership range, grounded in engineering" />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group reveal" key={group.label}>
              <h3 id={group.label === "Engineering leadership" ? "skills-title" : undefined}>{group.label}</h3>
              <ul>{group.values.map((value) => <li key={value}>{value}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Learning() {
  return (
    <section id="learning" className="section-band section-tinted">
      <div className="page-shell">
        <SectionHeading eyebrow="Current focus" title="What I am building, learning, and exploring right now" />
        <div className="learning-grid">
          {learning.map((item, index) => (
            <article className="learning-card reveal" key={item.title}>
              <div className="learning-top"><span>0{index + 1}</span><span className="status-label">{item.status}</span></div>
              <p className="learning-meta">{item.meta}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PeerWords() {
  return (
    <section className="section-band peer-band" aria-labelledby="peer-title">
      <div className="page-shell peer-layout">
        <Reveal className="peer-copy">
          <Quote aria-hidden="true" />
          <p className="eyebrow">In their words</p>
          <h2 id="peer-title">What my teams and peers said about my work</h2>
          <p>Combined from farewell messages from my last role and recommendations over the years, these are the qualities that came up most often.</p>
        </Reveal>
        <div className="quality-cloud reveal" aria-label="Leadership qualities">
          {qualities.map((quality, index) => <span className={`quality quality-${index + 1}`} key={quality}>{quality}</span>)}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="page-shell contact-layout">
        <div className="contact-copy reveal">
          <p className="eyebrow">Contact</p>
          <h2>Let’s talk about the work.</h2>
          <p>Based in the Netherlands. Open to senior engineering leadership roles where I can bring my experience in building high-performing teams, delivering complex technology programmes, and leading engineering organisations through growth and transformation.</p>
          <p>Also happy to talk to peers — engineering culture, AI adoption, leadership at scale, building teams in new markets. These are conversations worth having.</p>
        </div>
        <div className="contact-actions reveal">
          <a href="mailto:shruthiks85@gmail.com" className="contact-link"><span><small>Email</small>shruthiks85@gmail.com</span><ArrowUpRight aria-hidden="true" /></a>
          <a href="https://www.linkedin.com/in/shruthi-sridhara-02396010/" target="_blank" rel="noreferrer" className="contact-link"><span><small>LinkedIn</small>Connect with me</span><ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Button asChild size="icon" variant="outline" className={`back-to-top ${visible ? "visible" : ""}`}>
      <a href="#top" aria-label="Back to top"><ArrowUp /></a>
    </Button>
  );
}

export function Portfolio() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("revealed"); }),
      { threshold: 0.08 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-page">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <OperatingModel />
        <ExperienceTimeline />
        <WaysToWork />
        <Principles />
        <Skills />
        <Learning />
        <PeerWords />
        <Contact />
      </main>
      <footer className="site-footer"><div className="page-shell"><p>© 2026 Shruthi Sridhara · Netherlands</p><span><i aria-hidden="true" /> Open to opportunities</span></div></footer>
      <BackToTop />
    </div>
  );
}