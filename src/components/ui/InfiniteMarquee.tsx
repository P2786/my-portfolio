"use client";

import { motion } from "framer-motion";
import React from "react";

interface InfiniteMarqueeProps {
    items: string[];
    direction?: "left" | "right";
    speed?: number;
}

export function InfiniteMarquee({ items, direction = "left", speed = 20 }: InfiniteMarqueeProps) {
    return (
        <div className="flex overflow-hidden relative z-0 w-full">
            <motion.div
                initial={{ x: direction === "left" ? 0 : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : 0 }}
                transition={{ ease: "linear", duration: speed, repeat: Infinity }}
                className="flex flex-shrink-0 gap-8 py-4 pr-8"
            >
                {items.map((item, idx) => (
                    <span
                        key={idx}
                        className="text-4xl md:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400/20 to-gray-400/40 whitespace-nowrap"
                    >
                        {item}
                    </span>
                ))}
                {items.map((item, idx) => (
                    <span
                        key={`dup-${idx}`}
                        className="text-4xl md:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400/20 to-gray-400/40 whitespace-nowrap"
                    >
                        {item}
                    </span>
                ))}
            </motion.div>
            <motion.div
                initial={{ x: direction === "left" ? 0 : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : 0 }}
                transition={{ ease: "linear", duration: speed, repeat: Infinity }}
                className="flex flex-shrink-0 gap-8 py-4 pr-8"
            >
                {items.map((item, idx) => (
                    <span
                        key={idx}
                        className="text-4xl md:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400/20 to-gray-400/40 whitespace-nowrap"
                    >
                        {item}
                    </span>
                ))}
                {items.map((item, idx) => (
                    <span
                        key={`dup-${idx}`}
                        className="text-4xl md:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400/20 to-gray-400/40 whitespace-nowrap"
                    >
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
