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
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-chart-4/20 to-chart-1/20">
                    {project.images && project.images[0] ? (
                        <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <>
                            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl font-bold text-primary/30">
                                    {project.title.charAt(0)}
                                </span>
                            </div>
                        </>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        {project.liveUrl && (
                            <Button asChild size="sm" variant="secondary">
                                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4 mr-1" />
                                    Live
                                </Link>
                            </Button>
                        )}
                        {project.githubUrl && (
                            <Button asChild size="sm" variant="outline">
                                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4 mr-1" />
                                    Code
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>

                <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                        <div>
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{project.tagline}</p>
                        </div>
                        <Link
                            href={`/projects/${project.slug}`}
                            className="p-2 rounded-full hover:bg-accent transition-colors opacity-0 group-hover:opacity-100"
                            aria-label={`View ${project.title} details`}
                        >
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                </CardHeader>

                <CardContent className="pb-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                    </p>
                </CardContent>

                <CardFooter className="pt-0 flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                        </Badge>
                    ))}
                    {project.stack.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                            +{project.stack.length - 4}
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
