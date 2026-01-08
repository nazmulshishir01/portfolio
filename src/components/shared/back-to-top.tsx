"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Check visibility
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Calculate progress
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (totalScroll > 0) {
                const progress = (window.scrollY / totalScroll) * 100;
                setScrollProgress(progress);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 print:hidden"
                >
                    <div className="relative group">
                        {/* Progress Ring */}
                        <svg className="absolute -inset-1.5 sm:-inset-2 h-[calc(100%+12px)] w-[calc(100%+12px)] sm:h-[calc(100%+16px)] sm:w-[calc(100%+16px)] -rotate-90 pointer-events-none">
                            <circle
                                cx="50%"
                                cy="50%"
                                r={radius}
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="transparent"
                                className="text-muted/20"
                            />
                            <motion.circle
                                cx="50%"
                                cy="50%"
                                r={radius}
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="transparent"
                                strokeDasharray={circumference}
                                initial={{ strokeDashoffset: circumference }}
                                animate={{ strokeDashoffset: dashOffset }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                className="text-primary"
                            />
                        </svg>

                        <Button
                            size="icon"
                            onClick={scrollToTop}
                            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-lg shadow-primary/25 border border-primary/20 bg-background/80 backdrop-blur-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 relative z-10"
                            aria-label="Back to top"
                        >
                            <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:-translate-y-1" />
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}