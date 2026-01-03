"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  onClick,
  disabled,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/30 dark:shadow-accent/25 hover:shadow-accent/50 dark:hover:shadow-accent/40",
    secondary:
      "bg-card text-card-foreground border border-border hover:bg-accent/10 hover:border-accent/50 shadow-sm dark:shadow-none",
    ghost: "text-foreground hover:bg-accent/10 hover:text-accent",
    outline:
      "border border-border text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent shadow-sm dark:shadow-none",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm rounded-lg",
    md: "h-11 px-6 text-sm rounded-xl",
    lg: "h-14 px-8 text-base rounded-xl",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02, y: -1 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
