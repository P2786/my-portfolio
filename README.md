# High-End Animated Portfolio

A premium, interactive developer portfolio built with Next.js, Tailwind CSS, Framer Motion, and Three.js.

## 🚀 Features

- **Smooth Animations**:
  - Global Page Transitions (Framer Motion)
  - Scroll-triggered reveals
  - Staggered text effects
  - Smooth Scroll (Lenis)
- **Interactive Visuals**:
  - 3D Floating Geometry (React Three Fiber)
  - Particle Background (tsParticles)
  - Custom fluid cursor
- **Modern UI/UX**:
  - Dark Mode aesthetic (Obsidian/Neon)
  - Glassmorphism effects
  - Responsive layouts (Grid/Flex)
  - Custom Splash Screen Loader

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Motion**: Framer Motion, GSAP, Lenis
- **3D**: Three.js, React Three Fiber, Drei
- **Particles**: tsparticles
- **Icons**: Lucide React
- **Fonts**: Inter & Space Grotesk

## 📦 Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/portfolio-web.git
    cd portfolio-web
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## 🚢 Deployment

The project is optimized for deployment on **Netlify** or **Vercel**.

### Netlify Deployment
1.  Connect your GitHub repository to Netlify.
2.  Set Build Command: `npm run build`
3.  Set Publish Directory: `.next` (or let Netlify auto-detect Next.js)

## 📁 Project Structure

```
src/
├── app/              # Next.js Routes & Layouts
├── components/       
│   ├── layout/       # Navbar, Footer
│   └── ui/           # Reusable UI (Buttons, Reveal, Scene3D)
├── sections/         # Page Sections (Hero, About, Projects...)
└── styles/           # Global CSS
```

## 🎨 Customization

- **Colors**: Edit `tailwind.config.ts` to change primary/secondary accents.
- **Content**: Update section files in `src/sections/` with your own data.
