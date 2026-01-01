"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerSize?: "default" | "sm" | "lg" | "full";
}

export function Section({
  className,
  children,
  containerSize = "default",
  id,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-12 sm:py-16 md:py-24 lg:py-32", className)}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-8 sm:mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-3xl"
      )}
    >
      {label && (
        <span className="inline-block text-accent text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4">
          {label}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-display">
        {title}
      </h2>
      {description && (
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
          {description}
        </p>
      )}
    </motion.div>
  );
}
