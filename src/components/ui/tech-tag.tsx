import * as React from "react";
import { cn } from "@/lib/utils";

interface TechTagProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "neon" | "neonPink" | "neonGreen" | "neonOrange" | "neonYellow" | "neonPurple";
}

const techTagVariants = {
  neon: "border-transparent bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-400/30 hover:from-cyan-500/30 hover:to-blue-500/30 shadow-lg shadow-cyan-500/25",
  neonPink: "border-transparent bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-400 border-pink-400/30 hover:from-pink-500/30 hover:to-purple-500/30 shadow-lg shadow-pink-500/25",
  neonGreen: "border-transparent bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-400/30 hover:from-green-500/30 hover:to-emerald-500/30 shadow-lg shadow-green-500/25",
  neonOrange: "border-transparent bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 border-orange-400/30 hover:from-orange-500/30 hover:to-red-500/30 shadow-lg shadow-orange-500/25",
  neonYellow: "border-transparent bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400 border-yellow-400/30 hover:from-yellow-500/30 hover:to-amber-500/30 shadow-lg shadow-yellow-500/25",
  neonPurple: "border-transparent bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-400 border-purple-400/30 hover:from-purple-500/30 hover:to-violet-500/30 shadow-lg shadow-purple-500/25",
};

const getRandomVariant = (text: string): TechTagProps["variant"] => {
  const variants: TechTagProps["variant"][] = ["neon", "neonPink", "neonGreen", "neonOrange", "neonYellow", "neonPurple"];
  const hash = text.split("").reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  return variants[Math.abs(hash) % variants.length];
};

function TechTag({ className, children, variant, ...props }: TechTagProps) {
  const selectedVariant = variant || getRandomVariant(children as string);
  
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "break-words whitespace-nowrap text-center",
        "hover:scale-105 hover:shadow-xl",
        techTagVariants[selectedVariant],
        className
      )}
      {...props}
    >
      <span className="truncate max-w-[120px] sm:max-w-[150px] lg:max-w-[180px]">
        {children}
      </span>
    </div>
  );
}

export { TechTag };
