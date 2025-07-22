"use client";

import { Trophy, Star, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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

  const gradientColors = {
    common: "from-gray-400 to-gray-500",
    rare: "from-blue-400 to-blue-500",
    epic: "from-purple-400 to-purple-500",
    legendary: "from-yellow-400 to-orange-500"
  };

  const rarityIcons = {
    common: <Star className="w-3 h-3" />,
    rare: <Star className="w-3 h-3" />,
    epic: <Zap className="w-3 h-3" />,
    legendary: <Trophy className="w-3 h-3" />
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-102">
          {/* Rarity border */}
          <div className={`absolute inset-0 bg-gradient-to-r ${gradientColors[achievement.rarity]} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
          
          <CardContent className="relative p-4">
            <div className="flex items-start space-x-3">
              {/* Achievement Icon */}
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${gradientColors[achievement.rarity]} flex items-center justify-center shadow-md`}>
                <img 
                  src={achievement.icon} 
                  alt={achievement.game}
                  className="w-6 h-6 object-contain"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <CardTitle className="text-sm font-semibold text-gray-800 dark:text-white truncate">
                    {achievement.title}
                  </CardTitle>
                  <Badge className={`text-xs ${rarityColors[achievement.rarity]}`}>
                    {rarityIcons[achievement.rarity]}
                  </Badge>
                </div>
                
                <CardDescription className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                  {achievement.description}
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {achievement.game}
                  </Badge>
                  
                  <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                    <span>{achievement.earnedAt}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradientColors[achievement.rarity]} flex items-center justify-center`}>
              <img 
                src={achievement.icon} 
                alt={achievement.game}
                className="w-5 h-5 object-contain"
              />
            </div>
            <span>{achievement.title}</span>
          </DialogTitle>
          <DialogDescription>
            {achievement.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Game</span>
            <Badge variant="outline">{achievement.game}</Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Rarity</span>
            <Badge className={rarityColors[achievement.rarity]}>
              {achievement.rarity.charAt(0).toUpperCase() + achievement.rarity.slice(1)}
            </Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Earned</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">{achievement.earnedAt}</span>
          </div>
          
          {achievement.rarity === "legendary" && (
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <div className="flex items-center space-x-2">
                <Trophy className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                  Legendary Achievement!
                </span>
              </div>
              <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                This is one of the rarest achievements in the game. Congratulations!
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
} 