import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, Activity, TrendingUp, Edit } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Profile = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("foreverbeater_user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  if (!userData) {
    return null;
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white shadow-glow">
          <h1 className="text-4xl font-bold mb-2">Your Profile 👤</h1>
          <p className="text-white/90 text-lg">Manage your account and view your health stats</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info Card */}
          <Card className="shadow-card lg:col-span-1">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Avatar className="w-24 h-24 border-4 border-primary">
                  <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-accent text-white">
                    {getInitials(userData.name)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-2xl">{userData.name}</CardTitle>
              <CardDescription>{userData.email}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Age</span>
                  <span className="font-semibold">{userData.age} years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Gender</span>
                  <span className="font-semibold capitalize">{userData.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Activity Level</span>
                  <Badge variant="secondary" className="capitalize">
                    {userData.activityLevel.replace("-", " ")}
                  </Badge>
                </div>
              </div>
              
              <Button className="w-full" variant="outline">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          {/* Health Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overall Health Score */}
            <Card className="shadow-card border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-primary" />
                  Overall Health Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-4">
                  <div className="text-6xl font-bold text-primary">87</div>
                  <div className="mb-2">
                    <Badge className="bg-green-500 text-white">Excellent</Badge>
                    <p className="text-sm text-muted-foreground mt-1">Keep up the great work! 💪</p>
                  </div>
                </div>
                <div className="mt-4 h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[87%] bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
              </CardContent>
            </Card>

            {/* Average Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              <StatsCard
                icon={<Heart className="w-6 h-6" />}
                title="Avg Heart Rate"
                value="72 BPM"
                change="+2 from last week"
                changeType="neutral"
              />
              <StatsCard
                icon={<Activity className="w-6 h-6" />}
                title="Avg Blood Pressure"
                value="120/80"
                change="Stable"
                changeType="positive"
              />
              <StatsCard
                icon={<TrendingUp className="w-6 h-6" />}
                title="Activity Streak"
                value="12 days"
                change="New record! 🎉"
                changeType="positive"
              />
            </div>

            {/* Recent Achievements */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recent Achievements 🏆</CardTitle>
                <CardDescription>Your health milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <AchievementItem
                    emoji="🔥"
                    title="7-Day Streak"
                    description="Logged health data for 7 consecutive days"
                    date="2 days ago"
                  />
                  <AchievementItem
                    emoji="💪"
                    title="Active Lifestyle"
                    description="Maintained 10,000+ steps for a week"
                    date="5 days ago"
                  />
                  <AchievementItem
                    emoji="😴"
                    title="Sleep Champion"
                    description="Got 8+ hours of sleep for 5 nights"
                    date="1 week ago"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
}

const StatsCard = ({ icon, title, value, change, changeType }: StatsCardProps) => {
  const changeColor = {
    positive: "text-green-600",
    negative: "text-red-600",
    neutral: "text-muted-foreground",
  }[changeType];

  return (
    <Card className="shadow-card">
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-primary">{icon}</div>
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        </div>
        <p className="text-2xl font-bold mb-1">{value}</p>
        <p className={`text-sm ${changeColor}`}>{change}</p>
      </CardContent>
    </Card>
  );
};

interface AchievementItemProps {
  emoji: string;
  title: string;
  description: string;
  date: string;
}

const AchievementItem = ({ emoji, title, description, date }: AchievementItemProps) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
      <div className="text-3xl">{emoji}</div>
      <div className="flex-1">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground mt-1">{date}</p>
      </div>
    </div>
  );
};

export default Profile;
