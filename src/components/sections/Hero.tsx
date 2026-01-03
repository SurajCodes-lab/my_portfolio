"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui";
import { Container } from "@/components/ui";

const rotatingWords = [
  "production-ready",
  "scalable",
  "performant",
  "modern",
  "accessible",
];

function RotatingText() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden h-[1.1em] align-bottom">
      {rotatingWords.map((word, index) => (
        <motion.span
          key={word}
          className="gradient-text absolute left-0 whitespace-nowrap"
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: currentIndex === index ? "0%" : currentIndex === (index + 1) % rotatingWords.length ? "-100%" : "100%",
            opacity: currentIndex === index ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {word}
        </motion.span>
      ))}
      <span className="invisible">{rotatingWords[0]}</span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-500/30 dark:bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] bg-indigo-500/10 dark:bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Available for new projects
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4"
          >
            Hi, I&apos;m Suraj Bolisetty
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-display leading-tight"
          >
            Building{" "}
            <RotatingText />{" "}
            web applications
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2"
          >
            Full-Stack Developer with 4+ years of experience building end-to-end applications
            using React, Next.js, Node.js, ASP.NET Core, and cloud technologies.
            From database design to deployment, I deliver clean, scalable systems that drive business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <Button href="#work" size="lg" variant="primary" className="w-full sm:w-auto">
              View Client Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button href="#contact" size="lg" variant="secondary" className="w-full sm:w-auto">
              Start a Project
            </Button>
          </motion.div>

        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
