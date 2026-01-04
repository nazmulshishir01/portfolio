import { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowRight, Briefcase, GraduationCap, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/shared/reveal";
import { personalInfo, skills, timeline } from "@/content/portfolio";

export const metadata: Metadata = {
    title: "Resume",
    description: `${personalInfo.name}'s professional resume and work experience`,
};

export default function ResumePage() {
    return (
        <div className="pt-24 pb-20">
            <div className="section-container max-w-4xl">
                {/* Header */}
                <Reveal>
                    <div className="text-center mb-12">
                        <h1 className="heading-lg mb-4">
                            <span className="gradient-text">Resume</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                            A summary of my professional experience, skills, and education.
                        </p>
                        <Button asChild size="lg">
                            <Link href="/resume.pdf" target="_blank" download>
                                <Download className="mr-2 h-4 w-4" />
                                Download PDF
                            </Link>
                        </Button>
                    </div>
                </Reveal>

                {/* Contact info */}
                <Reveal delay={0.1}>
                    <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {personalInfo.location}
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            {personalInfo.email}
                        </div>
                    </div>
                </Reveal>

                {/* Summary */}
                <Reveal delay={0.2}>
                    <section className="mb-12 p-6 rounded-2xl bg-card/50 border border-border/50">
                        <h2 className="heading-sm mb-4">Professional Summary</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {personalInfo.bio}
                        </p>
                    </section>
                </Reveal>

                {/* Skills */}
                <Reveal delay={0.3}>
                    <section className="mb-12 p-6 rounded-2xl bg-card/50 border border-border/50">
                        <h2 className="heading-sm mb-6">Technical Skills</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                                    Frontend Development
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.frontend.map((skill) => (
                                        <Badge key={skill.name} variant="secondary">
                                            {skill.name}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <Separator />

                            <div>
                                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                                    Backend & Database
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.backend.map((skill) => (
                                        <Badge key={skill.name} variant="secondary">
                                            {skill.name}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <Separator />

                            <div>
                                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                                    Tools & Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.tools.map((skill) => (
                                        <Badge key={skill.name} variant="secondary">
                                            {skill.name}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>

                {/* Experience */}
                <Reveal delay={0.4}>
                    <section className="mb-12 p-6 rounded-2xl bg-card/50 border border-border/50">
                        <h2 className="heading-sm mb-6 flex items-center gap-2">
                            <Briefcase className="h-5 w-5" />
                            Work Experience
                        </h2>

                        <div className="space-y-6">
                            {timeline
                                .filter((item) => item.type === "work")
                                .map((item, index) => (
                                    <div key={`${item.company}-${item.period}`}>
                                        {index > 0 && <Separator className="mb-6" />}
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                                            <div>
                                                <h3 className="font-semibold">{item.title}</h3>
                                                <p className="text-sm text-primary">{item.company}</p>
                                            </div>
                                            <span className="text-sm text-muted-foreground">
                                                {item.period}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </section>
                </Reveal>

                {/* Education */}
                <Reveal delay={0.5}>
                    <section className="mb-12 p-6 rounded-2xl bg-card/50 border border-border/50">
                        <h2 className="heading-sm mb-6 flex items-center gap-2">
                            <GraduationCap className="h-5 w-5" />
                            Education
                        </h2>

                        <div className="space-y-6">
                            {timeline
                                .filter((item) => item.type === "education")
                                .map((item) => (
                                    <div key={`${item.company}-${item.period}`}>
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                                            <div>
                                                <h3 className="font-semibold">{item.title}</h3>
                                                <p className="text-sm text-primary">{item.company}</p>
                                            </div>
                                            <span className="text-sm text-muted-foreground">
                                                {item.period}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </section>
                </Reveal>

                {/* CTA */}
                <Reveal delay={0.6}>
                    <div className="text-center">
                        <p className="text-muted-foreground mb-4">
                            Interested in working together?
                        </p>
                        <Button asChild>
                            <Link href="/#contact">
                                Get in Touch
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
