"use client";

import { Reveal } from "@/components/ui/Reveal";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";

const languages = [
    "JavaScript",
    ".Net",
    "Java",
    "Python",
    "PHP",
    "SQL",
    "HTML5",
    "CSS3",
    "C++",
    "C"
];

// 🚀 FRAMEWORKS / TECH
const frameworks = [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express",
    "Tailwind CSS",
    "Firebase",
    "MySQL",
    "SQLite",
    "REST API",
    "AJAX"
];

// 🛠 TOOLS / DEV ENV
const tools = [
    "VS Code",
    "Android Studio",
    "XAMPP",
    "Postman",
    "GitHub",
    "Netlify",
    "Vercel",
    "Figma",
    "Blender"
];

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-surface/30 relative overflow-hidden">
            <div className="container mx-auto px-6 mb-16 text-center">
                <Reveal>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        My <span className="text-secondary">Tech Stack</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I build modern full stack web apps, Android apps, and AI-based solutions with a focus on performance and clean UI.
                    </p>
                </Reveal>
            </div>

            <div className="space-y-12 relative">
                
                {/* Gradient Masks */}
                <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none" />

                {/* Languages */}
                <div className="space-y-2">
                    <p className="text-center text-sm font-mono text-gray-500 uppercase tracking-widest">
                        Languages
                    </p>
                    <InfiniteMarquee items={languages} direction="left" speed={40} />
                </div>

                {/* Frameworks */}
                <div className="space-y-2">
                    <p className="text-center text-sm font-mono text-gray-500 uppercase tracking-widest">
                        Frameworks & Backend
                    </p>
                    <InfiniteMarquee items={frameworks} direction="right" speed={30} />
                </div>

                {/* Tools */}
                <div className="space-y-2">
                    <p className="text-center text-sm font-mono text-gray-500 uppercase tracking-widest">
                        Tools & Platforms
                    </p>
                    <InfiniteMarquee items={tools} direction="left" speed={45} />
                </div>
            </div>
        </section>
    );
}