"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HOVER_LG = { scale: 1.012, boxShadow: "0 2px 12px rgba(0,0,0,0.03)" };
const HOVER_SM = { scale: 1.018, boxShadow: "0 2px 12px rgba(0,0,0,0.03)" };
const HOVER_TRANSITION = { duration: 0.25, ease: [0.2, 0.8, 0.2, 1] as const };

const featured = [
  {
    title: "Smart Omix",
    category: "SaaS Web Design",
    description:
      "End-to-end product design for a decentralized clinical research platform — from user stories and flows to a scalable interface supporting researchers and participants.",
    tags: ["SaaS", "B2B", "Healthcare"],
    href: "/other-work/smart-omix",
  },
  {
    title: "Design System",
    category: "Design Systems",
    description:
      "Built a design system on top of Material UI, establishing brand consistency, component governance, and engineer-ready documentation using Storybook and Chromatic.",
    tags: ["Design System", "Material UI"],
    href: "/other-work/design-system",
  },
];

const others = [
  {
    title: "Parks Togo",
    category: "Consumer Mobile App",
    description:
      "Mobile app helping users find suitable parks and navigate amenities based on their planned activities.",
    tags: ["Mobile", "Consumer", "Maps"],
    href: "/other-work/parks-togo",
  },
  {
    title: "Xiggit",
    category: "Consumer Mobile App",
    description:
      "Redesigned onboarding for a fintech app targeting low-income users — building trust, reducing friction, and increasing enrollment.",
    tags: ["Mobile", "Fintech", "Onboarding"],
    href: "/other-work/xiggit",
  },
  {
    title: "Style Shop",
    category: "eCommerce Web App",
    description:
      "UX redesign for a home decor eCommerce platform — enabling budget-conscious customers to browse curated looks and track costs.",
    tags: ["eCommerce", "Web", "UX Research"],
    href: "/other-work/style-shop",
  },
];

export default function OtherWork() {
  return (
    <div className="min-h-screen pt-14">
      <section className="max-w-[82vw] mx-auto pt-16 pb-24 space-y-16">

        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl text-neutral-900 mb-4 tracking-tight">
            Other Work.
          </h1>
          <p className="text-lg text-neutral-600 max-w-xl leading-relaxed">
            Projects spanning SaaS, mobile apps, design systems, and eCommerce — earlier work that
            shaped how I think about product design.
          </p>
        </motion.div>

        {/* Section: Projects in doc.ai */}
        <div className="space-y-4">
          <motion.p
            className="section-label mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Projects in doc.ai
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featured.map((project, i) => (
              <motion.div
                key={project.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Link href={project.href} className="group block h-full">
                  <motion.div className="card h-full p-10 flex flex-col" whileHover={HOVER_LG} transition={HOVER_TRANSITION}>
                    <div className="flex justify-end mb-6 gap-1.5">
                      {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                    <p className="section-label mb-2">{project.category}</p>
                    <h2 className="text-2xl text-neutral-900 mb-3 leading-snug">
                      <span className="title-highlight px-2">{project.title}</span>
                    </h2>
                    <p className="text-base text-neutral-600 leading-relaxed flex-1 mb-6">
                      {project.description}
                    </p>
                    <span className="cta-link">
                      View project
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section: Other Works */}
        <div className="space-y-4">
          <motion.p
            className="section-label mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Other Works
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {others.map((project, i) => (
              <motion.div
                key={project.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Link href={project.href} className="group block h-full">
                  <motion.div className="card h-full p-6 flex flex-col" whileHover={HOVER_SM} transition={HOVER_TRANSITION}>
                    <div className="flex justify-end mb-4 gap-1.5">
                      {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                    <p className="section-label mb-2">{project.category}</p>
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
              </motion.div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
