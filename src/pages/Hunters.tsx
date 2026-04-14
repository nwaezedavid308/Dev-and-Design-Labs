import { mockUsers } from "../lib/mockData";
import { motion } from "motion/react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Search, Filter, MapPin, Briefcase, Star, MessageSquare, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hunters() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Talent Search</h1>
        <p className="text-on-surface-variant max-w-2xl">
          Find proven builders who ship real products. Filter by tech stack, project success, and availability.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-medium">Role</label>
                <div className="space-y-2">
                  {["Frontend", "Backend", "UI/UX", "Mobile", "DevOps"].map(role => (
                    <label key={role} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" className="rounded border-outline bg-surface" />
                      {role}
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Tech Stack</label>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Python", "Solidity", "Figma"].map(tech => (
                    <Badge key={tech} variant="outline" className="cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Availability</label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" className="rounded border-outline bg-surface" defaultChecked />
                  Open to Work
                </label>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>

          <Card className="bg-secondary/5 border-secondary/20">
            <CardHeader>
              <CardTitle className="text-lg">Hiring CRM</CardTitle>
              <CardDescription>Save candidates and track outreach.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Open CRM</Button>
            </CardContent>
          </Card>
        </div>

        {/* Talent Results */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center bg-surface border border-outline/20 rounded-2xl px-4 py-3 focus-within:border-primary/50 transition-all shadow-sm">
            <Search className="w-5 h-5 text-on-surface-variant" />
            <input 
              type="text" 
              placeholder="Search by name, skill, or project..." 
              className="bg-transparent border-none focus:ring-0 text-base ml-3 w-full outline-none"
            />
          </div>

          <div className="space-y-6">
            {mockUsers.map((user, index) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:border-primary/30 transition-all group">
                  <div className="p-6 flex flex-col md:flex-row gap-6">
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-24 h-24 rounded-2xl object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-grow space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{user.name}</h3>
                            {user.hireMe && <Badge variant="secondary" className="text-[10px] h-5">HIRE ME</Badge>}
                          </div>
                          <p className="text-on-surface-variant text-sm">{user.role}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Message
                          </Button>
                          <Link to={`/profile/${user.id}`}>
                            <Button size="sm">View Profile</Button>
                          </Link>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {user.skills.map(skill => (
                          <Badge key={skill} variant="outline" className="bg-surface-variant/20">{skill}</Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-6 text-sm text-on-surface-variant">
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4" />
                          4 Projects Shipped
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Star className="w-4 h-4 text-tertiary" />
                          1.2k Stars
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          Lagos, NG
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
