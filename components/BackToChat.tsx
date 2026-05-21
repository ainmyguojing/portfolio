"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackToChat() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <Link
      href="/"
      className="fixed bottom-[25vh] right-6 z-50 flex items-center gap-2 bg-[#2556F5] text-white text-sm font-medium px-4 py-3 rounded-full shadow-lg hover:bg-[#1a3fc2] transition-colors duration-200"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>
      Back to conversation
    </Link>
  );
}
