"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";

const themes = [
    // Dark Themes
    { id: "midnight-tech", name: "Midnight Tech", color: "#38BDF8", type: "dark" },
    { id: "cyber-blue", name: "Cyber Blue", color: "#2563EB", type: "dark" },
    { id: "neo-green", name: "Neo Hacker", color: "#22C55E", type: "dark" },
    { id: "royal-purple", name: "Royal Purple", color: "#A78BFA", type: "dark" },
    { id: "sunset-developer", name: "Sunset", color: "#FB7185", type: "dark" },
    { id: "forest-calm", name: "Forest Calm", color: "#34D399", type: "dark" },
    { id: "lava-contrast", name: "Lava", color: "#F97316", type: "dark" },
    { id: "ocean-depth", name: "Ocean Depth", color: "#22D3EE", type: "dark" },
    { id: "gold-prestige", name: "Gold Prestige", color: "#FACC15", type: "dark" },
    { id: "crimson-night", name: "Crimson Night", color: "#DC2626", type: "dark" },
    { id: "terminal-classic", name: "Terminal", color: "#10B981", type: "dark" },
    { id: "earth-tone", name: "Earth Tone", color: "#D97706", type: "dark" },
    { id: "steel-gray", name: "Steel Gray", color: "#60A5FA", type: "dark" },
    { id: "deep-teal", name: "Deep Teal", color: "#2DD4BF", type: "dark" },
    { id: "mocha-luxe", name: "Mocha Luxe", color: "#FB923C", type: "dark" },
    { id: "neon-violet", name: "Neon Violet", color: "#C084FC", type: "dark" },
    { id: "blue-gray", name: "Blue Gray", color: "#38BDF8", type: "dark" },

    // Light Themes
    { id: "minimal-white", name: "Minimal White", color: "#4F46E5", type: "light" },
    { id: "soft-beige", name: "Soft Beige", color: "#2563EB", type: "light" },
    { id: "indigo-glass", name: "Indigo Glass", color: "#4338CA", type: "light" },
    { id: "pastel-ui", name: "Pastel UI", color: "#EC4899", type: "light" },
    { id: "arctic-clean", name: "Arctic Clean", color: "#0EA5E9", type: "light" },
    // New Light Themes
    { id: "solar-flare", name: "Solar Flare", color: "#F97316", type: "light" },
    { id: "emerald-city", name: "Emerald City", color: "#10B981", type: "light" },
    { id: "royal-day", name: "Royal Day", color: "#9333EA", type: "light" },
    { id: "ocean-breeze", name: "Ocean Breeze", color: "#06B6D4", type: "light" },
    { id: "rose-petal", name: "Rose Petal", color: "#E11D48", type: "light" },
    { id: "slate-standard", name: "Slate Standard", color: "#64748B", type: "light" },
    { id: "golden-hour", name: "Golden Hour", color: "#EAB308", type: "light" },
    { id: "lavender-mist", name: "Lavender Mist", color: "#D946EF", type: "light" },
    { id: "sky-blue", name: "Sky Blue", color: "#0EA5E9", type: "light" },
    { id: "corporate-clean", name: "Corporate Clean", color: "#334155", type: "light" },
    { id: "coffee-morning", name: "Coffee Morning", color: "#A8A29E", type: "light" },
    { id: "mint-fresh", name: "Mint Fresh", color: "#14B8A6", type: "light" },
];

const containerVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            staggerChildren: 0.03,
            delayChildren: 0.05
        }
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        y: 10,
        transition: {
            staggerChildren: 0.02,
            staggerDirection: -1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
};

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [filter, setFilter] = useState<"all" | "dark" | "light">("all");

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const filteredThemes = filter === "all" ? themes : themes.filter(t => t.type === filter);

    return (
        <div className="relative">
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="relative"
            >
                <Palette className="w-5 h-5" />
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed top-24 left-1/2 -translate-x-1/2 w-[90vw] max-w-sm p-4 bg-surface/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl z-50 flex flex-col gap-4 max-h-[70vh] overflow-hidden md:absolute md:top-full md:right-0 md:left-auto md:translate-x-0 md:w-80 md:max-h-[600px] md:mt-2"
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        {/* Filter Filters */}
                        <div className="flex gap-2 p-1 bg-background/50 rounded-lg">
                            {["all", "dark", "light"].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f as any)}
                                    className={`flex-1 py-1.5 text-xs font-bold rounded-md capitalize transition-all duration-300 ${filter === f ? "bg-primary text-white shadow-md" : "text-gray-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>

                        <div
                            className="grid grid-cols-1 gap-1 overflow-y-auto custom-scrollbar pr-2 max-h-[400px]"
                            onWheel={(e) => e.stopPropagation()}
                        >
                            {filteredThemes.map((t) => (
                                <motion.button
                                    variants={itemVariants}
                                    key={t.id}
                                    onClick={() => setTheme(t.id)}
                                    className={`relative flex items-center gap-3 p-2 rounded-full text-sm font-medium transition-all duration-200 text-left w-full group ${theme === t.id
                                        ? "bg-primary/20 text-primary ring-1 ring-primary/50 translate-x-1"
                                        : "text-gray-500 dark:text-gray-400 hover:text-foreground hover:bg-white/10 hover:pl-3"
                                        }`}
                                >
                                    <span
                                        className="w-4 h-4 rounded-full border border-white/10 shadow-sm"
                                        style={{ backgroundColor: t.color }}
                                    />
                                    <span className="flex-1">{t.name}</span>
                                    {/* Active indicator */}
                                    {theme === t.id && (
                                        <motion.div
                                            layoutId="active-theme"
                                            className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_currentColor]"
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
