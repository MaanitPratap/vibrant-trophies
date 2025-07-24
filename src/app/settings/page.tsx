import { Settings, User, Bell, Shield, Palette, Gamepad2, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SettingsPage() {
  const userProfile = {
    name: "Alex Chen",
    email: "alex.chen@example.com",
    avatar: "/avatars/alex.jpg",
    memberSince: "March 2024",
    achievements: 156,
    totalScore: 125000,
    rank: "Gold"
  };

  const settingsCategories = [
    {
      id: "profile",
      title: "Profile Settings",
      description: "Manage your account information",
      icon: User,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "notifications",
      title: "Notifications",
      description: "Configure your notification preferences",
      icon: Bell,
      color: "from-orange-500 to-red-500"
    },
    {
      id: "privacy",
      title: "Privacy & Security",
      description: "Control your privacy settings",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "appearance",
      title: "Appearance",
      description: "Customize your interface",
      icon: Palette,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "games",
      title: "Game Preferences",
      description: "Manage your gaming settings",
      icon: Gamepad2,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-gray-600 via-slate-600 to-gray-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl backdrop-blur-sm">
                <Settings className="w-6 h-6 text-gray-300" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-slate-300 bg-clip-text text-transparent">
                  Settings
                </h1>
                <p className="text-gray-100 text-sm">Manage Your Account</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Sun className="w-4 h-4 mr-2" />
                Light Mode
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 lg:ml-32">
        {/* User Profile Card */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center space-x-6">
              <Avatar className="w-20 h-20">
                <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xl">
                  {userProfile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{userProfile.name}</h2>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                    {userProfile.rank}
                  </Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{userProfile.email}</p>
                <div className="flex items-center space-x-6 text-sm">
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-white">{userProfile.achievements}</span>
                    <span className="text-gray-600 dark:text-gray-400"> Achievements</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-white">{userProfile.totalScore.toLocaleString()}</span>
                    <span className="text-gray-600 dark:text-gray-400"> Total Score</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Member since </span>
                    <span className="font-semibold text-gray-800 dark:text-white">{userProfile.memberSince}</span>
                  </div>
                </div>
              </div>
              <Button variant="outline">Edit Profile</Button>
            </div>
          </CardContent>
        </Card>

        {/* Settings Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {settingsCategories.map((category, index) => (
            <div
              key={category.id}
              className="transition-all duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <CardContent className="relative p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {category.description}
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Configure
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5" />
                <span>Quick Actions</span>
              </CardTitle>
              <CardDescription>
                Common settings and account actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
                  <Moon className="w-5 h-5" />
                  <span className="text-sm">Dark Mode</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
                  <Bell className="w-5 h-5" />
                  <span className="text-sm">Notifications</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Privacy</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
                  <Gamepad2 className="w-5 h-5" />
                  <span className="text-sm">Games</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 