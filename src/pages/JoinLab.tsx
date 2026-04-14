import React, { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Badge } from "../components/ui/Badge";
import { 
  User, 
  Mail, 
  Lock, 
  Sparkles, 
  ArrowRight,
  Github,
  CheckCircle2
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function JoinLab() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto px-4 py-24 flex justify-center items-center min-h-[90vh] relative overflow-hidden">
      <div className="absolute inset-0 dot-mesh opacity-[0.2] -z-10" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl"
      >
        <Card className="shadow-premium border-none overflow-hidden">
          <div className="h-2 bg-surface-variant">
            <motion.div 
              className="h-full bg-primary shadow-glow" 
              initial={{ width: "50%" }}
              animate={{ width: step === 1 ? "50%" : "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
          <CardHeader className="text-center pt-12 pb-8">
            <CardTitle className="text-4xl font-extrabold font-display tracking-tight mb-2">Join the Lab</CardTitle>
            <CardDescription className="text-lg">Start your proof-of-work journey today</CardDescription>
          </CardHeader>
          <CardContent className="px-8 md:px-12 pb-12">
            <form onSubmit={handleJoin} className="space-y-8">
              {step === 1 ? (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="space-y-3">
                    <label className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-on-surface-variant">
                      <User className="w-4 h-4" />
                      Full Name
                    </label>
                    <Input placeholder="John Doe" required className="h-14 rounded-2xl" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-on-surface-variant">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <Input type="email" placeholder="john@example.com" required className="h-14 rounded-2xl" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-on-surface-variant">
                      <Lock className="w-4 h-4" />
                      Password
                    </label>
                    <Input type="password" placeholder="••••••••" required className="h-14 rounded-2xl" />
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">What's your primary role?</label>
                    <div className="grid grid-cols-2 gap-4">
                      {["Developer", "Designer", "Product Manager", "Student", "Founder", "Other"].map(role => (
                        <button
                          key={role}
                          type="button"
                          className="p-4 text-sm font-bold rounded-2xl border border-outline/10 hover:border-primary hover:bg-primary/5 transition-all text-left flex items-center justify-between group"
                        >
                          {role}
                          <CheckCircle2 className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Link your GitHub (Optional)</label>
                    <div className="flex gap-3">
                      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-surface-variant/30 text-on-surface-variant">
                        <Github className="w-6 h-6" />
                      </div>
                      <Input placeholder="github.com/username" className="h-14 rounded-2xl flex-grow" />
                    </div>
                  </div>
                </motion.div>
              )}

              <Button type="submit" className="w-full h-14 text-lg shadow-glow-strong" size="lg">
                {step === 1 ? "Next Step" : "Complete Registration"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </CardContent>
          <div className="p-6 text-center border-t border-outline/5 bg-surface-variant/5">
            <div className="flex items-center justify-center gap-2 text-xs text-on-surface-variant mb-4">
              <Sparkles className="w-3 h-3 text-primary" />
              <span>Join 5,000+ builders already in the Lab</span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Already have an account?{" "}
              <Link to="/signin" className="text-primary font-bold hover:underline">Sign In</Link>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
