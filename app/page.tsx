"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Footer from "@/components/Footer";

const HOVER = { scale: 1.012, boxShadow: "0 8px 32px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)" };
const HOVER_SM = { scale: 1.018, boxShadow: "0 8px 24px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)" };
const HOVER_TRANSITION = { duration: 0.25, ease: [0.2, 0.8, 0.2, 1] as const };

const featured = {
  title: "Community Q&A",
  description:
    "Designed and scaled a 0→1 community-driven contribution model across multiple product surfaces at Yelp. Q&A volume reached 10% of Yelp's review volume by Q1 2026.",
  tags: ["0→1", "Community", "Scale"],
  href: "/work/community-qa",
  cover: "/images/CQA-cover-image.svg",
};

const projects = [
  {
    title: "Recognition & Motivation System",
    description:
      "Reward and feedback systems that form contribution and engagement behaviors — closing the loop between action and identity.",
    tags: ["Engagement", "Systems"],
    href: "/work/recognition",
    cover: "/images/Recogntion-cover-image.svg",
  },
  {
    title: "Elite Ecosystem Experiences",
    description:
      "Awareness campaigns, nomination flows, and ecosystem experiences reinforcing belonging and long-term retention.",
    tags: ["Community", "Campaigns"],
    href: "/work/elite",
    cover: "/images/Elite-cover-image.svg",
  },
  {
    title: "Year on Yelp",
    description:
      "Reflection-driven experiences that reinforce user identity through personalized annual summaries.",
    tags: ["Identity", "Engagement"],
    href: "/work/year-on-yelp",
    cover: "/images/YOY-cover-image.svg",
  },
];

const docAiProjects = [
  {
    title: "Smart Omix",
    category: "SaaS Web Design",
    description:
      "End-to-end product design for a decentralized clinical research platform — from user stories and flows to a scalable interface supporting researchers and participants.",
    tags: ["SaaS", "B2B", "Healthcare"],
    href: "/other-work/smart-omix",
    cover: "/images/Smart-omix.png",
  },
  {
    title: "Design System",
    category: "Design Systems",
    description:
      "Built a design system on top of Material UI, establishing brand consistency, component governance, and engineer-ready documentation using Storybook and Chromatic.",
    tags: ["Design System", "Material UI"],
    href: "/other-work/design-system",
    cover: "/images/Design-system.svg",
  },
];

function ArrowIcon({ size = "md" }: { size?: "md" | "sm" }) {
  const cls = size === "sm" ? "w-3.5 h-3.5 group-hover:translate-x-0.5" : "w-4 h-4 group-hover:translate-x-1";
  return (
    <svg className={`${cls} transition-transform duration-200`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const circleY = useTransform(scrollY, [0, 400], [0, -700]);

  return (
    <div ref={containerRef} className="min-h-screen pt-14 overflow-x-hidden px-4 sm:px-0">

      {/* Yellow circle */}
      <motion.div
        className="pointer-events-none select-none fixed z-0 rounded-full"
        style={{
          width: "66vw", height: "66vw",
          background: "var(--accent)",
          top: 0, left: 0,
          translateX: "calc(-38% + 300px)",
          translateY: circleY,
          marginTop: "-320px",
          filter: "blur(20px)",
        }}
        animate={{ scale: [1, 1.07, 1] }}
        transition={{ scale: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
      />

      {/* Hero */}
      <section className="relative z-10 max-w-[82vw] mx-auto pt-12 sm:pt-20 pb-14">
        <div className="overflow-hidden mb-1">
          <motion.p
            className="text-xs font-medium tracking-[0.25em] uppercase text-neutral-400 mb-5"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          >
            Portfolio · 2026
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl text-neutral-900 leading-none tracking-tight mb-6"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Hello,<br />I&apos;m Jing.
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="text-xl text-neutral-900 leading-relaxed max-w-xl flex items-center gap-2 flex-wrap">
            Lead Product Designer at
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Yelp%20Logo/Other.svg" alt="Yelp" style={{ height: "1.44em", marginLeft: "8px", position: "relative", top: "-2px" }} className="inline-block align-middle" />
          </p>
          <p className="text-xl text-neutral-900 leading-relaxed max-w-xl mt-3">
            Bringing strategic, systems-level thinking, identifying hidden opportunities, and designing scalable solutions. Building impactful products for the AI era by leveraging deep expertise in user engagement, user retention, and community building.
          </p>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="relative z-10 max-w-[82vw] mx-auto pb-24 space-y-4">
        <motion.p
          className="section-label mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Selected Work · Yelp
        </motion.p>

        {/* Featured card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <Link href={featured.href} className="group block">
            <motion.div className="card p-10" whileHover={HOVER} transition={HOVER_TRANSITION}>
              <div className="flex items-start justify-end mb-6">
                <div className="flex gap-2">
                  {featured.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
              <div className="flex flex-wrap items-start gap-8 mb-8">
                <div className="flex-1 min-w-[160px]">
                  <h2 className="text-3xl tracking-tight mb-3 leading-tight">
                    <span className="title-highlight px-2">{featured.title}</span>
                  </h2>
                  <p className="text-base text-neutral-600 leading-relaxed">
                    {featured.description}
                  </p>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={featured.cover} alt={featured.title} className="rounded-xl object-cover" style={{ width: "60%" }} />
              </div>
              <span className="cta-link">View case study <ArrowIcon /></span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Small cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Link href={project.href} className="group block h-full">
                <motion.div className="card h-full p-6 flex flex-col" whileHover={HOVER_SM} transition={HOVER_TRANSITION}>
                  <div className="flex items-start justify-end mb-4">
                    <div className="flex gap-1.5">
                      {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                  </div>
                  <h2 className="text-2xl text-neutral-900 mb-2 leading-snug">
                    <span className="title-highlight px-1.5">{project.title}</span>
                  </h2>
                  <p className="text-sm text-neutral-600 leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.cover} alt={project.title} className="w-full rounded-lg mb-5 object-cover" />
                  <span className="cta-link-sm">View case study <ArrowIcon size="sm" /></span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects in doc.ai */}
      <section className="relative z-10 max-w-[82vw] mx-auto pb-24 space-y-4">
        <motion.p
          className="section-label mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Selected Work · Doc.ai
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {docAiProjects.map((project, i) => (
            <motion.div
              key={project.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Link href={project.href} className="group block h-full">
                <motion.div className="card h-full p-10 flex flex-col" whileHover={HOVER} transition={HOVER_TRANSITION}>
                  <div className="flex justify-end mb-6 gap-1.5">
                    {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                  <p className="section-label mb-2">{project.category}</p>
                  <h2 className="text-2xl text-neutral-900 mb-3 leading-snug">
                    <span className="title-highlight px-2">{project.title}</span>
                  </h2>
                  <p className="text-base text-neutral-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.cover} alt={project.title} className="rounded-xl object-cover mb-6 mx-auto" style={{ width: "80%" }} />
                  <span className="cta-link">View project <ArrowIcon /></span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
