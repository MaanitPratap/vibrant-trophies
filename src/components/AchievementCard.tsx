"use client";

import { Star, Clock, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AchievementDialog } from "@/components/AchievementDialog";
import { motion } from "framer-motion";

interface Achievement {
  id: number;
  game: string;
  title: string;
  description: string;
  icon: string;
  earnedAt: string;
  rarity: "common" | "rare" | "epic" | "legendary";
}

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  const rarityColors = {
    common: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    rare: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    epic: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    legendary: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
  };

  const rarityIcons = {
    common: "⭐",
    rare: "⭐⭐",
    epic: "⭐⭐⭐",
    legendary: "⭐⭐⭐⭐"
  };

  const gradientColors = {
    common: "from-gray-400 to-gray-500",
    rare: "from-blue-400 to-blue-500",
    epic: "from-purple-400 to-purple-500",
    legendary: "from-yellow-400 to-orange-500"
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <Card className="group relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
        {/* Rarity border */}
        <div className={`absolute inset-0 bg-gradient-to-r ${gradientColors[achievement.rarity]} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
        
        <CardContent className="relative p-4">
          <div className="flex items-start space-x-4">
            {/* Achievement Icon */}
            <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${gradientColors[achievement.rarity]} flex items-center justify-center text-2xl shadow-lg`}>
              {achievement.icon}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-sm font-semibold text-gray-800 dark:text-white truncate">
                  {achievement.title}
                </CardTitle>
                <div className="flex items-center space-x-1">
                  {rarityIcons[achievement.rarity].split('').map((star, index) => (
                    <span key={index} className="text-xs">{star}</span>
                  ))}
                </div>
              </div>
              
              <CardDescription className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                {achievement.description}
              </CardDescription>
              
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className={rarityColors[achievement.rarity]}>
                  {achievement.game}
                </Badge>
                
                <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>{achievement.earnedAt}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Button */}
          <div className="mt-3 flex justify-end">
            <AchievementDialog achievement={achievement} />
          </div>
          
          {/* Shimmer effect for legendary achievements */}
          {achievement.rarity === "legendary" && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
} 