"use client";

import { Trophy, Flame, Target, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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

interface GameCardProps {
  game: Game;
  index: number;
}

export function GameCard({ game, index }: GameCardProps) {
  const progressValue = Math.round((game.achievements / 20) * 100);

  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
          
          <CardHeader className="relative pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {game.icon}
                </div>
                <div>
                  <CardTitle className="text-lg text-gray-800 dark:text-white">{game.name}</CardTitle>
                  <CardDescription className="text-sm">
                    Best Score: {game.bestScore.toLocaleString()}
                  </CardDescription>
                </div>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Play {game.name}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </CardHeader>

          <CardContent className="relative space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg mx-auto mb-2">
                  <Trophy className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{game.achievements}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Achievements</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg mx-auto mb-2">
                  <Flame className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                </div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{game.currentStreak}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Streak</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg mx-auto mb-2">
                  <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{game.totalPlayed}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Played</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Progress</span>
                <span>{progressValue}%</span>
              </div>
              <Progress value={progressValue} className="h-2" />
            </div>

            {/* Action Button */}
            <Button 
              className={`w-full bg-gradient-to-r ${game.color} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              Play Now
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </TooltipProvider>
  );
} 