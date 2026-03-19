"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Section {
  id: string;
  title: string;
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  role: string;
  team: string;
  year: string;
  tags: string[];
  sections?: Section[];
  children: React.ReactNode;
}

function SideIndex({ sections }: { sections: Section[] }) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const getActive = () => {
      const offset = 120;
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      setActiveId(current);
    };

    getActive();
    window.addEventListener("scroll", getActive, { passive: true });
    return () => window.removeEventListener("scroll", getActive);
  }, [sections]);

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-20 hidden xl:flex">
      {sections.map(({ id, title }) => {
        const isActive = activeId === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="flex items-center gap-2.5 group"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                width: isActive ? 28 : 16,
                height: 2,
                borderRadius: 2,
                background: isActive ? "var(--accent)" : "#d4d4d4",
                transition: "width 0.25s ease, background 0.25s ease",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "var(--accent)" : "#a3a3a3",
                letterSpacing: "0.03em",
                lineHeight: 1,
                transition: "color 0.25s ease, font-weight 0.25s ease",
                whiteSpace: "nowrap",
              }}
            >
              {title}
            </span>
          </a>
        );
      })}
    </div>
  );
}

export default function CaseStudyLayout({
  title,
  subtitle,
  role,
  team,
  year,
  tags,
  sections,
  children,
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen pt-14">
      {sections && sections.length > 0 && <SideIndex sections={sections} />}

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
                className="tag"
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
          <div className="grid grid-cols-3 gap-6 py-6 px-6 bg-white rounded-2xl border border-neutral-200">
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
