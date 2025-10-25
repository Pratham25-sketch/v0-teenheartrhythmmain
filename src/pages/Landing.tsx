import { Button } from "@/components/ui/button";
import { Heart, Activity, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 animate-pulse-heart">
            <Heart className="w-24 h-24 mx-auto text-primary fill-primary" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ForeverBeater ❤️‍🔥
          </h1>
          
          <p className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">
            Stay in rhythm, forever.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Your AI-powered companion for heart health. Track, analyze, and improve your cardiovascular wellness with smart insights designed for teens.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="gradient-primary text-white font-semibold px-8 py-6 text-lg shadow-glow hover:scale-105 transition-smooth">
                Sign Up Free 🚀
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="border-2 border-primary font-semibold px-8 py-6 text-lg hover:bg-primary/10 transition-smooth">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Why ForeverBeater? 💓</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Everything you need to keep your heart healthy and happy
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Activity className="w-10 h-10" />}
              title="Live Tracking"
              description="Monitor your heart rate, blood pressure, and activity levels in real-time"
            />
            <FeatureCard
              icon={<Heart className="w-10 h-10" />}
              title="AI Insights"
              description="Get personalized health recommendations powered by smart AI analysis"
            />
            <FeatureCard
              icon={<TrendingUp className="w-10 h-10" />}
              title="Progress Reports"
              description="Track your improvements and celebrate your health milestones"
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Safe & Secure"
              description="Your health data is encrypted and completely private"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to take control of your heart health? 💪
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of teens making smarter health choices every day
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-white text-primary font-semibold px-8 py-6 text-lg hover:bg-white/90 transition-smooth shadow-xl">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted/50 text-center">
        <p className="text-muted-foreground">
          © 2025 ForeverBeater. Made with ❤️ for teens everywhere.
        </p>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-glow transition-smooth border border-border">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Landing;
