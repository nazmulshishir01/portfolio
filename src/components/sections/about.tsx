"use client";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { personalInfo } from "@/content/portfolio";

export function AboutSection() {
    const stats = [
        { value: "5+", label: "Years Experience" },
        { value: "50+", label: "Projects Completed" },
        { value: "30+", label: "Happy Clients" },
        { value: "10k+", label: "Lines of Code" },
    ];

    return (
        <SectionWrapper id="about">
            <SectionHeading
                title="About Me"
                subtitle="Get to know me and what I do"
            />

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text content */}
                <Reveal direction="left">
                    <div className="space-y-6">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {personalInfo.bio}
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            When I'm not coding, you'll find me exploring new technologies,
                            contributing to open-source projects, or sharing knowledge through
                            blog posts and community events.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2">
                                📍 {personalInfo.location}
                            </span>
                            <span className="flex items-center gap-2">
                                ✉️ {personalInfo.email}
                            </span>
                        </div>
                    </div>
                </Reveal>

                {/* Stats grid */}
                <Reveal direction="right" delay={0.2}>
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="p-6 rounded-2xl bg-card border border-border/50 card-glow text-center"
                            >
                                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </SectionWrapper>
    );
}
