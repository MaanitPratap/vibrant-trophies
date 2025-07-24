import { Flame, TrendingUp, Calendar, Target, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function StreaksPage() {
  const activeStreaks = [
    {
      id: 1,
      game: "Mahjong",
      days: 12,
      icon: "/logos/mahjong.svg",
      color: "from-green-500 to-emerald-500",
      bestStreak: 25,
      progress: 48
    },
    {
      id: 2,
      game: "Word Search",
      days: 9,
      icon: "/logos/wordsearch.svg",
      color: "from-yellow-500 to-orange-500",
      bestStreak: 15,
      progress: 60
    },
    {
      id: 3,
      game: "Bejeweled",
      days: 7,
      icon: "/logos/bejeweled.svg",
      color: "from-purple-500 to-pink-500",
      bestStreak: 18,
      progress: 39
    },
    {
      id: 4,
      game: "Memory",
      days: 5,
      icon: "/logos/memory.svg",
      color: "from-blue-500 to-cyan-500",
      bestStreak: 12,
      progress: 42
    },
    {
      id: 5,
      game: "Whack-a-Mole",
      days: 3,
      icon: "/logos/mole.svg",
      color: "from-orange-500 to-red-500",
      bestStreak: 8,
      progress: 38
    },
    {
      id: 6,
      game: "Trash or Treasure",
      days: 2,
      icon: "/logos/tot.svg",
      color: "from-indigo-500 to-purple-500",
      bestStreak: 5,
      progress: 40
    }
  ];

  const totalActiveStreaks = activeStreaks.reduce((sum, streak) => sum + streak.days, 0);
  const longestStreak = Math.max(...activeStreaks.map(s => s.days));
  const averageStreak = Math.round(totalActiveStreaks / activeStreaks.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl backdrop-blur-sm">
                <Flame className="w-6 h-6 text-orange-300" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                  Streaks
                </h1>
                <p className="text-orange-100 text-sm">Your Gaming Consistency</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <TrendingUp className="w-4 h-4 mr-2" />
                View History
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 lg:ml-32">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <Flame className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{totalActiveStreaks}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Active Days</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{longestStreak}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Longest Streak</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{averageStreak}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Average Streak</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{activeStreaks.length}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Active Games</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Streaks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeStreaks.map((streak, index) => (
            <div
              key={streak.id}
              className="transition-all duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${streak.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <CardHeader className="relative pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${streak.color} flex items-center justify-center text-2xl shadow-lg`}>
                        <img 
                          src={streak.icon} 
                          alt={streak.game}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-gray-800 dark:text-white">{streak.game}</CardTitle>
                        <CardDescription className="text-sm">Active Streak</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <Flame className="w-5 h-5 text-orange-500" />
                        <span className="text-2xl font-bold text-gray-800 dark:text-white">
                          {streak.days}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {streak.days === 1 ? 'day' : 'days'}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Streak Progress</span>
                      <span>{streak.progress}%</span>
                    </div>
                    <Progress value={streak.progress} className="h-2" />
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-lg font-bold text-gray-800 dark:text-white">{streak.bestStreak}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Best Streak</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-lg font-bold text-gray-800 dark:text-white">
                        {Math.ceil(streak.days / 7) * 7}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Next Milestone</div>
                    </div>
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
                        <Zap className="w-3 h-3 mr-1" />
                        On fire!
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 