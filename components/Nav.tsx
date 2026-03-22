"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200/60" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
      <nav className="max-w-[82vw] mx-auto px-4 sm:px-0 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight hover:text-accent transition-colors duration-200"
        >
          Jing Guo
        </Link>
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-neutral-900 font-medium"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
