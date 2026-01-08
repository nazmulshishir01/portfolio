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
                "mb-8 sm:mb-10 md:mb-12 lg:mb-16",
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
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto px-2 sm:px-0">
                        {subtitle}
                    </p>
                </Reveal>
            )}
        </div>
    );
}