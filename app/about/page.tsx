"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen pt-14">
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-900 transition-colors duration-200 mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back
          </Link>

          <div className="flex items-baseline gap-4 mb-10">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-neutral-900">
              About.
            </h1>
            <a
              href="/Jing%20Guo_Resume_p.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            >
              <span
                className="absolute left-0 right-0 bottom-0 rounded-sm"
                style={{ height: "33%", background: "var(--accent)", zIndex: 0 }}
              />
              <span className="relative" style={{ zIndex: 1 }}>View my resume ↗</span>
            </a>
          </div>

          {/* Introduction */}
          <div className="max-w-2xl space-y-5 text-neutral-800 leading-relaxed text-base mb-14">
            <p>
              I design consumer products that turn participation into lasting engagement.
              At Yelp, I lead work across community, contribution, recognition, and
              retention, from shaping early product visions to scaling experiences used
              by millions of people.
            </p>
            <p>
              My strongest work begins when the path is still forming. I make ambiguous
              ideas tangible, show how they fit a broader ecosystem, and build alignment
              across product, engineering, data, content, and partner teams. I care about
              interaction details, but I measure design by whether the whole system becomes
              clearer, more useful, and more valuable over time.
            </p>
            <p>
              Before moving into digital product design, I trained at Harvard&apos;s
              Graduate School of Design and worked on complex physical environments. That
              background shaped how I think about systems, human behavior, and the many
              stakeholders affected by a design decision.
            </p>
            <p>
              I am also actively exploring how AI changes both products and the way design
              teams work. My recent work connects community knowledge to AI-powered
              experiences, and I lead practical AI-upskilling sessions for Yelp&apos;s
              design organization.
            </p>
          </div>

          {/* Experience timeline */}
          <div className="relative mb-14">
            {/* Vertical line — stops at last dot */}
            <div className="absolute left-[7px] top-2 w-px" style={{ background: "rgba(255,255,255,0.15)", height: "calc(100% - 4.5rem)" }} />
            <div className="space-y-8">
              {/* Yelp */}
              <div className="flex gap-5">
                <div className="relative flex-shrink-0 w-3.5 h-3.5 rounded-full bg-accent mt-1" />
                <div className="max-w-2xl">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm font-semibold text-neutral-900">Yelp</span>
                    <span className="text-xs text-neutral-400">September 2022 – present</span>
                  </div>
                  <p className="text-sm font-medium text-neutral-800 mb-1">Lead Product Designer, Consumer Contribution</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Promoted twice since joining as a Product Designer. I design community
                    and engagement systems that help people begin contributing, understand
                    their impact, and build lasting participation. My work includes
                    Community Q&amp;A, Recognition &amp; Rewards, Yelp Elite, Year on Yelp,
                    and contributor-retention systems.
                  </p>
                </div>
              </div>
              {/* Doc.ai */}
              <div className="flex gap-5">
                <div className="relative flex-shrink-0 w-3.5 h-3.5 rounded-full bg-neutral-300 mt-1" />
                <div className="max-w-2xl">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm font-semibold text-neutral-900">Doc.ai</span>
                    <span className="text-xs text-neutral-400">September 2021 – October 2022</span>
                  </div>
                  <p className="text-sm font-medium text-neutral-800 mb-1">Product Designer, SaaS</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Sole designer for Smart Omix, a clinical-research SaaS platform spanning
                    complex researcher workflows and participant experiences. I also created
                    a Material UI-based design system and SaaS product guide.
                  </p>
                </div>
              </div>
              {/* Harvard */}
              <div className="flex gap-5">
                <div className="relative flex-shrink-0 w-3.5 h-3.5 rounded-full bg-neutral-300 mt-1" />
                <div className="max-w-2xl">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm font-semibold text-neutral-900">Harvard University</span>
                    <span className="text-xs text-neutral-400">Graduate School of Design</span>
                  </div>
                  <p className="text-sm font-medium text-neutral-800 mb-1">Master in Design</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Graduated with distinction. My earlier training in environmental and
                    spatial design continues to inform my systems thinking and approach to
                    human behavior.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-neutral-100">
            <h2 className="font-display text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">
              What I bring
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Product vision and problem framing",
                "Consumer community and engagement",
                "Systems and interaction design",
                "Experimentation and data-informed decisions",
                "Cross-functional influence",
                "AI-enabled design workflows",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-neutral-700 bg-neutral-50 border border-neutral-100 px-3 py-2 rounded-xl"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-neutral-100">
            <h2 className="font-display text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">
              Get in touch
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:jingguo1908@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-accent transition-colors duration-200"
              >
                jingguo1908@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/jingguodesign"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-accent transition-colors duration-200"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
