"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, Send } from "lucide-react";

interface ContactProps {
    isEmbedded?: boolean;
}

export function Contact({ isEmbedded = false }: ContactProps) {
    const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // ✅ Required
    formData.append("access_key", "a2edd26d-59b3-4a6b-a668-9c09cec7127d");

    // ✅ Email setup
    formData.append("from_name", "Pramit Portfolio");
    formData.append("subject", "🚀 New Message from Portfolio");
    formData.append("to_email", "pramit.savaliya2786@gmail.com");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setStatus("success");
            form.reset();
            setTimeout(() => setStatus("idle"), 3000);
        } else {
            console.error("API Error:", data);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }

    } catch (error) {
        console.error("Network Error:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
    }
};

    const content = (
        <div className={isEmbedded ? "w-full text-left" : "max-w-2xl mx-auto flex flex-col items-center text-center"}>

            {!isEmbedded && (
                <Reveal>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8 mx-auto">
                        <Mail size={32} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Ready to start a <br /><span className="text-primary">Project?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-12">
                        Let's build something amazing together. Reach out for collaborations or just a friendly hello.
                    </p>
                </Reveal>
            )}

            <Reveal width="100%">
                <form onSubmit={handleSubmit} className="w-full space-y-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="group relative">
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Name"
                                className="w-full bg-surface/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all duration-300"
                            />
                        </div>
                        <div className="group relative">
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Email"
                                className="w-full bg-surface/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all duration-300"
                            />
                        </div>
                    </div>
                    <div className="group relative">
                        <textarea
                            name="message"
                            required
                            placeholder="Message"
                            rows={4}
                            className="w-full bg-surface/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all duration-300 resize-none"
                        />
                    </div>

                    <Button 
                        disabled={status === "submitting" || status === "success"}
                        className="w-full" 
                        size="lg"
                    >
                        {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                        <Send className="ml-2 w-4 h-4" />
                    </Button>
                </form>
            </Reveal>

        </div>
    );

    if (isEmbedded) return content;

    return (
        <section id="contact" className="py-24 bg-surface/30">
            <div className="container mx-auto px-6">
                {content}
            </div>
        </section>
    );
}
