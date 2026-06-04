"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Achievements() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-primary/5" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {portfolioData.achievements.map((achievement, idx) => (
            <Counter 
              key={idx} 
              achievement={achievement} 
              delay={idx * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ achievement, delay }: { achievement: any, delay: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = achievement.value;
      const duration = 2000; // 2 seconds
      const incrementTime = Math.floor(duration / end) || 10;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, achievement.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center justify-center text-center p-4"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-br from-primary to-purple-400">
        {count}{achievement.suffix}
      </div>
      <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
        {achievement.label}
      </div>
    </motion.div>
  );
}
