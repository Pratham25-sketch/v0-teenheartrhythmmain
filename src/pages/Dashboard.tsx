import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Activity, TrendingUp, Zap, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

const Dashboard = () => {
  const [metrics] = useState({
    heartRate: 72,
    bloodPressure: "120/80",
    stressLevel: "Low",
    dailySteps: 8234,
  });

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white shadow-glow">
          <h1 className="text-4xl font-bold mb-2">Welcome back! 👋</h1>
          <p className="text-white/90 text-lg">Here's your heart health summary for today</p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4">
          <Link to="/analyze" className="flex-1 min-w-[200px]">
            <Button className="w-full gradient-primary text-white font-semibold py-6 shadow-glow hover:scale-105 transition-smooth">
              <Activity className="mr-2" />
              Analyze Now 🔍
            </Button>
          </Link>
          <Button className="flex-1 min-w-[200px] py-6 border-2 border-primary hover:bg-primary/10 transition-smooth" variant="outline">
            <Plus className="mr-2" />
            Add New Reading
          </Button>
        </div>

        {/* Health Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            icon={<Heart className="w-8 h-8" />}
            title="Heart Rate"
            value={`${metrics.heartRate} BPM`}
            status="Normal"
            statusColor="text-green-600"
            gradient="from-red-500 to-pink-500"
          />
          <MetricCard
            icon={<Activity className="w-8 h-8" />}
            title="Blood Pressure"
            value={metrics.bloodPressure}
            status="Healthy"
            statusColor="text-green-600"
            gradient="from-blue-500 to-cyan-500"
          />
          <MetricCard
            icon={<Zap className="w-8 h-8" />}
            title="Stress Level"
            value={metrics.stressLevel}
            status="Great!"
            statusColor="text-green-600"
            gradient="from-purple-500 to-pink-500"
          />
          <MetricCard
            icon={<TrendingUp className="w-8 h-8" />}
            title="Daily Activity"
            value={`${metrics.dailySteps.toLocaleString()} steps`}
            status="Active"
            statusColor="text-green-600"
            gradient="from-orange-500 to-yellow-500"
          />
        </div>

        {/* Recent Activity */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Readings 📊</CardTitle>
            <CardDescription>Your latest health measurements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ReadingItem
                time="Today, 2:30 PM"
                type="Heart Rate"
                value="72 BPM"
                status="Normal"
              />
              <ReadingItem
                time="Today, 9:15 AM"
                type="Blood Pressure"
                value="120/80"
                status="Healthy"
              />
              <ReadingItem
                time="Yesterday, 6:45 PM"
                type="Heart Rate"
                value="68 BPM"
                status="Normal"
              />
            </div>
          </CardContent>
        </Card>

        {/* Health Tip of the Day */}
        <Card className="shadow-card border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              💡 Health Tip of the Day
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Stay hydrated! Drinking enough water helps your heart pump blood more easily and helps muscles work better. Aim for 8 glasses a day! 💧
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  status: string;
  statusColor: string;
  gradient: string;
}

const MetricCard = ({ icon, title, value, status, statusColor, gradient }: MetricCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-glow transition-smooth border-none overflow-hidden">
      <div className={`bg-gradient-to-br ${gradient} p-4 text-white`}>
        {icon}
      </div>
      <CardContent className="pt-4">
        <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
        <p className="text-2xl font-bold mb-1">{value}</p>
        <p className={`text-sm font-medium ${statusColor}`}>{status}</p>
      </CardContent>
    </Card>
  );
};

interface ReadingItemProps {
  time: string;
  type: string;
  value: string;
  status: string;
}

const ReadingItem = ({ time, type, value, status }: ReadingItemProps) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
      <div>
        <p className="font-medium">{type}</p>
        <p className="text-sm text-muted-foreground">{time}</p>
      </div>
      <div className="text-right">
        <p className="font-bold">{value}</p>
        <p className="text-sm text-green-600">{status}</p>
      </div>
    </div>
  );
};

export default Dashboard;
