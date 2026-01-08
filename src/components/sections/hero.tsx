"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/content/portfolio";
import { XIcon } from "@/components/shared/icons";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

import { Spotlight } from "@/components/ui/spotlight";

export function HeroSection() {
    return (
        <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center pt-20 pb-8 sm:pt-24 sm:pb-10 md:pt-28 md:pb-12 lg:pt-32 overflow-hidden">
            <Spotlight
                className="-top-20 left-0 md:left-60 md:-top-20"
                fill="hsl(var(--primary))"
            />
            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 -left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-1/4 -right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-chart-4/20 rounded-full blur-3xl"
                />
            </div>

            <div className="section-container relative z-10 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center max-w-4xl mx-auto px-2 sm:px-4"
                >
                    {/* Availability badge */}
                    <motion.div variants={itemVariants}>
                        <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium border border-primary/20 mb-6 sm:mb-8">
                            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-500"></span>
                            </span>
                            <span className="truncate max-w-[200px] sm:max-w-none">{personalInfo.availability}</span>
                        </span>
                    </motion.div>

                    {/* Profile Photo */}
                    <motion.div
                        variants={itemVariants}
                        className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-6 sm:mb-8"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-primary/20 shadow-[0_0_20px_-5px_var(--primary)] sm:shadow-[0_0_30px_-5px_var(--primary)]"
                        >
                            <img
                                src="/images/projects/profileimage.png"
                                alt={personalInfo.name}
                                className="w-full h-full object-cover"
                            />
                            {/* Inner glow ring */}
                            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
                        </motion.div>
                        {/* Outer animated glow */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -inset-2 sm:-inset-4 rounded-full bg-primary/20 -z-10 blur-xl"
                        />
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1 variants={itemVariants} className="heading-xl mb-4 sm:mb-6">
                        <span className="block sm:inline">Hi, I'm </span>
                        <span className="inline-block">
                            {personalInfo.name.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, 10] }}
                                    transition={{
                                        duration: 4,
                                        times: [0, 0.2, 0.8, 1],
                                        repeat: Infinity,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className="inline-block gradient-text"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </span>
                    </motion.h1>

                    {/* Role */}
                    <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
                        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-muted-foreground">
                            {personalInfo.role}
                        </span>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
                    >
                        <Button asChild size="lg" className="group glow-sm w-full sm:w-auto text-sm sm:text-base">
                            <Link href="#projects">
                                View My Work
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                            <Link href="#contact">
                                Get in Touch
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center flex-wrap gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12 px-4 sm:px-0"
                    >
                        <Link
                            href={personalInfo.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 sm:p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all hover:scale-110 focus-ring"
                            aria-label="GitHub"
                        >
                            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Link>
                        <Link
                            href={personalInfo.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 sm:p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all hover:scale-110 focus-ring"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Link>
                        <Link
                            href={personalInfo.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 sm:p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all hover:scale-110 focus-ring"
                            aria-label="X (Twitter)"
                        >
                            <XIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </Link>
                        <Link
                            href={personalInfo.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 sm:p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all hover:scale-110 focus-ring"
                            aria-label="Facebook"
                        >
                            <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Link>
                        <Link
                            href={personalInfo.social.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 sm:p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all hover:scale-110 focus-ring"
                            aria-label="YouTube"
                        >
                            <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Link>
                        <Link
                            href={personalInfo.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 sm:p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all hover:scale-110 focus-ring"
                            aria-label="Download Resume"
                        >
                            <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator - hidden on very small screens */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden xs:block"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-muted-foreground/50 rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}