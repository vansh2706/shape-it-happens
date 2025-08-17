import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Chrome, Apple } from "lucide-react";

interface SignupPageProps {
  onSignup: () => void;
  onSwitchToLogin: () => void;
}

export const SignupPage = ({ onSignup, onSwitchToLogin }: SignupPageProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    onSignup();
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left side - Background image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div 
          className="w-full bg-cover bg-center relative"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" 
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>

      {/* Right side - Signup form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-md p-8 bg-card border-border">
          {/* Logo and branding */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                <div className="w-6 h-6 rounded bg-primary/60 relative">
                  <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">vibeScape</h1>
            <p className="text-muted-foreground text-sm">Your daily escape into inspiration</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-6">Create Account</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-input border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-input border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-input border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-input border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Sign Up
              </Button>
            </form>

            {/* Social login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">or</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <Button variant="outline" className="border-border hover:bg-accent">
                  <Chrome className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-border hover:bg-accent">
                  <Apple className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Login link */}
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <button 
                  onClick={onSwitchToLogin}
                  className="text-primary hover:underline"
                >
                  Log In
                </button>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};