"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Quote, ExternalLink, Briefcase, TrendingUp, Globe } from "lucide-react";
import {
  Section,
  SectionHeader,
  Badge,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalContent,
} from "@/components/ui";
import { caseStudies } from "@/constants/data";
import { CaseStudy } from "@/types";

const gradients = [
  "from-blue-500/20 via-purple-500/20 to-pink-500/20",
  "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
  "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
  "from-rose-500/20 via-pink-500/20 to-fuchsia-500/20",
];

const accentColors = [
  "text-blue-400 bg-blue-500/10 border-blue-500/20",
  "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "text-orange-400 bg-orange-500/10 border-orange-500/20",
  "text-rose-400 bg-rose-500/10 border-rose-500/20",
];

function CaseStudyCard({
  study,
  index,
  onClick,
}: {
  study: CaseStudy;
  index: number;
  onClick: () => void;
}) {
  const gradient = gradients[index % gradients.length];
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="group relative"
    >
      {/* Gradient border effect */}
      <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />

      <div
        onClick={onClick}
        className="relative h-full flex flex-col bg-card/80 dark:bg-card/80 backdrop-blur-xl border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 cursor-pointer overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/5 group-hover:-translate-y-1 shadow-sm dark:shadow-none"
      >
        {/* Background gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-4 sm:mb-5">
            <div className="flex-1 min-w-0">
              <span className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium border ${accent} mb-2 sm:mb-3`}>
                <Briefcase className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                {study.industry}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground font-display dark:group-hover:text-white transition-colors">
                {study.clientName}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 dark:group-hover:text-white/70 transition-colors line-clamp-2">
                {study.role}
              </p>
            </div>
            <motion.div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:bg-accent group-hover:border-accent transition-all duration-300 flex-shrink-0"
              whileHover={{ rotate: 45 }}
            >
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-accent group-hover:text-white transition-colors" />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 sm:mb-5 dark:group-hover:text-white/70 transition-colors">
            {study.solution}
          </p>

          {/* Impact highlight */}
          <div className="flex items-center gap-2 mb-4 sm:mb-5 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-accent/5 border border-accent/10 dark:group-hover:bg-white/5 dark:group-hover:border-white/10 transition-colors">
            <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
            <span className="text-xs sm:text-sm text-foreground dark:group-hover:text-white transition-colors line-clamp-2">
              {study.impact[0]}
            </span>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-border/50 dark:group-hover:border-white/10 transition-colors">
            {study.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-muted/30 dark:bg-muted/30 text-[10px] sm:text-xs text-muted-foreground dark:group-hover:bg-white/10 dark:group-hover:text-white/80 transition-colors"
              >
                {tech}
              </span>
            ))}
            {study.techStack.length > 4 && (
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-accent/20 text-[10px] sm:text-xs text-accent dark:group-hover:bg-white/20 dark:group-hover:text-white transition-colors">
                +{study.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Visit Website Button */}
          {study.websiteUrl && (
            <a
              href={study.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-3 sm:mt-4 inline-flex items-center justify-center gap-1.5 sm:gap-2 w-full py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-medium hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
            >
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Visit Website
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function CaseStudyModal({
  study,
  isOpen,
  onClose,
}: {
  study: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!study) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>
        <Badge variant="accent" className="mb-3">
          {study.industry}
        </Badge>
        <ModalTitle>{study.clientName}</ModalTitle>
        <p className="text-muted-foreground mt-1">{study.role}</p>
      </ModalHeader>

      <ModalContent className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
            The Challenge
          </h4>
          <p className="text-muted-foreground">{study.problem}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
            The Solution
          </h4>
          <p className="text-muted-foreground">{study.solution}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {study.techStack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
            Key Results
          </h4>
          <ul className="space-y-3">
            {study.impact.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                  <TrendingUp className="w-3 h-3 text-accent" />
                </span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {study.testimonial && (
          <div className="bg-gradient-to-br from-accent/10 to-purple-500/10 border border-accent/20 rounded-xl p-6">
            <Quote className="w-8 h-8 text-accent/50 mb-4" />
            <p className="text-foreground italic mb-4">
              &ldquo;{study.testimonial.quote}&rdquo;
            </p>
            <div>
              <p className="font-semibold text-foreground">
                {study.testimonial.author}
              </p>
              <p className="text-sm text-muted-foreground">
                {study.testimonial.position}
              </p>
            </div>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
}

export function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = React.useState<CaseStudy | null>(
    null
  );
  const featuredStudies = caseStudies.filter((study) => study.featured);

  return (
    <Section id="work">
      <SectionHeader
        label="Client Work"
        title="Projects That Drive Results"
        description="Real-world applications built with modern technologies, delivering measurable business impact"
      />

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
        {featuredStudies.map((study, index) => (
          <CaseStudyCard
            key={study.id}
            study={study}
            index={index}
            onClick={() => setSelectedStudy(study)}
          />
        ))}
      </div>

      <CaseStudyModal
        study={selectedStudy}
        isOpen={!!selectedStudy}
        onClose={() => setSelectedStudy(null)}
      />
    </Section>
  );
}
