"use client";

import { Play, Trophy, Flame, Target, Zap } from "lucide-react";
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
  // Restore all stats, but reorganize for clarity and modern look
  return (
    <Card className="group relative overflow-hidden bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl border-0 cursor-pointer p-6 flex flex-col gap-4 hover:scale-105">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
      <div className="relative z-10 flex flex-col items-center gap-3">
        {/* Icon and Name */}
        <div className="mb-1 flex items-center justify-center relative">
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-14 h-14 rounded-full bg-black/10 dark:bg-white/10 blur-md opacity-60 shadow-xl"></span>
          </span>
          <img src={game.icon} alt={game.name} className="w-12 h-12 object-contain relative z-10" />
        </div>
        <div className="text-lg font-bold text-gray-800 dark:text-white mb-1">{game.name}</div>
      </div>
      {/* Stats Grid: 2x2 boxes for Achievements, Streak, Best Score, Games Played */}
      <div className="relative z-10 grid grid-cols-2 gap-4 w-full mt-2">
        <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
          <Trophy className="w-5 h-5 text-yellow-500 mb-1" />
          <div className="text-base font-semibold text-gray-800 dark:text-white">{game.achievements}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Achievements</div>
        </div>
        <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
          <Flame className="w-5 h-5 text-orange-500 mb-1" />
          <div className="text-base font-semibold text-gray-800 dark:text-white">{game.currentStreak}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Day Streak</div>
        </div>
        <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
          <Target className="w-5 h-5 text-blue-400 mb-1" />
          <div className="text-base font-semibold text-gray-800 dark:text-white">{game.bestScore.toLocaleString()}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Best Score</div>
        </div>
        <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
          <Zap className="w-5 h-5 text-green-400 mb-1" />
          <div className="text-base font-semibold text-gray-800 dark:text-white">{game.totalPlayed}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Played</div>
        </div>
      </div>
    </Card>
  );
} 