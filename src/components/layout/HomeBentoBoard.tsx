"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    span?: string;
    delay?: number;
}

export function BentoCard({ children, className, span = "col-span-1", delay = 0 }: BentoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -5, scale: 1.01 }}
            className={cn(
                "group relative bg-surface/40 backdrop-blur-md border border-border/50 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:bg-surface/60 hover:border-primary/30 shadow-sm hover:shadow-xl hover:shadow-primary/5 p-8 flex flex-col justify-center",
                span,
                className
            )}
        >
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {children}
        </motion.div>
    );
}

export function HomeBentoBoard({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-10 py-24">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6 auto-rows-[120px]">
                {children}
            </div>
        </div>
    );
}
