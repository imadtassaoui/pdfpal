import { cn } from "@/lib/utils";
import { FC } from "react";

interface DashboardButtonProps {
  className?: string;
  children?: React.ReactNode;
  label: string;
}

const DashboardButton: FC<DashboardButtonProps> = ({
  className,
  children,
  label,
}) => {
  return (
    <button
      className={cn(
        "p-3 w-full hover:bg-neutral-100 font-medium flex gap-2 rounded-xl items-center cursor-pointer",
        className
      )}
    >
      {children}
      <label>{label}</label>
    </button>
  );
};

export default DashboardButton;
