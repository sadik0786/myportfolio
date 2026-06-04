"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Work Experience" 
          subtitle="My professional journey and career progression"
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 -translate-x-1/2 bg-card border-4 border-background rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ml-12 md:ml-0 ${idx % 2 === 0 ? "md:pl-16" : "md:pr-16 text-left md:text-right"}`}>
                  <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors group">
                    <div className={`flex items-center gap-3 mb-2 ${idx % 2 === 0 ? "justify-start" : "justify-start md:justify-end"}`}>
                      <Briefcase className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                        {exp.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-medium text-muted-foreground mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
