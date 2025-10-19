"use client";
import Container from "@/components/Container";
import { motion } from "framer-motion";


type Post = {
  title: string;
  description: string;
  date: string;
  readTime: string;
};

// Add posts here when ready
const upcomingPosts: Post[] = [
  // {
  //   title: "Post Title",
  //   description: "Post description",
  //   date: "Coming soon",
  //   readTime: "X min read",
  // },
];

export default function BlogPage() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden min-h-screen">
      {/* ML Grid Background */}
      <div className="ml-grid" aria-hidden="true" />
      
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight gradient-text">Blog</h1>
          <p className="mt-8 text-white/70 text-xl sm:text-2xl leading-relaxed">
            Notes, write-ups, and reflections.
          </p>
        </motion.div>
        
        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
            <span className="text-white/70 text-lg">Posts coming soon</span>
          </div>
        </motion.div>
        
        <div className="mt-12 sm:mt-16 space-y-6">
          {upcomingPosts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
              className="rounded-2xl border border-white/10 p-8 sm:p-10 hover:border-white/30 hover:bg-white/[0.02] transition-all group cursor-not-allowed opacity-60"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm sm:text-base text-white/60">
                  {post.date}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-sm sm:text-base text-white/60">{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-semibold group-hover:text-white transition-colors">
                {post.title}
              </h2>
              
              <p className="mt-4 text-lg sm:text-xl text-white/70 leading-relaxed">
                {post.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
