"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { FC, useState } from "react";

import logo from "@/assets/icons/icon.svg";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useSearchParams, useRouter } from "next/navigation";

interface registerProps {}

const Register: FC<registerProps> = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const callBackUrl = useSearchParams().get("callbackUrl") || "/dashboard";
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const promise = new Promise(async (resolve, reject) => {
      try {
        if (form.password !== form.repeatPassword) {
          return reject("Passwords don't match");
        }
        const res = await fetch("/api/register", {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res?.ok) {
          await signIn("credentials", {
            redirect: false,
            email: form.email,
            password: form.password,
          });
          router.push(callBackUrl);
          resolve("Signed up and logged in successfully");
        } else {
          reject("Invalid credentials");
        }
      } catch (error) {
        console.error("An error occurred during registration:", error);
        reject("An error occurred during registration");
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
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col  gap-2">
          <div className="w-full flex flex-col gap-1">
            <label className="font-bold">Full name</label>
            <Input
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full"
              type="text"
              placeholder="Full name"
            />
          </div>

          <div className="w-full flex flex-col gap-1">
            <label className="font-bold">Email</label>
            <Input
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="font-bold">Password</label>
            <Input
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="font-bold">Repeat password</label>
            <Input
              onChange={(e) =>
                setForm({ ...form, repeatPassword: e.target.value })
              }
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
