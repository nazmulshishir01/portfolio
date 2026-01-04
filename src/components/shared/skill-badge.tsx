"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
    name: string;
    level?: number;
    showLevel?: boolean;
    className?: string;
}

export function SkillBadge({
    name,
    level,
    showLevel = false,
    className,
}: SkillBadgeProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative px-4 py-2 rounded-lg bg-card border border-border/50 cursor-default transition-colors hover:border-primary/50 hover:bg-accent/50",
                className
            )}
        >
            <span className="text-sm font-medium">{name}</span>
            {showLevel && level && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-muted overflow-hidden rounded-b-lg">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full bg-primary"
                    />
                </div>
            )}
        </motion.div>
    );
}
