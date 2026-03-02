export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    imageUrl?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "MY ADVENTURES",
        description: "Production iOS App on App Store",
        longDescription: "Published iOS app featuring AI-powered story generation with TikTok-style feed, secure In-App Purchases with server-side validation, 60 FPS animations with React Native Reanimated, and CI/CD pipeline with Jest/Vitest testing.",
        technologies: ["React Native", "Expo", "TypeScript", "PostgreSQL", "Anthropic Claude API"],
        liveUrl: "https://web.myadventuresapp.com",
        featured: true,
    },
    {
        id: 2,
        title: "PORTFOLIO WEBSITE",
        description: "Arcade-themed developer portfolio",
        longDescription: "Designed and built a retro arcade-themed portfolio featuring CRT screen effects, 60 FPS animations with Framer Motion, responsive design with custom pixel-art styling, and static site optimization for performance and SEO.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://thanhthuong.dev",
        featured: true,
    },
];
