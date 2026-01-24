"use client";

import { Reveal } from "@/components/ui/Reveal";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";

const languages = ["TypeScript", "JavaScript", "Python", "SQL", "HTML5", "CSS3", "Rust", "Go"];
const frameworks = ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Framer Motion", "Three.js", "PostgreSQL", "GraphQL", "Docker", "AWS", "Git"];
const tools = ["VS Code", "Figma", "Blender", "Postman", "Vercel", "GitHub Actions", "Jest", "Cypress"];

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-surface/30 relative overflow-hidden">
            <div className="container mx-auto px-6 mb-16 text-center">
                <Reveal>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        Technical <span className="text-secondary">Arsenal</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My primary stack is React/Next.js ecosystem, but I am language agnostic and always learning.
                    </p>
                </Reveal>
            </div>

            <div className="space-y-12 relative">
                {/* Gradient Masks */}
                <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none" />

                {/* Languages - Slow Left */}
                <div className="space-y-2">
                    <p className="text-center text-sm font-mono text-gray-500 uppercase tracking-widest">Languages</p>
                    <InfiniteMarquee items={languages} direction="left" speed={40} />
                </div>

                {/* Frameworks - Fast Right */}
                <div className="space-y-2">
                    <p className="text-center text-sm font-mono text-gray-500 uppercase tracking-widest">Frameworks & Libs</p>
                    <InfiniteMarquee items={frameworks} direction="right" speed={30} />
                </div>

                {/* Tools - Slow Left */}
                <div className="space-y-2">
                    <p className="text-center text-sm font-mono text-gray-500 uppercase tracking-widest">Tools & DevOps</p>
                    <InfiniteMarquee items={tools} direction="left" speed={45} />
                </div>
            </div>
        </section>
    );
}
