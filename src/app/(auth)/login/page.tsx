"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { FC, useState } from "react";

import logo from "@/assets/icons/icon.svg";
import { Input } from "@/components/ui/Input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

interface loginProps {}

const Login: FC<loginProps> = ({}) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const callBackUrl = useSearchParams().get("callbackUrl") || "/dashboard";
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const promise = new Promise(async (resolve, reject) => {
      try {
        const res = await signIn("credentials", {
          redirect: false,
          email: form.email,
          password: form.password,
        });

        if (res?.ok) {
          router.push(callBackUrl);
          resolve("Logged in successfully");
        } else {
          reject("Invalid credentials");
        }
      } catch (error) {
        console.error("An error occurred during login:", error);
        reject("An error occurred during login");
      }
    });

    toast.promise(promise, {
      loading: "Loading...",
      success: (data: any) => data,
      error: (error) => error,
    });
  };

  const handleGoogleLogin = async () => {

    const promise = new Promise(async (resolve, reject) => {
      try {
        const res = await signIn("google", {
          redirect: false,
        });

        if (res?.ok) {
          router.push(callBackUrl);
          resolve("Logged in successfully");
        }
        
      } catch (error) {
        console.error("An error occurred during login:", error);
        reject("An error occurred during login");
      }
    });

    toast.promise(promise, {
      loading: "Loading...",
      success: (data: any) => data,
      error: (error) => error,
    });
  };

  return (
    <div className=" flex flex-col items-center w-full max-w-xs min-h-screen my-24 px-4 self-center gap-8">
      <div className="w-full flex flex-col items-center pt-4">
        <Image src={logo} className="mb-4" alt="logo" width={48} height={48} />
        <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
        <p className="text-base text-center">
          Dont have an account?{" "}
          <Link className="underline font-medium" href="/register">
            Sign up
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col  gap-2">
          <div className="w-full flex flex-col gap-1">
            <label className="font-bold">Email</label>
            <Input
              autoComplete="email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="font-bold">Password</label>
            <Input
              autoComplete="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button type="submit" variant="longRed" className="w-full">
            Login
          </Button>
          <Button
            type="button"
            variant="longRed"
            className="w-full bg-neutral-100 text-black" onClick={handleGoogleLogin}
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

export default Login;
