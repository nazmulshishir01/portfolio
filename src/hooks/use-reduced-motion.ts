import { useReducedMotion } from "framer-motion";

export function useMotionPreference() {
    const prefersReducedMotion = useReducedMotion();

    return {
        prefersReducedMotion,
        // Returns animation props based on motion preference
        getMotionProps: (animationProps: object) => {
            if (prefersReducedMotion) {
                return {};
            }
            return animationProps;
        },
    };
}
