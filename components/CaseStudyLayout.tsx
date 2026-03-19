"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Subsection {
  id: string;
  title: string;
}

interface Section {
  id: string;
  title: string;
  divider?: string;
  subsections?: Subsection[];
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

const NAV_HEIGHT = 56; // px — height of the top nav bar

function scrollToDivider(dividerId: string | undefined, sectionId: string) {
  // Scroll so the divider above the section sits at the bottom of the nav bar.
  // If no divider, fall back to the section heading.
  const target = dividerId
    ? document.getElementById(dividerId)
    : document.getElementById(sectionId);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
  window.scrollTo({ top, behavior: "smooth" });
}

function SideIndex({ sections }: { sections: Section[] }) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const getActive = () => {
      // Active section = the one whose divider has just passed the bottom of the nav bar
      let current = sections[0].id;
      for (const section of sections) {
        const anchorId = section.divider ?? section.id;
        const el = document.getElementById(anchorId);
        if (el && el.getBoundingClientRect().top <= NAV_HEIGHT) {
          current = section.id;
        }
      }
      setActiveId(current);
    };

    getActive();
    window.addEventListener("scroll", getActive, { passive: true });
    return () => window.removeEventListener("scroll", getActive);
  }, [sections]);

  // Also track active subsection
  const allSubsections = sections.flatMap((s) => s.subsections ?? []);
  const [activeSubId, setActiveSubId] = useState<string>("");

  useEffect(() => {
    if (allSubsections.length === 0) return;
    const getActiveSub = () => {
      let current = "";
      for (const { id } of allSubsections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= NAV_HEIGHT + 40) {
          current = id;
        }
      }
      setActiveSubId(current);
    };
    getActiveSub();
    window.addEventListener("scroll", getActiveSub, { passive: true });
    return () => window.removeEventListener("scroll", getActiveSub);
  }, [allSubsections]);

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-1 z-20 hidden xl:flex">
      {sections.map((section) => {
        const isActive = activeId === section.id;
        return (
          <div key={section.id}>
            {/* Chapter row */}
            <a
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToDivider(section.divider, section.id);
              }}
              className="flex items-center gap-2.5 py-1"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  width: isActive ? 32 : 20,
                  height: isActive ? 2.5 : 2,
                  borderRadius: 2,
                  background: isActive ? "#171717" : "#d4d4d4",
                  transition: "width 0.25s ease, background 0.25s ease, height 0.25s ease",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#171717" : "#a3a3a3",
                  letterSpacing: "0.03em",
                  lineHeight: 1,
                  transition: "color 0.25s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {section.title}
              </span>
            </a>

            {/* Subsection rows — only visible when parent is active */}
            {section.subsections && isActive && (
              <div className="flex flex-col gap-2 ml-1 mt-0.5 mb-1">
                {section.subsections.map(({ id, title }) => {
                  const isSubActive = activeSubId === id;
                  return (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(id);
                        if (!el) return;
                        const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 16;
                        window.scrollTo({ top, behavior: "smooth" });
                      }}
                      className="flex items-center gap-2.5 py-0.5"
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={{
                          width: isSubActive ? 16 : 10,
                          height: 2,
                          borderRadius: 2,
                          background: isSubActive ? "#a3a3a3" : "#e5e5e5",
                          transition: "width 0.2s ease, background 0.2s ease",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: isSubActive ? 500 : 400,
                          color: isSubActive ? "#737373" : "#c4c4c4",
                          letterSpacing: "0.03em",
                          lineHeight: 1,
                          transition: "color 0.2s ease",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {title}
                      </span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
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
