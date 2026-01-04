import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/shared/reveal";
import { projects } from "@/content/portfolio";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.tagline,
            type: "article",
        },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="pt-24 pb-20">
            <div className="section-container">
                {/* Back button */}
                <Reveal>
                    <Button asChild variant="ghost" className="mb-8 -ml-4">
                        <Link href="/projects">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Projects
                        </Link>
                    </Button>
                </Reveal>

                {/* Header */}
                <header className="mb-12">
                    <Reveal>
                        <h1 className="heading-lg mb-4">
                            <span className="gradient-text">{project.title}</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-xl text-muted-foreground mb-6">
                            {project.tagline}
                        </p>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.stack.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="flex flex-wrap gap-4">
                            {project.liveUrl && (
                                <Button asChild>
                                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        View Live Site
                                    </Link>
                                </Button>
                            )}
                            {project.githubUrl && (
                                <Button asChild variant="outline">
                                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" />
                                        View Source
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </Reveal>
                </header>

                {/* Project image placeholder */}
                <Reveal delay={0.1}>
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-chart-4/20 to-chart-1/20 mb-12">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-8xl font-bold text-primary/20">
                                {project.title.charAt(0)}
                            </span>
                        </div>
                    </div>
                </Reveal>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Overview */}
                        <Reveal>
                            <section>
                                <h2 className="heading-sm mb-4">Overview</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>
                            </section>
                        </Reveal>

                        {/* Problem */}
                        {project.problem && (
                            <Reveal>
                                <section>
                                    <h2 className="heading-sm mb-4">The Problem</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.problem}
                                    </p>
                                </section>
                            </Reveal>
                        )}

                        {/* Solution */}
                        {project.solution && (
                            <Reveal>
                                <section>
                                    <h2 className="heading-sm mb-4">The Solution</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.solution}
                                    </p>
                                </section>
                            </Reveal>
                        )}

                        {/* Features */}
                        <Reveal>
                            <section>
                                <h2 className="heading-sm mb-4">Key Features</h2>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {project.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2 text-muted-foreground"
                                        >
                                            <span className="text-primary mt-1">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </Reveal>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <Reveal direction="right">
                            <div className="sticky top-24 p-6 rounded-2xl bg-card/50 border border-border/50 space-y-6">
                                {/* Tech stack */}
                                <div>
                                    <h3 className="font-semibold mb-3">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <Badge key={tech} variant="outline" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <Separator />

                                {/* Highlights */}
                                {project.highlights && project.highlights.length > 0 && (
                                    <>
                                        <div>
                                            <h3 className="font-semibold mb-3">Highlights</h3>
                                            <ul className="space-y-2">
                                                {project.highlights.map((highlight, index) => (
                                                    <li
                                                        key={index}
                                                        className="text-sm text-muted-foreground flex items-center gap-2"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Separator />
                                    </>
                                )}

                                {/* Links */}
                                <div className="space-y-3">
                                    {project.liveUrl && (
                                        <Button asChild className="w-full">
                                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                View Live Site
                                            </Link>
                                        </Button>
                                    )}
                                    {project.githubUrl && (
                                        <Button asChild variant="outline" className="w-full">
                                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="mr-2 h-4 w-4" />
                                                View Source Code
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </Reveal>
                    </aside>
                </div>
            </div>
        </article>
    );
}
