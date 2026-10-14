"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackToChat() {
  const pathname = usePathname();
  const isChat = pathname === "/chat";
  const isHome = pathname === "/";

  if (!isHome || isChat) return null;

  return (
    <Link
      href="/chat"
      className="fixed left-1/2 z-50 flex max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-[#FF258E] px-5 py-3 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
      style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
    >
      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      Switch to conversational mode
    </Link>
  );
}
