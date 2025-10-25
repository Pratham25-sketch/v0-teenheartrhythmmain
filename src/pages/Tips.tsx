import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Lightbulb, Sparkles, Activity } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Tips = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white shadow-glow">
          <h1 className="text-4xl font-bold mb-2">Tips & Insights 💡</h1>
          <p className="text-white/90 text-lg">Daily wisdom for a healthier heart</p>
        </div>

        {/* Quote of the Day */}
        <Card className="shadow-card border-l-4 border-l-accent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-accent" />
              Quote of the Day
            </CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="text-xl font-medium italic mb-2">
              "Take care of your body. It's the only place you have to live."
            </blockquote>
            <p className="text-muted-foreground">— Jim Rohn</p>
          </CardContent>
        </Card>

        {/* Daily Heart Tips */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            Daily Heart Health Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TipCard
              icon="💧"
              title="Stay Hydrated"
              description="Drink at least 8 glasses of water daily. Water helps your heart pump blood more easily through blood vessels to your muscles."
              category="Hydration"
            />
            <TipCard
              icon="🏃"
              title="Move Your Body"
              description="Aim for 30 minutes of moderate exercise daily. Even a brisk walk can strengthen your heart and improve circulation."
              category="Exercise"
            />
            <TipCard
              icon="🥗"
              title="Eat Heart-Healthy Foods"
              description="Include fruits, vegetables, whole grains, and lean proteins in your diet. Limit processed foods and excess salt."
              category="Nutrition"
            />
            <TipCard
              icon="😴"
              title="Get Quality Sleep"
              description="Aim for 8-9 hours of sleep each night. Good sleep helps reduce stress hormones that can damage your heart."
              category="Rest"
            />
            <TipCard
              icon="🧘"
              title="Manage Stress"
              description="Practice deep breathing, meditation, or yoga. Chronic stress can lead to high blood pressure and heart problems."
              category="Mental Health"
            />
            <TipCard
              icon="🚭"
              title="Avoid Harmful Habits"
              description="Say no to smoking and limit caffeine. These can increase heart rate and blood pressure unnecessarily."
              category="Prevention"
            />
          </div>
        </div>

        {/* Healthy Habit Reminders */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Activity className="w-6 h-6 text-primary" />
            Healthy Habit Reminders
          </h2>
          <div className="space-y-4">
            <HabitCard
              time="Morning"
              habit="Start your day with a glass of water"
              icon="☀️"
            />
            <HabitCard
              time="Midday"
              habit="Take a 10-minute walk after lunch"
              icon="🌤️"
            />
            <HabitCard
              time="Afternoon"
              habit="Have a healthy snack like fruits or nuts"
              icon="🍎"
            />
            <HabitCard
              time="Evening"
              habit="Wind down with light stretching or reading"
              icon="🌙"
            />
          </div>
        </div>

        {/* Fun Facts */}
        <Card className="shadow-card bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-primary" />
              Did You Know? 🤔
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Your heart beats about 100,000 times per day! That's over 35 million beats per year.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Laughing is good for your heart! It increases blood flow and improves blood vessel function.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>A healthy heart at rest beats 60-100 times per minute. Athletes can have resting rates as low as 40 BPM!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Your heart pumps about 2,000 gallons of blood through your body every single day.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

interface TipCardProps {
  icon: string;
  title: string;
  description: string;
  category: string;
}

const TipCard = ({ icon, title, description, category }: TipCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-glow transition-smooth">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{icon}</div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <Badge variant="secondary" className="mt-1">
                {category}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

interface HabitCardProps {
  time: string;
  habit: string;
  icon: string;
}

const HabitCard = ({ time, habit, icon }: HabitCardProps) => {
  return (
    <Card className="shadow-card">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="text-3xl">{icon}</div>
        <div className="flex-1">
          <p className="font-semibold">{time}</p>
          <p className="text-muted-foreground">{habit}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Tips;
