"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Home, Users, Calendar, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  
  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Groups", href: "/groups", icon: Users },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              EduConnect
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={pathname === item.href ? "default" : "ghost"}
                    size="icon"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{item.name}</span>
                  </Button>
                </Link>
              );
            })}
            
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}