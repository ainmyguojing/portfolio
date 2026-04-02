"use client";

import { motion } from "framer-motion";
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
          <div className="flex items-baseline gap-4 mb-10">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-neutral-900">
              About.
            </h1>
            <a
              href="/Jing-Guo-Resume.pdf"
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

          {/* Timeline */}
          <div className="relative mb-10">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-200" />
            <div className="space-y-8">
              {/* Yelp */}
              <div className="flex gap-5">
                <div className="relative flex-shrink-0 w-3.5 h-3.5 rounded-full bg-accent mt-1" />
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm font-semibold text-neutral-900">Yelp</span>
                    <span className="text-xs text-neutral-400">Sep 2022 – present</span>
                  </div>
                  <p className="text-sm font-medium text-neutral-700 mb-1">Lead Product Designer, Consumer Contribution</p>
                  <p className="text-sm text-neutral-500 leading-relaxed">Designing for user contribution, engagement, and contributor retention at scale. Projects include Community Q&A (0→1), reactions, comments, and Year on Yelp. My focus is turning passive users into active contributors, building the systems and moments that make people want to give back to the community.</p>
                </div>
              </div>
              {/* Doc.ai */}
              <div className="flex gap-5">
                <div className="relative flex-shrink-0 w-3.5 h-3.5 rounded-full bg-neutral-300 mt-1" />
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm font-semibold text-neutral-900">Doc.ai</span>
                    <span className="text-xs text-neutral-400">Oct 2021 – Sep 2022</span>
                  </div>
                  <p className="text-sm font-medium text-neutral-700 mb-1">Product Designer, SaaS</p>
                  <p className="text-sm text-neutral-500 leading-relaxed">Sole designer on Smart Omix, a 0→1 SaaS platform for end-to-end digital clinical research. Led the full design lifecycle from user stories and architecture to launch. Also initiated and maintained the design system and SaaS design guide used across all web products.</p>
                </div>
              </div>
              {/* Harvard */}
              <div className="flex gap-5">
                <div className="relative flex-shrink-0 w-3.5 h-3.5 rounded-full bg-neutral-300 mt-1" />
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm font-semibold text-neutral-900">Harvard University</span>
                    <span className="text-xs text-neutral-400">Graduate School of Design</span>
                  </div>
                  <p className="text-sm font-medium text-neutral-700 mb-1">Master in Design</p>
                  <p className="text-sm text-neutral-500 leading-relaxed">Graduated with distinction. Work recognized through multiple awards and featured in exhibitions across various venues.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-neutral-600 leading-relaxed text-base">
            <p>
              I&apos;m driven by a vision for what&apos;s next, always scanning the horizon for emerging user needs and trends, then shaping those insights into clear, actionable plans. I love turning ambiguity into opportunity: when the path isn&apos;t obvious, I bring strong product thinking and a structured approach to evaluate options and set direction, ensuring every design choice ladders up to something bigger.
            </p>
            <p>
              Working with AI has only sharpened my sense of how design can shape, not just serve, future experiences. I believe tools should amplify our best thinking, not dictate it; I&apos;m quick to learn and adapt, always seeking out new technologies that support my core tasks instead of leading them.
            </p>
            <p>
              At the core of how I work is how I connect with people. Whether brainstorming with a team, responding to feedback, or mapping out a shared goal, I care deeply about building trust and communicating clearly and thoughtfully. Great products, after all, are built through collaboration and respect.
            </p>
            <p>
              Ultimately, I design for impact: seeing possibilities where others see uncertainty, bringing ideas to life at scale, and building communities and products that truly thrive in this new era.
            </p>
          </div>

          <div className="mt-12 pt-10 border-t border-neutral-100">
            <h2 className="font-display text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">
              What I bring
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Strategic planning & problem framing",
                "Storytelling & effective communication",
                "Data-driven decision making",
                "User research & empathy",
                "0→1 product design",
                "Design systems",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-neutral-600 bg-neutral-50 border border-neutral-100 px-3 py-2 rounded-xl"
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
