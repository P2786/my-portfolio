"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface MagneticProps {
    children: React.ReactNode;
    strength?: number; // How strong the pull is
}

export function Magnetic({ children, strength = 0.5 }: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null);
    const position = { x: useMotionValue(0), y: useMotionValue(0) };

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const smoothX = useSpring(position.x, springConfig);
    const smoothY = useSpring(position.y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        if (!ref.current) return; // Add safety check
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        position.x.set(middleX * strength);
        position.y.set(middleY * strength);
    };

    const handleMouseLeave = () => {
        position.x.set(0);
        position.y.set(0);
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="flex items-center justify-center"
        >
            <motion.div
                style={{ x: smoothX, y: smoothY }}
            >
                {children}
            </motion.div>
        </div>
    );
}
