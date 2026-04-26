import { Project } from "../types";

export const projectList: Project[] = [
  {
    id: "kd-resizable",
    name: "kd-resizable",
    description:
      "Lightweight, accessible React resizable panel component — zero runtime dependencies beyond React.",
    stack: ["React", "TypeScript", "npm", "pnpm", "Vite", "kumarjitdas"],
    repoUrl: "https://github.com/KumarjitDas/kd-resizable",
    liveUrl: "https://kumarjitdas.github.io/#/kd-resizable",
    longDescription: `A lightweight and accessible resizable panel component for React with zero runtime dependencies.

Key Features:
• Horizontal & vertical splits
• Nestable groups (e.g. IDE-style three-pane layout)
• minSize / maxSize constraints per panel
• Keyboard accessible (arrow keys resize)
• Dark mode support via CSS custom properties
• Tiny bundle size (~3 kB gzipped)`,
  },
];
