"use client";

import { motion } from "framer-motion";
import { Search, Boxes, Code, TestTube, Rocket } from "lucide-react";
import { Section, SectionHeader, Card } from "@/components/ui";
import { processSteps } from "@/constants/data";

const iconMap: { [key: string]: React.ElementType } = {
  Search,
  Boxes,
  Code,
  TestTube,
  Rocket,
};

export function Process() {
  return (
    <Section id="process" className="bg-card/30">
      <SectionHeader
        label="Methodology"
        title="How I Work"
        description="A structured approach to ensure every project is delivered with quality and on time"
      />

      <div className="relative">
        {/* Connection line for desktop */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => {
            const IconComponent = iconMap[step.icon] || Code;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card variant="glass" className="h-full text-center p-4 sm:p-6">
                  <div className="relative inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-accent/10 border border-accent/20 mb-3 sm:mb-4 mx-auto">
                    <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 text-accent" />
                    <span className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent text-accent-foreground text-[10px] sm:text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-foreground font-display mb-1.5 sm:mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
