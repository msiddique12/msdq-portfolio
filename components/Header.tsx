import Link from "next/link";
import Container from "@/components/Container";

const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full overflow-x-clip border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <Container size="lg">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
            <span className="hidden sm:inline">Muhammad Siddique</span>
            <span className="sm:hidden">M. Siddique</span>
          </Link>
          <nav className="flex items-center gap-2 sm:gap-4 md:gap-7 text-base sm:text-xl md:text-2xl">
            {/* Social icons - hidden on mobile */}
            <a href="https://github.com/msiddique12" aria-label="GitHub" className="hidden sm:inline-flex group h-11 w-11 items-center justify-center rounded-md border border-white/15 hover:border-white/30 hover:bg-white/5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white/80 group-hover:text-white">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.84 9.68.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.68-2.78.62-3.37-1.2-3.37-1.2-.46-1.2-1.13-1.52-1.13-1.52-.93-.65.07-.64.07-.64 1.02.07 1.56 1.07 1.56 1.07.91 1.59 2.39 1.13 2.97.86.09-.68.36-1.13.65-1.39-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.73 0 0 .85-.28 2.78 1.05.81-.23 1.68-.35 2.55-.35.87 0 1.74.12 2.55.35 1.93-1.33 2.78-1.05 2.78-1.05.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.74 0 3.95-2.34 4.82-4.57 5.08.37.33.69.98.69 1.98 0 1.43-.01 2.58-.01 2.93 0 .26.18.58.68.48A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/msdq" aria-label="LinkedIn" className="hidden sm:inline-flex group h-11 w-11 items-center justify-center rounded-md border border-white/15 hover:border-white/30 hover:bg-white/5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white/80 group-hover:text-white">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7 0h3.83v1.97h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.66 4.8 6.11V23h-4v-6.49c0-1.55-.03-3.55-2.17-3.55-2.18 0-2.51 1.7-2.51 3.44V23h-4V8.5z"/>
              </svg>
            </a>
            {/* Divider - hidden on mobile */}
            <div className="hidden sm:block h-6 w-px bg-white/15" />
            {/* Nav links */}
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:underline underline-offset-4 decoration-white/30"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
