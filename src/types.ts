export interface User {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  skills: string[];
  hireMe: boolean;
  sponsorshipsReceived: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  gallery: string[];
  liveUrl: string;
  repoUrl: string;
  techStack: string[];
  contributors: Contributor[];
  updates: UpdateLog[];
  fundingGoal: number;
  fundingRaised: number;
  category: 'AI' | 'Web3' | 'Fintech' | 'Open Source' | 'Design';
  launchedAt: string;
}

export interface Contributor {
  userId: string;
  name: string;
  avatar: string;
  role: string;
  contribution: string;
}

export interface UpdateLog {
  id: string;
  date: string;
  title: string;
  content: string;
}

export interface SponsorshipTier {
  id: string;
  name: string;
  price: number;
  perks: string[];
  color: string;
}
