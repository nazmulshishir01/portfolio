"use client";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { SkillBadge } from "@/components/shared/skill-badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skills } from "@/content/portfolio";
import { Code, Server, Wrench } from "lucide-react";

const skillCategories = [
    { key: "frontend", label: "Frontend", icon: Code, data: skills.frontend },
    { key: "backend", label: "Backend", icon: Server, data: skills.backend },
    { key: "tools", label: "Tools", icon: Wrench, data: skills.tools },
];

export function SkillsSection() {
    return (
        <SectionWrapper id="skills" className="bg-muted/20">
            <SectionHeading
                title="Skills & Technologies"
                subtitle="The tools and technologies I work with"
            />

            <Reveal>
                <Tabs defaultValue="frontend" className="w-full max-w-3xl mx-auto">
                    <TabsList className="grid w-full grid-cols-3 mb-6 sm:mb-8 h-auto p-1 gap-1">
                        {skillCategories.map((category) => (
                            <TabsTrigger
                                key={category.key}
                                value={category.key}
                                className="flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                            >
                                <category.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                                <span className="hidden xs:inline sm:inline">{category.label}</span>
                                <span className="xs:hidden sm:hidden">{category.label.slice(0, 5)}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {skillCategories.map((category) => (
                        <TabsContent key={category.key} value={category.key}>
                            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                                {category.data.map((skill, index) => (
                                    <Reveal key={skill.name} delay={index * 0.05}>
                                        <SkillBadge
                                            name={skill.name}
                                            level={skill.level}
                                            showLevel
                                        />
                                    </Reveal>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </Reveal>
        </SectionWrapper>
    );
}