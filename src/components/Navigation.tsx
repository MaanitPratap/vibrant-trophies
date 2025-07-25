"use client";

import { Home, Trophy, Flame, Users, Settings, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Trophy, label: "Achievements", href: "/achievements" },
    { icon: Flame, label: "Streaks", href: "/streaks" },
    { icon: Users, label: "Leaderboard", href: "/leaderboard" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <TooltipProvider>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden fixed top-4 right-4 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-full max-w-xs sm:max-w-sm md:w-80 bg-white dark:bg-gray-800 shadow-2xl rounded-l-2xl flex flex-col overflow-y-auto">
              <div className="flex items-center justify-between p-6 pb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-gray-800 dark:text-white">VibrantTrophies</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-gray-500 dark:text-gray-300" />
                </button>
              </div>
              <nav className="flex-1 flex flex-col space-y-2 px-6 pb-6 pt-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href={item.href} onClick={() => setIsOpen(false)}>
                          <Button
                            variant={pathname === item.href ? "default" : "ghost"}
                            className={`w-full justify-start py-4 text-lg ${
                              pathname === item.href 
                                ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200" 
                                : "text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                            }`}
                          >
                            <item.icon className="w-5 h-5 mr-3" />
                            {item.label}
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="font-semibold">
                        {item.label}
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed left-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 dark:border-gray-700/50 p-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`w-14 h-14 p-0 rounded-xl border border-white/50 dark:border-gray-600/50 shadow-sm hover:shadow-md transition-all duration-200 ${
                          pathname === item.href
                            ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-200"
                            : "bg-white/70 dark:bg-gray-700/70 hover:bg-purple-100 dark:hover:bg-purple-900/30 text-gray-700 dark:text-gray-300"
                        }`}
                        title={item.label}
                      >
                        <item.icon className="w-6 h-6" />
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="font-semibold">
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>
    </TooltipProvider>
  );
} 