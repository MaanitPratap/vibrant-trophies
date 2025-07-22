"use client";

import { Play, Trophy, Flame, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  const achievementProgress = Math.min((game.achievements / 20) * 100, 100);
  const streakProgress = Math.min((game.currentStreak / 30) * 100, 100);

  return (
    <TooltipProvider>
      <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
        
        <CardHeader className="relative pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center shadow-lg`}>
                <img 
                  src={game.icon} 
                  alt={game.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <CardTitle className="text-lg text-gray-800 dark:text-white">{game.name}</CardTitle>
                <CardDescription className="text-sm">Your Progress</CardDescription>
              </div>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Play className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Play {game.name}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </CardHeader>

        <CardContent className="relative space-y-4">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="text-lg font-bold text-gray-800 dark:text-white">{game.achievements}</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Achievements</div>
            </div>
            <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="text-lg font-bold text-gray-800 dark:text-white">{game.currentStreak}</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Day Streak</div>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Achievement Progress</span>
                <span>{Math.round(achievementProgress)}%</span>
              </div>
              <Progress value={achievementProgress} className="h-2" />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Streak Progress</span>
                <span>{Math.round(streakProgress)}%</span>
              </div>
              <Progress value={streakProgress} className="h-2" />
            </div>
          </div>

          {/* Additional Stats */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-1">
              <Target className="w-3 h-3 text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Best Score:</span>
              <span className="font-semibold text-gray-800 dark:text-white">{game.bestScore.toLocaleString()}</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              {game.totalPlayed} games
            </Badge>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
} 