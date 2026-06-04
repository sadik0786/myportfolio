"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me and my career goals"
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Professional Summary</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {portfolioData.about.summary}
                </p>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Career Objective</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {portfolioData.about.objective}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
