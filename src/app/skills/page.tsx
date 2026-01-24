"use client";

import { Skills } from "@/sections/Skills"; // Keep the marquee for visual impact
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Star, Zap, Code, Terminal } from "lucide-react";

// Enhanced Data Structure
const allSkills = [
    {
        id: "frontend",
        cat: "Frontend Engineering",
        icon: <Code />,
        desc: "Building pixel-perfect, accessible user interfaces.",
        items: [
            { name: "React", level: "Expert", desc: "Hooks, Context, Performance tuning" },
            { name: "Next.js", level: "Expert", desc: "App Router, SSR, Server Actions" },
            { name: "TypeScript", level: "Expert", desc: "Strict typing, Generics, Utility types" },
            { name: "Tailwind CSS", level: "Expert", desc: "Design systems, Animations, v4 Config" },
            { name: "Framer Motion", level: "Advanced", desc: "Complex gestures, Shared Layout animations" },
            { name: "Three.js", level: "Intermediate", desc: "R3F, Shaders, WebGL performance" }
        ]
    },
    {
        id: "backend",
        cat: "Backend & Cloud",
        icon: <Terminal />,
        desc: "Scalable server-side logic and database architecture.",
        items: [
            { name: "Node.js", level: "Advanced", desc: "REST APIs, Microservices, Event Loop" },
            { name: "PostgreSQL", level: "Advanced", desc: "Complex queries, Indexing, Prisma" },
            { name: "GraphQL", level: "Intermediate", desc: "Apollo Server, Schema design" },
            { name: "AWS", level: "Intermediate", desc: "S3, Lambda, EC2 basics" },
            { name: "Docker", level: "Intermediate", desc: "Containerization, Compose, Multi-stage builds" }
        ]
    },
    {
        id: "design",
        cat: "Design & Creative",
        icon: <Zap />,
        desc: "Bridging the gap between design and engineering.",
        items: [
            { name: "Figma", level: "Advanced", desc: "Auto-layout, Components, Prototyping" },
            { name: "Blender", level: "Intermediate", desc: "3D Modeling, Texturing, Lighting" },
            { name: "UI/UX", level: "Advanced", desc: "Accessibility (a11y), User Flows" }
        ]
    },
];

export default function SkillsPage() {
    const [openCategory, setOpenCategory] = useState<string | null>("frontend");

    return (
        <main className="pt-20 min-h-screen">
            {/* Header */}
            <section className="py-20 text-center container mx-auto px-6">
                <Reveal>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                        Technical <span className="text-primary">Deep Dive</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
                        A detailed breakdown of my stack. Click on a category to explore my expertise and experience level.
                    </p>
                </Reveal>
            </section>

            {/* Interactive Falling Accordion */}
            <section className="pb-24 container mx-auto px-6 max-w-4xl">
                <div className="space-y-6">
                    {allSkills.map((category) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-surface/30 border border-border rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenCategory(openCategory === category.id ? null : category.id)}
                                className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/10 text-primary rounded-xl">
                                        {category.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-heading">{category.cat}</h3>
                                        <p className="text-sm text-gray-400">{category.desc}</p>
                                    </div>
                                </div>
                                <ChevronDown
                                    className={`w-6 h-6 transition-transform duration-300 ${openCategory === category.id ? "rotate-180 text-primary" : "text-gray-500"}`}
                                />
                            </button>

                            <AnimatePresence>
                                {openCategory === category.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 pt-0 grid gap-4 grid-cols-1 md:grid-cols-2">
                                            {category.items.map((skill, idx) => (
                                                <motion.div
                                                    key={skill.name}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: idx * 0.1 }} // Falling stagger efffect
                                                    className="bg-background/50 p-4 rounded-xl border border-white/5 hover:border-primary/30 transition-colors"
                                                >
                                                    <div className="flex justify-between items-center mb-2">
                                                        <h4 className="font-bold">{skill.name}</h4>
                                                        <span className="text-xs font-mono px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                                            {skill.level}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-400">{skill.desc}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
