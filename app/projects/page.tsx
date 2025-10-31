"use client";
import Container from "@/components/Container";
import { motion } from "framer-motion";


const projects = [
  {
    title: "📌 LearnAI",
    description:
      "Won 1st place ($10K) at Breaking Barriers Hackathon sponsored by AWS, NVIDIA, and Anthropic, competing against 40+ teams. Built a personalized learning platform using Claude Haiku to generate tailored content in 4+ formats: narratives, summaries, diagrams, and interactive games.",
    tech:
      "React, FastAPI, AWS Bedrock, AWS S3, AWS Cognito, AWS Translation, AWS Transcribe",
    link: "https://github.com/manvirchakal/LearnAI",
    linkText: "View repo",
    featured: true,
    awards: ["Full-Stack/AI ", "🏆 1st Place · $10K Prize"],
    extraLinks: [
      {
        label: "LinkedIn Post",
        url: "https://www.linkedin.com/posts/msdq_breakingbarriers-hackathon-aws-activity-7244458852627234816-XUX5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZvKncB-A-xe7ca-EeDavT1jV65d0mQ_fQ",
      },
      {
        label: "YouTube Video",
        url: "https://youtu.be/ZjNkuizdiXc?si=A1PTZR5iF4z6gkNz",
      },
      {
        label: "AWS Blog",
        url: "https://aws.amazon.com/blogs/industries/introducing-breaking-barriers-initiative-building-generative-ai-applications-for-digital-inclusion/",
      },
    ],
  },
  {
    title: "NanoChat",
    description:
      "Trained Andrej Karpathy's NanoChat model(d20) using L40 GPUs on NVIDIA Brev which took 12 hours. Downloaded trained model weights and biases to local PC with RTX 3060ti GPU for experimentation and optimization. Exploring meaningful architectural changes and fine-tuning strategies.",
    tech: "Python, PyTorch, CUDA, NVIDIA Brev",
    link: "https://github.com/msiddique12/nanochat",
    linkText: "View repo",
    featured: false,
    awards: ["ML/AI", "🚧 In Progress"],
  },
  {
    title: "Coding Agent",
    description:
      "Building a custom coding agent inspired by Claude Code and Q CLI to avoid subscription costs. Leveraging free LLM inference APIs like NVIDIA NIM for intelligent code generation and assistance. Early-stage development focused on core agent architecture and API integration.",
    tech: "Python, NVIDIA NIM, LLM APIs, CLI Tools",
    link: "https://github.com/msiddique12/coding-agent",
    linkText: "View repo",
    featured: false,
    awards: ["Agentic AI", "🚧 In Progress"],
  },
  {
    title: "ResuBot",
    description:
      "Interactive resume analyzer providing targeted feedback. Trained a Logistic Regression model on 2,400+ resumes. Built an NLP pipeline with NLTK and LanguageTool to calculate grammar scores and assess resume metrics.",
    tech: "Python, Scikit-Learn, Pandas, NLTK",
    link: "https://github.com/UTD-AIS-Mentorship/Resume-Grading-and-Job-Recommendation-Fall-22",
    linkText: "View repo",
    featured: false,
    awards: ["Full-Stack"],
  },
  {
    title: "VitaLife",
    description:
      "A full-stack recipe search application that lets users discover recipes by ingredients or dish name using the Edamam Recipe API. Features detailed recipe information, ingredient lists, and a responsive design for seamless browsing across devices.",
    tech: "React, Node.js, Express, Axios, Tailwind CSS",
    link: "https://github.com/msiddique12/VitaLife-Website",
    linkText: "View repo",
    featured: false,
    awards: ["Full-Stack"],
  },
  {
    title: "YouTube Transcript Summarizer",
    description:
      "A Chrome extension that generates concise summaries of YouTube video transcripts. Leverages the YouTube Transcript API for extraction and Hugging Face Transformers for advanced text summarization, with a Flask backend processing requests seamlessly.",
    tech: "Python, Flask, Hugging Face Transformers, JavaScript, HTML, CSS",
    link: "https://github.com/msiddique12/YoutubeSummarizerExtension",
    linkText: "View repo",
    featured: false,
    awards: ["Chrome Extension"],
  },
];


export default function ProjectsPage() {
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
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight gradient-text">Projects</h1>
          <p className="mt-8 text-white/70 text-xl sm:text-2xl leading-relaxed">Things I&apos;ve built and learned from along the way.</p>
        </motion.div>
        
        <div className="mt-16 sm:mt-20 space-y-8">
          {projects.map((project, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
              className={`rounded-2xl border border-white/10 p-8 sm:p-10 hover:border-white/30 hover:bg-white/[0.02] transition-all group ${
                project.featured ? 'bg-white/[0.01]' : ''
              }`}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {project.awards?.map((award, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm sm:text-base text-white/80"
                  >
                    {award}
                  </span>
                ))}
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-semibold group-hover:text-white transition-colors">
                {project.title}
              </h2>
              
              <p className="mt-5 text-xl sm:text-2xl text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
                {project.description}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.split(', ').map((tech, i) => (
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
              
              <motion.a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-xl font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white/70 group-hover:text-white transition-colors"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {project.linkText}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
                {project.extraLinks && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {project.extraLinks.map((extra, i) => (
                      <motion.a
                        key={i}
                        href={extra.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white/70 text-white/80 hover:text-white transition-colors"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {extra.label}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                )}
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
