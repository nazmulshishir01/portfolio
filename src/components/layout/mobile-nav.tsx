"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { personalInfo, navLinks } from "@/content/portfolio";

interface MobileNavProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    }),
};

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="w-[85vw] max-w-sm sm:max-w-sm border-border/50 p-0">
                <div className="flex flex-col h-full">
                    <SheetHeader className="text-left p-4 sm:p-6 border-b border-border/50">
                        <SheetTitle className="text-lg sm:text-xl">
                            <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
                            <span className="text-muted-foreground font-light">.dev</span>
                        </SheetTitle>
                    </SheetHeader>

                    <nav className="flex-1 overflow-y-auto p-4 sm:p-6">
                        <div className="flex flex-col gap-1 sm:gap-2">
                            <AnimatePresence>
                                {open &&
                                    navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.href}
                                            custom={i}
                                            initial="closed"
                                            animate="open"
                                            variants={menuItemVariants}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => onOpenChange(false)}
                                                className="flex items-center py-3 sm:py-4 px-3 sm:px-4 text-base sm:text-lg md:text-xl font-medium text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors focus-ring"
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}

                                <motion.div
                                    custom={navLinks.length}
                                    initial="closed"
                                    animate="open"
                                    variants={menuItemVariants}
                                >
                                    <Link
                                        href="/projects"
                                        onClick={() => onOpenChange(false)}
                                        className="flex items-center py-3 sm:py-4 px-3 sm:px-4 text-base sm:text-lg font-medium text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors focus-ring"
                                    >
                                        All Projects
                                    </Link>
                                </motion.div>

                                <motion.div
                                    custom={navLinks.length + 1}
                                    initial="closed"
                                    animate="open"
                                    variants={menuItemVariants}
                                >
                                    <Link
                                        href="/resume"
                                        onClick={() => onOpenChange(false)}
                                        className="flex items-center py-3 sm:py-4 px-3 sm:px-4 text-base sm:text-lg font-medium text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors focus-ring"
                                    >
                                        Resume
                                    </Link>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        className="p-4 sm:p-6 border-t border-border/50 mt-auto"
                    >
                        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                            {personalInfo.availability}
                        </p>
                        <Button asChild className="w-full h-10 sm:h-11 text-sm sm:text-base">
                            <Link href="#contact" onClick={() => onOpenChange(false)}>
                                Get in Touch
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </SheetContent>
        </Sheet>
    );
}