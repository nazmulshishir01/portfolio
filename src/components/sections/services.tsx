"use client";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { services } from "@/content/portfolio";

export function ServicesSection() {
    return (
        <SectionWrapper id="services">
            <SectionHeading
                title="What I Do"
                subtitle="Services I offer to help bring your ideas to life"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        service={service}
                        index={index}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
}
