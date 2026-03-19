"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  tags: string[];
  href: string;
  accent?: string;
}

export default function ProjectCard({
  index,
  title,
  description,
  tags,
  href,
  accent = "#F97316",
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <Link href={href} className="group block">
        <motion.div
          className="bg-white rounded-2xl border border-neutral-100 p-7 shadow-card transition-all duration-300 ease-[cubic-bezier(.2,.8,.2,1)]"
          whileHover={{ y: -4, boxShadow: "0 4px 20px rgba(0,0,0,0.10), 0 20px 56px rgba(0,0,0,0.13)" }}
        >
          {/* Number + tags row */}
          <div className="flex items-center justify-between mb-5">
            <span
              className="font-display text-xs font-bold tracking-widest uppercase"
              style={{ color: accent }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-neutral-400 bg-neutral-50 px-2.5 py-1 rounded-full border border-neutral-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Title */}
          <h2 className="font-display text-xl font-bold text-neutral-900 mb-2 group-hover:text-accent transition-colors duration-200">
            {title}
          </h2>

          {/* Description */}
          <p className="text-sm text-neutral-500 leading-relaxed mb-6">{description}</p>

          {/* CTA */}
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 group-hover:text-accent transition-colors duration-200">
            View case study
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
