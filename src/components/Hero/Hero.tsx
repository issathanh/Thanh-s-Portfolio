"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
    const [displayText, setDisplayText] = useState("");
    const fullText = "WEB & MOBILE DEVELOPER";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Floating Pixels */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-arcade-cyan/30"
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                        }}
                        animate={{
                            y: [null, -20, 20, -20],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center px-4">
                {/* Greeting */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-pixel text-xs md:text-sm text-arcade-green mb-4"
                >
                    HELLO, WORLD! I&apos;M
                </motion.p>

                {/* Name with Glitch Effect */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-pixel text-3xl md:text-5xl lg:text-6xl text-arcade-cyan neon-text mb-6 relative"
                >
                    <span className="relative inline-block">
                        THANH THUONG
                        {/* Glitch layers */}
                        <span className="absolute top-0 left-0 w-full h-full text-arcade-magenta opacity-70 animate-pulse" style={{ clipPath: "inset(0 0 50% 0)", transform: "translate(-2px, -2px)" }}>
                            THANH THUONG
                        </span>
                    </span>
                </motion.h1>

                {/* Subtitle with Typewriter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="font-pixel text-sm md:text-xl text-white mb-8 h-8"
                >
                    <span>{displayText}</span>
                    <span className="animate-blink text-arcade-cyan">_</span>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 font-mono text-sm"
                >
                    <div className="text-arcade-yellow">
                        <span className="text-arcade-cyan">LEVEL:</span> U OF MANITOBA
                    </div>
                    <div className="text-arcade-yellow">
                        <span className="text-arcade-cyan">CLASS:</span> iOS DEV
                    </div>
                    <div className="text-arcade-yellow">
                        <span className="text-arcade-cyan">ZONE:</span> WINNIPEG, MB
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="font-pixel text-xs px-8 py-4 bg-arcade-cyan text-arcade-dark hover:bg-arcade-magenta transition-all hover:shadow-neon-magenta"
                    >
                        VIEW PROJECTS
                    </a>
                    <a
                        href="#contact"
                        className="font-pixel text-xs px-8 py-4 border-2 border-arcade-cyan text-arcade-cyan hover:bg-arcade-cyan hover:text-arcade-dark transition-all"
                    >
                        CONTACT ME
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
                    className="mt-12 flex justify-center"
                >
                    <div className="font-pixel text-sm text-arcade-cyan/70">
                        ▼ SCROLL ▼
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
