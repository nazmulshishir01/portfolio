"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { viewportOnce } from "@/lib/animations";

interface RevealProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

const directionVariants = {
    up: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    down: {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 },
    },
    left: {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    },
    right: {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 },
    },
};

export function Reveal({
    children,
    className,
    delay = 0,
    direction = "up",
    ...props
}: RevealProps) {
    const variants = directionVariants[direction];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{
                hidden: variants.hidden,
                visible: {
                    ...variants.visible,
                    transition: {
                        duration: 0.6,
                        delay,
                        ease: [0.22, 1, 0.36, 1] as const,
                    },
                },
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
