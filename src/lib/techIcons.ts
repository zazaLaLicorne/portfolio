// src/lib/techIcons.ts

import reactIcon from "../assets/tech/react.webp";
import reactnativeIcon from "../assets/tech/reactnative.webp";
import astroIcon from "../assets/tech/astro.webp";
import nextIcon from "../assets/tech/next.webp";
import tailwindIcon from "../assets/tech/tailwind.webp";
import mongodbIcon from "../assets/tech/mongodb.webp";
import vercelIcon from "../assets/tech/vercel.webp";
import cloudinaryIcon from "../assets/tech/cloudinary.webp";
import cssIcon from "../assets/tech/css.webp";
import jsIcon from "../assets/tech/js.webp";
import expressIcon from "../assets/tech/express.webp";
import tsIcon from "../assets/tech/ts.webp";
import nodeIcon from "../assets/tech/node.webp";
import htmlIcon from "../assets/tech/html.webp";
import githubIcon from "../assets/tech/github.webp";
import figmaIcon from "../assets/tech/figma.webp";
import gaIcon from "../assets/tech/ga.webp";
import gscIcon from "../assets/tech/gsc.webp";
import shadcnIcon from "../assets/tech/shadcnui.webp";
import daisyuiIcon from "../assets/tech/daisyui.webp";
import notionIcon from "../assets/tech/notion.webp";
import vscodeIcon from "../assets/tech/vscode.webp";
import canvaIcon from "../assets/tech/canva.webp";

export const techIcons: Record<string, ImageMetadata> = {
  // Conception
  figma: figmaIcon,
  canva: canvaIcon,
  notion: notionIcon,

  // Langages
  javascript: jsIcon,
  typescript: tsIcon,
  html: htmlIcon,
  css: cssIcon,

  // Framework front
  react: reactIcon,
  "react native": reactnativeIcon,
  astro: astroIcon,
  next: nextIcon,

  // Backend
  "node.js": nodeIcon,
  mongodb: mongodbIcon,
  express: expressIcon,

  // CSS libs
  tailwindcss: tailwindIcon,
  "daisy ui": daisyuiIcon,
  "shadcn/ui": shadcnIcon,

  // Outils
  github: githubIcon,
  vercel: vercelIcon,
  cloudinary: cloudinaryIcon,
  "google analytics": gaIcon,
  "google search console": gscIcon,
  vscode: vscodeIcon,
};

export function getTechIcon(name: string) {
  return techIcons[name.toLowerCase()] ?? null;
}
