import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-text px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <a href="#">
            <Logo light />
          </a>

          <nav className="flex flex-wrap justify-center gap-6">
            {["Services", "Pricing", "Reviews", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
            <a
              href="https://www.thumbtack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Thumbtack
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          <p>&copy; 2026 Trusty Rusty. Sacramento, CA.</p>
          <p className="mt-1">
            Licensed handyman services for jobs under $500 per California law.
          </p>
        </div>
      </div>
    </footer>
  );
}
