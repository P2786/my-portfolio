"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, Github, Linkedin, Instagram } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navLinks: { name: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
    const menuVariants: Variants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.1,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const linkVariants: Variants = {
        closed: { opacity: 0, y: 50 },
        open: { opacity: 1, y: 0 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={menuVariants}
                    className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <nav className="flex flex-col items-center gap-8 mb-12">
                        {navLinks.map((link) => (
                            <motion.div key={link.name} variants={linkVariants}>
                                <Link
                                    href={link.href}
                                    onClick={onClose}
                                    className="text-4xl font-heading font-bold tracking-tight hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    <motion.div variants={linkVariants} className="flex gap-6 mt-8">
                        <a href="https://github.com/P2786" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/Pramit-Savaliya/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://www.instagram.com/pramit_savaliya_2708" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                            <Instagram size={20} />
                        </a>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
