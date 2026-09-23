"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function HalfCircleBracket({ side }: { side: "left" | "right" }) {
  const r = side === "left"
    ? "9999px 0 0 9999px"
    : "0 9999px 9999px 0";
  return (
    <span
      className="inline-block"
      style={{
        width: 10,
        height: 20,
        borderRadius: r,
        background: "#FF258E",
        verticalAlign: "middle",
      }}
    />
  );
}

export default function Nav() {
  const pathname = usePathname();
  const isChat = pathname === "/chat";

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b" style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(8,108,102,0.85)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
      <nav className="max-w-[82vw] mx-auto px-4 sm:px-0 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-white hover:text-[#FF258E] transition-colors duration-200"
        >
          Jing Guo
        </Link>
        <div className="flex items-center gap-6">
          {!isChat && navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.replace("/#projects", ""));
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm transition-colors duration-200 inline-flex items-center gap-1.5 hover:text-white"
                style={{ color: isActive ? "white" : "rgba(255,255,255,0.7)" }}
              >
                {isActive && <HalfCircleBracket side="left" />}
                <span>{item.label}</span>
                {isActive && <HalfCircleBracket side="right" />}
              </Link>
            );
          })}
          {isChat && (
            <Link
              href="/"
              className="text-sm font-medium text-white px-4 py-1.5 rounded-full hover:brightness-110 transition-all duration-200"
              style={{ background: "#FF258E" }}
            >
              Switch to classic view
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
