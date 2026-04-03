import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    slug: "/services/web-development",
    summary: "Full-stack web engineering for secure, scalable digital products.",
    points: [
      "Frontend architecture with React and TypeScript",
      "Backend APIs and service integration",
      "Performance and maintainability optimization",
    ],
  },
  {
    title: "Security Consulting",
    slug: "/services/security-consulting",
    summary: "Strategic consulting to align security controls with business goals.",
    points: [
      "Security strategy and roadmap development",
      "Risk assessment and policy implementation",
      "Ongoing advisory and program hardening",
    ],
  },
  {
    title: "Penetration Testing",
    slug: "/services/penetration-testing",
    summary: "Controlled offensive testing to uncover exploitable vulnerabilities.",
    points: [
      "OWASP Top 10 and API security testing",
      "Network and wireless security assessment",
      "Remediation guidance and verification retests",
    ],
  },
  {
    title: "Authentication Systems",
    slug: "/services/authentication-systems",
    summary: "Enterprise identity and access implementations built for trust.",
    points: [
      "Multi-factor and passwordless authentication",
      "Secure architecture design and integration",
      "Audit logging and compliance-focused controls",
    ],
  },
  {
    title: "System Architecture",
    slug: "/services/system-architecture",
    summary: "Resilient architecture design for growth, security, and uptime.",
    points: [
      "Microservices and database architecture",
      "Infrastructure as Code and DevOps pipelines",
      "Zero-trust network architecture patterns",
    ],
  },
  {
    title: "Code Auditing & Code Review",
    slug: "/services/code-auditing",
    summary: "Expert audits that improve code security, quality, and performance.",
    points: [
      "Security flaw and logic vulnerability review",
      "Architecture and maintainability analysis",
      "Actionable reporting with implementation support",
    ],
  },
];

const metrics = [
  { label: "Security Monitoring", value: "24/7" },
  { label: "Delivery Model", value: "End-to-End" },
  { label: "Core Domains", value: "Cyber + Engineering" },
  { label: "Engagement Focus", value: "Enterprise Readiness" },
];

const deliveryStages = [
  {
    name: "Discovery",
    text: "We map your current stack, risk posture, and delivery constraints.",
  },
  {
    name: "Architecture",
    text: "We design secure systems and clear implementation pathways.",
  },
  {
    name: "Execution",
    text: "We implement, test, and harden across application and infrastructure layers.",
  },
  {
    name: "Continuous Support",
    text: "We provide ongoing advisory, audits, and resilience improvements.",
  },
];

const industries = [
  "Enterprise Platforms",
  "Fintech & Payments",
  "Digital Services",
  "SaaS & B2B Products",
  "Technical Research Teams",
  "Growth-Stage Technology Companies",
];

function ServiceIcon({ title }) {
  const icons = {
    "Web Development": (
      <path d="M4 5h16v11H4zM8 19h8M10 8l-2 2 2 2M14 8l2 2-2 2" />
    ),
    "Security Consulting": (
      <path d="M12 3l7 3v5c0 4.2-3 8-7 10-4-2-7-5.8-7-10V6l7-3Zm-3 8h6M9.5 14h5" />
    ),
    "Penetration Testing": (
      <path d="M12 3a7 7 0 0 1 7 7v3h2v8H3v-8h2v-3a7 7 0 0 1 7-7Zm-3 10h6M12 10v6" />
    ),
    "Authentication Systems": (
      <path d="M7 11V8a5 5 0 1 1 10 0v3M6 11h12v10H6zM12 15v2" />
    ),
    "System Architecture": (
      <path d="M4 6h7v5H4zM13 6h7v5h-7zM4 13h7v5H4zM13 13h7v5h-7zM11 8h2M11 16h2" />
    ),
    "Code Auditing & Code Review": (
      <path d="M9 8 6 12l3 4M15 8l3 4-3 4M13 5l-2 14" />
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[title]}
    </svg>
  );
}

