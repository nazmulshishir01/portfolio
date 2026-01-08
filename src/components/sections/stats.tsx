"use client";

import { motion } from "framer-motion";
import { stats } from "@/content/portfolio";
import { Reveal } from "@/components/shared/reveal";

export function StatsSection() {
    return (
        <section className="py-12 bg-muted/10 border-y border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <Reveal key={stat.label} delay={index * 0.1}>
                            <div className="text-center group">
                                <motion.div
                                    whileInView={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                    className="text-3xl md:text-4xl font-bold gradient-text mb-2 inline-block"
                                >
                                    {stat.value}
                                </motion.div>
                                <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                                    {stat.label}
                                </p>
                                {/* Bottom decoration */}
                                <div className="mt-4 h-0.5 w-8 bg-primary/20 mx-auto transition-all duration-300 group-hover:w-16 group-hover:bg-primary/40" />
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
