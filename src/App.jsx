import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    slug: "/services/web-development",
    summary: "Full-stack engineering for secure, scalable web platforms.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Modern frontend architecture",
      "API and backend integrations",
      "Performance-first implementation",
    ],
  },
  {
    title: "Security Consulting",
    slug: "/services/security-consulting",
    summary: "Strategic security planning aligned with business outcomes.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Security roadmaps and policy design",
      "Risk assessment and governance",
      "Long-term advisory support",
    ],
  },
  {
    title: "Penetration Testing",
    slug: "/services/penetration-testing",
    summary: "Offensive testing to expose real-world attack paths before adversaries do.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Web and API vulnerability testing",
      "Network and wireless assessment",
      "Remediation verification",
    ],
  },
  {
    title: "Authentication Systems",
    slug: "/services/authentication-systems",
    summary: "Enterprise identity systems built for trust, resilience, and compliance.",
    image:
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1200&q=80",
    points: [
      "MFA and passwordless flows",
      "Secure identity architecture",
      "Audit-ready event logging",
    ],
  },
  {
    title: "System Architecture",
    slug: "/services/system-architecture",
    summary: "Architecture design for reliability, security, and sustainable growth.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Microservices and data architecture",
      "Infrastructure as Code foundations",
      "Zero-trust design principles",
    ],
  },
  {
    title: "Code Auditing & Code Review",
    slug: "/services/code-auditing",
    summary: "Deep code reviews that improve security posture and engineering quality.",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Security and logic flaw analysis",
      "Architecture and maintainability review",
      "Actionable remediation guidance",
    ],
  },
];

const stats = [
  { value: "24/7", label: "Security Coverage" },
  { value: "Zero-Trust", label: "Architecture Mindset" },
  { value: "End-to-End", label: "Delivery Ownership" },
];

const stages = [
  {
    name: "Discovery & Threat Mapping",
    text: "We identify your operational risks, architecture gaps, and highest-value opportunities.",
  },
  {
    name: "Secure Design",
    text: "We design technical foundations that balance scalability, performance, and security controls.",
  },
  {
    name: "Implementation & Hardening",
    text: "We execute delivery, test aggressively, and harden systems before launch.",
  },
  {
    name: "Continuous Assurance",
    text: "We provide ongoing audits, advisory, and resilience improvements as your platform evolves.",
  },
];

const industries = [
  "Enterprise Platforms",
  "Fintech",
  "SaaS Products",
  "Digital Infrastructure",
  "Research Teams",
  "Growth-Stage Technology",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function App() {
  const reduced = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  const videoUrl =
    "https://assets.mixkit.co/videos/preview/mixkit-animation-of-a-futuristic-computer-network-41811-large.mp4";

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand" aria-label="EliTechWiz home">
            <span className="brand-mark" />
            EliTechWiz
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#process" onClick={() => setMenuOpen(false)}>
              Process
            </a>
            <a href="#industries" onClick={() => setMenuOpen(false)}>
              Industries
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
            <a href="#contact" className="btn btn-gold" onClick={() => setMenuOpen(false)}>
              Book Consultation
            </a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          {!reduced && (
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          )}

          <div className="hero-overlay" aria-hidden="true" />

          <div className="container hero-content">
            <motion.div initial="hidden" animate="visible" variants={container} className="hero-copy">
              <motion.p variants={item} className="kicker">
                Enterprise Cybersecurity and Engineering
              </motion.p>
              <motion.h1 variants={item}>
                Build secure digital systems that perform under real pressure.
              </motion.h1>
              <motion.p variants={item} className="hero-lead">
                We design, implement, and harden software and infrastructure for teams
                that need reliable delivery, resilient architecture, and measurable risk
                reduction.
              </motion.p>

              <motion.div variants={item} className="hero-actions">
                <a href="#services" className="btn btn-gold">
                  Explore Services
                </a>
                <a href="#contact" className="btn btn-outline-light">
                  Talk to EliTechWiz
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="hero-stats"
            >
              {stats.map((stat) => (
                <article key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <p>Software Development</p>
            <p>Software Architecture</p>
            <p>Infrastructure Engineering</p>
            <p>Cybersecurity Operations</p>
          </div>
        </section>

        <section id="services" className="section container">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="kicker">All Current Services Included</p>
            <h2>Service Portfolio</h2>
            <p>
              Every service from your original website is preserved and presented in a
              cleaner, premium layout with stronger visual hierarchy.
            </p>
          </motion.div>

          <motion.div
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={container}
          >
            {services.map((service) => (
              <motion.article
                key={service.title}
                variants={item}
                whileHover={reduced ? undefined : { y: -8, scale: 1.01 }}
                className="service-card"
              >
                <img src={service.image} alt={`${service.title} service`} loading="lazy" />
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a href={service.slug} className="service-link" aria-label={`Open ${service.title}`}>
                    View service path
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section id="process" className="section process-zone">
          <div className="container">
            <motion.div
              className="section-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="kicker">Delivery Model</p>
              <h2>How We Deliver</h2>
            </motion.div>

            <motion.div
              className="process-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={container}
            >
              {stages.map((stage, index) => (
                <motion.article key={stage.name} variants={item} className="process-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{stage.name}</h3>
                  <p>{stage.text}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="industries" className="section container">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="kicker">Industry Focus</p>
            <h2>Teams We Support</h2>
          </motion.div>

          <motion.div
            className="industry-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            {industries.map((industry) => (
              <motion.div key={industry} variants={item} className="industry-pill">
                {industry}
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="contact" className="section container">
          <motion.div
            className="cta-panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <p className="kicker">Start Your Project</p>
              <h2>Transform your platform with secure engineering execution.</h2>
              <p>
                Share your objective, architecture challenges, and timeline. We will
                recommend the best service combination for your team.
              </p>
            </div>
            <div className="contact-stack">
              <a href="mailto:contact@elitechwiz.com">contact@elitechwiz.com</a>
              <a href="tel:+255688164510">+255 688 164 510</a>
              <a href="https://github.com/Eliahhango" target="_blank" rel="noreferrer">
                github.com/Eliahhango
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} EliTechWiz. Enterprise cybersecurity and engineering.</p>
          <p>Modern UI transformed with motion-first interactions.</p>
        </div>
      </footer>
    </div>
  );
}
