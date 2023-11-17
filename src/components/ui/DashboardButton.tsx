import Image from "next/image";
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
    <button className="p-3 w-full hover:bg-neutral-100 font-medium flex gap-2 rounded-xl items-center cursor-pointer">
      {children}
      <label>{label}</label>
    </button>
  );
};

export default DashboardButton;
