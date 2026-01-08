"use client";

import { motion } from "framer-motion";
import {
    Code,
    Palette,
    Plug,
    Zap,
    MessageCircle,
    Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Service } from "@/content/portfolio";

const iconMap: Record<string, React.ElementType> = {
    code: Code,
    palette: Palette,
    plug: Plug,
    zap: Zap,
    "message-circle": MessageCircle,
    users: Users,
};

interface ServiceCardProps {
    service: Service;
    index: number;
    className?: string;
}

export function ServiceCard({ service, index, className }: ServiceCardProps) {
    const Icon = iconMap[service.icon] || Code;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card
                className={cn(
                    "group h-full bg-card/50 border-border/50 transition-all duration-300 hover:border-primary/50 card-glow",
                    className
                )}
            >
                <CardHeader className="pb-2 sm:pb-3 p-4 sm:p-5 md:p-6">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 md:p-6 pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                    </p>
                </CardContent>
            </Card>
        </motion.div>
    );
}