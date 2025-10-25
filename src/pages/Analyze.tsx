import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Heart, Activity, Moon, Smile } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { toast } from "sonner";

const Analyze = () => {
  const [formData, setFormData] = useState({
    heartRate: "",
    bloodPressure: "",
    sleepHours: "",
    mood: "",
  });
  
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.heartRate || !formData.bloodPressure || !formData.sleepHours || !formData.mood) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsAnalyzing(true);

    // Simulate AI analysis (will be replaced with real AI)
    setTimeout(() => {
      const mockAnalysis = `
**Health Analysis Summary** 🩺

Based on your input data, here's your personalized health insight:

**Heart Rate:** ${formData.heartRate} BPM - ${parseInt(formData.heartRate) > 100 ? "Slightly elevated. Try some deep breathing exercises!" : "Normal range. Great job! 💪"}

**Blood Pressure:** ${formData.bloodPressure} - ${formData.bloodPressure === "120/80" ? "Perfect! This is the ideal range." : "Monitor regularly and stay hydrated."}

**Sleep Quality:** ${formData.sleepHours} hours - ${parseInt(formData.sleepHours) >= 8 ? "Excellent! You're getting enough rest. 😴" : "Try to aim for 8-9 hours for optimal heart health."}

**Mood:** ${formData.mood} - Mental health affects heart health! ${formData.mood === "happy" ? "Keep spreading those positive vibes! 😊" : "Consider meditation or talking to someone you trust."}

**Recommendations:**
• Stay hydrated - drink at least 8 glasses of water daily 💧
• Exercise 30 minutes a day - even a brisk walk helps! 🚶
• Manage stress through meditation or hobbies 🧘
• Maintain a consistent sleep schedule 🌙
• Eat heart-healthy foods (fruits, vegetables, whole grains) 🥗

Keep up the great work! Your heart will thank you. ❤️
      `;
      
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
      toast.success("Analysis complete! 🎉");
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white shadow-glow">
          <h1 className="text-4xl font-bold mb-2">AI Health Analysis 🤖</h1>
          <p className="text-white/90 text-lg">Get personalized insights powered by AI</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                Enter Your Data
              </CardTitle>
              <CardDescription>
                Fill in your current health metrics for personalized analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="heartRate" className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    Heart Rate (BPM)
                  </Label>
                  <Input
                    id="heartRate"
                    type="number"
                    placeholder="72"
                    value={formData.heartRate}
                    onChange={(e) => setFormData({ ...formData, heartRate: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="bloodPressure" className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-primary" />
                    Blood Pressure
                  </Label>
                  <Input
                    id="bloodPressure"
                    type="text"
                    placeholder="120/80"
                    value={formData.bloodPressure}
                    onChange={(e) => setFormData({ ...formData, bloodPressure: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="sleepHours" className="flex items-center gap-2">
                    <Moon className="w-4 h-4 text-primary" />
                    Sleep Hours (last night)
                  </Label>
                  <Input
                    id="sleepHours"
                    type="number"
                    placeholder="8"
                    min="0"
                    max="24"
                    step="0.5"
                    value={formData.sleepHours}
                    onChange={(e) => setFormData({ ...formData, sleepHours: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="mood" className="flex items-center gap-2">
                    <Smile className="w-4 h-4 text-primary" />
                    Current Mood
                  </Label>
                  <Select value={formData.mood} onValueChange={(value) => setFormData({ ...formData, mood: value })}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="How are you feeling?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="happy">Happy 😊</SelectItem>
                      <SelectItem value="calm">Calm 😌</SelectItem>
                      <SelectItem value="stressed">Stressed 😰</SelectItem>
                      <SelectItem value="tired">Tired 😴</SelectItem>
                      <SelectItem value="energetic">Energetic ⚡</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={isAnalyzing}
                  className="w-full gradient-primary text-white font-semibold py-6 shadow-glow hover:scale-105 transition-smooth"
                >
                  {isAnalyzing ? (
                    <>
                      <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Analyze Now 🚀
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Analysis Results */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Your Health Insights 💡</CardTitle>
              <CardDescription>
                AI-powered recommendations based on your data
              </CardDescription>
            </CardHeader>
            <CardContent>
              {analysis ? (
                <div className="prose prose-sm max-w-none">
                  <div className="whitespace-pre-wrap text-foreground">{analysis}</div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Sparkles className="w-16 h-16 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Enter your health data and click "Analyze Now" to receive personalized insights
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analyze;
