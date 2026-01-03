"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, ArrowRight, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Section, Button, Card } from "@/components/ui";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";

// TODO: Replace with your Web3Forms access key from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

const MAX_MESSAGE_LENGTH = 1000;

// Confetti component
function Confetti() {
  const colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b"];
  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: Math.random() * 8 + 4,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute rounded-sm"
          style={{
            left: `${piece.left}%`,
            top: -20,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{
            y: window.innerHeight + 100,
            opacity: 0,
            rotate: Math.random() * 720 - 360,
          }}
          transition={{
            duration: 2.5 + Math.random(),
            delay: piece.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

interface FieldError {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState("");
  const [fieldErrors, setFieldErrors] = React.useState<FieldError>({});
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Please enter a valid email";
        return "";
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Please provide more details (min 10 characters)";
        return "";
      default:
        return "";
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setFieldErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          company: formState.company || "Not specified",
          message: formState.message,
          subject: `New Portfolio Inquiry from ${formState.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormState({ name: "", email: "", company: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Limit message length
    if (name === "message" && value.length > MAX_MESSAGE_LENGTH) {
      return;
    }

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing (if field was touched)
    if (touched[name] && fieldErrors[name as keyof FieldError]) {
      const error = validateField(name, value);
      setFieldErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const getFieldState = (fieldName: string) => {
    const hasError = touched[fieldName] && fieldErrors[fieldName as keyof FieldError];
    const isValid = touched[fieldName] && !fieldErrors[fieldName as keyof FieldError] && formState[fieldName as keyof typeof formState];
    return { hasError, isValid };
  };

  return (
    <Section id="contact">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-accent text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-display mb-4 sm:mb-6">
            Let&apos;s build something{" "}
            <span className="gradient-text">great together</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Have a project in mind? I&apos;d love to hear about it. Whether
            you&apos;re a startup looking to launch your MVP or an enterprise
            seeking to modernize your tech stack, let&apos;s discuss how I can
            help.
          </p>

          <div className="space-y-3 sm:space-y-4">
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-border hover:border-accent/50 hover:bg-accent/5 transition-all group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-muted-foreground">Email me at</p>
                <p className="text-sm sm:text-base text-foreground font-medium truncate">
                  {siteConfig.links.email}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0 group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card variant="glass" className="p-4 sm:p-6 md:p-8">
            {isSuccess ? (
              <>
                <Confetti />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="text-center py-6 sm:py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <motion.h3
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl sm:text-2xl font-semibold text-foreground mb-2"
                  >
                    Message Sent!
                  </motion.h3>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm sm:text-base text-muted-foreground mb-6"
                  >
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </motion.p>
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      variant="outline"
                      onClick={() => setIsSuccess(false)}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                </motion.div>
              </>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={cn(
                        "w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-background border outline-none transition-all text-sm sm:text-base text-foreground placeholder:text-muted-foreground",
                        getFieldState("name").hasError
                          ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : getFieldState("name").isValid
                          ? "border-green-500 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                          : "border-border focus:border-accent focus:ring-1 focus:ring-accent"
                      )}
                      placeholder="John Doe"
                    />
                    <AnimatePresence>
                      {getFieldState("name").hasError && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="mt-1 text-xs text-red-500 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {fieldErrors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={cn(
                        "w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-background border outline-none transition-all text-sm sm:text-base text-foreground placeholder:text-muted-foreground",
                        getFieldState("email").hasError
                          ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : getFieldState("email").isValid
                          ? "border-green-500 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                          : "border-border focus:border-accent focus:ring-1 focus:ring-accent"
                      )}
                      placeholder="john@company.com"
                    />
                    <AnimatePresence>
                      {getFieldState("email").hasError && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="mt-1 text-xs text-red-500 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {fieldErrors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2"
                  >
                    Company{" "}
                    <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm sm:text-base text-foreground placeholder:text-muted-foreground"
                    placeholder="Acme Inc."
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <label
                      htmlFor="message"
                      className="text-xs sm:text-sm font-medium text-foreground"
                    >
                      Project Details
                    </label>
                    <span
                      className={cn(
                        "text-xs transition-colors",
                        formState.message.length > MAX_MESSAGE_LENGTH * 0.9
                          ? "text-amber-500"
                          : "text-muted-foreground"
                      )}
                    >
                      {formState.message.length}/{MAX_MESSAGE_LENGTH}
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows={4}
                    className={cn(
                      "w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-background border outline-none transition-all text-sm sm:text-base text-foreground placeholder:text-muted-foreground resize-none",
                      getFieldState("message").hasError
                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : getFieldState("message").isValid
                        ? "border-green-500 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        : "border-border focus:border-accent focus:ring-1 focus:ring-accent"
                    )}
                    placeholder="Tell me about your project, goals, and timeline..."
                  />
                  <AnimatePresence>
                    {getFieldState("message").hasError && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="mt-1 text-xs text-red-500 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {fieldErrors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-xs sm:text-sm flex items-center gap-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </motion.p>
                )}

                {/* Response time note */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Typical response time: within 24 hours</span>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full btn-bounce"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