export default function App() {
  const reduced = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0.2 : 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const revealGroup = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : 0.08 },
    },
  };

  return (
    <div className="app-shell">
      <div className="noise" aria-hidden="true" />

      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#home" aria-label="EliTechWiz home">
            <span className="brand-dot" />
            EliTechWiz
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#industries">Industries</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="btn btn-ghost" href="#contact">
            Contact Sales
          </a>
        </div>
      </header>

      <main id="home">
        <section className="hero container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={revealGroup}
            className="hero-copy"
          >
            <motion.p variants={reveal} className="eyebrow">
              Enterprise Cybersecurity and Engineering Platform
            </motion.p>
            <motion.h1 variants={reveal}>
              Secure software, resilient infrastructure, and delivery confidence.
            </motion.h1>
            <motion.p variants={reveal} className="hero-text">
              We design and ship technical systems that stay reliable under pressure.
              From architecture and implementation to testing and security hardening,
              every engagement is built to reduce risk and accelerate outcomes.
            </motion.p>

            <motion.div variants={reveal} className="hero-actions">
              <a className="btn btn-primary" href="#services">
                Explore Services
              </a>
              <a className="btn btn-ghost" href="#contact">
                Book Consultation
              </a>
            </motion.div>

            <motion.ul variants={reveal} className="capability-row" aria-label="Core capabilities">
              <li>Software Development</li>
              <li>Software Architecture</li>
              <li>Infrastructure Engineering</li>
            </motion.ul>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: reduced ? 0 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduced ? 0.2 : 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hero-panel"
          >
            <h2>Security Readiness Snapshot</h2>
            <p>
              A practical partnership model covering software delivery, security posture,
              and infrastructure stability.
            </p>
            <div className="metric-grid">
              {metrics.map((item) => (
                <article className="metric-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </motion.aside>
        </section>

        <section id="services" className="section container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="section-heading"
          >
            <p className="eyebrow">All Services From Your Current Website</p>
            <h2>Service Portfolio</h2>
            <p>
              The new version preserves every active service offering and presents them in
              a cleaner, enterprise-focused experience.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={revealGroup}
            className="services-grid"
          >
            {services.map((service) => (
              <motion.article
                key={service.title}
                variants={reveal}
                whileHover={
                  reduced
                    ? undefined
                    : {
                        y: -6,
                        boxShadow: "0 20px 36px rgba(15, 23, 42, 0.12)",
                      }
                }
                className="service-card"
              >
                <div className="service-head">
                  <span className="service-icon">
                    <ServiceIcon title={service.title} />
                  </span>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.summary}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <a href={service.slug} className="service-link" aria-label={`Open ${service.title}`}>
                  View service path
                </a>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section id="process" className="section process-wrap">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="section-heading"
            >
              <p className="eyebrow">Delivery Framework</p>
              <h2>How We Work</h2>
              <p>
                Structured delivery keeps security, velocity, and system quality aligned
                from day one.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={revealGroup}
              className="timeline"
            >
              {deliveryStages.map((stage, idx) => (
                <motion.article key={stage.name} variants={reveal} className="timeline-card">
                  <span className="index">0{idx + 1}</span>
                  <h3>{stage.name}</h3>
                  <p>{stage.text}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="industries" className="section container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="section-heading"
          >
            <p className="eyebrow">Target Segments</p>
            <h2>Industries and Teams We Support</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealGroup}
            className="industry-grid"
          >
            {industries.map((item) => (
              <motion.div key={item} variants={reveal} className="industry-item">
                {item}
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="contact" className="section container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
            className="cta"
          >
            <div>
              <p className="eyebrow">Ready to Start</p>
              <h2>Plan your next secure delivery with EliTechWiz.</h2>
              <p>
                Tell us your objective and timeline. We will recommend the right blend of
                services for your environment.
              </p>
            </div>
            <div className="contact-list">
              <a href="mailto:contact@elitechwiz.com">contact@elitechwiz.com</a>
              <a href="tel:+255688164510">+255 688 164 510</a>
              <a href="https://github.com/Eliahhango" target="_blank" rel="noreferrer">
                github.com/Eliahhango
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} EliTechWiz. Cybersecurity and engineering solutions.</p>
          <p>Built with modern UI architecture and Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
}
