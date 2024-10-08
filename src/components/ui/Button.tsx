import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

//icons

export const buttonVariants = cva(
  "px-4 py-2  font-bold flex gap-2 items-center justify-center transition-all duration-200 ease-in-out",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white rounded-full",
        secondary:
          "text-primary hover:bg-primaryLight dark:bg-dark-20 dark:text-light-90 dark:hover:bg-dark-30 rounded-full",
        tertiary: "bg-white text-primary rounded-full",
        longRed: "bg-primary text-white rounded-lg ",
        longWhite: "bg-white text-primary rounded-lg ",
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
