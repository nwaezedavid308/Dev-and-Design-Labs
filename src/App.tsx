/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Profile from "./pages/Profile";
import Hunters from "./pages/Hunters";
import Sponsors from "./pages/Sponsors";
import LaunchProject from "./pages/LaunchProject";
import ExploreLabs from "./pages/ExploreLabs";
import SignIn from "./pages/SignIn";
import JoinLab from "./pages/JoinLab";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-on-background flex flex-col relative overflow-hidden">
        {/* Dotted Mesh Background Overlay */}
        <div className="fixed inset-0 dot-mesh opacity-[0.03] pointer-events-none z-0" />
        
        <Navbar />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/hunters" element={<Hunters />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/launch" element={<LaunchProject />} />
            <Route path="/explore" element={<ExploreLabs />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/join" element={<JoinLab />} />
          </Routes>
        </main>
        <footer className="border-t border-outline/5 py-24 bg-surface relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
              <div className="col-span-1 md:col-span-2 space-y-8">
                <div className="flex items-center gap-3">
                  <span className="font-sans font-normal text-2xl tracking-tight">Dev and Design</span>
                </div>
                <p className="text-lg text-on-surface-variant max-w-sm leading-relaxed">
                  The proof-of-work network for the next generation of builders. 
                  Show your work, secure your bag, and build the future.
                </p>
              </div>
              <div>
                <h4 className="font-black text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-8">Platform</h4>
                <ul className="space-y-4 text-base font-bold">
                  <li><a href="#" className="hover:text-primary transition-all hover:translate-x-1 inline-block">The Lab</a></li>
                  <li><a href="#" className="hover:text-primary transition-all hover:translate-x-1 inline-block">Sponsor Hub</a></li>
                  <li><a href="#" className="hover:text-primary transition-all hover:translate-x-1 inline-block">Hunter Hub</a></li>
                  <li><a href="#" className="hover:text-primary transition-all hover:translate-x-1 inline-block">Talent Search</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-8">Connect</h4>
                <ul className="space-y-4 text-base font-bold">
                  <li><a href="#" className="hover:text-primary transition-all hover:translate-x-1 inline-block">Twitter</a></li>
                  <li><a href="#" className="hover:text-primary transition-all hover:translate-x-1 inline-block">Discord</a></li>
                  <li><a href="#" className="hover:text-primary transition-all hover:translate-x-1 inline-block">GitHub</a></li>
                  <li><a href="#" className="hover:text-primary transition-all hover:translate-x-1 inline-block">LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-24 pt-12 border-t border-outline/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-medium text-on-surface-variant">
              <p>2026 DEV & Design Labs. All rights reserved.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

