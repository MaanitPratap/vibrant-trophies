"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut, User, CheckCircle, AlertCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUserSync } from "@/lib/userSync";

export function LoginButton() {
  const { user, isLoading, error } = useUser();
  const { syncStatus } = useUserSync();

  if (isLoading) {
    return (
      <Button variant="ghost" size="sm" disabled>
        <div className="w-4 h-4 border-2 border-gray-300 border-t-purple-600 rounded-full animate-spin mr-2" />
        Loading...
      </Button>
    );
  }

  if (error) {
    return (
      <Button variant="ghost" size="sm" className="text-red-600">
        Error: {error.message}
      </Button>
    );
  }

  if (!user) {
    return (
      <a href="/api/auth/login">
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <LogIn className="w-4 h-4" />
          Sign In
        </Button>
      </a>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src={user.picture} alt={user.name || user.email || "User"} />
            <AvatarFallback>
              <User className="w-3 h-3" />
            </AvatarFallback>
          </Avatar>
          <span className="hidden sm:inline">{user.name || user.email}</span>
          {syncStatus.isSyncing && (
            <div className="w-3 h-3 border-2 border-purple-300 border-t-purple-600 rounded-full animate-spin" />
          )}
          {syncStatus.isSynced && !syncStatus.isSyncing && (
            <CheckCircle className="w-3 h-3 text-green-500" />
          )}
          {syncStatus.error && !syncStatus.isSyncing && (
            <AlertCircle className="w-3 h-3 text-red-500" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
            {syncStatus.isSynced && (
              <p className="text-xs text-green-600">✓ Synced to database</p>
            )}
            {syncStatus.error && (
              <p className="text-xs text-red-600">✗ Sync failed: {syncStatus.error}</p>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <a href="/api/auth/logout" className="flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            Sign Out
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 