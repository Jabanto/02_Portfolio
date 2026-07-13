# Portfolio - Jordan Hugo Abanto

Premium, minimalist portfolio landing page for Jordan Hugo Abanto, Full Stack Software Engineer specialized in AI-powered applications, enterprise software, cloud technologies, and modern web development.

Live: [https://jabanto.github.io/02_Portfolio](https://jabanto.github.io/02_Portfolio)

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 + TypeScript |
| Styling | Tailwind CSS 3.4 |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Fonts | Space Grotesk (headlines) + Inter (body) |
| Bundler | Create React App 5 |
| Deploy | gh-pages + cross-env |

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
| Navbar | `Navbar.tsx` | Sticky, transparent over hero, solid on scroll. Links: About, Work, Skills, Contact. Mobile hamburger menu with SafeAnimatePresence wrapper. |
| Hero | `Hero.tsx` | Full-viewport, looping video background (`hero-transition.mp4`). Headline: "Engineering intelligence into production." CTA: "My Career Path". |
| Problem | `Problem.tsx` | Centered editorial text block (max-w-3xl). |
| Solution | `Solution.tsx` | 3-column grid: AI-Powered Applications, Enterprise-Grade Systems, Cloud & Modern Web. Icons: Sparkles, ShieldCheck, Cloud. |
| Projects | `Projects.tsx` | 3 career-stage cards: Building Engineer, Software Engineer, Software Solutions Architect. Dark cards with accent-tinted border. |
| Stack | `Stack.tsx` | 10 technology badges (React, Python, C#/.NET, Java & Spring, WMS, etc.) + 3 stats. |
| Testimonials | `Testimonials.tsx` | 3 quote cards with name and role. |
| Contact | `Contact.tsx` | CTA: "Currently open to select full-time roles and consulting engagements." Button: "Let's Talk" links to Google Calendar. |
| Footer | `Footer.tsx` | Name, copyright (dynamic year), GitHub, LinkedIn, Email links. |

## Custom Hook: usePingPongVideo

Located at `src/hooks/usePingPongVideo.ts`.

Implements a pause-and-replay video loop:

1. Video plays forward until `onEnded` fires
2. Video pauses and waits `pauseDuration` (default 7000ms)
3. Resets `currentTime` to 0 and plays again

**Mobile/slow connection fallback**: On viewports < 768px or slow connections (`saveData`, `slow-2g`, `2g`), renders `hero-frame-1.png` as static background instead of video.

**Note**: `SafeAnimatePresence` wrapper in Navbar used due to framer-motion type incompatibility with React 19.

## Project Content

### Career Journey (Projects section)

| Stage | Title | Focus |
|-------|-------|-------|
| Foundation | Building Engineer | AutoCAD, industrial engineering, public infrastructure — precision-first mindset |
| Pivot | Software Engineer | C#/.NET WPF, Java & Spring, WMS systems at scale for European logistics automation |
| Current | Software Solutions Architect | AI-powered solutions, quantum computing exploration |

### Tech Stack (Stack section)

React, Python, C# / .NET WPF, Java & Spring, WMS Systems, REST & Microservices, AI-Powered Systems, Solutions Architecture, Enterprise Integration, Quantum Computing (exploring)

### Stats

- 5+ Years Experience
- 30+ Projects Shipped
- 10+ Technologies

### Contact

- **Booking**: [Google Calendar](https://calendar.app.google/6UCWf4FgBegWnLiB9)
- **GitHub**: [https://github.com/Jabanto](https://github.com/Jabanto)
- **LinkedIn**: [https://www.linkedin.com/in/jordan-abanto-38400752/](https://www.linkedin.com/in/jordan-abanto-38400752/)
- **Email**: jabanto.witron@emailhub.kr

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
├── index.html              # Google Fonts, meta tags, favicon_io links
├── manifest.json
├── favicon_io/             # favicon.ico, apple-touch-icon, android-chrome
├── hero-frame-1.png        # Static poster / mobile fallback
├── hero-frame-2.png        # Final video frame
└── hero-transition.mp4     # ~10s looping video
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
| `npm run deploy` | Build with PUBLIC_URL and deploy to GitHub Pages |
| `npm test` | Run tests |

## Deployment

GitHub Pages deployment uses `cross-env` for cross-platform `PUBLIC_URL` support:

```json
"predeploy": "cross-env PUBLIC_URL=/02_Portfolio npm run build",
"deploy": "gh-pages -d build"
```

Assets use `process.env.PUBLIC_URL` prefix for correct path resolution on GitHub Pages.

## License

MIT License

---

## Recommended Improvements (TODO)

### Content

- [ ] Replace placeholder testimonials with real quotes from colleagues/managers
- [ ] Add real project links (currently all point to `#`)
- [ ] Verify stats accuracy (years experience, projects shipped, technologies count)

### SEO & Social

- [ ] Add Open Graph meta tags (`og:title`, `og:description`, `og:image`) for social share previews
- [ ] Add Twitter Card meta tags
- [ ] Update `manifest.json` colors (`theme_color` is `#000000`, should be `#0A0A0F`)
- [ ] Add `icons` array to `manifest.json` pointing to favicon_io PNGs for PWA install

### Performance

- [ ] Compress `hero-transition.mp4` (currently ~10MB, could reduce with ffmpeg)
- [ ] Consider lazy-loading testimonials section
- [ ] Consider using WebP format for hero-frame images instead of PNG

### Code Quality

- [ ] Remove unused `marquee` and `glow` keyframes from `tailwind.config.js`
- [ ] Remove unused `fallbackSrc` parameter from `usePingPongVideo` hook
- [ ] Fix double quotes in testimonials (renders as `""quote""`)
- [ ] Remove redundant `!isMobile` check in Hero (already handled by `shouldUseVideo`)
- [ ] Add `react-app-env.d.ts` for TypeScript image module declarations

### Accessibility

- [ ] Add `alt` text or `aria-label` to video element
- [ ] Ensure color contrast ratios meet WCAG AA standard
- [ ] Add `prefers-reduced-motion` media query to disable animations

### Features

- [ ] Add a blog/writing section
- [ ] Add dark/light theme toggle
- [ ] Add a contact form as alternative to Google Calendar
- [ ] Add Google Analytics or privacy-friendly alternative (Plausible/Umami)
- [ ] Add a 404 page
- [ ] Add `robots.txt` and `sitemap.xml` for SEO
