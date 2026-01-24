"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const education = [
    { year: "2026", title: "Full Stack Development", company: "Advanced Mastery", desc: "Expanding into robust backend architectures and full-cycle application deployment." },
    { year: "2025", title: "Data Structures & Algorithms", company: "Technical Core", desc: "Deepening problem-solving skills and architectural efficiency through rigorous DSA practice." },
    { year: "2024", title: "Frontend Professional", company: "Design-First Web", desc: "Started professional journey focusing on high-end interactive UI/UX and modern frameworks." },
    { year: "2024 - 2028", title: "BS Computer Science", company: "UMT (University of Management and Technology)", desc: "Currently pursuing a bachelor's degree with a focus on core computing fundamentals." },
];

export function Timeline() {
    return (
        <div className="space-y-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-center mb-8">My Journey</h3>
            <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
                {education.map((item, index) => (
                    <Reveal key={index} width="100%">
                        <div className="ml-8 relative">
                            {/* Dot */}
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border border-primary bg-background flex items-center justify-center">
                                <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            </span>

                            <h4 className="text-xl font-bold">{item.title}</h4>
                            <span className="text-sm text-primary font-mono mb-2 block">{item.company} | {item.year}</span>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
}
