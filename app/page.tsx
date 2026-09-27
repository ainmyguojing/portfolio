"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import Footer from "@/components/Footer";

const featured = {
  title: "Community Q&A",
  description:
    "Conceived, validated, and scaled a new community contribution model that expands UGC, keeps local content fresh, and supports SEO and AI-powered experiences.",
  tags: ["Community Products", "Growth", "Conversational UX"],
  href: "/work/community-qa",
  cover: "/images/CQA-cover-image.svg",
};

const projects = [
  {
    title: "Recognition & Motivation System",
    description:
      "Designed a connected system of feedback, recognition, and progress that encourages contributors to return and deepen their participation.",
    tags: ["Engagement", "Retention", "Systems Design"],
    href: "/work/recognition",
    cover: "/images/Recogntion-cover-image.svg",
  },
  {
    title: "Elite Ecosystem Experiences",
    description:
      "Improved the journey from awareness and nomination to status development, strengthening the funnel of growing Elite community.",
    tags: ["Community", "Identity", "Lifecycle Design"],
    href: "/work/elite",
    cover: "/images/Elite-cover-image.svg",
  },
  {
    title: "Year on Yelp",
    description:
      "Created a personalized reflection experience that celebrates individual impact and reinforces long-term contributor identity.",
    tags: ["Personalization", "Retention", "Identity"],
    href: "/work/year-on-yelp",
    cover: "/images/Year%20on%20Yelp/Year%20on%20Yelp.png",
  },
];

