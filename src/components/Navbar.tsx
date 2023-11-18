"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";
import logo from "@/assets/icons/icon.svg";
import burger from "@/assets/icons/burger.svg";
import { useWindowSize } from "@uidotdev/usehooks";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [navbar, setNavbar] = useState(true);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width && size.width > 768) {
      setNavbar(true);
    } else if (size.width && size.width < 768) {
      setNavbar(false);
    }
  }, [size]);

  const closeNav = () => {
    if (size.width && size.width < 768) {
      setNavbar(false);
    }
  };
  return (
    <MaxWidthWrapper>
      <header
        className={` left-0 w-full absolute px-4 top-0  pt-8 flex md:flex-row items-start justify-between lg:px-20 ${
          navbar && "bg-white md:bg-transparent md:h-auto h-72 "
        }`}
      >
        <Link onClick={closeNav} href="/">
          <Image src={logo} alt="logo" className="w-8 md:w-auto" />
        </Link>

        <nav className="flex flex-col relative items-start gap-2 justify-end md:gap-10">
          <Image
            onClick={() => {
              setNavbar(!navbar);
            }}
            className="md:hidden "
            src={burger}
            alt="logo"
          />
          {navbar && (
            <ul className="flex flex-col gap-4 items-end w-[120px] md:w-auto absolute top-12  right-0 md:relative md:top-0 md:flex-row md:items-center md:gap-10">
              <Link onClick={closeNav} className="font-bold" href="/pricing">
                {" "}
                Pricing
              </Link>
              <Link onClick={closeNav} className="font-bold" href="/login">
                {" "}
                Sign in
              </Link>
              <Link
                onClick={closeNav}
                className={cn(buttonVariants(), "")}
                href="/register"
              >
                {" "}
                Get started
              </Link>
            </ul>
          )}
        </nav>
      </header>
    </MaxWidthWrapper>
  );
};

export default Navbar;
