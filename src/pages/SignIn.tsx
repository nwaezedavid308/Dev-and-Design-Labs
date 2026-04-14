import React, { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Badge } from "../components/ui/Badge";
import { 
  Github, 
  Mail, 
  Lock, 
  GraduationCap, 
  Upload, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [isStudent, setIsStudent] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-24 flex justify-center items-center min-h-[90vh] relative overflow-hidden">
      <div className="absolute inset-0 dot-mesh opacity-[0.2] -z-10" />
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-lg"
      >
        <Card className="shadow-premium border-none p-4 md:p-8">
          <CardHeader className="text-center pb-10">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow transition-transform hover:scale-110">
              <span className="text-on-primary font-black text-3xl">D</span>
            </div>
            <CardTitle className="text-4xl font-extrabold font-display tracking-tight mb-2">Welcome Back</CardTitle>
            <CardDescription className="text-lg">Sign in to your builder account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignIn} className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-on-surface-variant">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <Input type="email" placeholder="name@example.com" required className="h-14 rounded-2xl" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-on-surface-variant">
                    <Lock className="w-4 h-4" />
                    Password
                  </label>
                  <Input type="password" placeholder="••••••••" required className="h-14 rounded-2xl" />
                </div>
              </div>

              {/* Student Verification Section */}
              <div className="pt-8 border-t border-outline/5">
                <div className="flex items-center justify-between mb-6">
                  <label className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-on-surface-variant">
                    <GraduationCap className="w-5 h-5 text-secondary" />
                    Academy Student?
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsStudent(!isStudent)}
                    className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${isStudent ? 'bg-primary' : 'bg-surface-variant'}`}
                  >
                    <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${isStudent ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>

                {isStudent && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-6 overflow-hidden"
                  >
                    <div className="space-y-3">
                      <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Student ID</label>
                      <Input placeholder="DDA-2024-XXXX" className="h-14 rounded-2xl" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Upload Certificate</label>
                      <div 
                        className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${fileUploaded ? 'border-primary bg-primary/5' : 'border-outline/10 hover:border-primary/30 hover:bg-primary/5'}`}
                        onClick={() => setFileUploaded(true)}
                      >
                        {fileUploaded ? (
                          <div className="flex flex-col items-center gap-3">
                            <CheckCircle2 className="w-10 h-10 text-primary" />
                            <span className="text-sm font-bold text-primary">Certificate Uploaded</span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-3">
                            <Upload className="w-10 h-10 text-on-surface-variant/50" />
                            <span className="text-sm font-medium text-on-surface-variant">Click to upload certificate (PDF, JPG)</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <Button type="submit" className="w-full h-14 text-lg shadow-glow-strong" size="lg">
                Sign In
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-outline/10" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-surface px-2 text-on-surface-variant">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" type="button">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" type="button">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google
                </Button>
              </div>
            </form>
          </CardContent>
          <div className="p-6 text-center border-t border-outline/5">
            <p className="text-sm text-on-surface-variant">
              Don't have an account?{" "}
              <Link to="/join" className="text-primary font-bold hover:underline">Join the Lab</Link>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
