export const metadata = {
  title: "Contact | msdq",
};

export default function ContactPage() {
  return (
    <section className="py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-3 text-white/70 max-w-2xl">
        Open to opportunities and collaborations. Reach out via email or socials.
      </p>
      <ul className="mt-6 space-y-2 text-sm">
        <li>
          <a href="mailto:you@example.com" className="text-[--accent] hover:opacity-80">
            you@example.com
          </a>
        </li>
        <li>
          <a href="#" className="text-[--accent] hover:opacity-80">GitHub</a>
        </li>
        <li>
          <a href="#" className="text-[--accent] hover:opacity-80">LinkedIn</a>
        </li>
        <li>
          <a href="#" className="text-[--accent] hover:opacity-80">Twitter/X</a>
        </li>
      </ul>
    </section>
  );
}
