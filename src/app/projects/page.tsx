"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const projects = [
    {
        title: "ChatMitra - Chat App",
        desc: "Real-time chat application with login/signup, image sharing, and live messaging using PHP and MySQL.",
        tech: ["PHP", "MySQL", "JavaScript"],
        link: "https://github.com/P2786",
        github: "https://github.com/P2786"
    },
    {
        title: "Online Voting System",
        desc: "Secure voting platform with authentication, vote tracking, and admin panel for managing elections.",
        tech: ["PHP", "MySQL", "AJAX"],
        link: "https://github.com/P2786",
        github: "https://github.com/P2786"
    },
    {
        title: "PrepPilot AI",
        desc: "AI-powered interview preparation platform that analyzes user responses and provides smart feedback.",
        tech: ["Node.js", "Express", "AI"],
        link: "https://github.com/P2786",
        github: "https://github.com/P2786"
    },
    {
        title: "InvisiCam - Detector App",
        desc: "Android app that detects hidden cameras using flashlight, sensors, and magnetic field detection.",
        tech: ["Kotlin", "Android", "Sensors"],
        link: "https://github.com/P2786",
        github: "https://github.com/P2786"
    },
    {
        title: "PramitVote+ Polling App",
        desc: "Anonymous polling web app with real-time results and interactive user voting system.",
        tech: ["JavaScript", "Web App", "Realtime"],
        link: "https://github.com/P2786",
        github: "https://github.com/P2786"
    },
    {
        title: "Pritify - Spotify Clone",
        desc: "Music streaming UI clone with login system, artist list, and playlist functionality.",
        tech: ["React", "JavaScript", "UI/UX"],
        link: "https://github.com/P2786",
        github: "https://github.com/P2786"
    }
];

export default function ProjectsPage() {
    return (
        <main className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-6">
                <Reveal>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">All <span className="text-primary">Projects</span></h1>
                    <p className="text-muted-foreground max-w-2xl text-lg mb-16">
                        A curated list of my recent work, side projects, and open source contributions.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <Reveal key={idx} width="100%" delay={idx * 0.1}>
                            <SpotlightCard className="h-[420px] flex flex-col group hover:border-primary/50 transition-colors duration-500">
                                <div className="p-10 flex-1 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner">
                                            <span className="font-bold text-xl">{project.title[0]}</span>
                                        </div>
                                        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300">
                                            <a href={project.github} className="p-2.5 bg-surface/80 backdrop-blur-sm rounded-full transition-colors text-muted-foreground hover:text-primary border border-border/50"><Github size={20} /></a>
                                            <a href={project.link} className="p-2.5 bg-surface/80 backdrop-blur-sm rounded-full transition-colors text-muted-foreground hover:text-primary border border-border/50"><ArrowUpRight size={20} /></a>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6 flex-grow leading-relaxed line-clamp-3">
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 bg-surface border border-border/50 rounded-full text-xs font-medium text-primary">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </Reveal>
                    ))}
                </div>
            </div>
        </main>
    );
}
