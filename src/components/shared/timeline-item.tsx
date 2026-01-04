"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TimelineItem as TimelineItemType } from "@/content/portfolio";

interface TimelineItemProps {
    item: TimelineItemType;
    index: number;
    isLast: boolean;
}

export function TimelineItem({ item, index, isLast }: TimelineItemProps) {
    const isWork = item.type === "work";

    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
                "relative pl-8 pb-8",
                !isLast && "border-l-2 border-border/50"
            )}
        >
            {/* Icon */}
            <div
                className={cn(
                    "absolute left-0 top-0 -translate-x-1/2 p-2 rounded-full border-2",
                    isWork
                        ? "bg-primary/10 border-primary text-primary"
                        : "bg-chart-2/10 border-chart-2 text-chart-2"
                )}
            >
                {isWork ? (
                    <Briefcase className="h-4 w-4" />
                ) : (
                    <GraduationCap className="h-4 w-4" />
                )}
            </div>

            {/* Content */}
            <div className="p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                </div>
                <p className="text-sm font-medium text-primary mb-1">{item.company}</p>
                <p className="text-sm text-muted-foreground mb-2">{item.location}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
        </motion.div>
    );
}
