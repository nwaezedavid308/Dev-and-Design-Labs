import { motion } from "motion/react";
import { mockProjects } from "../lib/mockData";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { ArrowRight, Github, ExternalLink, TrendingUp, Sparkles, Clock, Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center py-20 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 dot-mesh opacity-[0.4] -z-10" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tight font-display text-on-background">
            Showcase your <span className="gradient-text">Innovation.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
            Dev and Design Labs is the premier platform for Dev and Design Academy 
            students and graduates to showcase their work and innovation as teams.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/launch">
              <Button size="lg" className="px-12 shadow-glow-strong">
                Launch Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/explore">
              <Button size="lg" variant="outline" className="px-12">
                Explore Lab
              </Button>
            </Link>
          </div>
          <div className="mt-12">
            <a href="/PRD.md" download="DEV_Design_Labs_PRD.md">
              <Button variant="ghost" className="text-primary font-bold gap-2 hover:bg-primary/5">
                <Download className="w-5 h-5" />
                Download PRD
              </Button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Discovery Feed */}
      <section className="py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold font-display tracking-tight">Discovery Feed</h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="px-4 py-1.5 rounded-full cursor-pointer hover:bg-surface-variant transition-colors">Trending</Badge>
              <Badge variant="outline" className="px-4 py-1.5 rounded-full cursor-pointer hover:bg-surface-variant transition-colors">Newest</Badge>
              <Badge variant="outline" className="px-4 py-1.5 rounded-full cursor-pointer hover:bg-surface-variant transition-colors">Funded</Badge>
            </div>
          </div>
          <Link to="/explore">
            <Button variant="ghost" size="sm" className="font-bold text-primary hover:bg-primary/5">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project, index) => {
            // Map project seeds to mimic modern website previews
            const seeds = ["website", "dashboard", "app", "interface", "startup", "creative"];
            const seed = seeds[index % seeds.length];
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link to={`/project/${project.id}`}>
                  <Card className="group overflow-hidden h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={`https://picsum.photos/seed/${seed}/800/600`}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="flex gap-2">
                          <Badge className="bg-white/20 backdrop-blur-md border-white/30 text-white">
                            <Github className="w-3 h-3 mr-1" /> Repo
                          </Badge>
                          <Badge className="bg-white/20 backdrop-blur-md border-white/30 text-white">
                            <ExternalLink className="w-3 h-3 mr-1" /> Demo
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{project.category}</Badge>
                        <div className="flex items-center text-xs text-on-surface-variant">
                          <Clock className="w-3 h-3 mr-1" />
                          {new Date(project.launchedAt).toLocaleDateString()}
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map(tech => (
                          <span key={tech} className="text-[10px] font-mono uppercase tracking-wider text-on-surface-variant bg-surface-variant/30 px-2 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-on-surface-variant">Funding Goal</span>
                          <span className="font-bold">${project.fundingRaised} / ${project.fundingGoal}</span>
                        </div>
                        <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary shadow-glow" 
                            style={{ width: `${(project.fundingRaised / project.fundingGoal) * 100}%` }}
                          />
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="border-t border-outline/5 pt-4">
                      <div className="flex -space-x-2">
                        {project.contributors.map(c => (
                          <img 
                            key={c.userId}
                            src={c.avatar} 
                            alt={c.name}
                            className="w-8 h-8 rounded-full border-2 border-surface"
                            referrerPolicy="no-referrer"
                          />
                        ))}
                      </div>
                      <div className="ml-auto flex items-center gap-2 text-xs font-medium text-on-surface-variant">
                        <TrendingUp className="w-3 h-3 text-secondary" />
                        Trending
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
