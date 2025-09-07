import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Sprout, Eye, EyeOff } from "lucide-react";
import agriculturalHero from "@/assets/agriculture-hero.jpg";
import { useToast } from "@/hooks/use-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      if (email && password) {
        toast({
          title: "Welcome back! 🌱",
          description: "Successfully logged in to Eco-Crop Advisor",
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Login failed",
          description: "Please enter valid credentials",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-nature relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <img 
          src={agriculturalHero} 
          alt="Sustainable agriculture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12 z-10">
          <div className="animate-float mb-8">
            <Sprout className="w-20 h-20 text-white drop-shadow-lg" />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-center animate-fade-in">
            Eco-Crop Advisor
          </h1>
          <p className="text-xl text-center max-w-md leading-relaxed animate-slide-up">
            Empowering Farmers with AI for Sustainable Agriculture
          </p>
          <div className="mt-8 flex space-x-4 animate-fade-in-scale">
            <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
              <Leaf className="w-5 h-5" />
              <span className="text-sm">AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
              <Sprout className="w-5 h-5" />
              <span className="text-sm">Sustainable</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-soft">
        <Card className="w-full max-w-md glass animate-fade-in-scale">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center animate-glow-pulse">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              Welcome Back
            </CardTitle>
            <p className="text-muted-foreground">
              Sign in to your Eco-Crop Advisor account
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="farmer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="transition-smooth focus:shadow-eco"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="transition-smooth focus:shadow-eco pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>

              <div className="text-center">
                <Button variant="link" className="text-primary">
                  Forgot your password?
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;