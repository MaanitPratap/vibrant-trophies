import { Trophy, Star, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/Navigation";

export default function AchievementsPage() {
  const achievements = [
    {
      id: 1,
      game: "Bejeweled",
      title: "Gem Master",
      description: "Clear 50 gems in one game",
      icon: "/logos/bejeweled.svg",
      earnedAt: "2 hours ago",
      rarity: "rare" as const,
      category: "combat"
    },
    {
      id: 2,
      game: "Mahjong",
      title: "Speed Demon",
      description: "Complete a puzzle in under 2 minutes",
      icon: "/logos/mahjong.svg",
      earnedAt: "1 day ago",
      rarity: "epic" as const,
      category: "speed"
    },
    {
      id: 3,
      game: "Memory",
      title: "Perfect Recall",
      description: "Complete a game without any mistakes",
      icon: "/logos/memory.svg",
      earnedAt: "3 days ago",
      rarity: "legendary" as const,
      category: "precision"
    },
    {
      id: 4,
      game: "Word Search",
      title: "Word Wizard",
      description: "Find 20 words in under 5 minutes",
      icon: "/logos/wordsearch.svg",
      earnedAt: "1 week ago",
      rarity: "rare" as const,
      category: "speed"
    },
    {
      id: 5,
      game: "Whack-a-Mole",
      title: "Lightning Fast",
      description: "Hit 100 moles in 60 seconds",
      icon: "/logos/mole.svg",
      earnedAt: "2 weeks ago",
      rarity: "epic" as const,
      category: "speed"
    },
    {
      id: 6,
      game: "Trash or Treasure",
      title: "Treasure Hunter",
      description: "Find 10 treasures in one session",
      icon: "/logos/tot.svg",
      earnedAt: "1 month ago",
      rarity: "common" as const,
      category: "exploration"
    }
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />
      
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl backdrop-blur-sm">
                <Trophy className="w-6 h-6 text-yellow-300" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Achievements
                </h1>
                <p className="text-purple-100 text-sm">Your Gaming Accomplishments</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 lg:ml-32">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input 
                placeholder="Search achievements..." 
                className="pl-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">All Games</Button>
              <Button variant="outline" size="sm">All Rarities</Button>
              <Button variant="outline" size="sm">Recent</Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{achievements.length}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Achievements</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Legendary</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Epic</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">1</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Rare</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="transition-all duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Rarity border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${gradientColors[achievement.rarity]} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                
                <CardContent className="relative p-6">
                  <div className="flex items-start space-x-4">
                    {/* Achievement Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${gradientColors[achievement.rarity]} flex items-center justify-center text-2xl shadow-lg`}>
                      <img 
                        src={achievement.icon} 
                        alt={achievement.game}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white truncate">
                          {achievement.title}
                        </CardTitle>
                        <Badge className={rarityColors[achievement.rarity]}>
                          {achievement.rarity.charAt(0).toUpperCase() + achievement.rarity.slice(1)}
                        </Badge>
                      </div>
                      
                      <CardDescription className="text-sm text-gray-600 dark:text-gray-400 mb-3">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 