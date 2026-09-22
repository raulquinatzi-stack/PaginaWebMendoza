import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060a16] disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#c5a880] text-[#060a16] font-semibold hover:bg-[#d8bd97] shadow-lg shadow-[#c5a880]/15 active:scale-[0.98]",
        gold:
          "bg-gradient-to-r from-[#d8bd97] via-[#c5a880] to-[#b38e5b] text-[#060a16] font-bold hover:brightness-110 shadow-lg shadow-[#c5a880]/20 active:scale-[0.98]",
        urgent:
          "bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-bold hover:from-red-500 hover:to-rose-600 shadow-lg shadow-red-600/30 active:scale-[0.98]",
        outline:
          "border border-[#c5a880]/40 text-[#f1f5f9] hover:bg-[#c5a880]/10 hover:border-[#c5a880] hover:text-[#c5a880]",
        secondary:
          "bg-[#0f1b38] text-[#f1f5f9] border border-slate-700/60 hover:bg-[#162752] hover:border-slate-600",
        ghost:
          "text-[#f1f5f9] hover:bg-slate-800/60 hover:text-[#c5a880]",
        link: "text-[#c5a880] underline-offset-4 hover:underline",
        terminal:
          "bg-black/80 border border-emerald-500/40 text-emerald-400 font-mono hover:bg-emerald-950/40 hover:border-emerald-400",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
