"use client";

import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const projects = [
    {
        title: "ChatMitra - Real-Time Chat App",
        description: "Real-time messaging platform with login/signup, image sharing, and persistent chat storage.",
        tags: ["PHP", "MySQL", "JavaScript"],
        link: "https://github.com/P2786",
        github: "https://github.com/P2786",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Online Voting System",
        description: "Secure voting web app with authentication, vote counting, and admin dashboard.",
        tags: ["PHP", "MySQL", "AJAX"],
        link: "https://github.com/P2786",
        github: "https://github.com/P2786",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "PrepPilot AI",
        description: "AI-based interview preparation platform with smart guidance and performance analysis.",
        tags: ["Node.js", "AI", "Express"],
        link: "https://github.com/P2786",
        github: "https://github.com/P2786",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "InvisiCam - Hidden Camera Detector",
        description: "Android app that detects hidden cameras using sensors, flashlight, and magnetic detection.",
        tags: ["Kotlin", "Android", "Sensors"],
        link: "https://github.com/P2786",
        github: "https://github.com/P2786",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "PramitVote+ Polling App",
        description: "Anonymous polling system with real-time voting results and user interaction.",
        tags: ["JavaScript", "Web App", "Realtime"],
        link: "https://github.com/P2786",
        github: "https://github.com/P2786",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Pritify - Spotify Clone",
        description: "Music streaming UI clone with song lists, artists, and login-based access system.",
        tags: ["React", "UI/UX", "Music App"],
        link: "https://github.com/P2786",
        github: "https://github.com/P2786",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "PramitPicx - Photo Editor",
        description: "Web-based photo editor with filters, adjustments, and image export functionality.",
        tags: ["JavaScript", "Canvas", "Web App"],
        link: "https://github.com/P2786",
        github: "https://github.com/P2786",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Restaurant Booking System",
        description: "PHP-based table booking system with database integration and form handling.",
        tags: ["PHP", "MySQL", "Forms"],
        link: "https://github.com/P2786",
        github: "https://github.com/P2786",
        className: "md:col-span-1 md:row-span-1",
    }
];

import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-surface/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <Reveal width="fit-content">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                            Selected <span className="text-primary">Works</span>
                        </h2>
                        <p className="text-muted-foreground max-w-xl">
                            A showcase of my recent technical endeavors. <span className="text-primary font-medium animate-pulse">Hover to explore more.</span>
                        </p>
                    </Reveal>
                    <Reveal width="fit-content">
                        <a href="https://github.com/P2786" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="mt-6 md:mt-0">View All Repos</Button>
                        </a>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Reveal key={index} width="100%" className={project.className}>
                            <a href={project.link || project.github} target="_blank" rel="noopener noreferrer" className="block h-full">
                                <SpotlightCard className="h-[450px] flex flex-col group hover:border-primary/50 transition-all duration-500 cursor-pointer">
                                    <div className="p-10 flex-1 flex flex-col h-full relative">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                                <span className="font-bold text-xl">{project.title[0]}</span>
                                            </div>
                                            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300">
                                                <div className="p-2.5 bg-surface/80 backdrop-blur-sm rounded-full text-muted-foreground hover:text-primary border border-border/50"><Github size={20} /></div>
                                                <div className="p-2.5 bg-surface/80 backdrop-blur-sm rounded-full text-muted-foreground hover:text-primary border border-border/50"><ArrowUpRight size={20} /></div>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-muted-foreground line-clamp-3 group-hover:text-foreground/80 transition-colors">{project.description}</p>

                                        <div className="mt-6 flex items-center text-primary text-sm font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                            View Project Case <ArrowUpRight size={16} className="ml-1" />
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-2.5 py-1 bg-surface text-xs font-medium text-primary rounded-full border border-border/50 group-hover:border-primary/30 transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
