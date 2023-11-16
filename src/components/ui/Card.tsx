import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card: FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "w-full p-8  rounded-3xl h-[368px] flex flex-col justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
