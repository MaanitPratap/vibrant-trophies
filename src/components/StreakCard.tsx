"use client";

import { Flame, TrendingUp, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Streak {
  id: number;
  game: string;
  days: number;
  icon: string;
  color: string;
}

interface StreakCardProps {
  streak: Streak;
}

export function StreakCard({ streak }: StreakCardProps) {
  const progressValue = Math.min((streak.days / 30) * 100, 100);

  return (
    <Card className="group relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${streak.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <CardHeader className="relative pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${streak.color} flex items-center justify-center shadow-md`}>
              <img 
                src={streak.icon} 
                alt={streak.game}
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <CardTitle className="text-base text-gray-800 dark:text-white">{streak.game}</CardTitle>
              <CardDescription className="text-xs">Active Streak</CardDescription>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                {streak.days}
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {streak.days === 1 ? 'day' : 'days'}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-3">
        {/* Progress Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>Streak Progress</span>
            <span>{Math.round(progressValue)}%</span>
          </div>
          <Progress value={progressValue} className="h-2" />
        </div>
        
        {/* Milestones */}
        <div className="flex items-center justify-between text-xs">
          {streak.days >= 7 && (
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              <TrendingUp className="w-3 h-3 mr-1" />
              Weekly streak!
            </Badge>
          )}
          
          {streak.days >= 10 && (
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              <Target className="w-3 h-3 mr-1" />
              On fire!
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
} 