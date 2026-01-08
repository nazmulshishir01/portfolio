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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start lg:items-center">
                {/* Text content */}
                <Reveal direction="left">
                    <div className="space-y-4 sm:space-y-5 md:space-y-6">
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                            {personalInfo.bio}
                        </p>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                            When I'm not coding, you'll find me exploring new technologies,
                            contributing to open-source projects, or sharing knowledge through
                            blog posts and community events.
                        </p>
                        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground pt-2">
                            <span className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                                📍 {personalInfo.location}
                            </span>
                            <span className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg break-all xs:break-normal">
                                ✉️ {personalInfo.email}
                            </span>
                        </div>
                    </div>
                </Reveal>

                {/* Stats grid */}
                <Reveal direction="right" delay={0.2}>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-card border border-border/50 card-glow text-center"
                            >
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 sm:mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-muted-foreground leading-tight">
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