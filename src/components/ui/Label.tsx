import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface LabelProps {
  className?: string;
  children: ReactNode;
}

const Label: FC<LabelProps> = ({ className, children }) => {
  return (
    <h2
      className={cn(
        "text-primary font-bold uppercase text-xs tracking-[2.4px] ",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Label;
