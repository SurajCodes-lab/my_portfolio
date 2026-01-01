"use client";

import { Mail } from "lucide-react";
import { Container } from "@/components/ui";
import { siteConfig } from "@/constants/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30">
      <Container>
        <div className="py-8 sm:py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <a
                href="#"
                className="text-lg sm:text-xl font-bold text-foreground font-display hover:text-accent transition-colors"
              >
                {siteConfig.name.split(" ")[0]}
                <span className="text-accent">.</span>
              </a>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                Building exceptional digital experiences
              </p>
            </div>

            <a
              href={`mailto:${siteConfig.links.email}`}
              className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-all"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm truncate max-w-[200px]">{siteConfig.links.email}</span>
            </a>
          </div>

          <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <p>
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="hidden sm:block">
              Crafted with precision and attention to detail
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
