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
                <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        {service.description}
                    </p>
                </CardContent>
            </Card>
        </motion.div>
    );
}
