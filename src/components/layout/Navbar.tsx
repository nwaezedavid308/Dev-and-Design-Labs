import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";
import { Search, Bell, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { ThemeToggle } from "../ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "The Lab", href: "/explore" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Hunters", href: "/hunters" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-outline/5 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="font-sans font-normal text-2xl tracking-tight">Dev and Design</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-bold tracking-tight transition-all hover:text-primary hover:-translate-y-0.5",
                  location.pathname === link.href ? "text-primary" : "text-on-surface-variant"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden sm:flex items-center bg-surface-variant/50 border border-outline/10 rounded-2xl px-4 py-2 focus-within:border-primary/30 transition-all">
            <Search className="w-4 h-4 text-on-surface-variant" />
            <input
              type="text"
              placeholder="Search projects..."
              className="bg-transparent border-none focus:ring-0 text-sm ml-3 w-32 lg:w-48 outline-none font-medium"
            />
          </div>

          <ThemeToggle />

          <Button variant="ghost" size="icon" className="hidden sm:flex rounded-xl">
            <Bell className="w-5 h-5" />
          </Button>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/signin">
              <Button variant="ghost" size="sm" className="font-bold">
                Sign In
              </Button>
            </Link>
            <Link to="/join">
              <Button size="sm" className="px-6 shadow-glow">Join Lab</Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-on-surface"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-surface border-b border-outline/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-lg font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-4 border-t border-outline/10">
            <Link to="/signin" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full">Sign In</Button>
            </Link>
            <Link to="/join" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Join Lab</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
