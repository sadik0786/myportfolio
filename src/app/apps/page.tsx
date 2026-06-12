"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Download, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AppsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="My Applications"
          subtitle="Download and try out the Android applications I've built."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {portfolioData.apps.map((app, idx) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col relative"
            >
              {app.isUpdate && (
                <div className="absolute top-4 right-4 bg-red-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(239,68,68,0.6)] animate-pulse z-10">
                  Update
                </div>
              )}
              <div className="p-8 flex-grow flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center mb-6 text-5xl border border-primary/20 shadow-lg shadow-primary/5 overflow-hidden relative">
                  {app.icon?.startsWith("/") || app.icon?.startsWith("http") ? (
                    <Image
                      src={app.icon}
                      alt={app.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    app.icon
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {app.title}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 rounded-md bg-white/5 text-xs font-medium text-muted-foreground border border-white/5">
                    v{app.version}
                  </span>
                  <span className="px-2 py-1 rounded-md bg-white/5 text-xs font-medium text-muted-foreground border border-white/5">
                    {app.size}
                  </span>
                  <span className="px-2 py-1 rounded-md bg-primary/10 text-xs font-medium text-primary border border-primary/20 flex items-center gap-1">
                    <Smartphone size={12} />
                    {app.platform}
                  </span>
                </div>


                {app.active ? (
                  <Link href={app.file} className="w-full cursor-pointer" download>
                    <Button className="w-full group cursor-pointer">
                      <Download className="mr-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                      Download APK
                    </Button>
                  </Link>
                ) : (
                  <Button className="w-full opacity-50 cursor-not-allowed" disabled variant="outline">
                    Coming Soon
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {portfolioData.apps.length === 0 && (
          <div className="text-center text-muted-foreground py-20 glass-card rounded-3xl max-w-2xl mx-auto">
            <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-20" />
            <h3 className="text-2xl font-bold text-foreground mb-2">No apps available yet</h3>
            <p>Check back later for downloadable APKs of my projects.</p>
          </div>
        )}
      </div>
    </main>
  );
}
