import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Sprout, Eye, EyeOff, Sparkles, Shield } from "lucide-react";
import agriculturalHero from "@/assets/agriculture-hero.jpg";
import { useToast } from "@/hooks/use-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process with enhanced feedback
    setTimeout(() => {
      if (email && password) {
        toast({
          title: "🌱 Welcome back!",
          description: "Successfully logged in to Eco-Crop Advisor",
        });
        // Add smooth transition to dashboard
        setTimeout(() => {
          navigate("/dashboard");
        }, 800);
      } else {
        toast({
          title: "Login failed",
          description: "Please enter valid credentials",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className={`min-h-screen flex transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      {/* Left side - Enhanced Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-nature relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        
        {/* Floating background elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-green-300/20 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300/20 rounded-full blur-md animate-float" style={{animationDelay: '4s'}}></div>
        
        <img 
          src={agriculturalHero} 
          alt="Sustainable agriculture" 
          className="w-full h-full object-cover animate-fade-in"
        />
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12 z-10">
          <div className="animate-bounce-in mb-8">
            <div className="relative">
              <Sprout className="w-20 h-20 text-white drop-shadow-lg" />
              <div className="absolute -top-2 -right-2 animate-glow-pulse">
                <Sparkles className="w-6 h-6 text-yellow-300" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold mb-6 text-center animate-slide-in-left">
            Eco-Crop Advisor
          </h1>
          
          <p className="text-xl text-center max-w-md leading-relaxed animate-slide-in-right" style={{animationDelay: '0.3s'}}>
            Empowering Farmers with AI for Sustainable Agriculture
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-elastic-in" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center space-x-2 glass-card rounded-full px-6 py-3 hover:scale-105 transition-smooth">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-medium">AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2 glass-card rounded-full px-6 py-3 hover:scale-105 transition-smooth">
              <Shield className="w-5 h-5 text-green-300" />
              <span className="text-sm font-medium">Sustainable</span>
            </div>
            <div className="flex items-center space-x-2 glass-card rounded-full px-6 py-3 hover:scale-105 transition-smooth">
              <Leaf className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Eco-Friendly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Enhanced Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-soft relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-accent/10 rounded-full blur-lg animate-float" style={{animationDelay: '3s'}}></div>
        
        <Card className="w-full max-w-md glass-card animate-fade-in-scale shadow-float hover:shadow-glow transition-smooth" style={{animationDelay: '0.2s'}}>
          <CardHeader className="text-center space-y-6">
            <div className="mx-auto relative">
              <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center animate-morph shadow-eco">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-glow-pulse">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            </div>
            
            <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
              <CardTitle className="text-3xl font-bold text-foreground mb-2">
                Welcome Back
              </CardTitle>
              <p className="text-muted-foreground text-lg">
                Sign in to your Eco-Crop Advisor account
              </p>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-3 animate-slide-up" style={{animationDelay: '0.6s'}}>
                <Label htmlFor="email" className="text-base font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="farmer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-base transition-smooth focus:shadow-eco focus:scale-[1.02] border-2 focus:border-primary/50"
                  required
                />
              </div>
              
              <div className="space-y-3 animate-slide-up" style={{animationDelay: '0.8s'}}>
                <Label htmlFor="password" className="text-base font-medium">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 text-base transition-smooth focus:shadow-eco focus:scale-[1.02] border-2 focus:border-primary/50 pr-12"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1 h-10 w-10 hover:bg-primary/10 hover:scale-110 transition-smooth rounded-xl"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Eye className="h-5 w-5 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="animate-slide-up" style={{animationDelay: '1s'}}>
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full h-14 text-lg font-semibold relative overflow-hidden group"
                  disabled={isLoading}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  {isLoading ? (
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span>Sign In</span>
                      <Sparkles className="w-4 h-4 animate-pulse" />
                    </div>
                  )}
                </Button>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '1.2s'}}>
                <Button variant="link" className="text-primary hover:text-primary-glow transition-smooth text-base">
                  Forgot your password?
                </Button>
              </div>
            </form>
            
            {/* Mobile brand display */}
            <div className="lg:hidden mt-8 text-center animate-fade-in" style={{animationDelay: '1.4s'}}>
              <h2 className="text-2xl font-bold text-foreground mb-2">Eco-Crop Advisor</h2>
              <p className="text-sm text-muted-foreground">Empowering Farmers with AI for Sustainable Agriculture</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;