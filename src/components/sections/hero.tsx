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
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
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
                    className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
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
                    className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-chart-4/20 rounded-full blur-3xl"
                />
            </div>

            <div className="section-container relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Availability badge */}
                    <motion.div variants={itemVariants}>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            {personalInfo.availability}
                        </span>
                    </motion.div>

                    {/* Profile Photo */}
                    <motion.div
                        variants={itemVariants}
                        className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl"
                    >
                        <img
                            src="/images/projects/profileimage.png"
                            alt={personalInfo.name}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1 variants={itemVariants} className="heading-xl mb-6">
                        Hi, I'm{" "}
                        <span className="inline-block">
                            {personalInfo.name.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.5 + index * 0.05,
                                        ease: "easeOut",
                                    }}
                                    className="inline-block gradient-text"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </span>
                    </motion.h1>

                    {/* Role */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground">
                            {personalInfo.role}
                        </span>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button asChild size="lg" className="group glow-sm">
                            <Link href="#projects">
                                View My Work
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="#contact">
                                Get in Touch
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center gap-6 mt-12"
                    >
                        <Link
                            href={personalInfo.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all hover:scale-110 focus-ring"
                            aria-label="GitHub"
                        >
                            <Github className="h-5 w-5" />
                        </Link>
                        <Link
                            href={personalInfo.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all hover:scale-110 focus-ring"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link
                            href={personalInfo.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all hover:scale-110 focus-ring"
                            aria-label="X (Twitter)"
                        >
                            <XIcon className="h-4 w-4" />
                        </Link>
                        <Link
                            href={personalInfo.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all hover:scale-110 focus-ring"
                            aria-label="Facebook"
                        >
                            <Facebook className="h-5 w-5" />
                        </Link>
                        <Link
                            href={personalInfo.social.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all hover:scale-110 focus-ring"
                            aria-label="YouTube"
                        >
                            <Youtube className="h-5 w-5" />
                        </Link>
                        <Link
                            href={personalInfo.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all hover:scale-110 focus-ring"
                            aria-label="Download Resume"
                        >
                            <Download className="h-5 w-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
