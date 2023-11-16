import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

//icons

export const buttonVariants = cva(
  "px-4 py-2 rounded-full font-bold flex gap-2 items-center",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white",
        secondary:
          "text-primary hover:bg-primaryLight dark:bg-dark-20 dark:text-light-90 dark:hover:bg-dark-30",
        tertiary: "bg-white text-primary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  iconColor?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(buttonVariants({ variant, className }))}
        disabled={isLoading}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
