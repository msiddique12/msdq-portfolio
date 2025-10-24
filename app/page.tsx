"use client";
import Link from "next/link";
import Container from "@/components/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ExperienceSection = dynamic(() => import("@/components/ExperienceSection"), {
  loading: () => <div className="py-24 text-center text-white/50">Loading...</div>,
});

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden py-6 sm:py-12 pb-20 sm:pb-32">
        <div className="ml-grid" aria-hidden="true" />
        <Container size="lg">
          {/* Greeting + bio on left, photo on right */}
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            {/* Left: Greeting + all bio text */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight gradient-text fade-in-up leading-tight">
                Hi, I&apos;m Muhammad
              </h1>
              <div className="mt-6 space-y-4">
                <p className="text-white/70 text-xl sm:text-2xl fade-in-up fade-in-up-1 leading-relaxed">
                  I&apos;m a CS student at UT Dallas graduating in December 2025. University of Texas at Dallas, exploring my path in engineering with a growing focus on AI/ML. Most recently, I interned as an SDE at Amazon in their AGI Foundations team, working on data collection, model training, and fine-tuning.
                </p>
                <p className="text-white/70 text-xl sm:text-2xl fade-in-up fade-in-up-1 leading-relaxed">
                  While most of my experience is in applied AI/ML, I&apos;ve become increasingly fascinated by the underlying mechanics of neural networks and large language models, and that&apos;s where I hope to take the next phase of my journey.
                </p>
              </div>
              
              {/* CTAs under bio text */}
              <div className="mt-8 flex flex-wrap gap-3 fade-in-up fade-in-up-3">
                <Link
                  href="/projects"
                  className="group rounded-md bg-white/10 text-white px-5 py-2.5 text-base font-medium hover:bg-white/15 transition-all inline-flex items-center gap-2"
                >
                  View Projects
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </Link>
                <Link
                  href="/blog"
                  className="group rounded-md border border-white/15 text-white px-5 py-2.5 text-base font-medium hover:border-white/30 hover:bg-white/5 transition-all inline-flex items-center gap-2"
                >
                  Read Blog
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </div>

            {/* Right: Photo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full h-[400px] sm:h-[480px] md:h-[520px] rounded-xl border border-white/10 overflow-hidden"
            >
              <Image
                src="/mainphoto.jpg"
                alt="Photo of Muhammad Siddique"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
              />
            </motion.div>
          </div>
        </Container>

        {/* Experience header teaser - clickable to scroll down */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-black/60 to-black pointer-events-none" />
        <motion.button
          onClick={() => {
            document.getElementById('experience-section')?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 pointer-events-auto group cursor-pointer"
        >
          <div className="flex flex-col items-center gap-3 px-8 py-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm group-hover:border-white/30 group-hover:bg-black/60 transition-all duration-300">
            <motion.h2 
              className="text-3xl sm:text-4xl font-semibold tracking-tight gradient-text"
            >
              Experience
            </motion.h2>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
              className="text-white/50 group-hover:text-white/70 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.button>
      </section>
      <div id="experience-section">
        <ExperienceSection />
      </div>
    </>
  );
}
