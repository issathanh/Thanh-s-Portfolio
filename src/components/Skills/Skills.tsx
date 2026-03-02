"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Skill {
    name: string;
    level: number;
    color: string;
}

const skillCategories = [
    {
        title: "WEAPONS",
        subtitle: "Languages",
        skills: [
            { name: "JavaScript", level: 90, color: "arcade-cyan" },
            { name: "TypeScript", level: 90, color: "arcade-cyan" },
            { name: "Python", level: 80, color: "arcade-cyan" },
            { name: "Java", level: 70, color: "arcade-cyan" },
            { name: "SQL", level: 75, color: "arcade-cyan" },
            { name: "HTML/CSS", level: 85, color: "arcade-cyan" },
        ],
    },
    {
        title: "POWER-UPS",
        subtitle: "Mobile & Frontend",
        skills: [
            { name: "React Native", level: 95, color: "arcade-magenta" },
            { name: "Expo", level: 90, color: "arcade-magenta" },
            { name: "React", level: 85, color: "arcade-magenta" },
            { name: "Next.js", level: 80, color: "arcade-magenta" },
            { name: "Tailwind CSS", level: 85, color: "arcade-magenta" },
            { name: "React Native Reanimated", level: 85, color: "arcade-magenta" },
        ],
    },
    {
        title: "INVENTORY",
        subtitle: "Backend & Database",
        skills: [
            { name: "Node.js", level: 85, color: "arcade-green" },
            { name: "Express.js", level: 80, color: "arcade-green" },
            { name: "PostgreSQL", level: 80, color: "arcade-green" },
            { name: "Drizzle ORM", level: 75, color: "arcade-green" },
            { name: "RESTful APIs", level: 85, color: "arcade-green" },
        ],
    },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="mb-4">
            <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-sm text-white">{skill.name}</span>
                <span className="font-pixel text-[10px] text-arcade-yellow">
                    {skill.level}%
                </span>
            </div>
            <div className="h-4 bg-arcade-dark border-2 border-arcade-cyan/30 relative overflow-hidden">
                {/* Segmented background */}
                <div className="absolute inset-0 flex">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="flex-1 border-r border-arcade-dark/50 last:border-r-0"
                        />
                    ))}
                </div>

                {/* Skill fill */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay, ease: "easeOut" }}
                    className={`h-full bg-${skill.color} relative`}
                    style={{
                        background:
                            skill.color === "arcade-cyan"
                                ? "linear-gradient(90deg, #00FFFF, #00CCCC)"
                                : skill.color === "arcade-magenta"
                                    ? "linear-gradient(90deg, #FF00FF, #CC00CC)"
                                    : "linear-gradient(90deg, #00FF00, #00CC00)",
                        boxShadow:
                            skill.color === "arcade-cyan"
                                ? "0 0 10px #00FFFF"
                                : skill.color === "arcade-magenta"
                                    ? "0 0 10px #FF00FF"
                                    : "0 0 10px #00FF00",
                    }}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="skills"
            ref={ref}
            className="min-h-screen py-20 px-4 relative"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-pixel text-2xl md:text-3xl text-arcade-green neon-text-green mb-4">
                        SKILLS
                    </h2>
                    <p className="font-pixel text-xs text-arcade-cyan">
                        POWER LEVELS
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="bg-arcade-dark/50 border-2 border-arcade-cyan/30 p-6"
                        >
                            {/* Category Header */}
                            <div className="text-center mb-6 pb-4 border-b border-arcade-cyan/20">
                                <h3 className="font-pixel text-sm text-arcade-yellow mb-1">
                                    {category.title}
                                </h3>
                                <p className="font-pixel text-[8px] text-gray-400">
                                    {category.subtitle}
                                </p>
                            </div>

                            {/* Skills */}
                            {category.skills.map((skill, skillIndex) => (
                                <SkillBar
                                    key={skill.name}
                                    skill={skill}
                                    delay={categoryIndex * 0.1 + skillIndex * 0.1}
                                />
                            ))}
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <p className="font-pixel text-xs text-arcade-cyan mb-4">
                        ALSO EQUIPPED WITH:
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {[
                            "Git",
                            "Clerk Auth",
                            "Stripe",
                            "In-App Purchases",
                            "Sentry",
                            "Jest/Vitest",
                            "Claude API",
                            "OpenAI API",
                            "Lottie",
                        ].map((tag) => (
                            <span
                                key={tag}
                                className="font-mono text-xs px-3 py-1 bg-arcade-purple/50 text-gray-300 border border-arcade-cyan/20 hover:border-arcade-cyan hover:text-arcade-cyan transition-colors cursor-default"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
