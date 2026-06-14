@import 'tailwindcss';
@import 'tw-animate-css';
@import 'shadcn/tailwind.css';

@custom-variant dark (&:is(.dark *));

@theme inline {
  --font-fraunces: var(--font-fraunces);
  --font-heading: var(--font-fraunces);
  --font-sans: var(--font-geist-sans), 'Geist Fallback';
  --font-mono: var(--font-geist-mono), 'Geist Mono Fallback';
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-background: var(--background);
  --color-carbon: var(--carbon);
  --color-ember: var(--ember);
  --color-bone: var(--bone);
  --color-graphite: var(--graphite);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}

:root {
  color-scheme: dark;
  --carbon: #050505;
  --graphite: #1a1a1a;
  --ember: #f37512;
  --bone: #f2f2ec;
  --background: #050505;
  --foreground: #f2f2ec;
  --card: #1a1a1a;
  --card-foreground: #f2f2ec;
  --popover: #1a1a1a;
  --popover-foreground: #f2f2ec;
  --primary: #f37512;
  --primary-foreground: #050505;
  --secondary: #2a2a2a;
  --secondary-foreground: #f2f2ec;
  --muted: #3a3a3a;
  --muted-foreground: #9a9a9a;
  --accent: #f37512;
  --accent-foreground: #050505;
  --destructive: #ff4444;
  --border: #2a2a2a;
  --input: #2a2a2a;
  --ring: #f37512;
  --chart-1: #f37512;
  --chart-2: #fbd5a5;
  --chart-3: #2a2a2a;
  --chart-4: #3a3a3a;
  --chart-5: #1a1a1a;
  --radius: 0.5rem;
  --sidebar: #1a1a1a;
  --sidebar-foreground: #f2f2ec;
  --sidebar-primary: #f37512;
  --sidebar-primary-foreground: #050505;
  --sidebar-accent: #2a2a2a;
  --sidebar-accent-foreground: #f2f2ec;
  --sidebar-border: #2a2a2a;
  --sidebar-ring: #f37512;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-carbon text-bone;
  }
  html {
    @apply font-sans;
  }
}

/* Display font utility */
@layer utilities {
  .font-display {
    @apply font-fraunces;
  }

  /* Custom cursor styles */
  .cursor-view {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="%23f37512" stroke-width="2"/></svg>') 12 12, auto;
  }

  /* Smooth scroll container */
  .smooth-scroll {
    scroll-behavior: smooth;
  }

  /* Grid pattern background */
  .grid-pattern {
    background-image: 
      linear-gradient(rgba(242, 242, 236, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(242, 242, 236, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
  }

  /* Noise texture */
  .noise-texture {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4"/></filter><rect width="100" height="100" fill="%23050505" filter="url(%23noise)"/></svg>');
    mix-blend-mode: overlay;
    opacity: 0.03;
  }

  /* Vignette effect */
  .vignette {
    background: radial-gradient(ellipse at center, rgba(5, 5, 5, 0) 0%, rgba(5, 5, 5, 0.5) 100%);
    pointer-events: none;
  }
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(243, 117, 18, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(243, 117, 18, 0.8);
  }
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@layer utilities {
  .animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out;
  }

  .animate-slideInLeft {
    animation: slideInLeft 0.6s ease-out;
  }

  .animate-slideInRight {
    animation: slideInRight 0.6s ease-out;
  }

  .animate-glow {
    animation: glow 2s infinite;
  }

  .animate-shimmer {
    animation: shimmer 2s infinite;
    background: linear-gradient(90deg, transparent, rgba(243, 117, 18, 0.2), transparent);
    background-size: 200% 100%;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
}
