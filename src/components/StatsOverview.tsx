"use client";

import { Trophy, Flame, Target, Zap, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface Game {
  id: string;
  name: string;
  icon: string;
  color: string;
  achievements: number;
  currentStreak: number;
  totalPlayed: number;
  bestScore: number;
}

interface StatsOverviewProps {
  games: Game[];
}

export function StatsOverview({ games }: StatsOverviewProps) {
  const totalAchievements = games.reduce((sum, game) => sum + game.achievements, 0);
  const totalStreaks = games.reduce((sum, game) => sum + game.currentStreak, 0);
  const totalGamesPlayed = games.reduce((sum, game) => sum + game.totalPlayed, 0);
  const averageScore = Math.round(games.reduce((sum, game) => sum + game.bestScore, 0) / games.length);

  const stats = [
    {
      label: "Total Achievements",
      value: totalAchievements,
      icon: Trophy,
      color: "from-purple-500 to-pink-500",
      change: "+12 this week",
      progress: 75
    },
    {
      label: "Active Streaks",
      value: totalStreaks,
      icon: Flame,
      color: "from-orange-500 to-red-500",
      change: "+3 this week",
      progress: 60
    },
    {
      label: "Games Played",
      value: totalGamesPlayed,
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      change: "+8 this week",
      progress: 85
    },
    {
      label: "Avg Best Score",
      value: averageScore.toLocaleString(),
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      change: "+15% this week",
      progress: 90
    }
  ];

  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <CardContent className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 5
                    }}
                    className="text-xs text-green-600 dark:text-green-400 font-medium"
                  >
                    {stat.change}
                  </motion.div>
                </div>
                
                <div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-3xl font-bold text-gray-800 dark:text-white mb-1"
                  >
                    {stat.value}
                  </motion.p>
                  <CardDescription className="text-sm">
                    {stat.label}
                  </CardDescription>
                </div>
                
                {/* Progress indicator */}
                <div className="mt-4 space-y-2">
                  <Progress value={stat.progress} className="h-1" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* Quick Actions */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Zap className="w-6 h-6" />
              <div>
                <CardTitle className="font-semibold">Quick Play</CardTitle>
                <CardDescription className="text-sm opacity-90">Start a random game</CardDescription>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Trophy className="w-6 h-6" />
              <div>
                <CardTitle className="font-semibold">View Achievements</CardTitle>
                <CardDescription className="text-sm opacity-90">See all your trophies</CardDescription>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6" />
              <div>
                <CardTitle className="font-semibold">Leaderboard</CardTitle>
                <CardDescription className="text-sm opacity-90">Compare with friends</CardDescription>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div> */}
    </section>
  );
} 