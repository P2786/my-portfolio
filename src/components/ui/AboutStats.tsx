"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
    { value: "1", label: "Year Performance" },
    { value: "20+", label: "Projects Built" },
    { value: "BSCS", label: "Degree Pursuit" },
    { value: "24/7", label: "Learning Mode" },
];

export function AboutStats() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
                <Reveal key={index} width="100%">
                    <div className="flex flex-col items-center justify-center text-center p-6 md:p-8 bg-surface/30 backdrop-blur-sm rounded-3xl border border-border group hover:bg-surface/50 hover:border-primary/50 transition-all duration-500 h-[160px] md:h-[180px] w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center w-full"
                        >
                            <span className="text-4xl lg:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary leading-none mb-3">
                                {stat.value}
                            </span>
                            <span className="text-sm md:text-base text-muted-foreground group-hover:text-primary transition-colors font-medium tracking-tight">
                                {stat.label}
                            </span>
                        </motion.div>
                    </div>
                </Reveal>
            ))}
        </div>
    );
}
