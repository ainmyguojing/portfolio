"use client";

import { motion } from "framer-motion";

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
              I&apos;m Jing Guo, a Lead Product Designer at{" "}
              <span className="text-neutral-900 font-medium">Yelp</span>, where I focus on
              user contribution, engagement, and community ecosystems at scale. I care about
              designing systems that turn passive users into active contributors — from 0→1
              products to scaled, living ecosystems.
            </p>
            <p>
              Before Yelp, I worked in SaaS — designing complex B2B products in healthcare
              and enterprise software. That experience gave me a deep appreciation for
              information architecture, state management, and designing for users with
              radically different levels of expertise.
            </p>
            <p>
              I think of design as a balance between restraint and expression. The best
              interfaces feel inevitable — like they couldn&apos;t have been built any other way.
              Getting there usually requires throwing away the first three ideas.
            </p>
          </div>

          <div className="mt-12 pt-10 border-t border-neutral-100">
            <h2 className="font-display text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">
              What I work with
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Figma", "Framer", "Webflow",
                "Design Systems", "UX Research", "Prototyping",
                "Material UI", "Storybook", "Interaction Design",
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
    </div>
  );
}
