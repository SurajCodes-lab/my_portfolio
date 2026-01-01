"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Wrench,
  BarChart3
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui";
import { skillCategories } from "@/constants/data";

const categoryIcons: { [key: string]: React.ElementType } = {
  "Frontend": Monitor,
  "Backend": Server,
  "Database": Database,
  "Cloud": Cloud,
  "DevOps": Wrench,
  "Data Science": BarChart3,
};

const categoryGradients: { [key: string]: string } = {
  "Frontend": "from-blue-500 to-cyan-500",
  "Backend": "from-purple-500 to-pink-500",
  "Database": "from-amber-500 to-orange-500",
  "Cloud": "from-sky-500 to-indigo-500",
  "DevOps": "from-green-500 to-emerald-500",
  "Data Science": "from-rose-500 to-violet-500",
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        label="Expertise"
        title="Technical Arsenal"
        description="4+ years of hands-on experience with modern technologies, delivering production-ready solutions"
      />

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, categoryIndex) => {
          const IconComponent = categoryIcons[category.title] || Wrench;
          const gradient = categoryGradients[category.title] || "from-accent to-purple-500";

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group relative"
            >
              {/* Animated gradient border */}
              <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-[2px]`} />

              <div className="relative h-full bg-card/90 backdrop-blur-xl border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden transition-all duration-500 group-hover:border-transparent shadow-sm dark:shadow-none">
                {/* Background glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />

                {/* Header */}
                <div className="relative flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${gradient} p-[1px]`}>
                    <div className="w-full h-full rounded-lg sm:rounded-xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-foreground dark:group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground font-display">
                      {category.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills grid */}
                <div className="relative grid grid-cols-2 gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05
                      }}
                      className="group/skill relative"
                    >
                      <div className="px-2 py-2 sm:px-3 sm:py-2.5 rounded-md sm:rounded-lg bg-muted/20 border border-border/50 text-xs sm:text-sm text-muted-foreground hover:text-foreground hover:bg-gradient-to-r hover:border-transparent transition-all duration-300 cursor-default text-center truncate"
                        style={{
                          backgroundImage: 'linear-gradient(var(--card), var(--card))',
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget;
                          el.style.backgroundImage = `linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))`;
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget;
                          el.style.backgroundImage = 'linear-gradient(var(--card), var(--card))';
                        }}
                      >
                        {skill.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

    </Section>
  );
}
