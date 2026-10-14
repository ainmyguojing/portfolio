"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
  const [isMobileVisible, setIsMobileVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsMobileVisible(false);
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;

      if (Math.abs(difference) < 6) return;

      setIsMobileVisible(difference < 0);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ];

  if (isChat) {
    return (
      <Link
        href="/"
        className="fixed left-1/2 top-4 z-50 -translate-x-1/2 whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
        style={{
          background: "rgba(255,37,142,0.92)",
          border: "1px solid rgba(255,255,255,0.24)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow: "0 10px 28px rgba(0,65,61,0.24), inset 0 1px 0 rgba(255,255,255,0.22)",
        }}
      >
        Switch to classic view
      </Link>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-transform duration-300 ease-out sm:translate-y-0 ${isMobileVisible ? "translate-y-0" : "-translate-y-full"}`}
      style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(8,108,102,0.85)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
    >
      <nav className="max-w-[82vw] mx-auto px-4 sm:px-0 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-white hover:text-[#FF258E] transition-colors duration-200"
        >
          Jing Guo
        </Link>
        <div className="flex items-center gap-6">
          {navItems.map((item) => {
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
        </div>
      </nav>
    </header>
  );
}
