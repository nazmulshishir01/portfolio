"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/shared/project-card";
import { Reveal } from "@/components/shared/reveal";
import { projects } from "@/content/portfolio";
import { cn } from "@/lib/utils";

// Extract unique tech stacks from all projects
const getAllTechStacks = () => {
    const stacks = new Set<string>();
    projects.forEach((project) => {
        project.stack.forEach((tech) => stacks.add(tech));
    });
    return Array.from(stacks).sort();
};

export default function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const allTechStacks = useMemo(() => getAllTechStacks(), []);

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            // Search filter
            const matchesSearch =
                searchQuery === "" ||
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.stack.some((tech) =>
                    tech.toLowerCase().includes(searchQuery.toLowerCase())
                );

            // Tech stack filter
            const matchesFilter =
                selectedFilters.length === 0 ||
                selectedFilters.every((filter) => project.stack.includes(filter));

            return matchesSearch && matchesFilter;
        });
    }, [searchQuery, selectedFilters]);

    const toggleFilter = (tech: string) => {
        setSelectedFilters((prev) =>
            prev.includes(tech)
                ? prev.filter((f) => f !== tech)
                : [...prev, tech]
        );
    };

    const clearFilters = () => {
        setSelectedFilters([]);
        setSearchQuery("");
    };

    return (
        <div className="pt-24 pb-20">
            <div className="section-container">
                {/* Header */}
                <Reveal>
                    <div className="text-center mb-12">
                        <h1 className="heading-lg mb-4">
                            <span className="gradient-text">All Projects</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Browse through my complete portfolio of projects. Use the filters to find specific technologies or search for projects.
                        </p>
                    </div>
                </Reveal>

                {/* Search and filters */}
                <Reveal delay={0.1}>
                    <div className="mb-8 space-y-4">
                        {/* Search input */}
                        <div className="relative max-w-md mx-auto">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-10"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                    aria-label="Clear search"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                        </div>

                        {/* Filter chips */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {allTechStacks.slice(0, 10).map((tech) => (
                                <Badge
                                    key={tech}
                                    variant={selectedFilters.includes(tech) ? "default" : "outline"}
                                    className={cn(
                                        "cursor-pointer transition-all hover:scale-105",
                                        selectedFilters.includes(tech) && "glow-sm"
                                    )}
                                    onClick={() => toggleFilter(tech)}
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        {/* Active filters indicator */}
                        {(selectedFilters.length > 0 || searchQuery) && (
                            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                <span>
                                    Showing {filteredProjects.length} of {projects.length} projects
                                </span>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={clearFilters}
                                    className="text-primary hover:text-primary"
                                >
                                    Clear all
                                </Button>
                            </div>
                        )}
                    </div>
                </Reveal>

                {/* Projects grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.slug}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-xl text-muted-foreground mb-4">
                            No projects found matching your criteria
                        </p>
                        <Button onClick={clearFilters}>Clear filters</Button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
