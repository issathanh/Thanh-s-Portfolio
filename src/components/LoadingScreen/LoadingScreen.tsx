"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
    onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState("INITIALIZING SYSTEM...");
    const [showInsertCoin, setShowInsertCoin] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    const loadingMessages = [
        "INITIALIZING SYSTEM...",
        "LOADING ASSETS...",
        "COMPILING PROJECTS...",
        "RENDERING SKILLS...",
        "PREPARING EXPERIENCE...",
        "SYSTEM READY!",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setShowInsertCoin(true);
                    return 100;
                }
                const newProgress = prev + Math.random() * 15 + 5;
                const messageIndex = Math.min(
                    Math.floor((newProgress / 100) * loadingMessages.length),
                    loadingMessages.length - 1
                );
                setLoadingText(loadingMessages[messageIndex]);
                return Math.min(newProgress, 100);
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    const handleStart = useCallback(() => {
        if (showInsertCoin && !isExiting) {
            setIsExiting(true);
            setTimeout(onComplete, 800);
        }
    }, [showInsertCoin, isExiting, onComplete]);

    useEffect(() => {
        const handleKeyPress = () => handleStart();
        const handleClick = () => handleStart();

        if (showInsertCoin) {
            window.addEventListener("keydown", handleKeyPress);
            window.addEventListener("click", handleClick);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
            window.removeEventListener("click", handleClick);
        };
    }, [showInsertCoin, handleStart]);

    return (
        <AnimatePresence>
            {!isExiting ? (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 0.95,
                        filter: "brightness(2)",
                    }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 bg-arcade-dark flex items-center justify-center overflow-hidden crt"
                >
                    {/* Scanlines overlay */}
                    <div className="absolute inset-0 pointer-events-none z-50">
                        <div className="w-full h-full bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
                    </div>

                    {/* Vignette effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

                    {/* Main content */}
                    <div className="relative z-10 text-center px-4">
                        {/* Title */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-12"
                        >
                            <h1 className="font-pixel text-2xl md:text-4xl text-arcade-cyan neon-text mb-4">
                                THANH&apos;S PORTFOLIO
                            </h1>
                            <p className="font-pixel text-xs md:text-sm text-arcade-magenta">
                                © 2026 ALL RIGHTS RESERVED
                            </p>
                        </motion.div>

                        {/* Pixel Art Decoration */}
                        <div className="mb-8 flex justify-center gap-2">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: i * 0.1, type: "spring" }}
                                    className="w-4 h-4 bg-arcade-green"
                                    style={{
                                        boxShadow: "0 0 10px #00FF00",
                                    }}
                                />
                            ))}
                        </div>

                        {/* Progress Section */}
                        <div className="mb-8">
                            <p className="font-pixel text-xs md:text-sm text-white mb-4">
                                {loadingText}
                            </p>

                            {/* Progress Bar Container */}
                            <div className="w-64 md:w-96 mx-auto">
                                <div className="relative h-6 border-4 border-arcade-cyan bg-arcade-dark">
                                    {/* Progress Fill */}
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-arcade-cyan via-arcade-magenta to-arcade-green"
                                        style={{ width: `${progress}%` }}
                                        transition={{ duration: 0.2 }}
                                    />

                                    {/* Segmented overlay */}
                                    <div className="absolute inset-0 flex">
                                        {[...Array(20)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="flex-1 border-r border-arcade-dark last:border-r-0"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Percentage */}
                                <p className="font-pixel text-lg md:text-xl text-arcade-yellow mt-2">
                                    {Math.floor(progress)}%
                                </p>
                            </div>
                        </div>

                        {/* Insert Coin / Press Start */}
                        <AnimatePresence>
                            {showInsertCoin && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-8"
                                >
                                    <motion.p
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        className="font-pixel text-sm md:text-lg text-arcade-yellow"
                                    >
                                        - INSERT COIN -
                                    </motion.p>
                                    <motion.p
                                        animate={{ opacity: [1, 0.5, 1] }}
                                        transition={{ duration: 0.5, repeat: Infinity }}
                                        className="font-pixel text-xs md:text-sm text-white mt-4"
                                    >
                                        PRESS ANY KEY OR CLICK TO START
                                    </motion.p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Decorative pixels at bottom */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
                            <div className="w-2 h-2 bg-arcade-cyan animate-pulse" />
                            <div className="w-2 h-2 bg-arcade-magenta animate-pulse delay-100" />
                            <div className="w-2 h-2 bg-arcade-green animate-pulse delay-200" />
                            <div className="w-2 h-2 bg-arcade-yellow animate-pulse delay-300" />
                        </div>
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-arcade-cyan" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-arcade-cyan" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-arcade-cyan" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-arcade-cyan" />
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        scale: 1.1,
                    }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 bg-white"
                />
            )}
        </AnimatePresence>
    );
}
