// Framer Motion animation variants and utilities

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

export const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const fadeInDown = {
    hidden: {
        opacity: 0,
        y: -20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const fadeInLeft = {
    hidden: {
        opacity: 0,
        x: -20
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const fadeInRight = {
    hidden: {
        opacity: 0,
        x: 20
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export const slideInFromLeft = {
    hidden: {
        x: "-100%",
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
        x: "-100%",
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
    }
};

export const cardHover = {
    rest: {
        scale: 1,
        y: 0,
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
    },
    hover: {
        scale: 1.02,
        y: -5,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

export const glowHover = {
    rest: {
        boxShadow: "0 0 0 0 rgba(99, 102, 241, 0)"
    },
    hover: {
        boxShadow: "0 0 20px 4px rgba(99, 102, 241, 0.3)",
        transition: { duration: 0.3 }
    }
};

// Hero text animation
export const heroTextContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.3
        }
    }
};

export const heroTextChild = {
    hidden: {
        opacity: 0,
        y: 50,
        rotateX: -90
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.8,
            ease: [0.6, 0.01, 0.05, 0.95] as const
        }
    }
};

// Reduced motion fallbacks
export const getReducedMotionVariants = (variants: object) => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
});

// Viewport trigger options
export const viewportOnce = {
    once: true,
    margin: "-100px"
};

export const viewportRepeat = {
    once: false,
    margin: "-50px"
};
