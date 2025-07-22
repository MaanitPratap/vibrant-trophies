import { Trophy } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { AchievementCard } from "@/components/AchievementCard";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";

interface Achievement {
  id: number;
  game: string;
  title: string;
  description: string;
  icon: string;
  earnedAt: string;
  rarity: "common" | "rare" | "epic" | "legendary";
}

export function NotificationsMenu({ achievements }: { achievements: Achievement[] }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="relative group bg-transparent hover:bg-transparent focus-visible:bg-transparent">
          <Trophy className="w-6 h-6 text-yellow-300 group-hover:text-yellow-400 group-focus-visible:text-yellow-400 transition-colors" />
          {achievements.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold shadow">{achievements.length}</span>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[32rem] p-4 bg-white dark:bg-slate-900 rounded-xl shadow-xl">
        <DialogTitle asChild>
          <VisuallyHidden>Recent Achievements</VisuallyHidden>
        </DialogTitle>
        <h3 className="text-base font-semibold mb-3 text-gray-800 dark:text-white">Recent Achievements</h3>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {achievements.length === 0 ? (
            <div className="text-sm text-gray-500 dark:text-gray-400">No recent achievements.</div>
          ) : (
            achievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))
          )}
        </div>
        <div className="pt-4">
          <Link href="/achievements" className="w-full mt-2 block">
            <Button className="w-full" variant="default">
              View All Achievements
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
} 