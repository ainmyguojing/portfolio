"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

const ALL_PROJECTS = [
  {
    title: "Community Q&A",
    description: "Designed and scaled a 0→1 community-driven contribution model across multiple product surfaces at Yelp. Q&A volume reached 10% of Yelp's review volume by Q1 2026.",
    tags: ["0→1", "Community", "Scale"],
    href: "/work/community-qa",
    company: "Yelp",
  },
  {
    title: "Recognition & Motivation System",
    description: "Reward and feedback systems that form contribution and engagement behaviors — closing the loop between action and identity.",
    tags: ["Engagement", "Systems"],
    href: "/work/recognition",
    company: "Yelp",
  },
  {
    title: "Elite Ecosystem Experiences",
    description: "Awareness campaigns, nomination flows, and ecosystem experiences reinforcing belonging and long-term retention.",
    tags: ["Community", "Campaigns"],
    href: "/work/elite",
    company: "Yelp",
  },
  {
    title: "Year on Yelp",
    description: "Reflection-driven experiences that reinforce user identity through personalized annual summaries.",
    tags: ["Identity", "Engagement"],
    href: "/work/year-on-yelp",
    company: "Yelp",
    dividerAfter: true,
  },
  {
    title: "Smart Omix",
    description: "End-to-end product design for a decentralized clinical research platform — from user stories and flows to a scalable interface supporting researchers and participants.",
    tags: ["SaaS", "B2B", "Healthcare"],
    href: "/other-work/smart-omix",
    company: "Doc.ai",
  },
  {
    title: "Design System",
    description: "Built a design system on top of Material UI, establishing brand consistency, component governance, and engineer-ready documentation using Storybook and Chromatic.",
    tags: ["Design System", "Material UI"],
    href: "/other-work/design-system",
    company: "Doc.ai",
  },
];

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  role: string;
  team: string;
  year: string;
  tags: string[];
  sections?: Section[];
  currentHref?: string;
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
  const [visible, setVisible] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkVisibility = () => {
      const footer = document.querySelector("footer");
      if (!footer || !sidebarRef.current) return;
      const footerTop = footer.getBoundingClientRect().top;
      const sidebarBottom = sidebarRef.current.getBoundingClientRect().bottom;
      setVisible(sidebarBottom + 20 < footerTop);
    };
    checkVisibility();
    window.addEventListener("scroll", checkVisibility, { passive: true });
    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);

  useEffect(() => {
    const getActive = () => {
      const threshold = window.innerHeight * 0.4;
      let current = sections[0].id;
      for (const section of sections) {
        // Check divider first, then the section heading
        const dividerEl = section.divider ? document.getElementById(section.divider) : null;
        const sectionEl = document.getElementById(section.id);
        const dividerTop = dividerEl ? dividerEl.getBoundingClientRect().top : Infinity;
        const sectionTop = sectionEl ? sectionEl.getBoundingClientRect().top : Infinity;
        const triggerTop = Math.min(dividerTop, sectionTop);
        if (triggerTop <= threshold) {
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
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
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
    <div ref={sidebarRef} className={`fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-1 z-20 hidden xl:flex transition-opacity duration-300 ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
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
  currentHref,
  children,
}: CaseStudyLayoutProps) {
  const otherProjects = ALL_PROJECTS.filter((p) => p.href !== currentHref);
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

      {/* Footer with project carousel */}
      <footer style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }} className="border-t border-neutral-200/60 mt-0">
        <div className="max-w-[82vw] mx-auto px-0 pt-10 pb-4">
          <div className="flex items-center gap-3 mb-5">
            <p className="section-label">More Projects</p>
            <div className="flex items-center gap-1 ml-2">
              <button
                onClick={() => {
                  const el = document.getElementById("project-carousel");
                  if (el) el.scrollBy({ left: -320, behavior: "smooth" });
                }}
                className="w-7 h-7 flex items-center justify-center rounded-full border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-400 transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("project-carousel");
                  if (el) el.scrollBy({ left: 320, behavior: "smooth" });
                }}
                className="w-7 h-7 flex items-center justify-center rounded-full border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-400 transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
          <div id="project-carousel" className="flex gap-4 overflow-x-auto pb-6" style={{ scrollbarWidth: "none" }}>
            {otherProjects.map((project, i) => {
              const next = otherProjects[i + 1];
              const showDivider = next && project.company !== next.company;
              return (
                <div key={project.href} className="flex items-stretch gap-4 shrink-0">
                  <Link href={project.href} className="group block w-[28.8rem]">
                    <motion.div
                      className="card h-full p-6 flex flex-col"
                      whileHover={{ scale: 1.018, boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}
                      transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      <div className="flex justify-between mb-4 gap-1.5">
                        <span className="tag">{project.company}</span>
                        <div className="flex gap-1.5">
                          {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                        </div>
                      </div>
                      <h2 className="text-base text-neutral-900 mb-2 leading-snug">
                        <span className="title-highlight px-1.5">{project.title}</span>
                      </h2>
                      <p className="text-sm text-neutral-600 leading-relaxed flex-1 mb-5">
                        {project.description}
                      </p>
                      <span className="cta-link-sm">
                        View project
                        <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </motion.div>
                  </Link>
                  {showDivider && (
                    <div className="w-px bg-neutral-300 self-stretch shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
          <div className="border-t border-neutral-200 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-600">
              Interested in my work?{" "}
              <span className="text-neutral-900 font-medium">Let&apos;s get connected.</span>
            </p>
            <div className="flex items-center gap-5">
              <a href="mailto:jingguo1908@gmail.com" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200">Email</a>
              <a href="https://linkedin.com/in/jingguodesign" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
