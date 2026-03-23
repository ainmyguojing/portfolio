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
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-neutral-900 mb-10">
            About.
          </h1>

          <div className="space-y-6 text-neutral-600 leading-relaxed text-base">
            <p>
              I&apos;m Jing Guo, Lead Product Designer at{" "}
              <span className="text-neutral-900 font-medium">Yelp</span>.
            </p>
            <p>
              I&apos;m driven by a vision for what&apos;s next—always scanning the horizon for emerging user needs and trends, then shaping those insights into clear, actionable plans. I love turning ambiguity into opportunity: when the path isn&apos;t obvious, I bring strong product thinking and a structured approach to evaluate options and set direction, ensuring every design choice ladders up to something bigger.
            </p>
            <p>
              Working with AI has only sharpened my sense of how design can shape—not just serve—future experiences. I believe tools should amplify our best thinking, not dictate it; I&apos;m quick to learn and adapt, always seeking out new technologies that support my core tasks instead of leading them.
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
                "Workshop facilitation & leadership",
                "Cross-functional collaboration & stakeholder management",
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
