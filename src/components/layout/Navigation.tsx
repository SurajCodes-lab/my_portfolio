"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui";
import { Container } from "@/components/ui";
import { siteConfig, navLinks } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy logic
      const sections = navLinks.map(link => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Reset if at top
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#"
              className="text-xl font-bold text-foreground font-display hover:text-accent transition-colors"
            >
              {siteConfig.name.split(" ")[0]}
              <span className="text-accent">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-sm transition-colors relative group",
                      isActive
                        ? "text-accent font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.name}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />

              <a
                href="#contact"
                className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                Let&apos;s Talk
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background border-l border-border z-50 md:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="text-xl font-bold text-foreground font-display">
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="p-4 space-y-2">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-lg transition-all active:scale-[0.98]",
                        isActive
                          ? "bg-accent/10 text-accent font-medium border-l-2 border-accent"
                          : "text-foreground hover:bg-accent/10 hover:text-accent"
                      )}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className={cn(
                        "w-4 h-4 transition-transform",
                        isActive ? "text-accent" : "text-muted-foreground"
                      )} />
                    </motion.a>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-4 border-t border-border mt-4"
                >
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 rounded-lg bg-accent text-accent-foreground text-center font-medium hover:bg-accent/90 transition-colors active:scale-[0.98]"
                  >
                    Let&apos;s Talk
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
