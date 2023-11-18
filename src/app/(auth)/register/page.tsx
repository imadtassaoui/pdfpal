import Button from "@/components/ui/Button";
import Image from "next/image";
import { FC } from "react";

import logo from "@/assets/icons/icon.svg";
import { Input } from "@/components/ui/Input";
import Link from "next/link";

interface registerProps {}

const Register: FC<registerProps> = ({}) => {
  return (
    <div className=" flex flex-col items-center w-full max-w-xs min-h-screen my-24 px-4 self-center gap-8">
      <div className="w-full flex flex-col items-center">
        <Image src={logo} className="mb-4" alt="logo" width={48} height={48} />
        <h1 className="text-3xl font-bold mb-2">Welcome</h1>
        <p className="text-base text-center">
          Already have an account?{" "}
          <Link className="underline font-medium" href="/login">
            Login
          </Link>
        </p>
      </div>
      <form className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col  gap-2">
          <div className="w-full flex flex-col gap-1">
            <label className="font-bold">Full name</label>
            <Input className="w-full" type="text" placeholder="Full name" />
          </div>

          <div className="w-full flex flex-col gap-1">
            <label className="font-bold">Email</label>
            <Input className="w-full" type="email" placeholder="Email" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="font-bold">Password</label>
            <Input className="w-full" type="password" placeholder="Password" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="font-bold">Repeat password</label>
            <Input
              className="w-full"
              type="password"
              placeholder="Repeat password"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button variant="longRed" className="w-full">
            Sign up
          </Button>
          <Button
            variant="longRed"
            className="w-full bg-neutral-100 text-black"
          >
            Continue with Google
          </Button>
        </div>
      </form>

      <p className="text-base text-center">
        You acknowledge that you read, and agre to our Terms of Service and our
        Privacy Policy.
      </p>
    </div>
  );
};

export default Register;
