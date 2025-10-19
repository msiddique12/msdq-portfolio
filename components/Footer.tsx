import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-16">
      <Container>
        <div className="flex items-center justify-between text-sm text-white/60">
          <p>© {new Date().getFullYear()} msdq</p>
          <p className="hidden sm:block">Built with Next.js • Deployed on Netlify</p>
        </div>
      </Container>
    </footer>
  );
}
