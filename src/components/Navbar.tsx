"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";
import logo from "@/assets/icons/icon.svg";
import burger from "@/assets/icons/burger.svg";
import { useWindowSize } from "@uidotdev/usehooks";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [navbar, toggleNav] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width && size.width > 768) {
      toggleNav(true);
    } else if (size.width && size.width < 768) {
      toggleNav(false);
    }
  }, [size]);
  return (
    <header
      className={`w-full absolute px-4 top-0  pt-8 left-0 flex md:flex-row items-start justify-between lg:px-20 ${
        navbar && "bg-white md:bg-transparent md:h-auto h-72 "
      }`}
    >
      <Link href="/">
        <Image src={logo} alt="logo" className="w-8 md:w-auto" />
      </Link>

      <nav className="flex flex-col relative items-start gap-2 justify-end md:gap-10">
        <Image
          onClick={() => toggleNav(!navbar)}
          className="md:hidden "
          src={burger}
          alt="logo"
        />
        {navbar && (
          <ul className="flex flex-col gap-4 items-end w-[120px] md:w-auto absolute top-12  right-0 md:relative md:top-0 md:flex-row md:items-center md:gap-10">
            <Link className="font-bold" href="/pricing">
              {" "}
              Pricing
            </Link>
            <Link className="font-bold" href="/">
              {" "}
              Sign in
            </Link>
            <Link className={cn(buttonVariants(), "")} href="/">
              {" "}
              Get started
            </Link>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
