"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Novelus IP — Self‑contained landing page (no shadcn/ui)
 * Brand colors:
 *  - Blue:    #004AAD
 *  - Green:   #18CB96
 *  - Charcoal:#373643
 *
 * Drop this into Next.js (pages/index.tsx) or Vite (src/App.tsx).
 * Requires Tailwind + framer-motion. All components below are inline.
 */

// --- Minimal UI primitives (Tailwind-only) ---
const Button = ({ className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    {...props}
  />
);

const Card = ({ className = "", children }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={`rounded-2xl border border-neutral-200 bg-white shadow-sm ${className}`}>{children}</div>
);

const Input = ({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={`w-full rounded-xl border border-neutral-300 px-3 py-2 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#004AAD]/30 ${className}`}
    {...props}
  />
);

const Textarea = ({ className = "", ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    className={`w-full rounded-xl border border-neutral-300 px-3 py-2 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#004AAD]/30 ${className}`}
    {...props}
  />
);

// --- Little check icon (inline SVG, no deps) ---
const Check = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

// --- Motion helpers ---
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const slideIn = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

export default function NovelusIP() {
  return (
    <div className="min-h-screen bg-white text-[#373643] selection:bg-[#004AAD]/20">
      <BackgroundDeco />
      <Header />
      <main>
        <Hero />
        <Creds />
        <Services />
        <SoftwareLab />
        <Approach />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

function BackgroundDeco() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
      <div className="absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-[#004AAD]/10 blur-3xl" />
      <div className="absolute -bottom-40 left-[-10%] h-[320px] w-[320px] rounded-full bg-[#18CB96]/10 blur-3xl" />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div 
                className="absolute inset-0" 
                style={{
                  background: `linear-gradient(135deg, #004AAD 0%, #004AAD 50%, #18CB96 50%, #18CB96 100%)`
                }}
              ></div>
              <span className="text-white font-bold text-lg relative z-10">N</span>
            </div>
            <span className="text-xl font-bold">Novelus IP</span>
          </motion.div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#services" className="hover:text-[#004AAD]">Services</a>
          <a href="#software" className="hover:text-[#004AAD]">Software</a>
          <a href="#approach" className="hover:text-[#004AAD]">Approach</a>
          <a href="#contact" className="hover:text-[#004AAD]">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:block">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-[#004AAD] hover:bg-[#003a88] text-white">Request consult</Button>
          </motion.div>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative py-20 overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
                             <img
                       src="/images/Light Bulb.jpg"
                       alt="Innovation and bright ideas"
                       className="w-full h-full object-cover scale-x-[-1]"
                     />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-white/80 via-white/60 via-white/30 to-transparent" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-7"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              variants={fadeUp}
              className="text-5xl font-bold tracking-tight"
            >
              Clear solutions for IP innovators, empowering innovation worldwide
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              className="mt-6 text-xl text-neutral-600"
            >
              Expert intellectual property protection and strategy for technology companies. From patent strategy to trademark protection, we help innovators secure their competitive advantage.
            </motion.p>
            <motion.div 
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button className="bg-[#004AAD] text-white hover:bg-[#004AAD]/90 focus:ring-[#004AAD]/30">
                Get started
              </Button>
              <Button className="border border-neutral-300 text-neutral-700 hover:bg-neutral-50 focus:ring-neutral-300">
                Learn more
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Creds() {
  const items = [
    { label: "Examiners", text: "Former USPTO examiners with grant experience" },
    { label: "Engineers", text: "Electrical, Computer Science, Applied Physics backgrounds" },
    { label: "Startups", text: "Operator mindset, budget‑aware" },
    { label: "Results", text: "Decisions, not deliverable bloat" },
  ];
  return (
    <section className="py-10 border-y border-neutral-200 bg-neutral-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {items.map((i, idx) => (
            <motion.div 
              key={idx} 
              className="flex items-start gap-3"
              variants={fadeUp}
            >
              <Check className="h-5 w-5 text-[#004AAD] mt-0.5"/>
              <div>
                <p className="font-medium">{i.label}</p>
                <p className="text-neutral-600">{i.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "IP Strategy & Analysis",
      text: "Comprehensive intellectual property landscape analysis and strategic guidance for your innovations.",
      features: ["FTO clearance", "Prior art analysis", "Portfolio assessment", "Strategic planning"],
      color: "bg-[#004AAD]"
    },
    {
      title: "IP Diligence & Audits",
      text: "Deep‑dive analysis of target IP assets, risks, and opportunities for investment and market entry.",
      features: ["Portfolio assessment", "Risk evaluation", "Market analysis", "Strategic recommendations"],
      color: "bg-[#18CB96]"
    },
    {
      title: "Patent Analysis & Education",
      text: "Comprehensive patent analysis and training programs to build IP expertise within your organization.",
      features: ["Patent education training", "Patent analysis", "API calls to patent databases", "Custom reporting"],
      color: "bg-[#004AAD]"
    },
    {
      title: "Custom IP Software",
      text: "Tailored software solutions for IP management, analysis, and workflow automation.",
      features: ["Custom IP tools", "Database integrations", "Workflow automation", "API development"],
      color: "bg-[#18CB96]"
    }
  ];
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          variants={fadeUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold tracking-tight">Services</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">Strategic IP analysis, diligence, and guidance for technology companies.</p>
        </motion.div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`h-2 w-full rounded-t-2xl ${s.color}`} />
              <div className="rounded-b-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-neutral-700 mt-2 text-sm">{s.text}</p>
                <ul className="mt-4 space-y-2">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-[#18CB96]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SoftwareLab() {
  const labs = [
    {
      title: "Custom IP Software",
      text: "Tools that fit your pipeline—categorization, office‑action insights, portfolio mapping, and more.",
      tags: ["Rapid prototypes", "API‑friendly", "Secure by design"],
      image: "/images/Code on Laptop Screen.jpg",
    },
    {
      title: "Workflow Automation",
      text: "Reduce manual effort with smart parsers and summarizers tailored to your assets and dockets.",
      tags: ["Parsing", "QA/validation", "Dashboards"],
      image: "/images/Automated workflow.png",
    },
  ];
  return (
    <section id="software" className="py-20 bg-neutral-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Software lab</h2>
            <p className="mt-3 text-neutral-600 max-w-2xl">When strategy alone isn't enough, we build focused tools to speed analysis and reduce risk. Scoping happens during the initial consultation.</p>
          </div>
          <a href="#contact" className="text-[#004AAD] font-medium">Discuss your idea →</a>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {labs.map((l, i) => (
            <motion.article 
              key={i} 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
            >
              <div className="relative">
                <img src={l.image} alt={l.title} className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-white/90 border border-neutral-200">{l.title}</span>
              </div>
              <div className="p-5">
                <p className="text-neutral-700">{l.text}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {l.tags.map((t, j) => (
                    <span key={j} className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-[#004AAD]">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
          { title: "Discovery", text: "30–45 min call to align on goals, constraints, and budget. NDA available.", img: "/images/idea-5799709.jpg" },
          { title: "Diligence", text: "Targeted research and interviews. Early signals delivered fast.", img: "/images/Idea board.jpg" },
    { title: "Decision", text: "Clear go/no‑go with risks, costs, and options laid out.", img: "/images/Decision.jpg" },
  ];
  return (
    <section id="approach" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight"
        >
          Our approach
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-neutral-600 max-w-2xl"
        >
          A lightweight, decision‑focused process that respects your runway and roadmap.
        </motion.p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm"
            >
              <img src={s.img} alt={s.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-neutral-600 mt-2 text-sm">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-50/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          variants={fadeUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold tracking-tight">Get in touch</h2>
          <p className="mt-3 text-neutral-600">Ready to discuss your IP strategy? Let's talk.</p>
        </motion.div>
        <motion.div 
          className="mt-10"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <Input placeholder="Your name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company (optional)</label>
                  <Input placeholder="Your company" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject *</label>
                <Input placeholder="What can we help you with?" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <Textarea placeholder="Tell us about your IP needs..." rows={4} required />
              </div>
              <div className="flex items-center justify-between">
                <Button className="bg-[#004AAD] text-white hover:bg-[#004AAD]/90 focus:ring-[#004AAD]/30">
                  Send message
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center space-y-3">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div 
                className="absolute inset-0" 
                style={{
                  background: `linear-gradient(135deg, #004AAD 0%, #004AAD 50%, #18CB96 50%, #18CB96 100%)`
                }}
              ></div>
              <span className="text-white font-bold text-lg relative z-10">N</span>
            </div>
            <span className="text-sm">© 2025 Novelus IP</span>
          </div>
          <span className="text-sm">A Novelus LLC Company</span>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-[#004AAD]">Services</a>
          <a href="#software" className="hover:text-[#004AAD]">Software</a>
          <a href="#approach" className="hover:text-[#004AAD]">Approach</a>
          <a href="#contact" className="hover:text-[#004AAD]">Contact</a>
          <a href="#" className="text-neutral-500">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
