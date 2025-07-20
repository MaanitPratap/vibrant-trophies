"use client";

import { Trophy, Flame, Target, Star, Users, Settings } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

interface GameTabsProps {
  games: Game[];
}

export function GameTabs({ games }: GameTabsProps) {
  const totalAchievements = games.reduce((sum, game) => sum + game.achievements, 0);
  const totalStreaks = games.reduce((sum, game) => sum + game.currentStreak, 0);
  const totalGamesPlayed = games.reduce((sum, game) => sum + game.totalPlayed, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-100 dark:bg-gray-800">
          <TabsTrigger value="overview" className="flex items-center space-x-2">
            <Trophy className="w-4 h-4" />
            <span className="hidden sm:inline">Overview</span>
          </TabsTrigger>
          <TabsTrigger value="achievements" className="flex items-center space-x-2">
            <Star className="w-4 h-4" />
            <span className="hidden sm:inline">Achievements</span>
          </TabsTrigger>
          <TabsTrigger value="streaks" className="flex items-center space-x-2">
            <Flame className="w-4 h-4" />
            <span className="hidden sm:inline">Streaks</span>
          </TabsTrigger>
          <TabsTrigger value="stats" className="flex items-center space-x-2">
            <Target className="w-4 h-4" />
            <span className="hidden sm:inline">Stats</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${game.color} flex items-center justify-center text-lg`}>
                        {game.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{game.name}</CardTitle>
                        <CardDescription>Best: {game.bestScore.toLocaleString()}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Achievements</span>
                      <Badge variant="secondary">{game.achievements}</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Current Streak</span>
                      <Badge variant="outline" className="text-orange-600">{game.currentStreak} days</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Games Played</span>
                      <span className="font-medium">{game.totalPlayed}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span>Achievement Progress</span>
              </CardTitle>
              <CardDescription>
                Track your progress across all games
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Total Achievements</span>
                    <span className="font-bold">{totalAchievements}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: `${Math.min((totalAchievements / 100) * 100, 100)}%` }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Completion Rate</span>
                    <span className="font-bold">{Math.round((totalAchievements / 100) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: `${Math.round((totalAchievements / 100) * 100)}%` }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="streaks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Flame className="w-5 h-5 text-orange-500" />
                <span>Active Streaks</span>
              </CardTitle>
              <CardDescription>
                Your current gaming streaks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Total Active Streaks</span>
                    <span className="font-bold">{totalStreaks}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{ width: `${Math.min((totalStreaks / 20) * 100, 100)}%` }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Longest Streak</span>
                    <span className="font-bold">{Math.max(...games.map(g => g.currentStreak))} days</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{ width: `${Math.min((Math.max(...games.map(g => g.currentStreak)) / 30) * 100, 100)}%` }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-blue-500" />
                <span>Gaming Statistics</span>
              </CardTitle>
              <CardDescription>
                Your overall gaming performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-purple-600">{totalAchievements}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Achievements</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-orange-600">{totalStreaks}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Streaks</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-blue-600">{totalGamesPlayed}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Games Played</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
} 