const docAiProjects = [
  {
    title: "Smart Omix",
    category: "SaaS Web Design",
    description:
      "Led end-to-end product design for a clinical-research SaaS platform, translating complex workflows into a cohesive web and mobile experience.",
    href: "/other-work/smart-omix",
    cover: "/images/Smart-omix.png",
  },
  {
    title: "Design System",
    category: "Design Systems",
    description:
      "Built a Material UI-based design system with shared components, governance, and engineer-ready documentation for Doc.ai’s SaaS products.",
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
  const [videoH, setVideoH] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div className="min-h-screen pt-14 overflow-x-hidden px-4 sm:px-0">
      {/* ─── Hero ─── */}
      <section className="relative z-10 max-w-[82vw] mx-auto pt-16 sm:pt-24 pb-8">
        <div className="relative">
          {/* Pink shape — upper half circle (dome up) + lower half circle (dome down, offset right) */}
          <div className="absolute pointer-events-none select-none" style={{ left: -60, top: -16 }}>
            {/* Upper half: flat bottom, dome up */}
            <div style={{
              width: 486, height: 243,
              borderRadius: "243px 243px 0 0",
              background: "#FF258E",
            }} />
            {/* Lower half: flat top, dome down — offset right */}
            <div style={{
              width: 486, height: 243,
              borderRadius: "0 0 243px 243px",
              background: "#FF258E",
              marginLeft: 230,
              marginTop: 12,
            }} />
          </div>

          {/* Heading text */}
          <div className="relative z-10 pt-2 sm:pt-4">
            <div style={{ overflow: "hidden", paddingBottom: "0.1em" }}>
              <motion.div
                initial={{ y: "-110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0, 0, 0.2, 1], delay: 0 }}
              >
                <h1 className="text-5xl sm:text-7xl lg:text-8xl leading-none tracking-tight text-white">
                  Hello,
                </h1>
              </motion.div>
            </div>
            <div style={{ overflow: "hidden", paddingBottom: "0.25em" }}>
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0, 0, 0.2, 1], delay: 1.1 }}
              >
                <h1 className="text-5xl sm:text-7xl lg:text-8xl leading-none tracking-tight text-white">
                  I&apos;m Jing.
                </h1>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <motion.div
          className="relative z-10 mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          style={{ marginLeft: 245 }}
        >
          <p className="text-xl text-white leading-relaxed max-w-xl flex items-center gap-2 flex-wrap" style={{ marginTop: 32 }}>
            I&apos;m a Lead Product Designer at
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Yelp%20Logo/Other.svg" alt="Yelp" style={{ height: "1.44em", marginLeft: "8px", position: "relative", top: "-2px" }} className="inline-block align-middle" />
          </p>
          <p className="text-xl leading-relaxed max-w-xl mt-3 text-white">
            Specializing in consumer products and community ecosystems.
          </p>
          <p className="text-xl leading-relaxed max-w-2xl mt-0.5 text-white">
            I lead work from early strategy and validation through launch and growth.
          </p>
          <p className="text-xl leading-relaxed max-w-2xl mt-0.5 text-white">
            I design experiences to turn participation into lasting engagement.
          </p>
        </motion.div>
      </section>

      {/* ─── View my work / About me ─── */}
      <motion.section
        className="relative z-10 max-w-[82vw] mx-auto pb-10 flex items-center gap-12"
        style={{ paddingTop: 86 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 3.0 }}
      >
        <a href="#selected-work" className="group relative inline-flex items-center text-base font-medium text-white transition-colors duration-200" style={{ height: 40 }}>
          <span
            className="absolute left-0 top-0 bottom-0 transition-all duration-300 ease-out"
            style={{ width: 20, borderRadius: "0 9999px 9999px 0", background: "#FF258E" }}
            ref={(el) => {
              if (!el) return;
              const parent = el.parentElement!;
              parent.onmouseenter = () => { el.style.width = `${parent.offsetWidth + 16}px`; el.style.borderRadius = "0 9999px 9999px 0"; };
              parent.onmouseleave = () => { el.style.width = "20px"; };
            }}
          />
          <span className="relative z-10 pl-7 pr-6">View my work ↓</span>
        </a>
        <Link href="/about" className="group relative inline-flex items-center text-base font-medium text-white transition-colors duration-200" style={{ height: 40 }}>
          <span
            className="absolute left-0 top-0 bottom-0 transition-all duration-300 ease-out"
            style={{ width: 20, borderRadius: "0 9999px 9999px 0", background: "#FF258E" }}
            ref={(el) => {
              if (!el) return;
              const parent = el.parentElement!;
              parent.onmouseenter = () => { el.style.width = `${parent.offsetWidth + 16}px`; el.style.borderRadius = "0 9999px 9999px 0"; };
              parent.onmouseleave = () => { el.style.width = "20px"; };
            }}
          />
          <span className="relative z-10 pl-7 pr-6">About me →</span>
        </Link>
      </motion.section>

      {/* ─── Selected Work · Yelp ─── */}
      <section id="selected-work" className="relative z-10 max-w-[82vw] mx-auto pt-8">
        <motion.p
          className="section-label mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.6 }}
        >
          Selected Work · Yelp
        </motion.p>
      </section>

      {/* ─── Featured — Community Q&A ─── */}
      {/* Pill IS the container — content can never overflow */}
      <motion.div
        className="mx-auto mt-6 py-16 sm:py-20 px-8 sm:px-16 overflow-hidden"
        style={{
          background: "#0C8F87",
          borderRadius: 9999,
          maxWidth: "calc(82vw + 60px)",
          marginLeft: "calc((100vw - 82vw) / 2 - 60px)",
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <Link href={featured.href} className="group block">
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <div className="flex-shrink-0 sm:w-[32%] flex flex-col justify-between sm:pl-4">
              <div>
                <h2 className="text-3xl tracking-tight mb-3 leading-tight text-white">
                  {featured.title}
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {featured.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
              <span className="cta-link mt-6">View case study <ArrowIcon /></span>
            </div>
            <div className="flex-1 min-w-0 flex gap-1 items-start" style={{ marginRight: 40, height: 320, "--media-h": "320px" } as React.CSSProperties}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Community%20Q%26A/Comp%201_2.gif"
                alt="Community Q&A interaction"
                style={{
                  height: "100%",
                  width: "auto",
                  flexShrink: 0,
                  clipPath: "inset(0.5% 2.5% 0.5% 2.5% round calc(var(--media-h) * 0.08))",
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Community%20Q%26A/CQA_desktop.png"
                alt="Community Q&A desktop view"
                className="rounded-xl object-contain"
                style={{ height: "100%", width: "auto" }}
              />
            </div>
          </div>
        </Link>
      </motion.div>

      {/* ─── Three project cards with equal domes ─── */}
      <section className="relative z-10 max-w-[82vw] mx-auto pb-24 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.href}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.5 + i * 0.12, ease: [0, 0, 0.2, 1] }}
            >
              <Link href={project.href} className="group block h-full">
                <motion.div
                  className="flex flex-col h-full"
                  style={{
                    background: "#0C8F87",
                    borderRadius: "9999px 9999px 24px 24px",
                  }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  {/* Image area — inside the arch top */}
                  <div className="px-6 pb-4" style={{ paddingTop: 64 }}>
                    <div className="relative flex items-center justify-center" style={{ height: 280 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={project.cover} alt={project.title} className="rounded-xl object-contain" style={{ width: "90%", maxHeight: "100%" }} />
                      {project.href === "/work/year-on-yelp" && (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src="/images/Year%20on%20Yelp/phone-screen.gif"
                          alt=""
                          className="absolute rounded-md"
                          style={{ height: "78.5%", top: "11%", left: "50%", transform: "translateX(-50%)", clipPath: "inset(8px 0 0 0)" }}
                        />
                      )}
                    </div>
                  </div>
                  {/* Text area — inside the shape */}
                  <div className="px-8 pb-8 flex flex-col flex-1">
                    <h2 className="text-lg font-medium text-white mb-2 leading-snug">
                      {project.title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)", minHeight: 60 }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                    <span className="cta-link-sm">View case study <ArrowIcon size="sm" /></span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Doc.ai projects ─── */}
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
                <motion.div
                  className="h-full flex flex-col items-center relative"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  {/* Circle background — contains image + text, image overflows */}
                  <div className="relative flex flex-col items-center" style={{ width: "85%" }}>
                    <div className="absolute rounded-full" style={{ background: "#0C8F87", width: "100%", aspectRatio: "1 / 1", top: 0, left: 0 }} />
                    {/* Image — overflows the circle */}
                    <div className="relative z-10 flex items-center justify-center" style={{ paddingTop: 40, height: 300 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={project.cover} alt={project.title} className="rounded-xl object-contain" style={{ width: "110%", maxHeight: "100%" }} />
                    </div>
                    {/* Text — inside the circle */}
                    <div className="relative z-10 px-6 pt-4 pb-8" style={{ maxWidth: "90%" }}>
                      <p className="section-label mb-2">{project.category}</p>
                      <h2 className="text-2xl text-white mb-3 leading-snug">
                        {project.title}
                      </h2>
                      <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)", minHeight: 72 }}>
                        {project.description}
                      </p>
                      <span className="cta-link">View project <ArrowIcon /></span>
                    </div>
                  </div>
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
