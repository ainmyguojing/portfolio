"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackToChat() {
  const pathname = usePathname();
  const isChat = pathname === "/chat";

  if (isChat) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none" style={{ height: "15vh" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 0%, #EDEDED 60%)" }} />
      <div className="relative h-full flex items-center justify-center">
        <Link
          href="/chat"
          className="pointer-events-auto flex items-center gap-2 bg-[#2556F5] text-white text-sm font-medium px-5 py-3 rounded-full shadow-lg hover:bg-[#1a3fc2] transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Switch to conversational mode
        </Link>
      </div>
    </div>
  );
}
