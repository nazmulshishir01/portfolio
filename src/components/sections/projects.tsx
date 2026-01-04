"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { projects } from "@/content/portfolio";

export function ProjectsSection() {
    const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

    return (
        <SectionWrapper id="projects">
            <SectionHeading
                title="Featured Projects"
                subtitle="A selection of my recent work and side projects"
            />

            <div className="grid sm:grid-cols-2 gap-6">
                {featuredProjects.map((project, index) => (
                    <ProjectCard key={project.slug} project={project} index={index} />
                ))}
            </div>

            <Reveal delay={0.3}>
                <div className="mt-12 text-center">
                    <Button asChild variant="outline" size="lg" className="group">
                        <Link href="/projects">
                            View All Projects
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </Reveal>
        </SectionWrapper>
    );
}
