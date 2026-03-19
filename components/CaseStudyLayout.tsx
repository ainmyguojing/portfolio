"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  role: string;
  team: string;
  year: string;
  tags: string[];
  children: React.ReactNode;
}

export default function CaseStudyLayout({
  title,
  subtitle,
  role,
  team,
  year,
  tags,
  children,
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen pt-14">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12">
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

          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-neutral-700 px-2.5 py-1 rounded-full font-medium"
                style={{ background: "rgba(255,255,255,0.7)", border: "1.5px solid var(--accent)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-neutral-700 leading-relaxed mb-10">{subtitle}</p>

          {/* Meta row */}
          <div className="grid grid-cols-3 gap-6 py-6 border" style={{ borderColor: "var(--accent)", borderRadius: 10, paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "rgba(255,255,255,0.7)" }}>
            <div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest mb-1">Role</p>
              <p className="text-sm text-neutral-700 font-medium">{role}</p>
            </div>
            <div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest mb-1">Team</p>
              <p className="text-sm text-neutral-700 font-medium">{team}</p>
            </div>
            <div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest mb-1">Year</p>
              <p className="text-sm text-neutral-700 font-medium">{year}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <motion.section
        className="max-w-3xl mx-auto px-6 pb-24"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="prose prose-neutral max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:text-neutral-600 prose-p:leading-relaxed prose-li:text-neutral-600 prose-strong:text-neutral-900">
          {children}
        </div>
      </motion.section>
    </div>
  );
}
