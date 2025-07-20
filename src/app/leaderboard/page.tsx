import { Users, Trophy, Crown, Medal, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navigation } from "@/components/Navigation";

export default function LeaderboardPage() {
  const leaderboardData = [
    {
      id: 1,
      rank: 1,
      name: "Alex Chen",
      avatar: "/avatars/alex.jpg",
      achievements: 156,
      streaks: 45,
      totalScore: 125000,
      games: ["Bejeweled", "Mahjong", "Memory"],
      badge: "crown"
    },
    {
      id: 2,
      rank: 2,
      name: "Sarah Johnson",
      avatar: "/avatars/sarah.jpg",
      achievements: 142,
      streaks: 38,
      totalScore: 118000,
      games: ["Word Search", "Trash or Treasure"],
      badge: "medal"
    },
    {
      id: 3,
      rank: 3,
      name: "Mike Rodriguez",
      avatar: "/avatars/mike.jpg",
      achievements: 128,
      streaks: 32,
      totalScore: 112000,
      games: ["Whack-a-Mole", "Memory"],
      badge: "medal"
    },
    {
      id: 4,
      rank: 4,
      name: "Emma Wilson",
      avatar: "/avatars/emma.jpg",
      achievements: 115,
      streaks: 28,
      totalScore: 105000,
      games: ["Bejeweled", "Word Search"],
      badge: "trophy"
    },
    {
      id: 5,
      rank: 5,
      name: "David Kim",
      avatar: "/avatars/david.jpg",
      achievements: 98,
      streaks: 25,
      totalScore: 98000,
      games: ["Mahjong", "Trash or Treasure"],
      badge: "trophy"
    },
    {
      id: 6,
      rank: 6,
      name: "Lisa Park",
      avatar: "/avatars/lisa.jpg",
      achievements: 87,
      streaks: 22,
      totalScore: 92000,
      games: ["Memory", "Whack-a-Mole"],
      badge: "trophy"
    }
  ];

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "crown":
        return <Crown className="w-4 h-4 text-yellow-500" />;
      case "medal":
        return <Medal className="w-4 h-4 text-gray-500" />;
      case "trophy":
        return <Trophy className="w-4 h-4 text-orange-500" />;
      default:
        return <Trophy className="w-4 h-4 text-gray-400" />;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500 text-white";
      case 3:
        return "bg-gradient-to-r from-orange-400 to-orange-600 text-white";
      default:
        return "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />
      
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl backdrop-blur-sm">
                <Users className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                  Leaderboard
                </h1>
                <p className="text-blue-100 text-sm">Global Gaming Rankings</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <TrendingUp className="w-4 h-4 mr-2" />
                My Ranking
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
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{leaderboardData.length}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Players</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                  <Crown className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">156</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Top Achievements</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">45</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Top Streak</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">125K</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Top Score</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span>Global Rankings</span>
            </CardTitle>
            <CardDescription>
              Top players based on achievements, streaks, and total score
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaderboardData.map((player, index) => (
                <div
                  key={player.id}
                  className="transition-all duration-300 hover:scale-101 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex items-center space-x-4">
                      {/* Rank */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${getRankColor(player.rank)}`}>
                        {player.rank}
                      </div>
                      
                      {/* Avatar and Name */}
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={player.avatar} alt={player.name} />
                          <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                            {player.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-800 dark:text-white">{player.name}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            {getBadgeIcon(player.badge)}
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {player.games.join(', ')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-800 dark:text-white">{player.achievements}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Achievements</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-800 dark:text-white">{player.streaks}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Streaks</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-800 dark:text-white">{player.totalScore.toLocaleString()}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Score</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 