"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/content/portfolio";

export function Logo() {
    return (
        <motion.div
            className="flex items-center gap-2 group cursor-pointer"
            whileHover="hover"
            initial="initial"
            animate="animate"
        >
            <div className="relative w-10 h-10 flex items-center justify-center">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className="absolute inset-0 w-full h-full transform transition-transform duration-500 group-hover:rotate-180"
                >
                    <defs>
                        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="hsl(var(--primary))" />
                            <stop offset="100%" stopColor="hsl(var(--secondary))" />
                        </linearGradient>
                    </defs>
                    <motion.rect
                        x="5"
                        y="5"
                        width="30"
                        height="30"
                        rx="8"
                        stroke="url(#logo-gradient)"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.rect
                        x="5"
                        y="5"
                        width="30"
                        height="30"
                        rx="8"
                        stroke="url(#logo-gradient)"
                        strokeWidth="3"
                        fill="none"
                        className="opacity-20 blur-sm"
                    />
                </svg>
                <div className="relative font-bold text-xl select-none">
                    <span className="gradient-text">{personalInfo.name.charAt(0)}</span>
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-none">
                    Md.
                </span>
                <span className="text-base text-muted-foreground tracking-widest font-light leading-none">
                    Nazmul
                </span>
            </div>
        </motion.div>
    );
}
