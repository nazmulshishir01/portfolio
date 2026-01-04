import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center";
}

export function SectionHeading({
    title,
    subtitle,
    className,
    align = "center",
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "mb-12 md:mb-16",
                align === "center" && "text-center",
                className
            )}
        >
            <Reveal>
                <h2 className="heading-lg">
                    <span className="gradient-text">{title}</span>
                </h2>
            </Reveal>
            {subtitle && (
                <Reveal delay={0.1}>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </Reveal>
            )}
        </div>
    );
}
