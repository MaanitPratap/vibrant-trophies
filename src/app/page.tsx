import { Trophy, Flame, Star, Target, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GameCard } from "@/components/GameCard";
import { AchievementCard } from "@/components/AchievementCard";
import { StreakCard } from "@/components/StreakCard";
import { StatsOverview } from "@/components/StatsOverview";
import { GameTabs } from "@/components/GameTabs";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  const games = [
    {
      id: "bejeweled",
      name: "Bejeweled",
      icon: "💎",
      color: "from-purple-500 to-pink-500",
      achievements: 12,
      currentStreak: 7,
      totalPlayed: 45,
      bestScore: 12500
    },
    {
      id: "whack-a-mole",
      name: "Whack-a-Mole",
      icon: "🔨",
      color: "from-orange-500 to-red-500",
      achievements: 8,
      currentStreak: 3,
      totalPlayed: 32,
      bestScore: 850
    },
    {
      id: "mahjong",
      name: "Mahjong",
      icon: "🀄",
      color: "from-green-500 to-emerald-500",
      achievements: 15,
      currentStreak: 12,
      totalPlayed: 67,
      bestScore: 2100
    },
    {
      id: "memory",
      name: "Memory",
      icon: "🧠",
      color: "from-blue-500 to-cyan-500",
      achievements: 10,
      currentStreak: 5,
      totalPlayed: 28,
      bestScore: 95
    },
    {
      id: "word-search",
      name: "Word Search",
      icon: "🔍",
      color: "from-yellow-500 to-orange-500",
      achievements: 18,
      currentStreak: 9,
      totalPlayed: 53,
      bestScore: 42
    },
    {
      id: "trash-or-treasure",
      name: "Trash or Treasure",
      icon: "💎",
      color: "from-indigo-500 to-purple-500",
      achievements: 6,
      currentStreak: 2,
      totalPlayed: 19,
      bestScore: 78
    }
  ];

  const recentAchievements = [
    {
      id: 1,
      game: "Bejeweled",
      title: "Gem Master",
      description: "Clear 50 gems in one game",
      icon: "💎",
      earnedAt: "2 hours ago",
      rarity: "rare" as const
    },
    {
      id: 2,
      game: "Mahjong",
      title: "Speed Demon",
      description: "Complete a puzzle in under 2 minutes",
      icon: "⚡",
      earnedAt: "1 day ago",
      rarity: "epic" as const
    },
    {
      id: 3,
      game: "Memory",
      title: "Perfect Recall",
      description: "Complete a game without any mistakes",
      icon: "🧠",
      earnedAt: "3 days ago",
      rarity: "legendary" as const
    }
  ];

  const activeStreaks = [
    {
      id: 1,
      game: "Mahjong",
      days: 12,
      icon: "🀄",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      game: "Word Search",
      days: 9,
      icon: "🔍",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 3,
      game: "Bejeweled",
      days: 7,
      icon: "💎",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />
      
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl backdrop-blur-sm">
                <Trophy className="w-6 h-6 text-yellow-300" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  VibrantTrophies
                </h1>
                <p className="text-purple-100 text-sm">Your Gaming Achievements Hub</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Star className="w-4 h-4 mr-2" />
                View All Achievements
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 lg:ml-32">
        {/* Stats Overview */}
        <StatsOverview games={games} />

        {/* Game Tabs Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Game Analytics</h2>
            <Button variant="outline" className="hover:bg-purple-50 dark:hover:bg-purple-900/20">
              View Details
            </Button>
          </div>
          <GameTabs games={games} />
        </section>

        {/* Games Grid */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Your Games</h2>
            <Button variant="outline" className="hover:bg-purple-50 dark:hover:bg-purple-900/20">
              View All Games
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </div>
        </section>

        {/* Recent Achievements and Active Streaks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Achievements */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Recent Achievements</h2>
              <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentAchievements.map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </section>

          {/* Active Streaks */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Active Streaks</h2>
              <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {activeStreaks.map((streak) => (
                <StreakCard key={streak.id} streak={streak} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
