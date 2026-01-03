"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui";
import { caseStudies } from "@/constants/data";
import { Star } from "lucide-react";

// Extract unique client names from case studies
const clientNames = [...new Set(caseStudies.map(cs => cs.clientName))];

export function Clients() {
  return (
    <Section className="py-12 md:py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
          Trusted by businesses across industries
        </p>
      </motion.div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling marquee */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-8 sm:gap-12">
            {/* Double the items for seamless loop */}
            {[...clientNames, ...clientNames].map((name, index) => (
              <div
                key={`${name}-${index}`}
                className="flex items-center gap-3 px-4 py-2 rounded-full border border-border/50 bg-card/30 hover:bg-card/50 hover:border-accent/30 transition-all whitespace-nowrap"
              >
                <span className="text-base sm:text-lg font-medium text-foreground/80">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-10 pt-8 border-t border-border/50"
      >
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-foreground">6+</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Client Projects</p>
        </div>
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-foreground">4+</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
        </div>
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-foreground flex items-center justify-center gap-1">
            4.8 <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</p>
        </div>
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-foreground">100%</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Project Delivery</p>
        </div>
      </motion.div>
    </Section>
  );
}
