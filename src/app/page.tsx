import { Trophy, Flame, Star, Target, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GameCard } from "@/components/GameCard";
import { AchievementCard } from "@/components/AchievementCard";
import { StreakCard } from "@/components/StreakCard";
import { StatsOverview } from "@/components/StatsOverview";
import { GameTabs } from "@/components/GameTabs";
import { Navigation } from "@/components/Navigation";
import { NotificationsMenu } from "@/components/NotificationsMenu";
import Link from "next/link";
import { Play } from "lucide-react";

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
            <div className="flex items-center gap-2">
              <Link href="https://vibrantminds2.seniorsplace.ca" target="_blank" rel="noopener noreferrer">
                <Button
                  className="rounded-xl border-2 border-yellow-400 text-yellow-400 hover:border-yellow-300 hover:text-yellow-300 hover:shadow-md focus-visible:shadow-md bg-transparent hover:bg-transparent focus-visible:bg-transparent transition-all flex items-center gap-2 font-semibold px-5 py-2 transform hover:scale-105 focus-visible:scale-105 duration-200"
                >
                  <Play className="w-4 h-4 mr-1" />
                  Play Games
                </Button>
              </Link>
              <div className="transition-all transform duration-200 hover:scale-105 focus-visible:scale-105">
                <NotificationsMenu achievements={recentAchievements} />
              </div>
            </div>
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
        {/* Removed Recent Achievements and Active Streaks sections from main page */}
      </div>
    </div>
  );
}
