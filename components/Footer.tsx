export default function Footer() {
  return (
    <footer className="border-t mt-24" style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(8,108,102,0.7)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
          Interested in my work?{" "}
          <span className="text-white font-medium">Let&apos;s get connected.</span>
        </p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:jingguo1908@gmail.com"
            className="text-sm hover:text-white transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/jingguodesign"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-white transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
