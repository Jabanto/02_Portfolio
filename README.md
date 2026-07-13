# Portfolio - Jordan Hugo Abanto

Premium, minimalist portfolio landing page for Jordan Hugo Abanto, Full Stack Software Engineer specialized in AI-powered applications, enterprise software, cloud technologies, and modern web development.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 + TypeScript |
| Styling | Tailwind CSS 3.4 |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Fonts | Space Grotesk (headlines) + Inter (body) |
| Bundler | Create React App 5 |

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Primary BG | `#0A0A0F` | Page background |
| Secondary BG | `#12131A` | Cards, sections |
| Primary Text | `#F5F6F8` | Headlines, body |
| Secondary Text | `#8A8F98` | Subtitles, descriptions |
| Accent | `#22D3EE` | CTAs, glows, hover states |

All transitions use soft easing `[0.25, 0.1, 0.25, 1]`. No abrupt snaps.

## Page Sections

| Section | Component | Description |
|---------|-----------|-------------|
| Navbar | `Navbar.tsx` | Sticky, transparent over hero, solid on scroll. Links: About, Work, Skills, Contact. Mobile hamburger menu. |
| Hero | `Hero.tsx` | Full-viewport, ping-pong video background (`hero-transition.mp4`). Headline: "Engineering intelligence into production." CTA: "View My Work". |
| Problem | `Problem.tsx` | Centered editorial text block (~700px max-width). |
| Solution | `Solution.tsx` | 3-column grid: AI-Powered Applications, Enterprise-Grade Systems, Cloud & Modern Web. Icons from Lucide (Sparkles, ShieldCheck, Cloud). |
| Projects | `Projects.tsx` | 3 project cards with title, description, tech stack tags, ghost "View Project" button. Dark cards with `#22D3EE`-tinted border. |
| Stack | `Stack.tsx` | Technology badges row + 3 stats (years, projects, technologies). |
| Testimonials | `Testimonials.tsx` | 3 quote cards with quote, name, role. |
| Contact | `Contact.tsx` | CTA: "Currently open to select full-time roles." Button: "Let's Talk" (mailto). |
| Footer | `Footer.tsx` | Name, copyright, GitHub/LinkedIn/Email links. |

## Custom Hook: usePingPongVideo

Located at `src/hooks/usePingPongVideo.ts`.

Implements seamless video ping-pong loop (forward then backward) without native `loop` attribute:

1. Video plays forward until `onEnded` fires
2. On end, `requestAnimationFrame` manually decrements `video.currentTime` in small steps (reverse simulation)
3. When reaching 0, flips direction back to forward and calls `video.play()`

**Mobile/slow connection fallback**: On viewports < 768px or slow connections (`saveData`, `slow-2g`, `2g`), renders `hero-frame-1.png` as static background instead of video.

**Note**: Uses `SafeAnimatePresence` wrapper in Navbar due to framer-motion type incompatibility with React 19.

## Project Structure

```
src/
├── hooks/
│   └── usePingPongVideo.ts
├── components/
│   ├── Navbar/Navbar.tsx
│   ├── Hero/Hero.tsx
│   ├── Problem/Problem.tsx
│   ├── Solution/Solution.tsx
│   ├── projects/Projects.tsx
│   ├── Stack/Stack.tsx
│   ├── Testimonials/Testimonials.tsx
│   ├── contact/Contact.tsx
│   └── Footer/Footer.tsx
├── App.tsx
├── index.tsx
└── index.css
public/
├── index.html              # Google Fonts, meta tags
├── manifest.json
├── hero-frame-1.png        # Static poster / mobile fallback
├── hero-frame-2.png        # Final video frame
└── hero-transition.mp4     # 10-second looping video
```

## Installation

```bash
git clone https://github.com/jabanto/02_Portfolio.git
cd 02_Portfolio
npm install
npm start
```

Opens at [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Development server at localhost:3000 |
| `npm run build` | Production build to `build/` |
| `npm test` | Run tests |

## Known TODOs

- Replace placeholder project data with real projects
- Replace placeholder testimonials with real quotes
- Update email from `jordan@example.com` to real address
- Update GitHub and LinkedIn URLs in Footer
- Replace `logo192.png` and `logo512.png` with actual icons
- Remove assets from repo root (duplicates of `public/` assets)

## License

MIT License
