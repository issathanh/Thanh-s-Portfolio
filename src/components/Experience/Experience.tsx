"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
    {
        id: 1,
        title: "FULL-STACK DEVELOPER & FOUNDER",
        company: "My Adventures App",
        period: "OCT 2022 - PRESENT",
        location: "iOS & Web",
        description: [
            "Architected and published production iOS app to App Store using React Native and Expo",
            "Implemented secure In-App Purchase system with server-side receipt validation",
            "Engineered performant UI with 60 FPS animations using React Native Reanimated",
            "Established CI/CD pipeline with Jest/Vitest testing and Sentry error tracking",
        ],
        level: "CURRENT QUEST",
        color: "arcade-cyan",
    },
    {
        id: 2,
        title: "VIETNAMESE MEDICAL INTERPRETER",
        company: "Voyce",
        period: "JUN 2024 - FEB 2025",
        location: "Winnipeg, MB",
        description: [
            "Delivered real-time medical interpretation with 100% accuracy in high-pressure environments",
            "Recognized with multiple performance awards for exceptional service quality",
            "Developed strong debugging and attention-to-detail skills applicable to code review",
        ],
        level: "LEVEL COMPLETE",
        color: "arcade-magenta",
    },
    {
        id: 3,
        title: "INTERPRETER/TRANSLATOR",
        company: "LanguageLine Solutions",
        period: "FEB 2022 - JUN 2024",
        location: "Winnipeg, MB",
        description: [
            "Provided interpretation across medical, legal, and insurance sectors",
            "Managed high-volume concurrent requests under tight deadlines",
            "Developed strong multitasking and priority management skills",
        ],
        level: "LEVEL COMPLETE",
        color: "arcade-green",
    },
    {
        id: 4,
        title: "COMPUTER SCIENCE STUDIES",
        company: "University of Manitoba",
        period: "",
        location: "Winnipeg, MB",
        description: [
            "Coursework: Data Structures, Algorithms, OOP",
            "Applied CS fundamentals in production applications",
            "Self-taught modern frameworks: React Native, Node.js, TypeScript, PostgreSQL",
        ],
        level: "ACHIEVEMENT UNLOCKED",
        color: "arcade-yellow",
    },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="experience"
            ref={ref}
            className="min-h-screen py-20 px-4 relative bg-arcade-purple/30"
        >
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-pixel text-2xl md:text-3xl text-arcade-yellow mb-4">
                        EXPERIENCE
                    </h2>
                    <p className="font-pixel text-xs text-arcade-cyan">
                        GAME HISTORY
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-arcade-cyan/30 transform md:-translate-x-1/2" />

                    {/* Experience Items */}
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative mb-12 ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                                } pl-12 md:pl-0 md:w-1/2`}
                        >
                            {/* Timeline Dot */}
                            <div
                                className={`absolute left-2 md:left-auto ${index % 2 === 0 ? "md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"
                                    } w-5 h-5 bg-${exp.color} border-4 border-arcade-dark z-10`}
                                style={{
                                    boxShadow:
                                        exp.color === "arcade-cyan"
                                            ? "0 0 10px #00FFFF"
                                            : exp.color === "arcade-magenta"
                                                ? "0 0 10px #FF00FF"
                                                : exp.color === "arcade-green"
                                                    ? "0 0 10px #00FF00"
                                                    : "0 0 10px #FFFF00",
                                    top: "2rem",
                                }}
                            />

                            {/* Content Card */}
                            <div
                                className={`bg-arcade-dark border-2 border-${exp.color}/50 p-6 hover:border-${exp.color} transition-colors ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                                    }`}
                            >
                                {/* Level Badge */}
                                <div
                                    className={`font-pixel text-[8px] text-${exp.color} mb-2`}
                                    style={{
                                        color:
                                            exp.color === "arcade-cyan"
                                                ? "#00FFFF"
                                                : exp.color === "arcade-magenta"
                                                    ? "#FF00FF"
                                                    : exp.color === "arcade-green"
                                                        ? "#00FF00"
                                                        : "#FFFF00",
                                    }}
                                >
                                    {exp.level}
                                </div>

                                {/* Title & Company */}
                                <h3 className="font-pixel text-sm text-white mb-1">
                                    {exp.title}
                                </h3>
                                <p className="font-mono text-arcade-yellow mb-1">{exp.company}</p>

                                {/* Period & Location */}
                                <p className="font-pixel text-[10px] text-gray-400 mb-4">
                                    {exp.period} {exp.location && `| ${exp.location}`}
                                </p>

                                {/* Description */}
                                <ul className="space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="font-mono text-sm text-gray-300 flex">
                                            <span className="text-arcade-cyan mr-2">▸</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
