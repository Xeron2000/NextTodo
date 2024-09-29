"use client";  // Add this line to mark the component as a Client Component

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

export function Aside() {
  const pathname = usePathname();

  // 判断是否选中
  const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-white dark:bg-zinc-900 text-black dark:text-white">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          {/* Home Icon - 保持不变 */}
          <Link
            href="/dashboard"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Home className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Home</span>
          </Link>

          {/* Orders Icon */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/orders"
                  className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all ${
                    isActive("/orders")
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  } md:h-8 md:w-8`}
                >
                  <ShoppingCart className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Orders</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Orders</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Products Icon */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/products"
                  className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all ${
                    isActive("/products")
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  } md:h-8 md:w-8`}
                >
                  <Package className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Products</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Products</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Customers Icon */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/customers"
                  className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all ${
                    isActive("/customers")
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  } md:h-8 md:w-8`}
                >
                  <Users2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Customers</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Customers</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Analytics Icon */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/analytics"
                  className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all ${
                    isActive("/analytics")
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  } md:h-8 md:w-8`}
                >
                  <LineChart className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Analytics</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Analytics</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
          {/* Settings Icon */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/settings"
                  className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all ${
                    isActive("/settings")
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  } md:h-8 md:w-8`}
                >
                  <Settings className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
    </div>
  );
}
