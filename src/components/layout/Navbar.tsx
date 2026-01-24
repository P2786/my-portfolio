"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher"; // Import

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-border transition-colors duration-300">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-xl font-heading font-bold tracking-tighter">
                    PORTFOLIO<span className="text-primary">.</span>
                </Link>

                <div className="flex items-center gap-6">
                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                    pathname === link.href
                                        ? "bg-primary/10 text-primary font-bold"
                                        : "text-gray-400 hover:text-foreground hover:bg-white/5"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <ThemeSwitcher />

                    {/* Mobile Nav Placeholder */}
                    <div className="md:hidden">
                        <span className="text-gray-400">Menu</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
