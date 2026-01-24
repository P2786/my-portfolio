"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 500, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [themeColor, setThemeColor] = useState("#22C55E"); // Fallback Green

    useEffect(() => {
        const updateColor = () => {
            const style = getComputedStyle(document.documentElement);
            const primary = style.getPropertyValue("--primary").trim();
            if (primary) setThemeColor(primary);
        };

        updateColor();

        // Polling as a fallback for MutationObserver in some edge cases
        const timer = setInterval(updateColor, 1000);

        const observer = new MutationObserver(updateColor);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "class"] });

        return () => {
            observer.disconnect();
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = !!(
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("a") ||
                target.closest("button") ||
                target.getAttribute("role") === "button"
            );

            setIsHovering(isClickable);
        };

        window.addEventListener("mousemove", moveCursor, { passive: true });
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-[99999] flex items-center justify-center transition-opacity duration-300"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                borderColor: themeColor,
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{
                scale: isHovering ? 2.5 : 1,
                backgroundColor: isHovering ? `${themeColor}20` : "transparent",
            }}
        >
            <motion.div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: themeColor }}
                animate={{
                    scale: isHovering ? 0 : 1,
                    opacity: isHovering ? 0 : 1
                }}
            />
        </motion.div>
    );
}
