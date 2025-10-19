export const metadata = {
  title: "About | msdq",
};

export default function AboutPage() {
  return (
    <section className="py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">About</h1>
      <p className="mt-3 text-white/70 max-w-2xl">
        I’m Muhammad Siddique (msdq). CS student with strong applied AI/ML experience,
        pivoting into deep learning research. I enjoy building practical ML systems,
        contributing to open-source, and writing about the journey.
      </p>
      <div className="mt-6 text-sm text-white/60">
        <p>Resume: Coming soon</p>
      </div>
    </section>
  );
}
