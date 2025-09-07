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
  Shield
} from "lucide-react";
import farmerTech from "@/assets/farmer-tech.jpg";
import naturePattern from "@/assets/nature-pattern.jpg";

const Dashboard = () => {
  const [userName] = useState("John Farmer");
  const navigate = useNavigate();

  useEffect(() => {
    // Add entrance animation delay
    const cards = document.querySelectorAll('.dashboard-card');
    cards.forEach((card, index) => {
      (card as HTMLElement).style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

  const dashboardItems = [
    {
      id: "crop-recommendation",
      title: "Eco-Crop Recommendation",
      description: "Get AI-powered crop suggestions based on soil conditions, climate, and sustainability factors",
      icon: Sprout,
      gradient: "from-green-500 to-emerald-600",
      features: ["Soil Analysis", "Climate Data", "Yield Prediction"],
      route: "/crop-recommendation"
    },
    {
      id: "fertilizer",
      title: "Eco-Fertilizer",
      description: "Discover organic and sustainable fertilizer recommendations for optimal crop growth",
      icon: TestTube,
      gradient: "from-blue-500 to-cyan-600",
      features: ["Organic Options", "NPK Analysis", "Application Guide"],
      route: "/fertilizer"
    },
    {
      id: "disease-detector",
      title: "Plant Disease Detector",
      description: "Upload plant images to detect diseases and get treatment recommendations instantly",
      icon: Microscope,
      gradient: "from-purple-500 to-pink-600",
      features: ["Image Recognition", "Disease Database", "Treatment Plans"],
      route: "/disease-detector"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="border-b border-border/50 bg-white/70 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Eco-Crop Advisor</h1>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={farmerTech} alt="User" />
                  <AvatarFallback>JF</AvatarFallback>
                </Avatar>
                <span className="hidden md:inline text-foreground">{userName}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-2">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="flex items-center space-x-2 text-destructive"
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
        {/* Welcome Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Welcome back, {userName.split(' ')[0]}! 🌱
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's grow sustainability together. Choose a tool below to start optimizing your agricultural journey.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {dashboardItems.map((item, index) => (
            <Card 
              key={item.id}
              className={`dashboard-card hover-lift cursor-pointer transition-smooth glass border-0 animate-slide-up group`}
              onClick={() => {
                // For now, just show a message since these pages aren't built yet
                alert(`${item.title} feature coming soon!`);
              }}
            >
              <CardHeader className="text-center space-y-4">
                <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth shadow-eco`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {item.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                
                <div className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="eco" className="w-full group-hover:scale-105 transition-smooth">
                  Get Started
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

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