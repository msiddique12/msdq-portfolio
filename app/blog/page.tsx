"use client";
import Container from "@/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Post = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: string;
};

const posts: Post[] = [
  {
    title: "Breaking Barriers Hackathon",
    description:
      "My first hackathon experience at the Breaking Barriers Hackathon, where my team NEXXUS built LearnAI: a GenAI-powered learning platform that won the competition and was showcased at Innovate Americas.",
    date: "September 28, 2024",
    readTime: "5 min read",
    content: `
This past week, I participated in my first hackathon, the Breaking Barriers Hackathon sponsored by AWS, NVIDIA, AT&T, Anthropic, and TM Forum. My team, NEXXUS, was one of the 35 teams accepted to participate, and the event took place at the AT&T Innovation Studio.

The theme focused on using GenAI to support diversity, equity, and inclusion. Over the weekend, we built LearnAI, a personalized learning platform powered by Claude Haiku on AWS Bedrock. It processes educational materials like PDFs and textbooks and generates tailored learning content using RAG, with accessibility features built in.

After three days of work, we found out that we had made it to the top six finalists which was totally unexpected considering the level of competition we were up against. We presented to the finalist panel of judges(high level people from AWS, NVIDIA, TM Forum, and AT&T) and crazily enough, we ended up winning the entire hackathon.

A few days later, we had the coolest opportunity to attend the Innovate Americas conference where our project was presented on the main stage, in front of industry professionals from around the world. It was a surreal moment to see something we built in such a short time get recognized at that level.

Thanks to the judges and organizers for putting together a great event, and to my teammates Manvir Chakal and Tousif Ahsan for making it such a fun and productive weekend.
    `,
  },
];

export default function BlogPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden min-h-screen">
      <div className="ml-grid" aria-hidden="true" />

      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight gradient-text">
            Blog
          </h1>
          <p className="mt-8 text-white/70 text-xl sm:text-2xl leading-relaxed">
            Notes, write-ups, and reflections.
          </p>
        </motion.div>

        <div className="mt-12 sm:mt-16 space-y-6">
          {posts.map((post, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <motion.article
                key={idx}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => toggleExpand(idx)}
                className={`rounded-2xl border border-white/10 p-8 sm:p-10 cursor-pointer hover:border-white/30 hover:bg-white/[0.02] transition-all group ${
                  isExpanded ? "bg-white/[0.03]" : ""
                }`}
              >
                <motion.div layout="position">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm sm:text-base text-white/60">
                      {post.date}
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="text-sm sm:text-base text-white/60">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-semibold group-hover:text-white transition-colors">
                    {post.title}
                  </h2>

                  <p className="mt-4 text-lg sm:text-xl text-white/70 leading-relaxed">
                    {post.description}
                  </p>
                </motion.div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="mt-6 border-t border-white/10 pt-6">
                        <p className="whitespace-pre-line text-white/70 text-lg leading-relaxed">
                          {post.content.trim()}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
