"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui";
import { clients } from "@/constants/data";

export function Clients() {
  return (
    <Section id="clients" className="py-16 md:py-20">
      <SectionHeader
        label="Partnerships"
        title="Trusted by Businesses"
        description="I've had the privilege of working with innovative companies across various industries"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {clients.map((client, index) => (
          <motion.a
            key={client.id}
            href={client.website}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex items-center justify-center p-6 rounded-xl border border-border bg-card/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
          >
            <div className="text-center">
              {/* Placeholder for logo - replace with actual Image component when logos are added */}
              <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-muted/20 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <span className="text-2xl font-bold text-muted-foreground group-hover:text-accent transition-colors">
                  {client.name.charAt(0)}
                </span>
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {client.name}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
