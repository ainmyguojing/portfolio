"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackToChat() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none" style={{ height: "15vh" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 0%, #EDEDED 60%)" }} />
      <div className="relative h-full flex items-center justify-center">
        <Link
          href="/"
          className="pointer-events-auto flex items-center gap-2 bg-[#2556F5] text-white text-sm font-medium px-5 py-3 rounded-full shadow-lg hover:bg-[#1a3fc2] transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to conversation
        </Link>
      </div>
    </div>
  );
}
