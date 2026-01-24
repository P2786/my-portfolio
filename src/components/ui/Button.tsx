"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25",
            secondary: "bg-surface text-foreground hover:bg-surface/80 border border-border",
            outline: "border-2 border-primary text-primary hover:bg-primary/10",
            ghost: "text-gray-400 hover:text-foreground hover:bg-white/5",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <Magnetic>
                <motion.button
                    ref={ref}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={twMerge(
                        "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none",
                        variants[variant],
                        sizes[size],
                        className
                    )}
                    {...props as any}
                />
            </Magnetic>
        );
    }
);

Button.displayName = "Button";
