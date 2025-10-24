"use client";

import { useState, useRef } from "react";
import Container from "@/components/Container";
import { motion, useScroll, useTransform } from "framer-motion";

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  images: string[]; // urls
  tech: string;
};

const experiences: Experience[] = [
  {
    company: "Amazon",
    role: "SDE Intern, AGI Foundations",
    period: "May 2025 — Aug 2025",
    location: "Bellevue, WA",
    summary:
      "I interned at Amazon on the AGI Foundations team in Bellevue during Summer 2025, working on a platform that accelerates data collection for model training and fine-tuning. I made various enhancements to improve system performance and overall platform experience, and prototyped a natural language to SQL system using MCP. The experience was really valuable in seeing how things operate at scale in big tech + Seattle was great too.",
    bullets: [],
    images: [
      "/amzn1.jpeg",
      "/amzn2.jpg",
      "/amzn3.jpg",
    ],
    tech: "TypeScript, Java, Python, AWS, SQL, NoSQL, Model Context Protocol (MCP), Git",
  },
  {
    company: "Chandini & Co",
    role: "Software Developer (Capstone Project)",
    period: "Aug 2024 — Dec 2024",
    location: "Richardson, TX",
    summary:
      "Collaborated with Chandini & Co for my university capstone, developing an AI-powered admin dashboard for a campus safety platform. I built a chatbot interface and data visualizations that turned real-time student reports into meaningful insights. It was a great mix of technical depth and real-world impact.",
    bullets: [],
    images: [
      "/chandini.jpg",
    ],
    tech: "React.js, Node.js, JavaScript, HTML/CSS, Figma, Git",
  },
  {
    company: "Kyndryl",
    role: "Software Developer Intern, Applications Data & AI",
    period: "Jun 2024 — Aug 2024",
    location: "Dallas, TX",
    summary:
      "Spent the summer in Dallas working with Kyndryl's Application, Data, and AI division to build a career development platform powered by retrieval-augmented generation (RAG). I focused on backend development and using LLMs for orchestration, collaborating closely with other interns.",
    bullets: [],
    images: [
      "/k1.JPG",
      "/k2.JPG",
      "/k3.JPG",
    ],
    tech: "React.js, Node.js, Python, Azure, RAG, Git",
  },
];

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m8.59 16.59 1.41 1.41 6-6-6-6-1.41 1.41L13.17 12z" />
    </svg>
  );
}

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      className="py-16 sm:py-24 border-t border-white/10"
    >
      <Container size="lg">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl font-semibold tracking-tight gradient-text"
        >
          Experience
        </motion.h2>
        <div className="mt-16 space-y-20">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} idx={idx} />
          ))}
        </div>
      </Container>
    </motion.section>
  );
}

function ExperienceCard({ exp, idx }: { exp: Experience; idx: number }) {
  const [index, setIndex] = useState(0);
  const total = exp.images.length;
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.9]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);
  const onTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    const threshold = 40; // minimal px to trigger
    if (deltaX > threshold) prev();
    else if (deltaX < -threshold) next();
    setTouchStartX(null);
  };

  return (
    <motion.article
      ref={cardRef}
      style={{ y, opacity }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-8 md:grid-cols-2 md:gap-12 items-center"
    >
      {/* Text column - left side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={idx % 2 === 0 ? "md:order-1" : "md:order-2"}
      >
        <div className="space-y-3">
          <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">{exp.company}</h3>
          <div className="text-xl sm:text-2xl text-white/80">{exp.role}</div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-lg sm:text-xl text-white/60">
            <span>{exp.period}</span>
            <span className="text-white/40">•</span>
            <span>{exp.location}</span>
          </div>
        </div>
        <p className="mt-6 text-white/70 text-xl sm:text-2xl leading-relaxed">
          {exp.summary}
        </p>
        
        {/* Tech stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {exp.tech.split(', ').map((tech, i) => (
            <motion.span 
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ 
                scale: 1.1,
                y: -2,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                transition: { duration: 0.2 }
              }}
              className="px-3 py-1.5 rounded-lg bg-white/5 text-sm sm:text-base text-white/60 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Gallery - right side */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={idx % 2 === 0 ? "md:order-2" : "md:order-1"}
      >
        <div
          className="relative overflow-hidden rounded-xl border border-white/10 group hover:border-white/20 transition-colors aspect-[4/3]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <motion.img
            src={exp.images[index]}
            alt={`${exp.company} experience`}
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          
          {/* Navigation buttons - only show if multiple images */}
          {total > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md hover:border-white/40 hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md hover:border-white/40 hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </button>
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 backdrop-blur-md px-4 py-2 text-base text-white/90 border border-white/10">
                {index + 1} / {total}
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.article>
  );
}
