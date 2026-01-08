"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/content/portfolio";

interface ProjectCardProps {
    project: Project;
    className?: string;
    index?: number;
}

export function ProjectCard({ project, className, index = 0 }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card
                className={cn(
                    "group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:border-primary/50 card-glow h-full",
                    className
                )}
            >
                {/* Project image or placeholder */}
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-chart-4/20 to-chart-1/20">
                    {project.images && project.images[0] ? (
                        <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                        />
                    ) : (
                        <>
                            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-3xl sm:text-4xl font-bold text-primary/30">
                                    {project.title.charAt(0)}
                                </span>
                            </div>
                        </>
                    )}

                    {/* Hover overlay - hidden on touch devices, shown on tap */}
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 sm:gap-4">
                        {project.liveUrl && (
                            <Button asChild size="sm" variant="secondary" className="h-8 sm:h-9 px-2 sm:px-3 text-xs sm:text-sm">
                                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                    Live
                                </Link>
                            </Button>
                        )}
                        {project.githubUrl && (
                            <Button asChild size="sm" variant="outline" className="h-8 sm:h-9 px-2 sm:px-3 text-xs sm:text-sm">
                                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                    Code
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>

                <CardHeader className="pb-2 px-3 sm:px-4 md:px-6 pt-3 sm:pt-4">
                    <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-base sm:text-lg group-hover:text-primary transition-colors truncate">
                                {project.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground truncate">{project.tagline}</p>
                        </div>
                        <Link
                            href={`/projects/${project.slug}`}
                            className="p-1.5 sm:p-2 rounded-full hover:bg-accent transition-colors opacity-0 group-hover:opacity-100 shrink-0"
                            aria-label={`View ${project.title} details`}
                        >
                            <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </Link>
                    </div>
                </CardHeader>

                <CardContent className="pb-3 sm:pb-4 px-3 sm:px-4 md:px-6">
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                    </p>
                </CardContent>

                <CardFooter className="pt-0 px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 flex-wrap gap-1.5 sm:gap-2">
                    {project.stack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">
                            {tech}
                        </Badge>
                    ))}
                    {project.stack.length > 3 && (
                        <Badge variant="outline" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">
                            +{project.stack.length - 3}
                        </Badge>
                    )}
                </CardFooter>

                {/* View details link overlay */}
                <Link
                    href={`/projects/${project.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={`View ${project.title} case study`}
                >
                    <span className="sr-only">View project details</span>
                </Link>
            </Card>
        </motion.div>
    );
}