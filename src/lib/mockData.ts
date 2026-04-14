import { Project, User, SponsorshipTier } from "../types";

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Chidinma Okafor",
    role: "UI/UX Designer",
    avatar: "https://picsum.photos/seed/chidinma/200",
    bio: "Crafting digital experiences that matter. Passionate about Material 3 and accessibility.",
    skills: ["Figma", "React", "Tailwind CSS", "Prototyping"],
    hireMe: true,
    sponsorshipsReceived: 1200,
  },
  {
    id: "2",
    name: "Emeka Chen",
    role: "Fullstack Developer",
    avatar: "https://picsum.photos/seed/emeka/200",
    bio: "Building robust APIs and scalable frontends. Open source enthusiast.",
    skills: ["Node.js", "TypeScript", "PostgreSQL", "Next.js"],
    hireMe: false,
    sponsorshipsReceived: 850,
  },
];

export const mockProjects: Project[] = [
  {
    id: "p1",
    title: "EcoTrack AI",
    description: "An AI-powered platform to track and reduce carbon footprint for small businesses.",
    thumbnail: "https://picsum.photos/seed/website-eco/800/450",
    gallery: [
      "https://picsum.photos/seed/dashboard-eco/800/450",
      "https://picsum.photos/seed/ui-eco/800/450",
    ],
    liveUrl: "https://ecotrack.ai",
    repoUrl: "https://github.com/ecotrack/core",
    techStack: ["React", "Python", "TensorFlow", "Tailwind"],
    contributors: [
      { userId: "1", name: "Chidinma Okafor", avatar: "https://picsum.photos/seed/chidinma/200", role: "UI Design", contribution: "Designed the entire dashboard and mobile app interface." },
      { userId: "2", name: "Emeka Chen", avatar: "https://picsum.photos/seed/emeka/200", role: "Backend", contribution: "Implemented the carbon calculation engine and API." },
    ],
    updates: [
      { id: "u1", date: "2026-04-01", title: "v1.0 Launched!", content: "We are officially live on the mainnet!" },
      { id: "u2", date: "2026-03-15", title: "AI Model Optimization", content: "Reduced calculation latency by 40%." },
    ],
    fundingGoal: 5000,
    fundingRaised: 3200,
    category: "AI",
    launchedAt: "2026-04-01",
  },
  {
    id: "p2",
    title: "DeFi Pulse",
    description: "Real-time analytics for decentralized finance protocols.",
    thumbnail: "https://picsum.photos/seed/interface-defi/800/450",
    gallery: ["https://picsum.photos/seed/startup-defi/800/450"],
    liveUrl: "https://defipulse.io",
    repoUrl: "https://github.com/defi/pulse",
    techStack: ["Next.js", "Solidity", "Ethers.js", "GraphQL"],
    contributors: [
      { userId: "2", name: "Emeka Chen", avatar: "https://picsum.photos/seed/emeka/200", role: "Lead Dev", contribution: "Architected the data indexing layer." },
    ],
    updates: [
      { id: "u3", date: "2026-03-20", title: "Uniswap V4 Support", content: "Now tracking all V4 pools." },
    ],
    fundingGoal: 10000,
    fundingRaised: 7500,
    category: "Web3",
    launchedAt: "2026-03-10",
  },
];

export const sponsorshipTiers: SponsorshipTier[] = [
  { id: "t1", name: "Bronze", price: 10, perks: ["Logo on README", "Discord Role"], color: "hsl(38, 92%, 50%)" },
  { id: "t2", name: "Silver", price: 50, perks: ["Early Beta Access", "Monthly Newsletter"], color: "hsl(240, 1%, 78%)" },
  { id: "t3", name: "Gold", price: 200, perks: ["1-on-1 with Team", "Featured on Website"], color: "hsl(262, 83%, 58%)" },
];
