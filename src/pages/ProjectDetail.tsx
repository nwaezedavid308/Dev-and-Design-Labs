import { useParams, Link } from "react-router-dom";
import { mockProjects, sponsorshipTiers } from "../lib/mockData";
import { motion } from "motion/react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { 
  Github, 
  ExternalLink, 
  Users, 
  History, 
  Heart, 
  Share2, 
  ChevronRight,
  CheckCircle2,
  DollarSign
} from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = mockProjects.find(p => p.id === id);

  if (!project) return <div className="container mx-auto p-20 text-center">Project not found</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Header */}
          <section>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-4">
              <Link to="/" className="hover:text-primary">The Lab</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-on-surface">{project.title}</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <Badge variant="secondary" className="mb-4">{project.category}</Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-on-surface-variant">{project.description}</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="icon">
                  <Share2 className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button size="lg">
                  Sponsor Project
                </Button>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section className="rounded-3xl overflow-hidden border border-outline/20">
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full aspect-video object-cover"
              referrerPolicy="no-referrer"
            />
          </section>

          {/* Tech Stack */}
          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-tertiary" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-4">
              {project.techStack.map(tech => (
                <div key={tech} className="flex items-center gap-3 bg-surface-variant/20 border border-outline/10 px-4 py-3 rounded-2xl">
                  <div className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center font-mono text-xs">
                    {tech[0]}
                  </div>
                  <span className="font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contribution Graph */}
          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Contribution Graph
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.contributors.map(contributor => (
                <Card key={contributor.userId} className="bg-surface-variant/10">
                  <CardHeader className="flex-row items-center gap-4">
                    <img 
                      src={contributor.avatar} 
                      alt={contributor.name} 
                      className="w-12 h-12 rounded-full"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <CardTitle className="text-lg">{contributor.name}</CardTitle>
                      <CardDescription>{contributor.role}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-on-surface-variant italic">"{contributor.contribution}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* DevLog */}
          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <History className="w-5 h-5 text-secondary" />
              Update Logs
            </h3>
            <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-outline/10">
              {project.updates.map(update => (
                <div key={update.id} className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-10 h-10 bg-surface border border-outline/20 rounded-full flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-secondary rounded-full shadow-[0_0_10px_rgba(0,170,255,0.5)]" />
                  </div>
                  <div>
                    <span className="text-sm font-mono text-on-surface-variant">{new Date(update.date).toLocaleDateString()}</span>
                    <h4 className="text-lg font-bold mt-1">{update.title}</h4>
                    <p className="text-on-surface-variant mt-2">{update.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-8">
          {/* Funding Progress */}
          <Card className="glow-border bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Funding Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-3xl font-bold">${project.fundingRaised}</span>
                  <span className="text-on-surface-variant ml-2">raised</span>
                </div>
                <span className="text-primary font-bold">{Math.round((project.fundingRaised / project.fundingGoal) * 100)}%</span>
              </div>
              <div className="w-full h-3 bg-surface-variant rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(project.fundingRaised / project.fundingGoal) * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-primary shadow-glow" 
                />
              </div>
              <div className="flex justify-between text-sm text-on-surface-variant">
                <span>Goal: ${project.fundingGoal}</span>
                <span>{project.contributors.length} Contributors</span>
              </div>
              <Button className="w-full" size="lg">Support this Build</Button>
            </CardContent>
          </Card>

          {/* Sponsorship Tiers */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Sponsorship Tiers</h3>
            {sponsorshipTiers.map(tier => (
              <Card key={tier.id} className="hover:scale-[1.02] transition-transform cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl" style={{ color: tier.color }}>{tier.name}</CardTitle>
                    <span className="text-2xl font-bold">${tier.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tier.perks.map(perk => (
                      <li key={perk} className="flex items-center gap-2 text-sm text-on-surface-variant">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <Button variant="outline" className="w-full justify-between">
              <span className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub Repository
              </span>
              <ExternalLink className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              <span className="flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </span>
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sparkles(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  )
}
