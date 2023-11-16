import { FC } from "react";
import Button from "./ui/Button";
import Image from "next/image";

import check from "@/assets/icons/check.svg";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  className?: string;
  price?: number;
  previousPrice?: string;
  type: "free" | "pro";
}

const PricingCard: FC<PricingCardProps> = ({
  className,
  type,
  price,
  previousPrice,
}) => {
  return (
    <div
      className={cn(
        {
          "min-w-[300px] rounded-3xl bg-neutral-100 p-6 h-[512px] flex flex-col justify-between":
            type === "free",
          "min-w-[300px] rounded-3xl bg-primary p-6 h-[512px] flex flex-col justify-between text-white":
            type === "pro",
        },
        className
      )}
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-2xl">
            {type === "free" ? "Free" : "Premium"}
          </h3>
          <p className="font-bold flex items-center gap-1">
            {previousPrice && (
              <span className="flex items-center gap-1 text-[#FFCCCF]">
                <span className=" line-through text-6xl">{previousPrice}</span>
                <sup> $ </sup>
              </span>
            )}
            <span className="text-6xl">{price ? price : 0}</span> <sup>$ </sup>{" "}
            /month
          </p>
        </div>
        <div
          className={
            type === "free"
              ? "w-full h-[1px] bg-neutral-300"
              : type === "pro"
              ? "w-full h-[1px] bg-[#FFCCCF]"
              : ""
          }
        />
        <ul className="flex flex-col items-start gap-2">
          <li className="flex gap-2 justify-center">
            <Image src={check} alt="a" /> Lorem ipsum dolor sit.
          </li>{" "}
          <li className="flex gap-2 justify-center">
            <Image src={check} alt="a" /> Lorem ipsum dolor sit.
          </li>{" "}
          <li className="flex gap-2 justify-center">
            <Image src={check} alt="a" /> Lorem ipsum dolor sit.
          </li>
        </ul>
      </div>
      <Button
        variant={
          type === "free" ? "longRed" : type === "pro" ? "longWhite" : null
        }
        className="w-full "
      >
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;
