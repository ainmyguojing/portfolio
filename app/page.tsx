"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

const featured = {
  title: "Community Q&A",
  description:
    "Designed and scaled a 0→1 community driven contribution model across multiple product surfaces at Yelp.",
  href: "/work/community-qa",
  cover: "/images/CQA-cover-image.svg",
};

const projects = [
  {
    title: "Recognition & Motivation System",
    description:
      "Designing various reward and feedback systems forming contribution and engagement behaviors.",
    href: "/work/recognition",
    cover: "/images/Recogntion-cover-image.svg",
  },
  {
    title: "Elite Ecosystem Experiences",
    description:
      "Designing awareness, campaigns, and nomination flows supporting status and community dynamics.",
    href: "/work/elite",
    cover: "/images/Elite-cover-image.svg",
  },
  {
    title: "Year on Yelp",
    description:
      "Designing reflection-driven experiences reinforcing user identity and long-term engagement.",
    href: "/work/year-on-yelp",
    cover: "/images/YOY-cover-image.svg",
  },
];

const docAiProjects = [
  {
    title: "Smart Omix",
    category: "SaaS Web Design",
    description:
      "End-to-end product design for a decentralized clinical research platform, from user stories and flows to a scalable interface supporting researchers and participants.",
    href: "/other-work/smart-omix",
    cover: "/images/Smart-omix.png",
  },
  {
    title: "Design System",
    category: "Design Systems",
    description:
      "Built a design system on top of Material UI, establishing brand consistency, component governance, and engineer-ready documentation using Storybook and Chromatic.",
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
  return (
    <div className="min-h-screen pt-14 overflow-x-hidden px-4 sm:px-0">
      {/* ─── Hero ─── */}
      <section className="relative z-10 max-w-[82vw] mx-auto pt-16 sm:pt-24 pb-8">
        <div className="relative">
          {/* Pink shape — upper half circle (dome up) + lower half circle (dome down, offset right) */}
          <div className="absolute pointer-events-none select-none" style={{ left: -60, top: -16 }}>
            {/* Upper half: flat bottom, dome up */}
            <div style={{
              width: 540, height: 270,
              borderRadius: "270px 270px 0 0",
              background: "#FF258E",
            }} />
            {/* Lower half: flat top, dome down — offset 140px right */}
            <div style={{
              width: 540, height: 270,
              borderRadius: "0 0 270px 270px",
              background: "#FF258E",
              marginLeft: 140,
              marginTop: 12,
            }} />
          </div>

          {/* Heading text */}
          <div className="relative z-10 pt-8 sm:pt-12">
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
                <div className="flex items-end gap-6">
                  <h1 className="text-5xl sm:text-7xl lg:text-8xl leading-none tracking-tight text-white">
                    I&apos;m Jing.
                  </h1>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 2.4 }}
                    className="pb-1 sm:pb-2"
                  >
                    <Link href="/about" className="inline-flex items-center gap-1.5 text-lg text-white transition-all duration-200 whitespace-nowrap group/link">
                      <span className="relative">
                        <span className="absolute left-0 right-0 bottom-0 rounded-sm opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" style={{ height: "2px", background: "#086C66" }} />
                        Read more about me →
                      </span>
                    </Link>
                  </motion.div>
                </div>
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
        >
          <p className="text-xl text-white leading-relaxed max-w-xl flex items-center gap-2 flex-wrap" style={{ marginTop: 12 }}>
            Lead Product Designer at
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Yelp%20Logo/Other.svg" alt="Yelp" style={{ height: "1.44em", marginLeft: "8px", position: "relative", top: "-2px" }} className="inline-block align-middle" />
          </p>
          <p className="text-xl leading-relaxed max-w-xl mt-3" style={{ color: "rgba(255,255,255,0.8)" }}>
            Specializing in contributor ecosystems and UGC engagement. 4+ years designing for Yelp&apos;s consumer contribution systems: from new user activation to long-term contributor retention.
          </p>
        </motion.div>
      </section>

      {/* ─── Featured — Community Q&A ─── */}
      {/* Pill IS the container — content can never overflow */}
      <motion.div
        className="mx-auto mt-40 py-16 sm:py-20 px-8 sm:px-16 overflow-hidden"
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
              </div>
              <span className="cta-link mt-6">View case study <ArrowIcon /></span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featured.cover} alt={featured.title} className="rounded-xl object-cover flex-1 min-w-0" style={{ marginRight: 40 }} />
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
                    <div className="flex items-center justify-center" style={{ height: 280 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={project.cover} alt={project.title} className="rounded-xl object-cover" style={{ width: "90%", maxHeight: "100%" }} />
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
