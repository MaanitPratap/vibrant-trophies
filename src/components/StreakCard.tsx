"use client";

import { Flame, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

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
  const progressValue = Math.min(streak.days * 10, 100);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <Card className="group relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${streak.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
        
        <CardContent className="relative p-4">
          <div className="flex items-center justify-between">
            {/* Game Info */}
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${streak.color} flex items-center justify-center text-lg shadow-lg`}>
                {streak.icon}
              </div>
              <div>
                <CardTitle className="text-sm font-semibold text-gray-800 dark:text-white">
                  {streak.game}
                </CardTitle>
                <CardDescription className="text-xs text-gray-500 dark:text-gray-400">
                  Active Streak
                </CardDescription>
              </div>
            </div>
            
            {/* Streak Counter */}
            <div className="text-right">
              <div className="flex items-center space-x-1">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <Flame className="w-5 h-5 text-orange-500" />
                </motion.div>
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                  {streak.days}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {streak.days === 1 ? 'day' : 'days'}
              </p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Streak Progress</span>
              <span>{progressValue}%</span>
            </div>
            <Progress value={progressValue} className="h-2" />
          </div>
          
          {/* Streak Milestones */}
          <div className="mt-3 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
              <Calendar className="w-3 h-3" />
              <span>Next milestone: {Math.ceil(streak.days / 7) * 7} days</span>
            </div>
            
            {streak.days >= 7 && (
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <TrendingUp className="w-3 h-3 mr-1" />
                Weekly streak!
              </Badge>
            )}
          </div>
          
          {/* Animated flames for long streaks */}
          {streak.days >= 10 && (
            <div className="absolute top-2 right-2">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity
                }}
                className="w-2 h-2 bg-orange-400 rounded-full"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
} 