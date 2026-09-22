import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#c5a880] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#c5a880] text-[#060a16] shadow hover:bg-[#c5a880]/80",
        gold:
          "border-[#c5a880]/40 bg-[#c5a880]/10 text-[#f3e5ab]",
        secondary:
          "border-transparent bg-slate-800 text-slate-200 hover:bg-slate-800/80",
        destructive:
          "border-transparent bg-red-900/60 text-red-200 border-red-700/50",
        urgent:
          "border-red-500/50 bg-red-950/70 text-red-300 font-bold animate-pulse",
        success:
          "border-emerald-500/40 bg-emerald-950/60 text-emerald-300",
        outline: "text-[#c5a880] border-[#c5a880]/40",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
