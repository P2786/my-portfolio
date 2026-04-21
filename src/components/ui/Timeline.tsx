"use client";

import { Reveal } from "@/components/ui/Reveal";

const education = [
    {
        year: "2026",
        title: "AI-Based Project Development",
        company: "PrepPilot AI",
        desc: "Developing AI-powered applications with smart features like user analysis, performance tracking, and intelligent recommendations."
    },
    {
        year: "2026",
        title: "Android App Development",
        company: "InvisiCam Project",
        desc: "Working on Android applications using Kotlin and mobile sensors, including the InvisiCam hidden camera detection project."
    },
    {
        year: "2025",
        title: "Full Stack Web Development",
        company: "Projects & Practice",
        desc: "Developed complete web applications using PHP, MySQL, JavaScript, and React, focusing on both frontend and backend development."
    },
    {
        year: "2024",
        title: "Frontend Developer",
        company: "Web Development",
        desc: "Started journey as a frontend developer, building responsive and user-friendly websites using HTML, CSS, JavaScript, and modern UI techniques."
    },
    {
        year: "2023 - Present",
        title: "BCA (Bachelor of Computer Applications)",
        company: "Uka Tarsadia University (UTU)",
        desc: "Currently pursuing BCA with a strong focus on software development, programming fundamentals, and real-world project building."
    }
];

export function Timeline() {
    return (
        <div className="space-y-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-center mb-8">
                My <span className="text-primary">Journey</span>
            </h3>

            <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
                {education.map((item, index) => (
                    <Reveal key={index} width="100%">
                        <div className="ml-8 relative">

                            {/* Dot */}
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border border-primary bg-background flex items-center justify-center">
                                <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            </span>

                            {/* Content */}
                            <h4 className="text-xl font-bold text-foreground">
                                {item.title}
                            </h4>

                            <span className="text-sm text-primary font-mono mb-2 block">
                                {item.company} | {item.year}
                            </span>

                            <p className="text-muted-foreground">
                                {item.desc}
                            </p>

                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
}