"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  const categories = Object.keys(portfolioData.skills) as Array<keyof typeof portfolioData.skills>;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-12 md:py-24 bg-card/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Technical Arsenal"
          subtitle="Tools and technologies I use to build robust digital solutions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="glass-card rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-colors group"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors flex items-center gap-3">
                <span className="w-2 h-8 rounded-full bg-primary/20 block" />
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {portfolioData.skills[category].map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 hover:border-primary/20 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
