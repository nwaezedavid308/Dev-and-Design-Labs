import { useParams } from "react-router-dom";
import { mockUsers, mockProjects } from "../lib/mockData";
import { motion } from "motion/react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/Card";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Globe, 
  Briefcase, 
  MapPin, 
  Calendar,
  Award,
  Zap,
  MessageSquare,
  Users
} from "lucide-react";
import { cn } from "../lib/utils";

export default function Profile() {
  const { id } = useParams();
  const user = mockUsers.find(u => u.id === id) || mockUsers[0];
  const userProjects = mockProjects.filter(p => p.contributors.some(c => c.userId === user.id));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Left Column: Profile Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-6">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-48 h-48 rounded-3xl object-cover border-4 border-surface shadow-glow"
                referrerPolicy="no-referrer"
              />
              {user.hireMe && (
                <div className="absolute -bottom-2 -right-2 bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                  HIRE ME
                </div>
              )}
            </div>
            <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
            <p className="text-primary font-medium mb-4">{user.role}</p>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              {user.bio}
            </p>
            
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              <Button variant="outline" size="icon"><Github className="w-5 h-5" /></Button>
              <Button variant="outline" size="icon"><Twitter className="w-5 h-5" /></Button>
              <Button variant="outline" size="icon"><Linkedin className="w-5 h-5" /></Button>
              <Button variant="outline" size="icon"><Globe className="w-5 h-5" /></Button>
            </div>

            <div className="space-y-4 pt-8 border-t border-outline/10">
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <MapPin className="w-4 h-4" />
                Lagos, Nigeria
              </div>
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <Calendar className="w-4 h-4" />
                Joined April 2024
              </div>
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <Briefcase className="w-4 h-4" />
                Available for Freelance
              </div>
            </div>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Sponsorships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">${user.sponsorshipsReceived}</div>
              <p className="text-xs text-on-surface-variant">Total funds received across all projects</p>
              <Button className="w-full mt-4" variant="outline">View Supporters</Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Projects & Activity */}
        <div className="lg:col-span-3 space-y-12">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Projects", value: userProjects.length, icon: Zap, color: "text-primary" },
              { label: "Contributions", value: "42", icon: MessageSquare, color: "text-secondary" },
              { label: "Stars", value: "1.2k", icon: Award, color: "text-tertiary" },
              { label: "Followers", value: "850", icon: Users, color: "text-on-surface" },
            ].map((stat, i) => (
              <Card key={i} className="text-center p-6">
                <stat.icon className={cn("w-6 h-6 mx-auto mb-2", stat.color)} />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-wider">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {user.skills.map(skill => (
                <Badge key={skill} variant="outline" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Shipped Projects</h2>
              <Button variant="ghost">View All</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {userProjects.map(project => (
                <Card key={project.id} className="overflow-hidden group">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{project.title}</CardTitle>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="justify-between">
                    <div className="flex gap-2">
                      {project.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="text-[10px] bg-surface-variant/30 px-2 py-0.5 rounded uppercase font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button size="sm" variant="ghost">Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Activity Feed Placeholder */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-surface-variant/10 border border-outline/5">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-bold">Chidinma</span> pushed 4 commits to <span className="text-primary font-medium">EcoTrack AI</span>
                    </p>
                    <span className="text-xs text-on-surface-variant">2 hours ago</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
