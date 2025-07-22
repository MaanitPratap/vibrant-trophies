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
      icon: "/logos/bejeweled.svg",
      color: "from-purple-500 to-pink-500",
      achievements: 12,
      currentStreak: 7,
      totalPlayed: 45,
      bestScore: 12500
    },
    {
      id: "whack-a-mole",
      name: "Whack-a-Mole",
      icon: "/logos/mole.svg",
      color: "from-orange-500 to-red-500",
      achievements: 8,
      currentStreak: 3,
      totalPlayed: 32,
      bestScore: 850
    },
    {
      id: "mahjong",
      name: "Mahjong",
      icon: "/logos/mahjong.svg",
      color: "from-green-500 to-emerald-500",
      achievements: 15,
      currentStreak: 12,
      totalPlayed: 67,
      bestScore: 2100
    },
    {
      id: "memory",
      name: "Memory",
      icon: "/logos/memory.svg",
      color: "from-blue-500 to-cyan-500",
      achievements: 10,
      currentStreak: 5,
      totalPlayed: 28,
      bestScore: 95
    },
    {
      id: "word-search",
      name: "Word Search",
      icon: "/logos/wordsearch.svg",
      color: "from-yellow-500 to-orange-500",
      achievements: 18,
      currentStreak: 9,
      totalPlayed: 53,
      bestScore: 42
    },
    {
      id: "trash-or-treasure",
      name: "Trash or Treasure",
      icon: "/logos/tot.svg",
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
      icon: "/logos/bejeweled.svg",
      earnedAt: "2 hours ago",
      rarity: "rare" as const
    },
    {
      id: 2,
      game: "Mahjong",
      title: "Speed Demon",
      description: "Complete a puzzle in under 2 minutes",
      icon: "/logos/mahjong.svg",
      earnedAt: "1 day ago",
      rarity: "epic" as const
    },
    {
      id: 3,
      game: "Memory",
      title: "Perfect Recall",
      description: "Complete a game without any mistakes",
      icon: "/logos/memory.svg",
      earnedAt: "3 days ago",
      rarity: "legendary" as const
    }
  ];

  const activeStreaks = [
    {
      id: 1,
      game: "Mahjong",
      days: 12,
      icon: "/logos/mahjong.svg",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      game: "Word Search",
      days: 9,
      icon: "/logos/wordsearch.svg",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 3,
      game: "Bejeweled",
      days: 7,
      icon: "/logos/bejeweled.svg",
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
            {/* Removed View All Achievements button */}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-10 lg:ml-32">
        {/* Stats Overview */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4 tracking-tight">Overview</h2>
          <StatsOverview games={games} />
        </section>

        {/* Games Grid */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white tracking-tight">Your Games</h2>
            {/* Removed View All Games button for modern glanceable look */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </div>
        </section>

        {/* Recent Achievements and Active Streaks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Recent Achievements */}
          <section className="rounded-2xl bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-purple-900/30 dark:via-slate-900 dark:to-indigo-900/30 shadow-md p-6">
            <h2 className="text-lg font-bold text-purple-700 dark:text-purple-200 mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              Recent Achievements
            </h2>
            <div className="space-y-4">
              {recentAchievements.map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </section>

          {/* Active Streaks */}
          <section className="rounded-2xl bg-gradient-to-br from-orange-50 via-white to-yellow-50 dark:from-orange-900/30 dark:via-slate-900 dark:to-yellow-900/30 shadow-md p-6">
            <h2 className="text-lg font-bold text-orange-700 dark:text-orange-200 mb-4 flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-400" />
              Active Streaks
            </h2>
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
