"use client";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { TimelineItem } from "@/components/shared/timeline-item";
import { timeline } from "@/content/portfolio";

export function TimelineSection() {
    return (
        <SectionWrapper id="experience" className="bg-muted/20">
            <SectionHeading
                title="Experience & Education"
                subtitle="My professional journey and academic background"
            />

            <div className="max-w-2xl mx-auto">
                {timeline.map((item, index) => (
                    <TimelineItem
                        key={`${item.company}-${item.period}`}
                        item={item}
                        index={index}
                        isLast={index === timeline.length - 1}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
}
