# Thanh's Portfolio Website - Project Plan

## Overview
A retro arcade-themed portfolio website showcasing Thanh Nguyen's projects and skills as a Software Engineer.

**Theme:** Arcade / Retro Gaming  
**Stack:** Next.js 14 + TypeScript + Tailwind CSS + Framer Motion  
**Hosting:** Vercel (free tier)

---

## Design Concept

### Visual Style
- **Color Palette:**
  - Primary: Neon Cyan (`#00FFFF`)
  - Secondary: Neon Magenta (`#FF00FF`)
  - Accent: Neon Green (`#00FF00`)
  - Background: Dark (`#0a0a0a`, `#1a1a2e`)
  - Text: White (`#FFFFFF`)

- **Typography:**
  - Headings: "Press Start 2P" (Google Font - pixel style)
  - Body: "VT323" or "Space Mono" (monospace retro feel)

- **Effects:**
  - CRT scanlines overlay
  - Screen flicker on load
  - Glowing neon text effects
  - Pixel art borders and decorations

---

## Site Structure

```
/
├── Loading Screen (Arcade "INSERT COIN" intro)
├── Home / Hero Section
├── About Me
├── Projects
├── Skills
├── Experience
└── Contact
```

---

## Phase 1: Project Setup

### Tasks
- [ ] Initialize Next.js 14 with TypeScript
- [ ] Configure Tailwind CSS
- [ ] Install dependencies (Framer Motion, fonts)
- [ ] Set up folder structure
- [ ] Configure ESLint and Prettier

### Folder Structure
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── LoadingScreen/
│   │   ├── LoadingScreen.tsx
│   │   ├── CRTEffect.tsx
│   │   └── PixelProgressBar.tsx
│   ├── Navbar/
│   │   └── Navbar.tsx
│   ├── Hero/
│   │   └── Hero.tsx
│   ├── About/
│   │   └── About.tsx
│   ├── Projects/
│   │   ├── Projects.tsx
│   │   └── ProjectCard.tsx
│   ├── Skills/
│   │   └── Skills.tsx
│   ├── Experience/
│   │   └── Experience.tsx
│   └── Contact/
│       └── Contact.tsx
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
├── hooks/
│   └── useLoadingComplete.ts
└── styles/
    └── arcade.css
public/
├── images/
│   ├── projects/
│   │   └── (placeholder for project screenshots)
│   └── profile/
│       └── (placeholder for profile photo)
├── fonts/
└── sounds/
    └── (optional arcade sound effects)
```

---

## Phase 2: Loading Screen (Arcade Intro)

### Features
1. **CRT Screen Effect**
   - Scanline overlay (horizontal lines)
   - Subtle screen flicker animation
   - Rounded corners with glow

2. **"INSERT COIN" Animation**
   - Blinking text
   - Coin insertion animation
   - "PRESS ANY KEY TO START" prompt

3. **Progress Bar**
   - Pixel-art style segmented bar
   - Percentage counter
   - "LOADING ASSETS..." text

4. **Transition**
   - Screen "power on" effect when entering main site
   - Smooth fade to hero section

### Loading Screen Flow
```
[Screen flickers on]
     ↓
"THANH'S PORTFOLIO"
"© 2026"
     ↓
[Progress bar fills]
"LOADING... 100%"
     ↓
"INSERT COIN"
[Blinking]
     ↓
[User presses key/clicks]
     ↓
