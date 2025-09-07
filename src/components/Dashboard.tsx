import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { 
  Leaf, 
  TestTube, 
  Microscope, 
  User, 
  LogOut, 
  Settings,
  ChevronRight,
  Sprout,
  Target,
  Shield,
  Sparkles,
  BarChart3,
  Globe
} from "lucide-react";
import farmerTech from "@/assets/farmer-tech.jpg";
import naturePattern from "@/assets/nature-pattern.jpg";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [userName] = useState("John Farmer");
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
    // Enhanced staggered animation for cards
    const cards = document.querySelectorAll('.dashboard-card');
    cards.forEach((card, index) => {
      (card as HTMLElement).style.animationDelay = `${0.3 + (index * 0.2)}s`;
    });
  }, []);

  const handleLogout = () => {
    toast({
      title: "👋 Goodbye!",
      description: "Successfully logged out. See you soon!",
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const dashboardItems = [
    {
      id: "crop-recommendation",
      title: "Eco-Crop Recommendation",
      description: "Get AI-powered crop suggestions based on soil conditions, climate, and sustainability factors",
      icon: Sprout,
      gradient: "from-emerald-500 via-green-500 to-teal-600",
      glowColor: "emerald",
      features: ["Soil Analysis", "Climate Data", "Yield Prediction"],
      stats: "10K+ Recommendations",
      route: "/crop-recommendation"
    },
    {
      id: "fertilizer",
      title: "Eco-Fertilizer",
      description: "Discover organic and sustainable fertilizer recommendations for optimal crop growth",
      icon: TestTube,
      gradient: "from-blue-500 via-cyan-500 to-indigo-600",
      glowColor: "blue",
      features: ["Organic Options", "NPK Analysis", "Application Guide"],
      stats: "5K+ Formulations",
      route: "/fertilizer"
    },
    {
      id: "disease-detector",
      title: "Plant Disease Detector",
      description: "Upload plant images to detect diseases and get treatment recommendations instantly",
      icon: Microscope,
      gradient: "from-purple-500 via-violet-500 to-fuchsia-600",
      glowColor: "purple",
      features: ["Image Recognition", "Disease Database", "Treatment Plans"],
      stats: "95% Accuracy",
      route: "/disease-detector"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-soft relative overflow-hidden transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>

      {/* Enhanced Header */}
      <header className="border-b border-border/30 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4 animate-slide-in-left">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-eco hover:scale-110 transition-smooth">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-glow-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Eco-Crop Advisor</h1>
              <p className="text-xs text-muted-foreground">Smart Agriculture Platform</p>
            </div>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-3 hover:bg-white/50 transition-smooth p-3 rounded-xl animate-slide-in-right">
                <Avatar className="w-10 h-10 ring-2 ring-primary/20">
                  <AvatarImage src={farmerTech} alt="User" />
                  <AvatarFallback className="bg-gradient-hero text-white font-semibold">JF</AvatarFallback>
                </Avatar>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-medium text-foreground">{userName}</div>
                  <div className="text-xs text-muted-foreground">Premium Member</div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 glass-card border-0 shadow-eco">
              <DropdownMenuItem className="flex items-center space-x-3 p-3 hover:bg-white/50 transition-smooth cursor-pointer">
                <User className="w-4 h-4 text-primary" />
                <span>Profile Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-3 p-3 hover:bg-white/50 transition-smooth cursor-pointer">
                <Settings className="w-4 h-4 text-primary" />
                <span>Preferences</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-3 p-3 hover:bg-white/50 transition-smooth cursor-pointer">
                <BarChart3 className="w-4 h-4 text-primary" />
                <span>Analytics</span>
              </DropdownMenuItem>
              <div className="h-px bg-border/50 mx-2"></div>
              <DropdownMenuItem 
                className="flex items-center space-x-3 p-3 text-destructive hover:bg-red-50 transition-smooth cursor-pointer"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Enhanced Welcome Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-in">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Agriculture Platform</span>
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6 animate-slide-up">
            Welcome back, {userName.split(' ')[0]}! 🌱
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            Let's grow sustainability together. Choose a tool below to start optimizing your agricultural journey.
          </p>
        </div>

        {/* Enhanced Dashboard Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {dashboardItems.map((item, index) => (
            <Card 
              key={item.id}
              className={`dashboard-card group hover-lift cursor-pointer glass-card border-0 animate-elastic-in overflow-hidden relative`}
              onClick={() => {
                toast({
                  title: `🚀 ${item.title}`,
                  description: "Feature coming soon! Stay tuned for updates.",
                });
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{background: `linear-gradient(135deg, var(--${item.glowColor}-500), var(--${item.glowColor}-600))`}}></div>
              
              <CardHeader className="text-center space-y-6 relative z-10">
                <div className={`mx-auto w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-smooth shadow-eco relative overflow-hidden`}>
                  <item.icon className="w-12 h-12 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth mb-2">
                    {item.title}
                  </CardTitle>
                  <div className="text-xs text-primary font-medium">{item.stats}</div>
                </div>
              </CardHeader>
              
              <CardContent className="text-center space-y-6 relative z-10">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
                
                <div className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-3 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="eco" className="w-full group-hover:scale-105 transition-smooth relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10">Get Started</span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth relative z-10" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 glass rounded-2xl animate-fade-in-scale">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">Farmers Empowered</div>
          </div>
          <div className="text-center p-6 glass rounded-2xl animate-fade-in-scale">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="text-center p-6 glass rounded-2xl animate-fade-in-scale">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Crops Supported</div>
          </div>
        </div>
      </main>

      {/* Background Pattern */}
      <div 
        className="fixed bottom-0 right-0 w-1/3 h-1/3 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(${naturePattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </div>
  );
};

export default Dashboard;