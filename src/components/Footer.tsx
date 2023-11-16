import Image from "next/image";
import { FC } from "react";
import logo from "@/assets/icons/logo.svg";
import Label from "@/components/ui/Label";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className="flex flex-col px-4 py-8 bg-neutral-100 items-center lg:px-20 lg:py-16 ">
      <div className="w-full max-w-screen-xl flex flex-col gap-16 lg:flex-row lg:gap-48">
        <div className="flex flex-col gap-8 lg:w-96">
          <div className="flex flex-col gap-4">
            <Image src={logo} alt="app-mockup" />
            <p className="text-neutral-700 text-base">
              PdPal allows you to have conversations with any PDF document.
              Simply upload your file and start asking questions right away.
            </p>
          </div>
          <p className="text-neutral-700 text-base">
            Copyright © 2023 All Rights Reserved to PdPal.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:gap-48">
          <div className="flex flex-col gap-4">
            <Label>Menu</Label>
            <ul className="flex flex-col gap-2">
              <Link className="font-bold text-neutral-900" href="/pricing">
                Pricing
              </Link>
              <Link className="font-bold text-neutral-900" href="/dashboard">
                Sign in
              </Link>
              <Link className="font-bold text-neutral-900" href="/dashboard">
                Get started
              </Link>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <Label>Menu</Label>
            <ul className="flex flex-col gap-2">
              <Link className="font-bold text-neutral-900" href="/pricing">
                Pricing
              </Link>
              <Link className="font-bold text-neutral-900" href="/dashboard">
                Sign in
              </Link>
              <Link className="font-bold text-neutral-900" href="/dashboard">
                Get started
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <Label>Menu</Label>
            <ul className="flex flex-col gap-2">
              <Link className="font-bold text-neutral-900" href="/pricing">
                Pricing
              </Link>
              <Link className="font-bold text-neutral-900" href="/dashboard">
                Sign in
              </Link>
              <Link className="font-bold text-neutral-900" href="/dashboard">
                Get started
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