[CRT power-off effect → Transition to Hero]
```

---

## Phase 3: Main Sections

### 3.1 Navigation Bar
- Fixed position, transparent background
- Pixel-art style menu items
- Hamburger menu on mobile
- Active section highlighting
- Smooth scroll to sections

### 3.2 Hero Section
- Large name with glitch/neon effect: "THANH NGUYEN"
- Subtitle: "SOFTWARE ENGINEER" (typewriter effect)
- Animated pixel art decoration
- Call-to-action buttons:
  - "VIEW PROJECTS" 
  - "CONTACT ME"
- Social links (GitHub, LinkedIn)

### 3.3 About Me
- Terminal-style container
- Typing animation for bio text
- Key stats in "HIGH SCORE" format:
  ```
  PLAYER: THANH NGUYEN
  CLASS: SOFTWARE ENGINEER
  LOCATION: FREMONT, CA
  LEVEL: UC DAVIS GRADUATE
  ```
- Brief description of background and passion

### 3.4 Projects Section
- Arcade cabinet / game cartridge styled cards
- Each project card includes:
  - **Placeholder image container** (you add screenshots later)
  - Project title
  - Tech stack badges
  - Short description
  - Links: Live Demo | GitHub
- Hover effects: glow, slight tilt

#### Projects to Feature:
1. **My Adventures App** (Primary)
   - Cross-platform travel app
   - React Native, TypeScript, AWS, Supabase
   - Link: web.myadventuresapp.com

2. **Spotify Playlist Generator**
   - Python, Spotify API, AWS Lambda
   - Recommendation algorithm

3. **Real-time Object Detection**
   - Python, YOLO, OpenCV
   - Academic project

4. **UC Davis Mobile Ordering** (University Project)
   - React Native, AWS

### 3.5 Skills Section
- Power-up meter style skill bars
- Organized by category:
  
  **WEAPONS (Languages)**
  - TypeScript ████████░░ 85%
  - Python ███████░░░ 75%
  - JavaScript ████████░░ 85%
  - SQL ██████░░░░ 65%
  
  **POWER-UPS (Frameworks)**
  - React / React Native ████████░░ 85%
  - Next.js ███████░░░ 70%
  - Node.js ███████░░░ 75%
  - Express ██████░░░░ 65%
  
  **INVENTORY (Tools)**
  - AWS, Supabase, Firebase
  - Git, Docker
  - Figma, Jira

### 3.6 Experience Section
- Timeline styled as "GAME HISTORY" or level progression
- Each entry as a "completed level"

1. **My Adventures App** - Co-Founder & Developer
   - March 2024 - Present
   - Key achievements as bullet points

2. **Verizon** - Software Engineer Intern
   - June 2023 - September 2023
   - AI/ML optimization work

3. **UC Davis** - B.S. Computer Science
   - 2020 - 2024

### 3.7 Contact Section
- Arcade-style form
- "ENTER YOUR MESSAGE" header
- Input fields with pixel borders
- Submit button: "SEND MESSAGE →"
- Form service: Formspree or EmailJS
- Alternative contact info:
  - Email: thanhtnguyen03@gmail.com
  - LinkedIn: linkedin.com/in/thanh-t-nguyen
  - GitHub: github.com/thanhtnguyen03

---

## Phase 4: Animations & Polish

### Animations (Framer Motion)
- [ ] Page load sequence
- [ ] Scroll-triggered section reveals
- [ ] Hover effects on interactive elements
- [ ] Smooth scroll behavior
- [ ] Text typing/glitch effects

### Sound Effects (Optional)
- Coin insert sound
- Button click sounds
- Background 8-bit music (toggleable)

### Easter Eggs
- Konami code: ↑↑↓↓←→←→BA
  - Triggers special animation or hidden content

---

## Phase 5: Responsive Design

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Mobile Considerations
- Hamburger menu navigation
- Stacked project cards
- Simplified animations for performance
- Touch-friendly buttons

---

## Phase 6: SEO & Performance

### SEO
- [ ] Meta tags (title, description)
- [ ] Open Graph tags for social sharing
- [ ] Structured data (JSON-LD)
- [ ] Sitemap generation
- [ ] robots.txt

### Performance
- [ ] Image optimization (Next.js Image component)
- [ ] Lazy loading for images
- [ ] Font optimization
- [ ] Lighthouse score > 90

---

## Phase 7: Deployment

### Steps
1. Push to GitHub repository
2. Connect to Vercel
3. Configure domain (optional)
4. Set up analytics

### Post-Launch
- [ ] Test on multiple devices
- [ ] Gather feedback
- [ ] Iterate and improve

---

## Dependencies

```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "framer-motion": "^11.x",
    "tailwindcss": "^3.x",
    "@emailjs/browser": "^4.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "@types/react": "^18.x",
    "@types/node": "^20.x",
    "eslint": "^8.x",
    "prettier": "^3.x"
  }
}
```

---

## Assets Needed (From You)

### Required
- [ ] Project screenshots (will use placeholders for now)
- [ ] Profile photo (optional)

### Optional
- [ ] Custom pixel art assets
- [ ] Sound effect files
- [ ] Additional project details

---

## Timeline Estimate

| Phase | Description | Time |
|-------|-------------|------|
| 1 | Project Setup | 30 min |
| 2 | Loading Screen | 1-2 hours |
| 3 | Main Sections | 3-4 hours |
| 4 | Animations | 1-2 hours |
| 5 | Responsive | 1 hour |
| 6 | SEO & Performance | 30 min |
| 7 | Deployment | 30 min |

**Total Estimated Time:** 8-10 hours

---

## Ready to Build!

This plan provides a complete roadmap. I'll start with:
1. Project initialization
2. Loading screen (the arcade intro)
3. Progress through each section

Let me know when you're ready to begin!
