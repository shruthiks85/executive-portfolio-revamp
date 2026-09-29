import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
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
      "I work where the problem is — inside the customer's environment, on the shop floor, alongside the product team. Co-building from problem definition through to production, not handing over the fence.",
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
      "Led delivery of a $50M paper-to-digital programme with no prior MES foundation at site. Partnered with iBaseT (MES ISV) on Solumina platform integration, designed end-to-end execution, coordinated 40-person delivery team across US, Europe, Asia.",
    result: "30% efficiency gain · global delivery model · US, Europe, Asia",
  },
  {
    org: "Collins Aerospace",
    period: "Jan 2021 – Jul 2023",
    context: ["Cloud platform", "AWS", "Azure", "Post-merger"],
    title: "Platform scaling for an organisation that doubled in size",
    description:
      "Drove platform consolidation, AWS and Azure migration supporting post-merger growth from 40,000 to 80,000 employees. Coordinated across architecture, infrastructure and business teams to deliver unified cloud foundation.",
    result: "Unified infrastructure live day one · new workstreams opened internally",
  },
  {
    org: "Wipro · Walmart",
    period: "Jan 2015 – Jun 2017",
    context: ["E-commerce", "React", "Responsive", "Mobile-first"],
    title: "Walmart's first mobile-compatible e-commerce platform",
    description:
      "Stepped into a technical leadership gap on a live project — took ownership of direction for a 7-member team, drove React and responsive design adoption, and delivered a production-ready platform ahead of schedule.",
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
      "I'm building a local AI knowledge assistant from first principles — not to create another chatbot, but to understand the engineering decisions behind retrieval, AI-assisted development and responsible AI adoption.",
    status: "In progress",
  },
  {
    meta: "Dutch language · Cultural integration",
    title: "Learning the language is part of joining the culture",
    description:
      "Relocating to the Netherlands isn't just a career move for me. I'm actively learning Dutch and investing time in understanding the culture, because building trust and leading teams starts with genuine connection.",
    status: "A2 → B1 in progress",
  },
  {
    meta: "mentoring · adplist · people_development",
    title: "Mentoring engineers and technology professionals and managers",
    description:
      "I mentor on ADPList — mostly around: career guidance, career transitions into management / engineering leadership focus. It's the same \"build people, metrics will follow\" belief from my management experience.",
    status: "Ongoing",
  },
  {
    meta: "safe · finance · cloud_architecture",
    title: "Building the business side of engineering leadership",
    description:
      "Used the transition between roles to formalise skills that sit alongside technical delivery — SAFe Product Owner/Product Manager certification, cloud-native architecture fundamentals, and finance literacy for technology leaders.",
    status: "Completed",
  },
];

type PeerTone = "leadership" | "personal" | "impact" | "quote";

type PeerWord = { text: string; x: number; y: number; size: number; weight: number; tone: PeerTone; opacity: number; delay: number };

// Word cloud drawn from farewell messages and recommendations — size = strength of signal.
const peerWords: PeerWord[] = [
  { text: "calm", x: 320, y: 130, size: 38, weight: 600, tone: "leadership", opacity: 0.95, delay: 0.05 },
  { text: "approachable", x: 180, y: 175, size: 34, weight: 600, tone: "leadership", opacity: 0.9, delay: 0.1 },
  { text: "inspiring", x: 460, y: 175, size: 32, weight: 600, tone: "leadership", opacity: 0.9, delay: 0.15 },
  { text: "composed", x: 100, y: 240, size: 26, weight: 500, tone: "leadership", opacity: 0.8, delay: 0.2 },
  { text: "mentor", x: 300, y: 225, size: 28, weight: 500, tone: "personal", opacity: 0.9, delay: 0.25 },
  { text: "trusted her team", x: 480, y: 240, size: 24, weight: 500, tone: "leadership", opacity: 0.8, delay: 0.3 },
  { text: "patient", x: 80, y: 290, size: 19, weight: 400, tone: "personal", opacity: 0.85, delay: 0.35 },
  { text: "always there", x: 210, y: 275, size: 21, weight: 400, tone: "leadership", opacity: 0.8, delay: 0.38 },
  { text: "kind", x: 400, y: 275, size: 20, weight: 400, tone: "personal", opacity: 0.8, delay: 0.41 },
  { text: "positive influence", x: 540, y: 290, size: 18, weight: 400, tone: "leadership", opacity: 0.75, delay: 0.44 },
  { text: "role model", x: 60, y: 335, size: 17, weight: 400, tone: "impact", opacity: 0.9, delay: 0.47 },
  { text: "genuine", x: 185, y: 320, size: 16, weight: 400, tone: "personal", opacity: 0.75, delay: 0.5 },
  { text: "never in a bad mood", x: 310, y: 315, size: 18, weight: 400, tone: "leadership", opacity: 0.7, delay: 0.52 },
  { text: "warm", x: 460, y: 320, size: 16, weight: 400, tone: "personal", opacity: 0.75, delay: 0.54 },
  { text: "irreplaceable", x: 570, y: 335, size: 15, weight: 400, tone: "impact", opacity: 0.85, delay: 0.56 },
  { text: "gave importance to wellbeing", x: 90, y: 375, size: 14, weight: 300, tone: "quote", opacity: 0.9, delay: 0.58 },
  { text: "lasting impact", x: 270, y: 360, size: 15, weight: 300, tone: "impact", opacity: 0.8, delay: 0.6 },
  { text: "cheering everyone on", x: 430, y: 360, size: 14, weight: 300, tone: "quote", opacity: 0.85, delay: 0.62 },
  { text: "shadow leader", x: 570, y: 375, size: 13, weight: 300, tone: "impact", opacity: 0.8, delay: 0.64 },
  { text: "redefined what a manager is", x: 80, y: 410, size: 12, weight: 300, tone: "quote", opacity: 0.78, delay: 0.66 },
  { text: "support from day one", x: 255, y: 400, size: 13, weight: 300, tone: "quote", opacity: 0.75, delay: 0.68 },
  { text: "encouragement a true gift", x: 400, y: 400, size: 12, weight: 300, tone: "impact", opacity: 0.78, delay: 0.7 },
  { text: "women hero leader", x: 560, y: 410, size: 12, weight: 300, tone: "quote", opacity: 0.75, delay: 0.72 },
  { text: "deeply missed", x: 160, y: 440, size: 11, weight: 300, tone: "quote", opacity: 0.9, delay: 0.74 },
  { text: "patiently guided every single time", x: 320, y: 445, size: 11, weight: 300, tone: "quote", opacity: 0.9, delay: 0.76 },
  { text: "brought positivity to the org", x: 490, y: 440, size: 11, weight: 300, tone: "quote", opacity: 0.9, delay: 0.78 },
];

