import { useState } from "react";
import { motion } from "motion/react";
import { mockProjects } from "../lib/mockData";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Sparkles, 
  Clock, 
  Github, 
  ExternalLink,
  ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ExploreLabs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI", "Web3", "Fintech", "Open Source", "Design"];

  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black mb-6 font-display tracking-tighter">Explore the Lab</h1>
        <p className="text-xl text-on-surface-variant leading-relaxed">
          Discover the next generation of products being built. Support builders, 
          track progress, and find inspiration for your next build.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col lg:flex-row gap-6 mb-16">
        <div className="flex-grow relative group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/50 group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder="Search projects, builders, or tech stack..." 
            className="pl-14 h-14 text-lg rounded-2xl shadow-premium border-none focus-visible:ring-primary/20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <Button 
              key={cat} 
              variant={activeCategory === cat ? "primary" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className="rounded-2xl px-6 h-14 font-bold"
            >
              {cat}
            </Button>
          ))}
          <Button variant="outline" className="rounded-2xl gap-2 h-14 px-6 font-bold">
            <Filter className="w-4 h-4" />
            Filters
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => {
          // Map project seeds to mimic modern website previews
          const seeds = ["website", "dashboard", "app", "interface", "startup", "creative"];
          const seed = seeds[index % seeds.length];

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link to={`/project/${project.id}`}>
                <Card className="group overflow-hidden h-full flex flex-col hover:border-primary/30 transition-all">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/${seed}/800/600`}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-background/80 backdrop-blur-md border-outline/20">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center text-xs text-on-surface-variant">
                      <Clock className="w-3 h-3 mr-1" />
                      {new Date(project.launchedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-medium text-secondary">
                      <TrendingUp className="w-3 h-3" />
                      Trending
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
                  <div className="ml-auto flex gap-2">
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        );
      })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <Sparkles className="w-12 h-12 text-on-surface-variant mx-auto mb-4 opacity-20" />
          <h3 className="text-xl font-bold mb-2">No projects found</h3>
          <p className="text-on-surface-variant">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
