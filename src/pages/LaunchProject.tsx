import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { 
  Rocket, 
  Plus, 
  X, 
  Github, 
  Globe, 
  Image as ImageIcon, 
  Code,
  DollarSign,
  Users
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LaunchProject() {
  const navigate = useNavigate();
  const [techStack, setTechStack] = useState<string[]>([]);
  const [techInput, setTechInput] = useState("");

  const addTech = () => {
    if (techInput && !techStack.includes(techInput)) {
      setTechStack([...techStack, techInput]);
      setTechInput("");
    }
  };

  const removeTech = (tech: string) => {
    setTechStack(techStack.filter(t => t !== tech));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl relative overflow-hidden">
      <div className="absolute inset-0 dot-mesh opacity-[0.2] -z-10" />
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-6 font-display tracking-tighter">Launch Your Build</h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Share your project with the world, secure sponsorships, and build your proof-of-work.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        <Card className="border-none shadow-premium p-4 md:p-8">
          <CardHeader className="pb-8">
            <CardTitle className="flex items-center gap-3 text-3xl font-bold font-display tracking-tight">
              <Rocket className="w-8 h-8 text-primary" />
              Project Basics
            </CardTitle>
            <CardDescription className="text-base">Tell us what you're building.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Project Title</label>
                <Input placeholder="e.g. EcoTrack AI" required className="h-14 rounded-2xl" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Category</label>
                <select className="flex h-14 w-full rounded-2xl border border-outline/10 bg-surface px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/50 transition-all">
                  <option>AI</option>
                  <option>Web3</option>
                  <option>Fintech</option>
                  <option>Open Source</option>
                  <option>Design</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Short Description</label>
              <Input placeholder="A one-sentence pitch for your project" required className="h-14 rounded-2xl" />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Full Description</label>
              <Textarea placeholder="Describe the problem you're solving and how your project works..." className="min-h-[200px] rounded-2xl" required />
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-premium p-4 md:p-8">
          <CardHeader className="pb-8">
            <CardTitle className="flex items-center gap-3 text-3xl font-bold font-display tracking-tight">
              <Code className="w-8 h-8 text-secondary" />
              Technical Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Tech Stack</label>
              <div className="flex gap-3">
                <Input 
                  placeholder="e.g. React, Node.js, Solidity" 
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
                  className="h-14 rounded-2xl"
                />
                <Button type="button" onClick={addTech} variant="outline" size="icon" className="h-14 w-14 rounded-2xl">
                  <Plus className="w-6 h-6" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {techStack.map(tech => (
                  <Badge key={tech} variant="secondary" className="gap-2 px-4 py-2 text-xs">
                    {tech}
                    <button type="button" onClick={() => removeTech(tech)} className="hover:text-red-500 transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-on-surface-variant">
                  <Github className="w-5 h-5" />
                  GitHub Repository
                </label>
                <Input placeholder="https://github.com/username/repo" className="h-14 rounded-2xl" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-on-surface-variant">
                  <Globe className="w-5 h-5" />
                  Live Demo URL
                </label>
                <Input placeholder="https://your-project.com" className="h-14 rounded-2xl" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-premium p-4 md:p-8">
          <CardHeader className="pb-8">
            <CardTitle className="flex items-center gap-3 text-3xl font-bold font-display tracking-tight">
              <DollarSign className="w-8 h-8 text-tertiary" />
              Funding & Team
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Funding Goal (USD)</label>
                <Input type="number" placeholder="5000" className="h-14 rounded-2xl" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-on-surface-variant">
                  <ImageIcon className="w-5 h-5" />
                  Thumbnail URL
                </label>
                <Input placeholder="https://link-to-image.jpg" className="h-14 rounded-2xl" />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-on-surface-variant">
                <Users className="w-5 h-5" />
                Team Members
              </label>
              <div className="p-10 border-2 border-dashed border-outline/10 rounded-[2rem] text-center bg-surface-variant/5">
                <p className="text-base text-on-surface-variant mb-6">Add your teammates to split equity and sponsorships.</p>
                <Button type="button" variant="outline" size="md" className="rounded-xl font-bold">
                  <Plus className="w-5 h-5 mr-2" />
                  Invite Teammate
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="ghost" onClick={() => navigate("/")}>Cancel</Button>
          <Button type="submit" size="lg" className="px-12">Launch Project</Button>
        </div>
      </form>
    </div>
  );
}
