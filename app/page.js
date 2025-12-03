"use client";
import "./globals.css";

const contact = {
  name: "Alejandro De La Mora",
  role: "AI Solutions Architect & Engineer",
  email: "alex@seshwithfriends.org",
  phone: "+1 437 243 3693",
  linkedin: "https://www.linkedin.com/in/amorac/",
  website: "http://www.eloruga.com",
  github: "https://github.com/Oruga420",
};

const summary =
  "AI Solutions Architect and Engineer with a proven track record of shipping over 120 GenAI applications and 90 chatbots to production. Expert in bridging the gap between business requirements and technical execution, recently driving AI adoption from 47% to 97% at Assent and saving over 20,000 man-hours ($1M+ value) through agentic workflows and RAG architectures. Passionate about building scalable AI features using GCP, AWS, Vercel, and Next.js.";

const expertise = [
  "GenAI Architecture",
  "Agentic Workflows",
  "Retrieval-Augmented Generation (RAG)",
  "OpenAI / Anthropic / Gemini APIs",
  "Next.js & Vercel",
  "Google Cloud Platform",
  "Amazon Web Services",
  "Salesforce Development",
  "QA Engineering",
  "Zapier Automation",
];

const experience = [
  {
    title: "AI Solutions Architect",
    company: "Assent",
    date: "February 2025 - Present | Canada (Remote)",
    bullets: [
      "Architected and deployed a GenAI stack utilizing live RAG and custom MCP servers to ensure safety and auditability within a regulated compliance platform.",
      "Designed agentic workflows that replaced repetitive operational tasks, resulting in over 20,000 man-hours saved and over $1 Million USD in savings in a single year.",
      "Drove internal AI adoption from 47% to 97% by building tools that directly addressed team productivity needs.",
      "Integrated internal tools with Salesforce, Zapier, and LLMs (OpenAI, Anthropic, Gemini) to streamline data processing.",
    ],
  },
  {
    title: "AI Solutions Architect",
    company: "Sesh | Ai Solutions",
    date: "November 2021 - Present | Toronto, Ontario",
    bullets: [
      "Designed the architecture for over 120 GenAI applications and 90+ chatbots currently in production stages across 30+ clients.",
      "Led the implementation of AI-enhanced product features for small businesses, integrating CRMs and marketing sites with automation backends (Next.js, Vercel).",
      "Built a community of 100+ members, delivering tutorials and demos to help developers extrapolate AI technology into day-to-day tasks.",
    ],
  },
  {
    title: "Salesforce Consultant (AI & Automation)",
    company: "Online Business Systems",
    date: "June 2024 - November 2024 | Toronto, Ontario",
    bullets: [
      "Implemented Agentforce and copilot-style experiences, defining use cases and configuring prompts to fit existing workflows.",
      "Developed reusable patterns for AI assistants, ensuring secure data access and maintainable configurations for enterprise clients.",
    ],
  },
  {
    title: "Salesforce Manager",
    company: "Globalization Partners",
    date: "November 2018 - November 2023 | Ontario, Canada",
    bullets: [
      "Transitioned from Admin to AI/Dev lead, building 'GIA' (internal chatbot) and early GenAI-powered workflows for Jira ticket handling.",
      "Managed a Salesforce org with 1,000+ licenses, ensuring best practices in data modeling and security while introducing AI-assisted development tools.",
    ],
  },
];

const education = [
  {
    title: "Ingenieria en Sistemas (Systems Engineering)",
    school: "Universidad Marista de MAcrida",
    dates: "2004 - 2007",
    details:
      "Certifications: Salesforce Certified AI Associate (x3), Salesforce Certified Administrator (SCA)",
  },
];

export default function Page() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="page">
      <div className="bubble" aria-hidden />
      <div className="bubble" aria-hidden />

      <header className="header">
        <div className="title-block">
          <h1>{contact.name}</h1>
          <div className="role">{contact.role}</div>
          <div className="summary-card">
            <div className="summary-title">Professional Summary</div>
            <p className="summary-text">{summary}</p>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-label">Contact</div>
          <a className="contact-link" href={`tel:${contact.phone}`}>
            {contact.phone}
          </a>
          <a className="contact-link" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <a className="contact-link" href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="contact-link" href={contact.website} target="_blank" rel="noreferrer">
            Website
          </a>
          <a className="contact-link" href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <section className="section">
        <h2>Areas of Expertise</h2>
        <div className="pill-row">
          {expertise.map((item) => (
            <div key={item} className="pill">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Work Experience</h2>
        <div className="experience">
          {experience.map((job) => (
            <article key={job.title + job.company} className="job">
              <div className="job-header">
                <h3 className="job-title">
                  {job.title} | {job.company}
                </h3>
                <div className="job-meta">{job.date}</div>
              </div>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Education</h2>
        <div className="edu-grid">
          {education.map((item) => (
            <div key={item.title} className="edu-card">
              <h3>{item.title}</h3>
              <div className="edu-meta">{item.school}</div>
              <div className="edu-meta">{item.dates}</div>
              <p className="summary-text" style={{ marginTop: 8 }}>
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="actions">
        <button className="btn secondary" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to Top
        </button>
        <button className="btn" onClick={handlePrint}>
          Download PDF
        </button>
      </div>
    </main>
  );
}
