"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isChatHome = pathname === "/";
  const isTraditional = pathname === "/traditional";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200/60" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
      <nav className="max-w-[82vw] mx-auto px-4 sm:px-0 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight hover:text-[#2556F5] transition-colors duration-200"
        >
          Jing Guo
        </Link>
        <div className="flex items-center gap-6">
          {isChatHome && (
            <Link
              href="/traditional"
              className="text-sm text-[#2556F5] hover:text-[#1a3fc2] transition-colors duration-200"
            >
              Switch to traditional mode
            </Link>
          )}
          {isTraditional && (
            <Link
              href="/"
              className="text-sm text-[#2556F5] hover:text-[#1a3fc2] transition-colors duration-200"
            >
              Switch to conversational mode
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
