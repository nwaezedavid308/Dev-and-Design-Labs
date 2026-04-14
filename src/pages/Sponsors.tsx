import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { 
  Heart, 
  ShieldCheck, 
  Zap, 
  Globe, 
  TrendingUp, 
  Users,
  ArrowUpRight,
  Search
} from "lucide-react";

const sponsors = [
  { name: "TechFlow DAO", category: "Open Source", contribution: "$50k+", logo: "https://picsum.photos/seed/dao/100" },
  { name: "Nexus Ventures", category: "Venture Capital", contribution: "$250k+", logo: "https://picsum.photos/seed/nexus/100" },
  { name: "BuildGuild", category: "Community", contribution: "$20k+", logo: "https://picsum.photos/seed/guild/100" },
  { name: "EtherPatrons", category: "Web3 Grants", contribution: "$100k+", logo: "https://picsum.photos/seed/ether/100" },
];

export default function Sponsors() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center py-20 overflow-hidden">
        <div className="absolute inset-0 dot-mesh opacity-[0.3] -z-10" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <Badge variant="secondary" className="mb-8 px-6 py-2">Sponsor Hub</Badge>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 font-display tracking-tight">
            Fuel the next <span className="gradient-text">Big Build.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
            Join a network of patrons, DAOs, and companies funding the most promising 
            builders in the ecosystem.
          </p>
          <div className="flex justify-center gap-6">
            <Button size="lg" className="px-12 shadow-glow-strong">Become a Sponsor</Button>
            <Button size="lg" variant="outline" className="px-12">View Grant Programs</Button>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
        {[
          { label: "Total Funded", value: "$2.4M", icon: Zap, color: "text-primary" },
          { label: "Active Sponsors", value: "150+", icon: Users, color: "text-secondary" },
          { label: "Projects Supported", value: "450+", icon: Heart, color: "text-tertiary" },
        ].map((stat, i) => (
          <Card key={i} className="text-center p-10 bg-surface-variant/5 border-none shadow-premium hover:shadow-glow-strong">
            <stat.icon className={`w-10 h-10 mx-auto mb-6 ${stat.color}`} />
            <div className="text-5xl font-black mb-3 font-display tracking-tighter">{stat.value}</div>
            <div className="text-xs text-on-surface-variant uppercase font-bold tracking-[0.2em]">{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Top Sponsors */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Top Patrons</h2>
          <Button variant="ghost">View Leaderboard</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor, i) => (
            <Card key={i} className="hover:border-primary/30 transition-all group">
              <CardHeader className="text-center">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="w-20 h-20 rounded-2xl mx-auto mb-4 grayscale group-hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
                <CardTitle className="text-xl">{sponsor.name}</CardTitle>
                <Badge variant="outline" className="mt-2">{sponsor.category}</Badge>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <div className="text-primary font-bold text-lg">{sponsor.contribution}</div>
                <p className="text-xs text-on-surface-variant mt-1">Total Contribution</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Grant Programs */}
      <section>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Active Grant Programs</h2>
            <p className="text-on-surface-variant">Apply for funding from dedicated ecosystem pools.</p>
          </div>
          <div className="flex items-center bg-surface border border-outline/20 rounded-full px-4 py-2">
            <Search className="w-4 h-4 text-on-surface-variant mr-2" />
            <input type="text" placeholder="Search grants..." className="bg-transparent outline-none text-sm w-48" />
          </div>
        </div>

        <div className="space-y-6">
          {[
            { title: "AI for Good Grant", pool: "$100,000", deadline: "May 15, 2026", tags: ["AI", "Impact"] },
            { title: "Web3 Infrastructure Fund", pool: "$250,000", deadline: "June 01, 2026", tags: ["Web3", "Core"] },
            { title: "Design Excellence Award", pool: "$50,000", deadline: "May 20, 2026", tags: ["UI/UX", "Design"] },
          ].map((grant, i) => (
            <Card key={i} className="hover:bg-primary/5 transition-colors cursor-pointer">
              <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-surface-variant/30 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{grant.title}</h3>
                    <div className="flex gap-2 mt-2">
                      {grant.tags.map(tag => <Badge key={tag} variant="outline" className="text-[10px]">{tag}</Badge>)}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                  <div className="text-2xl font-bold text-primary">{grant.pool}</div>
                  <div className="text-sm text-on-surface-variant flex items-center gap-1">
                    Deadline: {grant.deadline}
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowUpRight className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
