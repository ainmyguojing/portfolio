export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/60 mt-24" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">
          Interested in my work?{" "}
          <span className="text-neutral-900 font-medium">Let&apos;s get connected.</span>
        </p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:jingguo1908@gmail.com"
            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/jingguodesign"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
