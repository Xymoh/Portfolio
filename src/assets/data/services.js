import {
  MdPhoneAndroid,
  MdWeb,
  MdExtension,
  MdAutoAwesome,
} from "react-icons/md";

const services = [
  {
    id: "mobile",
    icon: MdPhoneAndroid,
    title: "Mobile Apps",
    tag: "Core expertise",
    highlight: true,
    short:
      "iOS and Android apps built with React Native - from a first MVP to banking-grade products.",
    desc: "This is what I do most. I have shipped cross-platform apps for startups and publishers and worked on a large-scale React Native banking application. I cover the whole lifecycle: architecture, UI, native modules, backend integration, store releases and maintenance.",
    includes: [
      "New apps and MVPs, or taking over an existing codebase",
      "App Store and Google Play publishing",
      "Auth, payments, push notifications, offline mode, deep links",
      "Native modules when React Native is not enough (Kotlin / Swift)",
    ],
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux",
      "GraphQL",
      "REST",
      "Firebase",
    ],
  },
  {
    id: "web",
    icon: MdWeb,
    title: "Web Apps",
    tag: "Frontend & full-stack",
    short:
      "Responsive web applications, dashboards and admin panels in React, with the backend to match.",
    desc: "From landing pages to dashboards and admin panels that power a mobile product. I build the frontend in React and TypeScript and, when needed, the API behind it - Node.js, Ruby on Rails, PostgreSQL or Firebase.",
    includes: [
      "Web apps, dashboards and admin panels",
      "REST and GraphQL APIs, database design",
      "UI/UX implementation from Figma",
      "Performance, SEO and accessibility basics",
    ],
    stack: [
      "React",
      "Angular",
      "TypeScript",
      "Node.js",
      "Ruby on Rails",
      "PostgreSQL",
      "GraphQL",
      "styled-components",
    ],
  },
  {
    id: "custom",
    icon: MdExtension,
    title: "Custom Software",
    tag: "Any type of app",
    short:
      "Games, bots, desktop tools, integrations, prototypes - if it is software, we can talk about it.",
    desc: "Mobile and web are my strongest areas, but I have also built Unity games, Discord bots, real-time ML prototypes and internal tools. If you have an unusual idea, I will tell you honestly whether I am the right person for it - and estimate it for free either way.",
    includes: [
      "Game prototypes and small games (Unity, C#)",
      "Bots, automations and third-party integrations",
      "Proof-of-concepts and technical prototypes",
      "Rescuing or finishing a stalled project",
    ],
    stack: ["Unity", "C#", "Python", "Node.js", "SQLite", "Discord.py"],
  },
  {
    id: "genai",
    icon: MdAutoAwesome,
    title: "Generative AI",
    tag: "ComfyUI & LoRA",
    short:
      "ComfyUI workflows, custom LoRA training and image-generation pipelines ready to plug into your product.",
    desc: "I build and tune ComfyUI workflows, train custom LoRAs for a specific style, character or product, and prepare reproducible generation setups with example outputs. Useful for marketing visuals, product mockups, game assets or AI features inside an app.",
    includes: [
      "Custom ComfyUI workflows and node setups",
      "LoRA training on your dataset (style, character, product)",
      "Reproducible generation pipelines with example outputs",
      "Integrating generation into a mobile or web app",
    ],
    stack: ["ComfyUI", "Stable Diffusion", "LoRA", "Ollama", "Python"],
  },
];

export default services;
