"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my best work and side projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-card rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(var(--primary),0.1)] flex flex-col"
            >
              <div className="p-8 flex-grow flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary font-bold text-xl group-hover:scale-110 transition-transform">
                  {project.title.charAt(0)}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-medium text-muted-foreground border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-white/5">
                    {project.links.map((link) => (
                      <Link 
                        key={link.url} 
                        href={link.url}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                        <ExternalLink size={14} />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
