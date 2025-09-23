import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        neon: "border-transparent bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-400/30 hover:from-cyan-500/30 hover:to-blue-500/30 shadow-lg shadow-cyan-500/25",
        neonPink: "border-transparent bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-400 border-pink-400/30 hover:from-pink-500/30 hover:to-purple-500/30 shadow-lg shadow-pink-500/25",
        neonGreen: "border-transparent bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-400/30 hover:from-green-500/30 hover:to-emerald-500/30 shadow-lg shadow-green-500/25",
        neonOrange: "border-transparent bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 border-orange-400/30 hover:from-orange-500/30 hover:to-red-500/30 shadow-lg shadow-orange-500/25",
        neonYellow: "border-transparent bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400 border-yellow-400/30 hover:from-yellow-500/30 hover:to-amber-500/30 shadow-lg shadow-yellow-500/25",
        neonPurple: "border-transparent bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-400 border-purple-400/30 hover:from-purple-500/30 hover:to-violet-500/30 shadow-lg shadow-purple-500/25",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
