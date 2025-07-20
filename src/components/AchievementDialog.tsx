"use client";

import { Trophy, Star, Clock, Users, Target } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

interface AchievementDialogProps {
  achievement: Achievement;
}

export function AchievementDialog({ achievement }: AchievementDialogProps) {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-xs">
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradientColors[achievement.rarity]} flex items-center justify-center text-lg`}>
              {achievement.icon}
            </div>
            <span>{achievement.title}</span>
          </DialogTitle>
          <DialogDescription>
            Achievement details and statistics
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Achievement Info */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{achievement.title}</CardTitle>
                <Badge className={rarityColors[achievement.rarity]}>
                  {achievement.rarity.charAt(0).toUpperCase() + achievement.rarity.slice(1)}
                </Badge>
              </div>
              <CardDescription>{achievement.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Game</span>
                <span className="font-medium">{achievement.game}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Earned</span>
                <span className="font-medium">{achievement.earnedAt}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Rarity</span>
                <div className="flex items-center space-x-1">
                  {rarityIcons[achievement.rarity].split('').map((star, index) => (
                    <span key={index} className="text-xs">{star}</span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span>Statistics</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Total Achievements</div>
                </div>
                <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">7</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Current Streak</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Share Section */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Share Achievement</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Share
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  Copy Link
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
} 