const peerLegend = [
  { label: "Leadership qualities", swatch: "sw-leadership" },
  { label: "Personal qualities", swatch: "sw-personal" },
  { label: "Impact", swatch: "sw-impact" },
  { label: "Quoted lines", swatch: "sw-quote" },
];

const peerTier = (size: number) => (size >= 30 ? 1 : size >= 24 ? 2 : size >= 18 ? 3 : size >= 15 ? 4 : 5);
const cloudStyle = (word: PeerWord) => ({ "--d": `${word.delay}s`, "--o": word.opacity }) as CSSProperties;

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className={`section-heading reveal${intro ? "" : " section-heading-full"}`}>
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
          <p className="availability"><span aria-hidden="true" /> Engineering Leadership · Netherlands · Consulting & Full-Time Opportunities</p>
          <h1>I build teams that ship <strong>complex things reliably.</strong></h1>
          <p className="hero-intro">
            18 years in software — moving between hands-on architecture and team leadership depending on what the work needs. I stay technically close, build the structures that protect quality under pressure, and create environments where people can do their best work.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg" className="text-white"><a href="#experience">View selected work <ArrowUpRight /></a></Button>
            <Button asChild size="lg" variant="outline"><a href="mailto:shruthiks85@gmail.com">Start a conversation <Mail /></a></Button>
          </div>
        </div>
        <aside className="identity-panel" aria-label="Professional profile">
          <div className="portrait-mark"><img src="/Shruthi_.png" alt="Portrait of Shruthi Sridhara" width={1024} height={1536} loading="eager" /></div>
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
      <div className="page-shell currently-line reveal">
        <p><strong>Currently:</strong> Independent Consultant at Axis Tech Consulting — interim leadership & delivery advisory, following 8+ years at Collins Aerospace.</p>
      </div>
    </section>
  );
}

function OperatingModel() {
  return (
    <section id="about" className="section-band">
      <div className="page-shell">
        <SectionHeading eyebrow="Operating model" title="How I work, not just what I've done" intro="Leadership that stays close to the work, creates clarity before urgency, and leaves teams stronger than I found them." />
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
        <div className="peer-visual">
          <svg className="peer-cloud-svg reveal" viewBox="0 95 640 360" aria-hidden="true" focusable="false">
            {peerWords.map((word) => (
              <text key={word.text} className={`tone-${word.tone}`} x={word.x} y={word.y} textAnchor="middle" fontSize={word.size} fontWeight={word.weight} style={cloudStyle(word)}>
                {word.text}
              </text>
            ))}
          </svg>
          <ul className="peer-words-list" aria-label="Qualities my teams and peers used about my work">
            {peerWords.map((word) => (
              <li key={word.text} className={`quality quality-${peerTier(word.size)} tone-${word.tone}`}>{word.text}</li>
            ))}
          </ul>
          <ul className="peer-legend" aria-label="Word cloud key">
            {peerLegend.map((item) => (
              <li key={item.label} className={item.swatch}>{item.label}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const contactPaths = [
  {
    title: "Full-time roles",
    description:
      "Senior Engineering Manager / Director-level roles where I can build teams, own delivery, and lead through growth or transformation.",
  },
  {
    title: "Consulting & interim engagements",
    description:
      "Available through Axis Tech Consulting for interim engineering leadership, delivery transformation advisory, and engineering org design. Project or fractional, defined scope or open-ended.",
  },
  {
    title: "Peer conversations",
    description:
      "Always happy to talk engineering culture, AI adoption, or leading teams in a new market. These are worth having regardless of what's next.",
  },
];

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="page-shell contact-layout">
        <div className="contact-copy reveal">
          <p className="eyebrow">Contact</p>
          <h2>Let's talk about the work</h2>
          <p>Based in the Netherlands, currently working as an independent consultant — and open to the right full-time role.</p>
        </div>
        <div className="contact-paths reveal">
          {contactPaths.map((path) => (
            <article className="contact-path" key={path.title}>
              <h3>{path.title}</h3>
              <p>{path.description}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="page-shell contact-actions reveal">
        <a href="mailto:shruthiks85@gmail.com" className="contact-link"><span><small>Email</small>shruthiks85@gmail.com</span><ArrowUpRight aria-hidden="true" /></a>
        <a href="https://www.linkedin.com/in/shruthi-sridhara-02396010/" target="_blank" rel="noreferrer" className="contact-link"><span><small>LinkedIn</small>Connect with me</span><ArrowUpRight aria-hidden="true" /></a>
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
      <footer className="site-footer"><div className="page-shell"><p>© 2026 Shruthi Sridhara · Netherlands</p><span><i aria-hidden="true" /> Open to consulting & full-time roles</span></div></footer>
      <BackToTop />
    </div>
  );
}
