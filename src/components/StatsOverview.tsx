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

  const statLinks: { [label: string]: string | undefined } = {
    "Total Achievements": "/achievements",
    "Active Streaks": "/streaks",
    "Games Played": "/leaderboard",
    // No link for Avg Best Score
  };

  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const link = statLinks[stat.label];
          const cardContent = (
            <Card className="group relative overflow-hidden bg-white dark:bg-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl border-0">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              <CardContent className="relative p-8 flex flex-col gap-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/80 dark:bg-slate-800/80 text-gray-700 dark:text-gray-200 shadow border border-gray-200 dark:border-gray-700">{stat.label}</span>
                </div>
                <div className="flex items-end justify-between">
                  <div className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">{stat.value}</div>
                  <div className="text-xs text-green-600 dark:text-green-400 font-medium ml-2 mb-1">
                    {stat.change}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.04, y: -4 }}
            >
              {link ? (
                <a href={link} tabIndex={0} className="focus:outline-none rounded-2xl block">
                  {cardContent}
                </a>
              ) : (
                cardContent
              )}
            </motion.div>
          );
        })}
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